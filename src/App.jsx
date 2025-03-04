import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './Components/sidebar'
import Navbar from './Components/Navbar'
import Songdiv from './Components/Songdiv'
import './App.css'
import SongsList from './Components/SongsList'
import { fetchPlaylists } from "./Components/api/apicalls";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Sidebar/>
      <Songdiv/>
      <SongsList/>
    </>
  )
}

export default App
