import React, { useState, useEffect } from "react";
import styles from "./PopSongCard.module.css";
import playTriangle from "../../../assets/play-triangle.png";
import favIcon from "../../../assets/fav-icon.png";
import favIconFavorite from "../../../assets/fav-icon-favorite.png";


const PopSongCard = ({
  song,
  trackNum,
  setPlayingTrack,
  playing,
  setPlaying,
  favoriteSongs,
  setFavChange
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const seconds = Math.floor(song.duration / 1000);
  const minutes = Math.floor(seconds / 60);
  const duration = minutes + ":" + (seconds % 60);

  useEffect(() => {
    if (favoriteSongs.includes(song.track_id)) setIsFavorite(true);
  }, []);

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

  const handleFavorite = async (e) => {
    e.stopPropagation();
    let favorite = !isFavorite;
    setIsFavorite(!isFavorite);
    console.log("Favorite Clicked");

    if (favorite) {
      try {
        await fetch(`http://localhost:4000/api/playlists/${song.track_id}/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({ playlist_id: 1 }),
        });
      } catch (error) {
        console.log("error", error);
      }
    } else {
      try {
        await fetch(`http://localhost:4000/api/playlists/1/${song.track_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        });
      } catch (error) {
        console.log("error", error);
      }
    }
    setFavChange(true);
  };

  return (
    <>
      {song ? (
        <div
          className={styles.song_card}
          onClick={handlePlay}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {" "}
          {isHovering ? (
            <div className={styles["play-button"]}>
              <img className={styles.image} src={playTriangle}></img>
            </div>
          ) : (
            <div className={styles.number}>{trackNum}</div>
          )}
          <img className={styles["album_image"]} src={song.photo}></img>
          <div className={styles.title}>{song.name}</div>
          <div className={styles["fav-icon"]}>
            {isHovering ? (
              <>
                <img
                  className={styles["fav-icon"]}
                  onClick={handleFavorite}
                  src={isFavorite ? favIconFavorite : favIcon}
                ></img>
              </>
            ) : (
              <>
                <img
                  className={styles["fav-icon-hidden"]}
                  src={isFavorite ? favIconFavorite : favIcon}
                ></img>
                <img
                  className={styles["play-button-hidden"]}
                  src={playTriangle}
                ></img>
              </>
            )}
          </div>
          <div className={styles.duration}>{duration}</div>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default PopSongCard;
