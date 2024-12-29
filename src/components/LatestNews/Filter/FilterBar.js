import React, { useState } from 'react';
import { TextField, MenuItem, Select, InputLabel, FormControl, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const FilterBar = ({ setFromDate, setToDate, setCategory, setSource, setLanguage, setSortBy, handleFileter, handleReset, news }) => {
  const [fromDate, setFrom] = useState(null);
  const [toDate, setTo] = useState(null);

  // Get the current date
  const today = new Date();

  // Handle From Date Change
  const handleFromDateChange = (date) => {
    if (date && toDate && date > toDate) {
      alert('From Date cannot be after To Date');
      return;
    }
    setFrom(date);
    setFromDate(date?.toISOString().split('T')[0] || ''); // Format to YYYY-MM-DD
  };

  // Handle To Date Change
  const handleToDateChange = (date) => {
    if (date && fromDate && date < fromDate) {
      alert('To Date cannot be before From Date');
      return;
    }
    setTo(date);
    setToDate(date?.toISOString().split('T')[0] || ''); // Format to YYYY-MM-DD
  };

  // Options for language and sort
  const languageOptions = [
    { value: '', label: 'All Languages' },
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'es', label: 'Spanish' },
    { value: 'de', label: 'German' },
  ];

  const sortByOptions = [
    { value: 'publishedAt', label: 'Newest First', for: "newsApi" },
    { value: 'relevancy', label: 'Most Relevant', for: "newsApi" },
    { value: 'popularity', label: 'Most Popular', for: "newsApi" },
    { value: 'newest ', label: 'Newest ', for: "NYTApi" },
    {value: 'oldest', label: 'Oldest', for: "NYTApi"},
    {value: 'relevancy', label: 'Relevancy', for: "NYTApi"}
  ];



  const handleFileterReset = () => {
    setFrom(null)
    setTo(null)
    handleReset()
  }


  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        marginBottom: '1rem',
      }}
    >
      {/* From Date Picker */}
      <DatePicker
        label="From Date"
        value={fromDate}
        format='dd-MM-yyyy'
        placeholder='dd-mm-yyyy'
        onChange={handleFromDateChange}
        maxDate={today} // Restrict future dates
        renderInput={(params) => <TextField {...params} />}
      />

      {/* To Date Picker */}
      {news !== "guardianApi" &&

      <DatePicker
        label="To Date"
        value={toDate}
        format='dd-MM-yyyy'
        placeholder='dd-mm-yyyy'
        minDate={fromDate}
        onChange={handleToDateChange}
        maxDate={today} // Restrict future dates
        renderInput={(params) => <TextField {...params} />}
      />
      }
      {/* Category Selector */}
      {/* <FormControl style={{ minWidth: 150 }}>
        <InputLabel>Category</InputLabel>
        <Select onChange={(e) => setCategory(e.target.value)} defaultValue="">
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="business">Business</MenuItem>
          <MenuItem value="entertainment">Entertainment</MenuItem>
          <MenuItem value="health">Health</MenuItem>
          <MenuItem value="science">Science</MenuItem>
          <MenuItem value="sports">Sports</MenuItem>
          <MenuItem value="technology">Technology</MenuItem>
        </Select>
      </FormControl> */}

      {/* Source Selector */}
      {/* <FormControl style={{ minWidth: 150 }}>
        <InputLabel>Source</InputLabel>
        <Select onChange={(e) => setSource(e.target.value)} defaultValue="">
          <MenuItem value="">All Sources</MenuItem>
          <MenuItem value="bbc-news">BBC News</MenuItem>
          <MenuItem value="cnn">CNN</MenuItem>
          <MenuItem value="the-verge">The Verge</MenuItem>
          <MenuItem value="techcrunch">TechCrunch</MenuItem>
          <MenuItem value="al-jazeera-english">Al Jazeera</MenuItem>
        </Select>
      </FormControl> */}

      {/* Language Selector */}
      {/* <FormControl style={{ minWidth: 150 }}>
        <InputLabel>Language</InputLabel>
        <Select onChange={(e) => setLanguage(e.target.value)} defaultValue="">
          {languageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl> */}

      {/* Sort By Selector */}
      {news !== "guardianApi" &&
        <FormControl style={{ minWidth: 150 }}>
          <InputLabel>Sort By</InputLabel>
          <Select onChange={(e) => setSortBy(e.target.value)} defaultValue="popularity">
            {sortByOptions.map((option) => (
              option.for === news &&
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      }
      <Button variant="contained" color="primary" onClick={handleFileter}>
        Apply Filters
      </Button>
      <Button variant="contained" color="error" onClick={handleFileterReset}>Reset</Button>
    </div>
  );
};

export default FilterBar;
