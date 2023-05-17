import React from "react";
import useAuth from "./useAuth";
import Player from "./Player";
import Featuring from "./featuring/Featuring.jsx";
//import FansAlsoLike from "./fans_also_like/FansAlsoLike";
import Discography from "./Components/Discography/Discography";
import Sidebar from "./sidebar/Sidebar.jsx";
import FansLike from "./Components/FansLike/FansLike";



const Dashboard = (props) => {
  const accessToken = useAuth(props.code);
  return (
    <>
      <div className="main_body">
        <Sidebar />
        <div>
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
