import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./Player.css";

const Player = ({ accessToken }) => {
  if (!accessToken) return null;
  return (
    <div className="container">
      <SpotifyPlayer
        className="player"
        token={accessToken}
        showSaveIcon
        uris={[]}
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
      />
    </div>
  );
};

export default Player;
