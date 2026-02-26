import '../styles/Searchbar.css';
import DropdownButton from './Dropdown';

function Searchbar() {
  const filterOptions = [
    { label: 'Placeholder1', value: 'placeh1' },
    { label: 'Placeholder2', value: 'placeh2' },
    { label: 'Placeholder3', value: 'placeh3' }
  ];

  const sortOptions = [
    {label: 'Most Available Rooms', value: 'rooms-desc' },
    { label: 'Nearest', value: 'nearest' },
    { label: 'Alphabetical', value: 'name-asc' },
    { label: 'Reverse Alphabetical', value: 'name-desc' },
    { label: 'Lower Campus', value: 'lower-campus' },
    { label: 'Upper Campus', value: 'upper-campus' }
  ];

  // Placeholder handlers for dropdown selections
  const handleFilter = (option) => {
    console.log('Filter:', option);
  };

  // Placeholder handler for sort selection
  const handleSort = (option) => {
    console.log('Sort:', option);
  };

  return (
    <div className="search-container">
      <DropdownButton 
        icon="filter_alt" 
        label="Filters" 
        options={filterOptions}
        onSelect={handleFilter}
      />
      
      <div className="search-input-wrapper">
        <span className="material-symbols-outlined search-icon">search</span>
        <input 
          type="text" 
          placeholder="Search for a building..." 
          className="search-input"
        />
      </div>

      <DropdownButton 
        icon="filter_list" 
        label="Sort" 
        options={sortOptions}
        onSelect={handleSort}
      />
    </div>
  );
}

export default Searchbar;