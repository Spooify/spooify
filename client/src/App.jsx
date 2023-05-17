import { useState } from 'react'
import './App.css'
import Login from './Login'
import Dashboard from './Dashboard';

const code =  new URLSearchParams(window.location.search).get('code');


function App() {
  const [count, setCount] = useState(0)

  return (
  
      code ? <Dashboard code={code}/> : <Login />

    
  )
  }

export default App
