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
  playing,
  setPlaying,
}) => {
  console.log(artist);

  // add event listener to change the background color of the control buttons when the scroll is greater than 4veiw height
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = document.querySelector('.Artist_container').scrollTop;
      const viewHeight = window.innerHeight;
      const controlButtons = document.querySelector('.control_buttons');

      if (scrollPosition > viewHeight/4) {
        controlButtons.classList.add('sticky');
        controlButtons.innerHTML = `<button class="back">&lt;</button><button class="forward">&gt;</button> ${artist.artist_name}`;
      } else {
        controlButtons.classList.remove('sticky');
        controlButtons.innerHTML = `<button class="back">&lt;</button><button class="forward">&gt;</button>`;
      }
    };

    const container = document.querySelector('.Artist_container');
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        <div className="control_buttons">
          {/* <button className="back">&lt;</button>
          <button className="forward">&gt;</button> */}
        </div>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${albums[0].photo})` }}
      ></div>
      <div className="cards">
        <div className="artist_name"> {artist.artist_name}</div>
        <PopularSongs
          albums={albums}
          artist={artist}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          playing={playing}
          setPlaying={setPlaying}
          favoriteSongs={favoriteSongs}
          setFavChange={setFavChange}
        />
        <Discography albums={albums}></Discography>
        <FansLike />
        <Featuring
          artist={artist}
          favoriteSongs={favoriteSongs}
          setFavChange={setFavChange}
          playingTrack={playingTrack}
          setPlayingTrack={setPlayingTrack}
          playing={playing}
          setPlaying={setPlaying}
        />
      </div>
    </div>
  );
};

export default HeaderImage;
