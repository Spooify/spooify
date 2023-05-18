import React, { useEffect, useState } from "react";
import styles from "./PlaylistPage.module.css";
import AlbumCard from "./AlbumCard/AlbumCard";

const PlaylistPage = () => {
  const maxAlbums = 9;

  return (
    <section className={styles["disco-container"]}>
      <h2 className={styles.title}>Playlist</h2>
      {/* <div className={styles["disco-bar"]}>
        {albums[0] ? (
          albums
            .slice(0, maxAlbums)
            .map((album) => (
              <AlbumCard key={album.id} album={album}></AlbumCard>
            ))
        ) : (
          <></>
        )}
      </div> */}
    </section>
  );
};

export default PlaylistPage;
