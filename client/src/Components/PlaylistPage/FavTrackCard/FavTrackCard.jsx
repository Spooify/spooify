import React, { useState, useEffect } from "react";
import styles from "./FavTrackCard.module.css";
import playButton from "../../../assets/play-triangle.png";
import favIconFav from "../../../assets/fav-icon-favorite.png";

const FavTrackCard = ({ favoriteSong, setFavChange, trackNum }) => {
  const [favTrack, setFavTrack] = useState();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const url = `http://localhost:4000/api/tracks/${favoriteSong}`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFavTrack(data[0]);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    console.log("play clicked");
  };

  const handleFavorite = async (e) => {
    e.stopPropagation();
    try {
      await fetch(
        `http://localhost:4000/api/playlists/1/${favTrack.track_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (error) {
      console.log("error", error);
    }
    setFavChange(true);
  };

  return (
    <>
      {favTrack ? (
        <>
          <div
            className={styles["fav-card"]}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            {isHovering ? (
              <div className={styles["play-container"]}>
                <img
                  className={styles["play-button"]}
                  src={playButton}
                  onClick={handlePlay}
                ></img>
              </div>
            ) : (
              <span className={styles.number}>{trackNum}</span>
            )}
            <img
              className={styles["track-image"]}
              src={favTrack.photo}
              alt={favTrack.album_name}
            ></img>
            <div className={styles["title-container"]}>
              <p className={styles.title}>{favTrack.name}</p>
              <p className={styles.artist}>{favTrack.artist_name}</p>
            </div>
            <p className={styles.album}>{favTrack.album_name}</p>
            <img
              className={styles["fav-icon"]}
              onClick={handleFavorite}
              src={favIconFav}
            ></img>
            <p className={styles.duration}>{`${Math.floor(
              favTrack.duration / 60000
            )}:${Math.floor(favTrack.duration % 60)}`}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default FavTrackCard;
