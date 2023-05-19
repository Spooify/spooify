import React, { useState, useEffect } from "react";
import styles from "./TrackCard.module.css";
import playButton from "../../../assets/play-button.png";
import favIcon from "../../../assets/fav-icon.png";
import favIconFav from "../../../assets/fav-icon-favorite.png";

const TrackCard = ({
  track,
  favoriteSongs,
  setFavChange,
  playingTrack,
  setPlayingTrack,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favoriteSongs.includes(track.track_id)) setIsFavorite(true);
  }, []);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleAlbumClick = () => {
    console.log(track.track_id);
    setPlayingTrack(track.track_id);
  };

  const handlePlay = (e) => {
    e.stopPropagation();
  };

  const handleFavorite = async (e) => {
    e.stopPropagation();
    let favorite = !isFavorite;
    setIsFavorite(!isFavorite);
    console.log("Favorite Clicked");

    if (favorite) {
      try {
        await fetch(`http://localhost:4000/api/playlists/${track.track_id}/`, {
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
        await fetch(`http://localhost:4000/api/playlists/1/${track.track_id}`, {
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
      <button
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
            <>
              <img
                className={styles["fav-icon"]}
                onClick={handleFavorite}
                src={isFavorite ? favIconFav : favIcon}
              ></img>
              <img
                className={styles["play-button"]}
                onClick={handlePlay}
                src={playButton}
              ></img>
            </>
          ) : (
            <>
              <img
                className={styles["fav-icon-hidden"]}
                src={isFavorite ? favIconFav : favIcon}
              ></img>
              <img
                className={styles["play-button-hidden"]}
                src={playButton}
              ></img>
            </>
          )}
        </div>
        <p className={styles["track-name"]}>{track.name}</p>
        <p className={styles["track-year"]}>{`${track.year_made} • Track`}</p>
      </button>
    </>
  );
};

export default TrackCard;
