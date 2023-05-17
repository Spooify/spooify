import React, { useEffect, useState } from "react";
import styles from "./FansLike.module.css";
import ArtistCard from "./ArtistCard/ArtistCard";

const FansLike = () => {
  const [fansLikeArtists, setFansLikeArtists] = useState("");
  const maxArtists = 5;

  useEffect(() => {
    const url = `http://localhost:4000/api/artists`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFansLikeArtists(data);
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
        {fansLikeArtists[0] ? (
          fansLikeArtists
            .slice(1, maxArtists)
            .map((fansLikeArtist) => (
              <ArtistCard
                key={fansLikeArtist.id}
                artist={fansLikeArtist}
              ></ArtistCard>
            ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default FansLike;
