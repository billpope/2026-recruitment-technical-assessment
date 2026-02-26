import "../styles/Navbar.css";
import IconButton from "./IconButton.jsx";

function Navbar() {
  return (
    <header className="header">
        <div className="logo">
            <img src="/assets/freeRoomsLogo.png" alt="FreeRoom Logo" className="logo-image" />
            <span className="logo-text">Freerooms</span>
        </div>
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