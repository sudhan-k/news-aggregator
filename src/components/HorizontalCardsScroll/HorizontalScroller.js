import React, { useEffect, useRef, useState } from 'react';
import styles from './HorizontalScroller.module.css';
import { fetchNEWSApiNewsTrending } from '../../utils/Api/newsApi';
import { Box, Skeleton, Typography } from '@mui/material';
import { ArrowLeftSharp, ArrowRightSharp } from '@mui/icons-material';
import { enqueueSnackbar } from 'notistack';

const HorizontalScroller = ({ fetchApiData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollerRef = useRef(null);
  const timerRef = useRef(null);
  const [stopScroll, setStopScroll] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);

  // Fetch data from the API
  const fetchData = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const newData = await fetchNEWSApiNewsTrending();
      // setData((prevData) => [...prevData, ...newData?.data?.articles]);
      setData(newData?.data?.articles);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
      enqueueSnackbar(error?.response?.data?.message ?? "Somthing went wrong", { variant: 'error' });

    } finally {
      // setLoading(false);
    }
  };


  // Auto-scroll every 10 seconds
  // const autoScroll = () => {
  //   if (scrollerRef.current) {
  //     const scrollAmount = scrollerRef.current.offsetWidth; // Scroll by one card width
  //     scrollerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  //   }
  // };

  // Check if the scroller is at the beginning or end
  const checkScrollLimits = () => {
    if (scrollerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollerRef.current;
      console.log(scrollLeft, scrollWidth, clientWidth, scrollLeft <= (0 || 50));
      setDisableLeft(scrollLeft <= (0 || 50));
      setDisableRight(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  // Scroll by one card width
  const scrollByOneCard = (direction) => {
    if (scrollerRef.current) {
      const cardWidth = scrollerRef.current.firstChild?.offsetWidth;
      scrollerRef.current.scrollBy({
        left: direction === 'right' ? cardWidth : -cardWidth,
        behavior: 'smooth',
      });
      checkScrollLimits();
    }
  };

  // Auto-scroll every 10 seconds
  const autoScroll = () => {
    if (stopScroll) return;
    if (scrollerRef.current) {
      const scrollAmount = scrollerRef.current.offsetWidth; // Scroll by the container's width
      // scrollerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      scrollByOneCard('right');
      // If at the end, scroll back to the start
      if (
        scrollerRef.current.scrollLeft + scrollerRef.current.clientWidth >=
        scrollerRef.current.scrollWidth - 1
      ) {
        setTimeout(() => {
          scrollerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }, 1000); // Delay for smooth effect
      }
    }
  };



  // Infinite scroll handler
  const handleScroll = () => {
    if (
      scrollerRef.current.scrollLeft + scrollerRef.current.clientWidth >=
      scrollerRef.current.scrollWidth - 50
    ) {
      fetchData();
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch
  }, []);

  // Set up auto-scroll
  useEffect(() => {
    if (!stopScroll) {

      timerRef.current = setInterval(autoScroll, 10000);
      return () => clearInterval(timerRef.current); // Cleanup timer
    }
  }, [stopScroll]);


  return (
    <>
      <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} p={0}>
        <Typography variant="h6" component="h2" className={styles.titleHeader}>
          Trending News
        </Typography>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <button
            disabled={(loading || disableLeft)}
            className={styles.scrollButton}
            onClick={() => scrollByOneCard('left')}
          >
            <ArrowLeftSharp style={{ fontSize: '1rem' }} className={styles.icon} />
          </button>
          <button
            disabled={(loading || disableRight || data.length <= 0)}
            className={styles.scrollButton}
            onClick={() => scrollByOneCard('right')}
          >
            <ArrowRightSharp style={{ fontSize: '1rem' }} className={styles.icon} />
          </button>
        </Box>
      </Box>
      <div
        className={styles["horizontal-scroller"]}
        ref={scrollerRef}
        // onMouseDown={startDrag}
        // onMouseMove={onDrag}
        // onMouseUp={stopDrag}
        // onMouseLeave={stopDrag}
        // onTouchStart={startDrag}
        // onTouchMove={onDrag}
        // onTouchEnd={stopDrag}
        // onScroll={handleScroll}
        onMouseEnter={() => setStopScroll(true)}
        onMouseLeave={() => setStopScroll(false)}
      >
        {!loading ?
          data.length > 0 &&
          [...data].map((item, index) => (
            <>
              {(item?.title !== "[Removed]" && item?.urlToImage) &&
                <div className={styles.card} key={index}>
                  <img
                    component="img"
                    height="200px"
                    width={'100%'}
                    src={item.urlToImage}
                    alt={item.title}
                    style={{
                      borderRadius: '12px', padding: '0.5rem',
                      //  objectFit: 'contain'
                    }}

                  />
                  <h3 className={styles.titleCard}>{item.title}</h3>
                  <Box className={styles.cardOverlay}>
                    <p className={styles.descriptionCard}>{item.description}</p>
                    <button
                      className={styles.readMoreButton}
                      onClick={() => window.open(item.url, "_blank")}
                    >
                      Read More
                    </button>
                  </Box>
                </div>
              }
            </>

          ))
          :
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <>
              <div className={styles.card} key={index}>
                <Box p={'0.5rem'}>
                  <Skeleton variant="rounded" width={'100%'} height={200} />
                </Box>
                <Box p={'0.5rem'} pt={1} display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                  <Skeleton variant="text" width={'100%'} />
                  <Skeleton variant="text" width={'100%'} />
                  <Skeleton variant="text" width={'50%'} />
                </Box>
              </div>
            </>

          ))
        }
      </div>
      {(data.length <= 0 && !loading) &&
        <Typography variant="h6" component="h2" style={{ textAlign: 'center', marginTop: 20 }}>
          No News Found
        </Typography>
      }
    </>
  );
};

export default HorizontalScroller;
