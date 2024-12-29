import React, { useState } from 'react';
import { Input, InputAdornment, IconButton } from '@mui/material';
import { Search, Clear } from '@mui/icons-material';

const SearchBar = ({ setQuery }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchText(value);
    setQuery(value); // Update parent component with search text
  };

  const clearSearch = () => {
    setSearchText('');
    setQuery(''); // Clear parent query as well
  };

  return (
    <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
      <Input
        type="text"
        value={searchText}
        placeholder="Search articles..."
        onChange={handleSearchChange}
        style={{
          width: '80%',
          padding: '5px 10px',
        }}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          searchText && (
            <InputAdornment position="end">
              <IconButton onClick={clearSearch}>
                <Clear />
              </IconButton>
            </InputAdornment>
          )
        }
      />
    </div>
  );
};

export default SearchBar;
