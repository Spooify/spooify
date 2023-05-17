import React, { useState } from "react";
import styles from "./ArtistCard.module.css";
import playButton from "../../assets/play-button.png";

const Discography = ({ artist }) => {
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
            <img className={styles["play-button"]} src={playButton}></img>
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

export default Discography;
