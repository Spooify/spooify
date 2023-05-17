import { useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login.jsx";
import Dashboard from "./Components/Dashboard/Dashboard";
import "./Components/featuring/Featuring.jsx";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {code && <Dashboard code={code} />}
      {!code && <Login />}
      <></>
    </>
  );
}

export default App;
