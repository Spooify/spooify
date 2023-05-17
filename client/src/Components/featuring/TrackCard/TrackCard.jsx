import React, { useState } from "react";
import styles from "./TrackCard.module.css";
import playButton from "../../../assets/play-button.png";

const TrackCard = ({ track }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAlbumClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <button
        // className={styles["album-card"]}
        className={styles["track-card"]}
        onClick={handleAlbumClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={styles["image-container"]}>
          <img
            className={styles["track-image"]}
            src={track.photo}
            alt={track.album_name}
          ></img>
          {isHovering ? (
            <img className={styles["play-button"]} src={playButton}></img>
          ) : (
            <img
              className={styles["play-button-hidden"]}
              src={playButton}
            ></img>
          )}
        </div>
        <p className={styles["track-name"]}>{track.name}</p>
        <p className={styles["track-year"]}>{`${track.year_made} • Track`}</p>
      </button>
    </>
  );
};

export default TrackCard;
