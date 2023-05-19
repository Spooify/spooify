import React, { useEffect, useState } from "react";
import Featuring from "../Featuring/Featuring.jsx";
import Discography from "../Discography/Discography";
import FansLike from "../FansLike/FansLike";
import PopularSongs from "../PopularSongsByArtist/PopularSongs.jsx";

import "./HeaderImage.css";

const HeaderImage = ({
  albums,
  artist,
  favoriteSongs,
  setFavChange,
  playingTrack,
  setPlayingTrack,
}) => {
  console.log(artist);
  // const [artist, setArtist] = useState()
  // const [albums_data, setAlbums_data] = useState([]);

  // useEffect(() => {
  //   const url = 'http://localhost:4000/api/artists/0TnOYISbd1XYRBk9myaseg/albums';

  //   const fetchData = () => {
  //     fetch(url, {
  //       method: "GET",
  //     })
  //       .then((response) => response.json())
  //       .then((data) => {
  //         // console.log(data)
  //         setAlbums_data(data);
  //         // console.log(albums_data)
  //       })
  //       .catch((error) => console.log("error", error));
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="Artist_container">
      <div
        className="parallax"
        style={{ backgroundImage: `url(${albums[0].photo})` }}
      ></div>
      <div className="cards">
        <div className="artist_name"> {artist.artist_name}</div>
        <PopularSongs albums={albums} />
        <Discography albums={albums}></Discography>
        <FansLike />
        <Featuring
          artist={artist}
          favoriteSongs={favoriteSongs}
          setFavChange={setFavChange}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
        />
      </div>
    </div>
  );
};

export default HeaderImage;
