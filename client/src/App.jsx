import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./featuring/Featuring.jsx";
import Featuring from "./featuring/Featuring.jsx";
import FansAlsoLike from "./fans_also_like/FansAlsoLike";
import Discography from "./Components/Discography/Discography";
import Sidebar from "./sidebar/Sidebar.jsx";
import FansLike from "./Components/FansLike/FansLike";

function App() {
  const [count, setCount] = useState(0);
  const [artist, setArtist] = useState("0TnOYISbd1XYRBk9myaseg");

  return (
    <>
      <div className="main_body">
        <Sidebar />
        <div>
          <Featuring />
          <Discography artist={artist}></Discography>
          <FansLike />
        </div>
      </div>
    </>
  );
}

export default App;
