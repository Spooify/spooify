import React, { useEffect, useState } from "react";
import styles from "./Featuring.module.css";
import TrackCard from "./TrackCard/TrackCard";

const Featuring = ({ artist }) => {
  const [tracks, setTracks] = useState("");
  const maxTracks = 9;

  useEffect(() => {
    const url = `http://localhost:4000/api/featuring/${artist.id}/`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTracks(data);
        console.log(data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [artist]);

  return (
    <section className={styles["featuring-container"]}>
      <h2 className={styles.title}>{`Featuring ${artist.artist_name}`}</h2>
      <div className={styles["featuring-bar"]}>
        {tracks[0] ? (
          tracks
            .slice(0, maxTracks)
            .map((track) => (
              <TrackCard key={track.id} track={track}></TrackCard>
            ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Featuring;
