import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import playlistImage from "../../assets/playlist.png";

// import spooify_white from "../sidebar/images/spooify_white.png"

function Sidebar({ setShowPlaylist, favoriteSongs, showPlaylist }) {
  const searchimgURL = new URL("./images/search_icon.png", import.meta.url);
  const homeimgURL = new URL("./images/home_icon.png", import.meta.url);
  const homeimghomeURL = new URL(
    "./images/home_icon_home.png",
    import.meta.url
  );

  const handlePlaylist = () => {
    console.log("clicked playlist");
  };

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div
          className="home"
          onClick={() => {
            setShowPlaylist(false);
          }}
        >
          <img
            src={showPlaylist ? homeimgURL : homeimghomeURL}
            alt="home"
            className="homeimg"
          />
          Home
        </div>
        <div className="search">
          <img src={searchimgURL} alt="search" className="searchimg" />
          Search
        </div>
      </div>

      <div className="playlist">
        <div className="userList">
          <div className="libLine"></div>
          <div className="libLine"></div>
          <div className="libIcon"></div>
          <p className="playlistTitle">Your Library</p>
        </div>
        <div className="buttons">
          <button>Playlists</button>
          <button>Artists</button>
          <button>Albums</button>
        </div>
        <div
          className="liked-songs"
          onClick={() => {
            setShowPlaylist(true);
          }}
        >
          <img className="playlist-image" src={playlistImage}></img>
          <div className="playlist-details">
            <p className="playlist-title">Liked Songs</p>
            {favoriteSongs ? (
              <p className="playlist-detail">{`Playist • ${favoriteSongs.length} Songs`}</p>
            ) : (
              <p className="playlist-detail">{`Playist • 0 Songs`}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
