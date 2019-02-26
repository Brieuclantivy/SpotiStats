<template>
  <v-app
    id="inspire"
    dark
  >
    <v-navigation-drawer
      v-model="drawer"
      fixed
      clipped
      app
    >
    
      <v-list dense>
    <v-list-tile v-for="item in items" :key="item.text" @click="fetchUsers" >
            <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
      </v-list-tile>

        <v-subheader class="mt-3 grey--text text--darken-1">SUBSCRIPTIONS</v-subheader>
        <v-list>
          <v-list-tile v-for="item in items2" :key="item.text" avatar >
            <v-list-tile-avatar>
              <img :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`" alt="">
            </v-list-tile-avatar>
            <v-list-tile-title v-text="item.text"></v-list-tile-title>
          </v-list-tile>
        </v-list>
        <v-list-tile class="mt-3" >
          <v-list-tile-action>
            <v-icon color="grey darken-1">add_circle_outline</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Browse Channels</v-list-tile-title>
        </v-list-tile>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon color="grey darken-1">settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Manage Subscriptions</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="red"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-icon class="mx-3">fab fa-youtube</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">SpotiStats</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          :append-icon-cb="() => {}"
          placeholder="Search..."
          single-line
          append-icon="search"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>




    <v-content>
      <v-container fill-height>
        <v-layout justify-center align-center>
            <ul v-if="spotiStats && spotiStats.length">
              <li v-for="post of spotiStats" :key="post.display_name">
                <p><strong>{{post.display_name}}</strong></p>
                <p>{{post.display_name}}</p>
              </li>
            </ul>

            <button v-on:click="fetchUsers">Add 1</button>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      spotiStats: [],
      errSpotify:"",
      items: [
        { icon: 'trending_up', text: 'Most Popular' },
        { icon: 'subscriptions', text: 'Subscriptions' },
        { icon: 'history', text: 'History' },
        { icon: 'featured_play_list', text: 'Playlists' },
        { icon: 'watch_later', text: 'Watch Later' }
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' }
      ]
    }),
    props: {
      source: String
    },
    methods: {

      /*fetchUsers: function () {
        var SpotifyWebApi = require('spotify-web-api-node');
        var spotifyApi = new SpotifyWebApi({
                clientId: '***',
                clientSecret: '***',
                redirectUri: 'http://localhost:8889/callback'
        });

        spotifyApi.setAccessToken('***');
        spotifyApi.getUser('Vango56')
          .then(function(data) {
          // eslint-disable-next-line
          console.log(data);
            this.spotiStats = data.body;
            //this.spotiStats ="data";
           // console.log('Retrieved playlists', data.body);
          },function(err) {
            this.errSpotify = err;
            //console.log('Something went wrong!', err);
          });
      },*/

      getHashParams: function() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
            // eslint-disable-next-line
        while ( e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      },
      fetchUsers: function() {
                // eslint-disable-next-line
        console.log("JE SUIS LA =======================");

            // eslint-disable-next-line
        var params = this.getHashParams();
            // eslint-disable-next-line
        var access_token = params.access_token,
            // eslint-disable-next-line
        refresh_token = params.refresh_token,
            // eslint-disable-next-line
        error = params.error;
        // eslint-disable-next-line
        console.log(access_token);
        const baseURI = 'http://localhost:8888/api/user/' + access_token;
        this.$http.get(baseURI)
        .then((result) => {
          if (result != null) {
          // eslint-disable-next-line
          console.log("RESULTAT : " + (result.items))
          }
        })
  
       /* if (error) {
          alert('There was an error during the authentication');
        } else {
          if (access_token) {
            // render oauth info
            oauthPlaceholder.innerHTML = oauthTemplate({
              access_token: access_token,
              refresh_token: refresh_token
            });

          $.ajax({
            url: 'https://api.spotify.com/v1/me',
            headers: {
              'Authorization': 'Bearer ' + access_token
            },
            success: function(response) {
              //userProfilePlaceholder.innerHTML = userProfileTemplate(response);
              // eslint-disable-next-line
              console.log("SUCCESS : " + response);

              //$('#login').hide();
              //$('#loggedin').show();
            }
          });
        } else {
        // eslint-disable-next-line
        console.log("-------------ERROR------------");
        }
        }*/
    }
  }
}
</script>