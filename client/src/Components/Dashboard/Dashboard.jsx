import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import Player from "../Player/Player";
import HeaderImage from "../HeaderImage/HeaderImage";
// import Featuring from "../Featuring/Featuring.jsx";
// import Discography from "../Discography/Discography";
import Sidebar from "../sidebar/Sidebar.jsx";
// import FansLike from "../FansLike/FansLike";

const Dashboard = (props) => {
  const accessToken = useAuth(props.code);
  const [artist, setArtist] = useState();
  const [albums, setAlbums] = useState();

  useEffect(() => {
    const url = `http://localhost:4000/api/artists/0TnOYISbd1XYRBk9myaseg`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        setArtist(data[0]);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (artist) {
      const url = `http://localhost:4000/api/artists/${artist.id}/albums`;

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setAlbums(data);
        } catch (error) {
          console.log("error", error);
        }
      };
      fetchData();
    }
  }, [artist]);

  return (
    <>
      {albums ? (
        <>
          <div className="main_body">
            <Sidebar />
            <div>
              <HeaderImage albums={albums} artist={artist}/>
              {/* <Discography albums={albums}></Discography>
              <FansLike />
              <Featuring artist={artist} /> */}
            </div>
          </div>
          <Player accessToken={accessToken} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dashboard;
