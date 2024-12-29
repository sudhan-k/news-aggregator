import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Skeleton } from '@mui/material';
import styles from '../../../style/home.module.css';
import LanguageIcon from '@mui/icons-material/Language';

const ArticleCardLoading =() => {
    return (
        <Card sx={{ minWidth: 250, width: '100%', maxWidth: 500, marginBottom: 2 }} className={styles.masonryItem}>

            <Skeleton variant='rounded' width={'100%'} height={240} />
            <CardContent className={styles.CardContent}>
                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'50%'} height={20} />

                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'100%'} height={20} />
                <Skeleton variant='text' width={'50%'} height={20} />

            </CardContent>
            <CardActions>
                <Skeleton variant='rounded' width={'100%'} height={30} />

            </CardActions>
        </Card>
    );
};

export default ArticleCardLoading
