const refreshCtrl = {};
const SpotifyWebApi = require("spotify-web-api-node");

refreshCtrl.refreshToken = (req, res) => {

    const refreshToken = req.body.refreshToken

    const spotifyApi = new SpotifyWebApi({
        redirectUri: process.env.REDIRECT_URI,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: refreshToken,
    });

    spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
          accessToken: data.body.access_token,
          expiresIn: data.body.expires_in
      })
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(400)
    })
}

module.exports = refreshCtrl;