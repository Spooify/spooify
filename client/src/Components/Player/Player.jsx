import {useState, useEffect} from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import "./Player.css";

const Player = ({ accessToken, playingTrack, setPlayingTrack }) => {
  const [play, setPlay] = useState(false);
  const URI = `spotify:track:${playingTrack}`

  useEffect(() => setPlay(true), [playingTrack]);

  if (!accessToken) return null;
  return (
    <div className="player-container">
      <SpotifyPlayer
        className="player"
        token={accessToken}
        callback={state => {if (!state.isPlaying) setPlay(false)}}       
        styles={{
          activeColor: "#fff",
          bgColor: "#333",
          color: "#fff",
          loaderColor: "#fff",
          sliderColor: "#1cb954",
          trackArtistColor: "#ccc",
          trackNameColor: "#fff",
        }}
        uris={playingTrack? [URI] : []}
        play={play}

      />
    </div>
  );
};

export default Player;
