import React from "react";
import useAuth from "./useAuth";
import Player from "../Player/Player";
import HeaderImage from "../HeaderImage/HeaderImage";
import Featuring from "../featuring/Featuring.jsx";
import Discography from "../Discography/Discography";
import Sidebar from "../sidebar/Sidebar.jsx";
import FansLike from "../FansLike/FansLike";



const Dashboard = (props) => {
  const accessToken = useAuth(props.code);
  return (
    <>
      <div className="main_body">
        <Sidebar />
        <div>
          <HeaderImage />
          <Featuring />
          <Discography artist={props.artist}></Discography>
          <FansLike />
        </div>
      </div>
      <Player accessToken={accessToken} />
    </>
  );
};

export default Dashboard;
