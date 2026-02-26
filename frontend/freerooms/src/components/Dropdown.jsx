import { useState } from 'react';
import '../styles/Searchbar.css';

// clickoutside to close requried
function DropdownButton({ icon, label, options, onSelect }) {
const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option) => {
    onSelect(option);
    setIsOpen(false);
  };

  const renderDropdownMenu = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className="dropdown-menu">
        {options.map((option) => (
          <div 
            key={option.value}
            className="dropdown-item"
            onClick={() => handleSelect(option)}
          >
            {option.label}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dropdown-container">
      <button 
        className="dropdown-button"
        onClick={toggleDropdown}
      >
        <span className="material-symbols-outlined">{icon}</span>
        {label}
      </button>

      {renderDropdownMenu()}
    </div>
  );
}

export default DropdownButton;