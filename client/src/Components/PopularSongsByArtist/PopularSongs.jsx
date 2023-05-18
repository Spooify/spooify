import React, { useEffect, useState } from "react";
import "./PopularSongs.css";

const PopularSongs = ({albums}) => {
    const[topTracks, setTopTracks] = useState();
    
    // useEffect(() => {
    //     const url = `http://localhost:4000/api/albums/:id`;
    
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch(url);
    //         const data = await response.json();
    //         setTopTracks(data);
    //         console.log(data);
    //       } catch (error) {
    //         console.log("error", error);
    //       }
    //     };
    //     fetchData();
    //   }, [albums]);
  

    return (
  <div className="popular_songs">Popular
    <div className="song_card">
        <div className="list_number">1</div>
        <div className="album_image">Album Image</div>
        <div className="song_name">Name: Hello, It's me</div>
        <div className="times_played">Played: 1,500,324</div>
        <div className="song_duration">Duration: 3:00</div>
    </div>
  </div>
  );
};

export default PopularSongs;
