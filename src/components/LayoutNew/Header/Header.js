// import React, { useState } from 'react';
// import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Switch, useTheme, useMediaQuery } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import styles from './Header.module.css';

// const Header = ({ toggleTheme, darkMode }) => {
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   // Handle scroll effect
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const toggleDrawer = () => {
//     setDrawerOpen(!drawerOpen);
//   };

//   return (
//     <AppBar
//       position="fixed"
//       className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
//       elevation={scrolled ? 4 : 0}
//     >
//       <Toolbar className={styles.toolbar}>
//         {/* Logo */}
//         <Typography variant="h6" className={styles.logo}>
//           News Aggregator
//         </Typography>

//         {/* Theme Switch */}
//         <div className={styles.switchContainer}>
//           <Typography variant="body2">{darkMode ? 'Dark' : 'Light'} Mode</Typography>
//           <Switch checked={darkMode} onChange={toggleTheme} />
//         </div>

//         {/* Mobile Menu */}
//         {isMobile ? (
//           <>
//             <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//             <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
//               <div className={styles.drawer}>
//                 <IconButton onClick={toggleDrawer} className={styles.closeButton}>
//                   <CloseIcon />
//                 </IconButton>
//                 <List>
//                   <ListItem button>
//                     <ListItemText primary="Home" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="About" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="Categories" />
//                   </ListItem>
//                   <ListItem button>
//                     <ListItemText primary="Contact" />
//                   </ListItem>
//                 </List>
//               </div>
//             </Drawer>
//           </>
//         ) : (
//           <div className={styles.navLinks}>
//             <Typography variant="body1">Home</Typography>
//             <Typography variant="body1">About</Typography>
//             <Typography variant="body1">Categories</Typography>
//             <Typography variant="body1">Contact</Typography>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Drawer, List, ListItem, ListItemText, Switch, useTheme, useMediaQuery, Grid2, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from './Header.module.css';
import { Language } from '@mui/icons-material';

const Header = ({ toggleTheme, darkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleScroll = () => {
    setScrolled(window.scrollY > 50); // Update scrolled state based on scroll position
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  console.log(theme)
  // useEffect(() => {
  //   document.body.classList.toggle('dark', darkMode);
  // }, [darkMode]);

  // useEffect(() => {
  //   // Set initial theme class on body
  //   document.body.classList.add(darkMode ? 'dark' : 'light');
  // }, [darkMode]);

  return (
    <header
      // position="fixed"
      className={`${styles.headerDesign} ${!scrolled ? styles.scrolled : ''} ${!darkMode && styles.dark}`}

    // elevation={scrolled ? 4 : 0}
    >
      <Container maxWidth="xl">
        <Toolbar className={styles.toolbar} >
          <Typography variant="h6" className={styles.logo}>
            <Language />
            News Aggregator
          </Typography>

          {isMobile && (
            <div className={styles.switchContainer}>
                {/* <Typography variant="body2">{darkMode ? 'Dark' : 'Light'} Mode</Typography> */}
                {/* <Switch checked={darkMode} onChange={toggleTheme} /> */}
                <label className={styles.switchMode}>
                  <input id="input" type="checkbox" checked={!darkMode} onChange={toggleTheme} className={styles.inputCheckMode} />
                  <div className={`${styles.sliderMode} ${styles.round}`}>
                    <div className={styles["sun-moon"]}>
                      <svg id={styles["moon-dot-1"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["moon-dot-2"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["moon-dot-3"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-1"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-2"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-3"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>

                      <svg id={styles["cloud-1"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-2"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-3"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-4"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-5"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-6"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                    </div>
                    <div className={styles.stars}>
                      <svg id={styles["star-1"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-2"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-3"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-4"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
            </div>
          )}
          {isMobile ? (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>
                <div className={styles.drawer}>
                  <IconButton onClick={toggleDrawer} className={styles.closeButton}>
                    <CloseIcon />
                  </IconButton>
                  <List>
                    {/* <ListItem button>
                      <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Categories" />
                    </ListItem>
                    <ListItem button>
                      <ListItemText primary="Contact" />
                    </ListItem> */}
                  </List>
                </div>
              </Drawer>
            </>
          ) : (
            <div className={`${styles.navLinks} ${styles.colorChange} `}>
              {/* <Typography variant="h6">Home</Typography>
               <Typography variant="h6">About</Typography>
              <Typography variant="h6">Categories</Typography>
              <Typography variant="h6">Contact</Typography> */}
              <div className={styles.switchContainer}>
                <label className={styles.switchMode}>
                  <input id="input" type="checkbox" checked={!darkMode} onChange={toggleTheme} className={styles.inputCheckMode} />
                  <div className={`${styles.sliderMode} ${styles.round}`}>
                    <div className={styles["sun-moon"]}>
                      <svg id={styles["moon-dot-1"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["moon-dot-2"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["moon-dot-3"]} className={styles["moon-dot"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-1"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-2"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["light-ray-3"]} className={styles["light-ray"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>

                      <svg id={styles["cloud-1"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-2"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-3"]} className={styles["cloud-dark"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-4"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-5"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                      <svg id={styles["cloud-6"]} className={styles["cloud-light"]} viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="50"></circle>
                      </svg>
                    </div>
                    <div className={styles.stars}>
                      <svg id={styles["star-1"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-2"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-3"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                      <svg id={styles["star-4"]} className={styles.star} viewBox="0 0 20 20">
                        <path
                          d="M 0 10 C 10 10,10 10 ,0 10 C 10 10 , 10 10 , 10 20 C 10 10 , 10 10 , 20 10 C 10 10 , 10 10 , 10 0 C 10 10,10 10 ,0 10 Z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </label>
                {/* </Grid2 >
              </Grid2 > */}
              </div>
            </div>
          )}
        </Toolbar>
      </Container>
    </header>
  );
};

export default Header;
