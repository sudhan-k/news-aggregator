
import React, { useEffect, useState } from 'react';
import { alertClasses, Box, FormControl, InputLabel, MenuItem, Select, Typography, } from '@mui/material';
import styles from '../../style/home.module.css';
import { fetchGuardianNEWSApiNewsSources, fetchNEWSApiNews, fetchNEWSApiNewsTrending, fetchNYTNEWSApiNewsSources } from '../../utils/Api/newsApi';
import SearchBar from './Filter/SearchBar';
import FilterBar from './Filter/FilterBar';
import ArticleCard from './Cards/ArticalCard';
import ArticleCardLoading from './Cards/ArticleCardLoading';
import { enqueueSnackbar } from 'notistack';
import InfiniteScroll from 'react-infinite-scroll-component';

const LatestNews = ({ }) => {
    const [trendingArticles, setTrendingArticles] = useState([])
    const [news, setNews] = useState('NYTApi')
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('')
    const [category, setCategory] = useState('')
    const [source, setSource] = useState('')
    const [fromDate, setFromDate] = useState('');
    const [toDate, setToDate] = useState('');
    const [language, setLanguage] = useState('');
    const [sortBy, setSortBy] = useState('relevancy');
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const [hasMore, setHasMore] = useState(true);
    const [columnCount, setColumnCount] = useState(3);

    // Fetch data based on the selected news API
    const handleGetTrendingNewsData = async (newPage = 1) => {
        setLoading(true);
        try {
            let response;
            // Fetch data based on selected news API
            if (news === 'newsApi') {
                response = await fetchNEWSApiNews(query, category, source, fromDate, toDate, language, sortBy, newPage, pageSize);
            } else if (news === 'guardianApi') {
                response = await fetchGuardianNEWSApiNewsSources(query, category, source, fromDate, toDate, language, sortBy, newPage, pageSize);
            } else if (news === 'NYTApi') {
                response = await fetchNYTNEWSApiNewsSources(query, category, source, fromDate, toDate, language, sortBy, newPage, pageSize);
            }

            if (response?.status === 200 || response?.status === 'success') {
                const articles = news === 'NYTApi' ? response?.data?.response?.docs : response?.data?.articles || response?.data?.response?.results;
                setTrendingArticles((prev) => [...prev, ...articles]); // Append new articles
                setHasMore(articles.length > 0); // Check if more articles exist
                if (newPage == 1 ){
                    if (articles.length <= 4) {
                        setColumnCount(1); // Use 1 column if there are 2 or fewer articles
                    } else {
                        setColumnCount(3); // Use 3 columns otherwise
                    }
                }
            }
        } catch (err) {
            console.error(err);
            enqueueSnackbar(err?.response?.data?.message ?? 'Something went wrong', { variant: 'error' });
            setHasMore(false)
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        setTrendingArticles([]); // Reset articles on news API change
        handleGetTrendingNewsData(1);
        setPage(1);
    }, [news]);

    // Filter the data based on the filter options
    const handleFileter = () => {
        handleGetTrendingNewsData()
    }

    useEffect(() => {
        // Set a timer to debounce the function call 
        const timer = setTimeout(() => {
            if (query !== '') {
                setTrendingArticles([]); // Reset articles on news API change
                setPage(1);
                handleGetTrendingNewsData(1);
            }
        }, 1000); // 1-second delay 
        // Clear the timer if the query changes 
        return () => clearTimeout(timer);
    }, [query]);

    // Reset all the filters
    const handleResetData = () => {
        setQuery('')
        setCategory('')
        setSource('')
        setFromDate('')
        setToDate('')
        setLanguage('')
        setSortBy('popularity')
        setPage(1);
        setHasMore(true)

    }
    // Reset all the filters
    const handleReset = () => {
        handleResetData()
        handleGetTrendingNewsData(1)
    }

    // Fetch more data on scroll
    const fetchMoreData = () => {
        const nextPage = page + 1;
        setPage(nextPage);
        handleGetTrendingNewsData(nextPage);
    };

    return (
        <>
            <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6" component="h2" className={styles.titleHeader}>
                    Latest News
                </Typography>
                <Box>
                    {/* Category Selector */}
                    <InputLabel>Category</InputLabel>
                    <FormControl style={{ minWidth: 150 }}>
                        <Select onChange={(e) => {
                            setNews(e.target.value)

                            handleResetData()
                        }}
                            defaultValue="newsApi" >
                            <MenuItem value="newsApi">News</MenuItem>
                            <MenuItem value="guardianApi">Guardian News</MenuItem>
                            <MenuItem value="NYTApi"> New York Times </MenuItem>

                        </Select>
                    </FormControl>
                </Box>

            </Box>
            <Box>
                <SearchBar setQuery={setQuery} />
                <FilterBar
                    setCategory={setCategory}
                    setSource={setSource}
                    setFromDate={setFromDate}
                    setToDate={setToDate}
                    setLanguage={setLanguage}
                    setSortBy={setSortBy}
                    handleFileter={() => handleGetTrendingNewsData(1)}
                    handleReset={handleReset}
                    news={news}
                />

            </Box>
            <InfiniteScroll
                dataLength={trendingArticles.length} // Current data length
                next={fetchMoreData} // Function to fetch more data
                hasMore={hasMore} // Continue loading if true
                loader={<div className={styles.masonry}>{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => <ArticleCardLoading key={i} />)}</div>} // Loading indicator
                endMessage={
                    <Typography variant="h6" component="h2" style={{ textAlign: 'center', marginTop: 20 }}>
                        No more news to load.
                    </Typography>
                }
            >
                <div className={styles.masonry}
                // style={{ columnCount: columnCount, columnGap: '1rem' }}
                >
                    {trendingArticles.map((article, i) => (
                        ((article?.title !== "[Removed]" && article?.urlToImage) || news !== "newsApi") &&
                        <ArticleCard key={i} article={article} news={news} />
                    ))}
                </div>
            </InfiniteScroll>
        </>
    )
};

export default LatestNews;