import React, { useEffect, useState } from "react";
import styles from '../style/home.module.css';
import HorizontalScroller from "../components/HorizontalCardsScroll/HorizontalScroller";
import { Box, Container, Typography } from "@mui/material";
import TypingText from "../components/TypeWriterStyle/TypeWriterAnimation";
import { Language } from "@mui/icons-material";
import LatestNews from "../components/LatestNews/LatestNews";

function Index() {


  return (
    <>
      <main style={{ padding: '80px 0px', minHeight: 'calc(100vh - 100px)' }}>
        <Container maxWidth="xl">
          <section>
            <div className={styles.containerImg}>
              <Language style={{ fontSize: '6rem' }} className={styles["animated-icon"]} />
              <h1 className={styles.containerTitle}>Welcome to the News Aggregator</h1>
              <TypingText typingSpeed={50} pauseTime={2000} />
            </div>
          </section>
          {/* Trending News */}
          <section>
            <HorizontalScroller />
          </section>
          {/* Latest News */}
          <section>
            <LatestNews />
          </section>
        </Container>
      </main>

    </ >
  );
}

export default Index;
