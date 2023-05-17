import React from "react";
import "./Login.css";
// import dotenv from "dotenv";
// dotenv.config();

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=edb44bf155be4ca993ea8c2010803673&response_type=code&redirect_uri=http://localhost:3000/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";
const Login = () => {
  return (
    <div>
      <h1>Login to Spooify</h1>
      <a href={AUTH_URL}>
        <button className="login-button">Login with Spotify</button>
      </a>
    </div>
  );
};

export default Login;
