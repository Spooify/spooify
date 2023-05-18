import React, { useEffect, useState } from "react";
import styles from "./Discography.module.css";
import AlbumCard from "./AlbumCard/AlbumCard";

const Discography = ({ albums }) => {
  const maxAlbums = 9;

  return (
    <section className={styles["disco-container"]}>
      <h2 className={styles.title}>Discography</h2>
      <div className={styles["disco-bar"]}>
        {albums[0] ? (
          albums
            .slice(0, maxAlbums)
            .map((album) => (
              <AlbumCard key={album.id} album={album}></AlbumCard>
            ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Discography;
