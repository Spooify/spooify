import React, { useState } from "react";
import styles from "./ArtistCard.module.css";
import playButton from "../../../assets/play-button.png";

const ArtistCard = ({ artist }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAlbumClick = () => {
    console.log("Card clicked");
  };

  const handlePlay = (e) => {
    e.stopPropagation();
    console.log("Play Clicked");
  };

  return (
    <>
      <button
        className={styles["artist-card"]}
        onClick={handleAlbumClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={styles["image-container"]}>
          <img
            className={styles["artist-image"]}
            src={artist.image}
            alt={artist.artist_name}
          ></img>
          {isHovering ? (
            <img
              className={styles["play-button"]}
              onClick={handlePlay}
              src={playButton}
            ></img>
          ) : (
            <img
              className={styles["play-button-hidden"]}
              src={playButton}
            ></img>
          )}
        </div>
        <p className={styles["artist-name"]}>{artist.artist_name}</p>
        <p className={styles["artist-title"]}>{`Artist`}</p>
      </button>
    </>
  );
};

export default ArtistCard;
