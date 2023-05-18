import React, { useEffect, useState } from "react";
import FavTrackCard from "./FavTrackCard/FavTrackCard";
import styles from "./PlaylistPage.module.css";

const PlaylistPage = ({ favoriteSongs }) => {
  const maxAlbums = 9;

  return (
    <section className={styles["playlist-container"]}>
      <h2 className={styles.title}>Playlist</h2>
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
            key={favoriteSong.track_id}
            favoriteSong={favoriteSong}
          ></FavTrackCard>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};

export default PlaylistPage;
