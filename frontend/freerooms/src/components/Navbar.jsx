import "../styles/Navbar.css";
import IconButton from "./IconButton.jsx";
import { useState } from "react";

function Navbar() {
  const [isDoorOpen, setIsDoorOpen] = useState(false);

  const logoSrc = isDoorOpen ? "/assets/freeroomsDoorClosed.png" : "/assets/freeRoomsLogo.png";

  const toggleDoor = () => {
    setIsDoorOpen((prev) => !prev);
  };

  return (
    <header className="header">
        <button className="logo"
          type = "button"
          onClick={toggleDoor}
        >
            <img src={logoSrc} alt="FreeRoom Logo" className="logo-image" />
            <span className="logo-text">Freerooms</span>
        </button>
        <div className="navigation">
            <IconButton icon="search" title="Search" onClick={() => console.log('Search')} />
            <IconButton icon="grid_view" title="Grid View" onClick={() => console.log('Grid View')} />    
            <IconButton icon="map" title="Map" onClick={() => console.log('Map')} />
            <IconButton icon="dark_mode" title="Dark Mode" onClick={() => console.log('Dark Mode')} />
        </div>
    </header>
  );
}

export default Navbar;  