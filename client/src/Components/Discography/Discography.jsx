import React, { useEffect, useState } from "react";
import styles from "./Discography.module.css";
import AlbumCard from "./AlbumCard/AlbumCard";

const Discography = ({ artist }) => {
  const [albums, setAlbums] = useState("");
  const maxAlbums = 9;

  useEffect(() => {
    const url = `http://localhost:4000/api/artists/${artist.id}/albums`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [artist]);

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
