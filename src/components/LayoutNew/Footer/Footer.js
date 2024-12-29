import React, { useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = (darkMode) => {

  
    useEffect(() => {
      // Set initial theme class on body
      document.body.classList.add(darkMode && 'dark' );
    }, [darkMode]);

  return (
    <footer className={styles.footer}>
      <p>&copy; 2024 News Aggregator. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
