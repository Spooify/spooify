//--- depencies ---
import dotenv from "dotenv";
import express from "express";
const app = express();
import cors from "cors";
dotenv.config();
// dotenv.config({ path: "server/.env" });
app.use(express.json());
app.use(cors());
const PORT = 8080;

import pg from "pg";
const { Pool } = pg;
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

//--- database connection ---
// import pkg from "pg";
// const { Pool } = pkg;
// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });
// pool.connect();

//--- routes ---

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
    .query("SELECT * FROM albums WHERE artist=$1", [req.params.id])
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

// {
//   "access_token": "BQDYNUEWSgT2OeS4t3XBBd96SYLLCSpGN_HXNMcJg012JwQ9KcyZ79ADrIxxjgRNNq_gK1yH_9IOHWGOIpKEm5iKzy9UI4dug3VinGBZNA1XR5zhO8Ch",
//   "token_type": "Bearer",
//   "expires_in": 3600
// }
