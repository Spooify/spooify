import React, { useState } from "react";
import styles from "./AlbumCard.module.css";
import playButton from "../../../assets/play-button.png";

const AlbumCard = ({ album }) => {
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
        className={styles["album-card"]}
        onClick={handleAlbumClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <div className={styles["image-container"]}>
          <img
            className={styles["album-image"]}
            src={album.photo}
            alt={album.album_name}
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
        <p className={styles["album-name"]}>{album.album_name}</p>
        <p className={styles["album-year"]}>{`${album.year_made} • Album`}</p>
      </button>
    </>
  );
};

export default AlbumCard;
