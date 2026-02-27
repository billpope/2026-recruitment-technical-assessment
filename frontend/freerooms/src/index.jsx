import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RoomGrid from './components/RoomGrid.jsx'
import Navbar from './components/Navbar.jsx'
import Searchbar from './components/Searchbar.jsx'
import rooms from "./data/rooms.json";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <Searchbar />
    <RoomGrid rooms={rooms} />
  </React.StrictMode>,
) 