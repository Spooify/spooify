import React, { useEffect, useState } from "react";
import PopSongCard from "./PopSongCard/PopSongCard.jsx";
import styles from "./PopularSongs.module.css";

const PopularSongs = ({
  albums,
  artist,
  playingTrack,
  setPlayingTrack,
  playing,
  setPlaying,
}) => {
  const [popularTrack, setPopularTrack] = useState([]);

  useEffect(() => {
    const url = `http://localhost:4000/api/artist/${artist.artist_id}/tracks`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPopularTrack(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  console.log(popularTrack);

  return (
    <div className="popular_songs">
      <h2>Popular</h2>
      {popularTrack.map((song) => (
        <PopSongCard
          song={song}
          albums={albums}
          artist={artist}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          playing={playing}
          setPlaying={setPlaying}
        />
      ))}
    </div>
  );
};

export default PopularSongs;
