import React, { useState, useEffect } from "react";
import useAuth from "./useAuth";
import Player from "../Player/Player";
import HeaderImage from "../HeaderImage/HeaderImage";
import Featuring from "../Featuring/Featuring.jsx";
import Discography from "../Discography/Discography";
import Sidebar from "../sidebar/Sidebar.jsx";
import FansLike from "../FansLike/FansLike";

const Dashboard = (props) => {
  const accessToken = useAuth(props.code);
  const [artist, setArtist] = useState();

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

  return (
    <>
      <div className="main_body">
        <Sidebar />
        <div>
          <HeaderImage />
          <Discography artist={artist ? artist : ""}></Discography>
          <FansLike />
          <Featuring artist={artist ? artist : ""} />
        </div>
      </div>
      <Player accessToken={accessToken} />
    </>
  );
};

export default Dashboard;
