import React, { useState, useEffect } from "react";
import styles from "./PopSongCard.module.css";
import playTriangle from "../../../assets/play-triangle.png";
import favIcon from "../../../assets/fav-icon.png";
import favIconFavorite from "../../../assets/fav-icon-favorite.png";

const PopSongCard = ({
  artist,
  album,
  song,
  playingTrack,
  setPlayingTrack,
  playing,
  setPlaying,
}) => {
  const [clicked, setClicked] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handlePlay = (e) => {
    e.stopPropagation(); //important to stop the event from bubbling up (use on all song onclick functions)
    console.log(song.track_id);
    setPlayingTrack(song.track_id);
    setPlaying(!playing);
  };

  const seconds = Math.floor(song.duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const duration = minutes + ":" + (seconds % 60);

  return (
    <div className={styles.song_card} onClick={handlePlay}>
      <div className={styles["play-button"]}>
        <img className={styles.image} src={playTriangle}></img>
      </div>
      <img className={styles["album_image"]} src={song.photo}></img>
      <div className={styles.title}>{song.name}</div>
      <div className={styles["fav-icon"]}>
        <img
          className={styles.image}
          src={clicked ? favIconFavorite : favIcon}
          onClick={() => {
            setClicked(!clicked);
          }}
        ></img>
      </div>
      <div className={styles.duration}>{duration}</div>
    </div>
  );
};

export default PopSongCard;
