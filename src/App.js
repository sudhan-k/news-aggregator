import React, { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import Header from './components/LayoutNew/Header/Header';
import Footer from './components/LayoutNew/Footer/Footer';
import './App.css';
import AllRoutes from './AllRoutes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { SnackbarProvider, useSnackbar } from 'notistack';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme) return storedTheme === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      background: {
        default: darkMode ? '#121212' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
      },
    },
  });

  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(newTheme === 'dark');
    sessionStorage.setItem('theme', newTheme);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <SnackbarProvider maxSnack={3}>

        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header toggleTheme={toggleTheme} darkMode={darkMode} />
          <AllRoutes />
          <Footer darkMode={darkMode} />
        </ThemeProvider>
      </SnackbarProvider>
    </LocalizationProvider>
  );
};

export default App;
