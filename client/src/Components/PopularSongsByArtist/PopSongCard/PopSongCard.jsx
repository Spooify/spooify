import React, { useState, useEffect } from "react";
import styles from "./PopSongCard.module.css";
import playTriangle from "../../../assets/play-triangle.png";
import favIconFav from "../../../assets/fav-icon-favorite.png";

const PopSongCard = () => {
  return (
    <div className="song_card">
      <div className="play-button" src={playTriangle}></div>
      <div className="album_image">Album Image</div>
      <div className="title">Name: Hello, It's me</div>
      <div className="times_played">Played: 1,500,324</div>
      <div className="fav-icon" src={favIconFav}></div>
      <div className="duration">Duration: 3:00</div>
    </div>
  );
};

export default PopSongCard;
