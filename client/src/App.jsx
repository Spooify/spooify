import { useState } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard';
import "./featuring/Featuring.jsx";
import Featuring from "./featuring/Featuring.jsx";
import FansAlsoLike from "./fans_also_like/FansAlsoLike";
import Discography from "./Components/Discography/Discography";
import Sidebar from "./sidebar/Sidebar.jsx";
import FansLike from "./Components/FansLike/FansLike";

const code =  new URLSearchParams(window.location.search).get('code');


function App() {
  const [count, setCount] = useState(0);
  const [artist, setArtist] = useState("0TnOYISbd1XYRBk9myaseg");

  return (
  <>
      code ? <Dashboard code={code}/> : <Login />
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
    </>
  );
}

export default App;
