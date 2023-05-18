import React, { useEffect, useState } from "react";
import styles from "./Featuring.module.css";
import TrackCard from "./TrackCard/TrackCard";

const Featuring = ({ artist, playingTrack, setPlayingTrack }) => {
  const [tracks, setTracks] = useState();
  const maxTracks = 8;

  useEffect(() => {
    const url = `http://localhost:4000/api/featuring/${artist.artist_id}/`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setTracks(data);
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
        {tracks ? (
          tracks.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              playingTrack={playingTrack}
              setPlayingTrack={setPlayingTrack}
            ></TrackCard>
          ))
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default Featuring;
