import { useState, useEffect } from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./Player.css";

const Player = ({
  accessToken,
  playingTrack,
  setPlayingTrack,
  playing,
  setPlaying,
}) => {
  const URI = `spotify:track:${playingTrack}`;

  useEffect(() => setPlaying(true), [playingTrack]);

  if (!accessToken) return null;
  return (
    <div className="player-container">
      <SpotifyPlayer
        className="player"
        token={accessToken}
        callback={(state) => {
          if (!state.isPlaying) setPlaying(false);
        }}
        styles={{
          activeColor: "#fff",
          bgColor: "#000",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
        uris={playingTrack ? [URI] : []}
        play={playing}
      />
    </div>
  );
};

export default Player;
