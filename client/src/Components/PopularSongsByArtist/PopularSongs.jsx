import React, { useEffect, useState } from "react";
import PopSongCard from "./PopSongCard/PopSongCard.jsx";
import styles from "./PopularSongs.module.css";

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
  <div className="popular_songs">
  <PopSongCard /> 
  </div>
  );
};

export default PopularSongs;
