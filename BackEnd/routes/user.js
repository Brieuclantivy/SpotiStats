var SpotifyWebApi = require("spotify-web-api-node");

exports.userData = function(req, res) {
  let token_API = req.params.id;

  if (token_API != null) {
    var client_id = "***"; // Your client id
    var client_secret = "***"; // Your secret
    var redirect_uri = "***"; // Your redirect uri

    var spotifyApi = new SpotifyWebApi({
      clientId: client_id,
      clientSecret: client_secret,
      redirectUri: redirect_uri
    });
    spotifyApi.setAccessToken(token_API);

    spotifyApi.getUserPlaylists("Vango56").then(
      function(data) {
        res.status(200).send("data.body");
        console.log("Retrieved playlists", data.body);
      },
      function(err) {
        console.log("Something went wrong!", err);
        res.status(404).send("Something went wrong : " +  err);
      }
    );
  }
};
