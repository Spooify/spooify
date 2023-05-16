import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './featuring/Featuring.jsx';
import Featuring from './featuring/Featuring.jsx';
import FansAlsoLike from './fans_also_like/FansAlsoLike';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Featuring/>
     <FansAlsoLike/>
    </>
  )
}

export default App
