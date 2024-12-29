import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';
import styles from '../../../style/home.module.css';
import LanguageIcon from '@mui/icons-material/Language';

const ArticleCard = ({ article, news }) => {
    return (
        <Card sx={{ minWidth: 250, width: '100%', maxWidth: 500, marginBottom: 2,  }} className={styles.masonryItem} >
            {article.urlToImage ? (
                <CardMedia
                    component="img"
                    height="240"
                    image={article.urlToImage}
                    alt={article.title}
                    style={{
                        borderRadius: '12px', padding: '0.5rem',
                        //  objectFit: 'contain'
                    }}
                />
            )
                :
                <CardMedia
                    component="img"
                    height="240"
                    image={news === "guardianApi" ? "/the guardian brand.jpg" : "new-york-times-nyt-front-page.jpg"}
                    alt={article.title}
                    style={{
                        borderRadius: '12px', padding: '0.5rem',
                        //  objectFit: 'contain'
                    }}
                />
            }
            <CardContent className={styles.CardContent}>
                <Typography variant="h6" component="div" className={styles.titleText}>
                    {article.title ?? article.webTitle ?? article.headline.main}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {article.description ?? article.lead_paragraph}
                </Typography>
                <Typography variant="caption" color="text.secondary" style={{fontSize: '0.9rem', display: 'flex', alignItems: 'center',  justifyContent:'start', marginTop: '0.5rem' }}>
                    {article.author || article.sectionName || article.byline?.original|| 'Unknown Author'} |{' '}
                    {new Date(article.publishedAt ?? article.webPublicationDate ?? article?.pub_date).toLocaleDateString()}
                </Typography>
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
                <Button size="small" href={article.url ?? article.webUrl} target="_blank" style={{ position: 'static' }}>
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default ArticleCard;
