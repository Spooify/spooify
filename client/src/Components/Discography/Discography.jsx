import React, { useEffect, useState } from "react";
import styles from "./Discography.module.css";
import AlbumCard from "../AlbumCard/AlbumCard";

const Discography = ({ artist }) => {
  const [albums, setAlbums] = useState("");

  useEffect(() => {
    const url = `http://localhost:8080/api/artists/${artist}/albums`;

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
  }, []);

  return (
    <>
      <h2 className={styles.title}>Discography</h2>
      <section className={styles["disco-bar"]}>
        {albums[0] ? (
          albums.map((album) => (
            <AlbumCard key={album.id} album={album}></AlbumCard>
          ))
        ) : (
          <></>
        )}
      </section>
    </>
  );
};

export default Discography;
