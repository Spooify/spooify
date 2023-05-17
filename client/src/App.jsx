import { useState } from 'react'
import './App.css'
import Login from './Components/Login/Login.jsx'
import Dashboard from './Components/Dashboard/Dashboard';
import "./Components/featuring/Featuring.jsx";


const code =  new URLSearchParams(window.location.search).get('code');


function App() {
  const [count, setCount] = useState(0);
  const [artist, setArtist] = useState("0TnOYISbd1XYRBk9myaseg");

  return (
    <>
      {code && <Dashboard code={code} artist={artist} />}
      {!code && <Login />}
      <>

      </>
    </>
  );
}

export default App;
