import React, { useState, useEffect } from "react";
import styles from "./FavTrackCard.module.css";
import playButton from "../../../assets/play-button.png";
import favIconFav from "../../../assets/fav-icon-favorite.png";

const TrackCard = ({ favoriteSong, setFavChange }) => {
  const [track, setTrack] = useState();
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const url = `http://localhost:4000/api/tracks/${favoriteSong}`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTrack(data[0]);
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

  const handleAlbumClick = () => {
    console.log("clicked");
  };

  const handlePlay = (e) => {
    e.stopPropagation();
  };

  const handleFavorite = async (e) => {
    e.stopPropagation();
    setFavChange(true);
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
  };

  return (
    <>
      {track ? (
        <>
          <div
            className={styles["fav-card"]}
            onClick={handleAlbumClick}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            <span className={styles.number}>1</span>
            <img
              className={styles["track-image"]}
              src={track.photo}
              alt={track.album_name}
            ></img>
            <div className={styles["title-container"]}>
              <p className={styles.title}>{track.name}</p>
              <p className={styles.title}>{track.artist_name}</p>
            </div>
            <p className={styles.album}>{track.album_name}</p>
            <p className={styles.duration}>{track.duration}</p>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default TrackCard;
