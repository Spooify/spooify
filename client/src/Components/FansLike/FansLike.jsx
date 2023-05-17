import React, { useEffect, useState } from "react";
import styles from "./FansLike.module.css";
import ArtistCard from "../ArtistCard/ArtistCard";

const FansLike = () => {
  const [artists, setArtists] = useState("");
  const maxArtists = 5;

  useEffect(() => {
    const url = `http://localhost:8080/api/artists`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArtists(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className={styles["fans-container"]}>
      <h2 className={styles.title}>Fans Also Like</h2>
      <div className={styles["fans-bar"]}>
        {artists[0] ? (
          artists
            .slice(1, maxArtists)
            .map((artist) => (
              <ArtistCard key={artist.id} artist={artist}></ArtistCard>
            ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default FansLike;
