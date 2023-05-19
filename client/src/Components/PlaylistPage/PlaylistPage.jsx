import React, { useEffect, useState } from "react";
import FavTrackCard from "./FavTrackCard/FavTrackCard";
import playlistImage from "../../assets/playlist.png";
import styles from "./PlaylistPage.module.css";

const PlaylistPage = ({ favoriteSongs, setFavChange }) => {
  let trackNum = 1;
  return (
    <>
      <div className={styles.header}>
        <div className={styles["header-container"]}>
          <img className={styles.image} src={playlistImage}></img>
          <div className={styles["text-container"]}>
            <p className={styles["playlist-title"]}>Playlist</p>
            <p className={styles["playlist-name"]}>Liked Songs</p>
            <p
              className={styles["playlist-songs"]}
            >{`${favoriteSongs.length} Songs`}</p>
          </div>
        </div>
      </div>
      <section className={styles["playlist-container"]}>
        <div className={styles["header-bar"]}>
          <span className={styles.number}>#</span>
          <span className={styles.title}>Title</span>
          <span className={styles.album}>Album</span>
          <span className={styles.duration}>Duration</span>
        </div>
        <hr />
        {favoriteSongs[0] ? (
          favoriteSongs.map((favoriteSong) => (
            <FavTrackCard
              key={favoriteSong}
              favoriteSong={favoriteSong}
              setFavChange={setFavChange}
              trackNum={trackNum++}
            ></FavTrackCard>
          ))
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default PlaylistPage;
