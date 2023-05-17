//--- depencies ---
import dotenv from "dotenv";
import express from "express";
import SpotifyWebApi from "spotify-web-api-node";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
const PORT = 4000;


//--- database connection ---
// import pkg from "pg";
// const { Pool } = pkg;
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// pool.connect();

//--- routes ---


//--- Spotify authentication ---
app.post("/api/login", (req, res) => {
  const code = req.body.code;
  const spotifyWebApi = new SpotifyWebApi({
    redirectUri: process.env.SPOTIFY_REDIRECT_URI,
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });
  spotifyWebApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      
    })
    .catch((err) => {
      console.log(err);
    });
});

//--- home route ---
app.get("/", (req, res) => {
  res.send("Hello World");
});

//--- get singular artist ---
app.get("/api/artists/:id", (req, res) => {
  pool
    .query("SELECT * FROM artists WHERE id=$1", [req.params.id])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- get singular track ---
app.get("/api/tracks/:id", (req, res) => {
  pool
    .query("SELECT * FROM tracks WHERE id=$1", [req.params.id])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- get singular album ---
app.get("/api/albums/:id", (req, res) => {
  pool
    .query("SELECT * FROM albums WHERE id=$1", [req.params.id])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- get all albums of singular artist ---
app.get("/api/artists/:id/albums", (req, res) => {
  pool
    .query("SELECT * FROM albums WHERE artist_id=$1", [req.params.id])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- get all playlists ---
app.get("/api/playlists", (req, res) => {
  pool.query("SELECT * FROM playlists").then((result) => {
    res.send(result.rows);
  });
});

//--- get singular playlist ---
app.get("/api/playlists/:id", (req, res) => {
  pool
    .query("SELECT * FROM playlists WHERE id=$1", [req.params.id])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- add track to playlist ---
app.post("/api/playlists/:id/tracks", (req, res) => {
  pool
    .query("INSERT INTO tracks (track_id, playlist_id) VALUES ($1, $2)", [
      req.body.track_id,
      req.params.id,
    ])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- delete track from playlist ---
app.delete("/api/playlists/:id/tracks/:track_id", (req, res) => {
  pool
    .query("DELETE FROM Playlist WHERE track_id=$1 AND playlist_id=$2", [
      req.params.track_id,
      req.params.id,
    ])
    .then((result) => {
      res.send(result.rows);
    });
});

//--- setting port listener ---
app.listen(PORT, (error) => {
  if (error) {
    console.error("error");
  } else {
    console.log(`server running at ${PORT}`);
  }
});

