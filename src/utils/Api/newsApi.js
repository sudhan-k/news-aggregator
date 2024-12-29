import axios from 'axios';
import { GUARDIANNEWSAPI_API_KEY, GUARDIANNEWSAPI_BASEURL, NEWSAPI_API_KEY, NEWSAPI_BASEURL, NYTAPI_API_KEY, NYTAPI_BASE_URL } from '../../environment';
import { GET_GARDIAN_NEWS_API_SOURCES, GET_NEWS_API, GET_NEWS_API_TRENDING, GET_NYT_NEWS_API_SOURCES } from '../endpoints';
import instance from '../instance';

const BASE_URL = NEWSAPI_BASEURL;
const API_KEY = NEWSAPI_API_KEY;

export const fetchNEWSApiNewsTrending = async () => {
    const httpConfig1 = {
        method: "GET",
        tokenType: "user",
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            apiKey: API_KEY,
        }
    };

    try {
        const response = await instance(`${BASE_URL + GET_NEWS_API_TRENDING}`, httpConfig1);
        return response
    } catch (error) {
        throw error
    }
}


export const fetchNEWSApiNews = async (query, category, source, fromDate, toDate, language, sortBy, page, pageSize) => {
    const httpConfig1 = {
        method: "GET",
        tokenType: "user",
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            language: 'en',
             q: query , 
           
             from: fromDate ,
             to: toDate ,
             ...(sortBy && { sortBy }),
            // ...(language && { language }),
            ...(category && { category }),
            ...(source && { sources: source }),
            page: page,
            pageSize: pageSize,
            apiKey: API_KEY,
        }
    };

    try {
        const response = await instance(`${BASE_URL + GET_NEWS_API}`, httpConfig1);
        return response
    } catch (error) {
        throw error
    }
}








export const fetchGuardianNEWSApiNewsSources = async (query, category, source, fromDate, toDate, language, sortBy, page, pageSize) => {
    const httpConfig1 = {
        method: "GET",
        tokenType: "user",
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            q: query , 
            ...( fromDate && {["from-date"]: fromDate}) ,
            ...( toDate && {to: toDate }) ,
            // ...(sortBy && {sortBy: sortBy }),
           // ...(language && { language }),
           ...(category && { category: category }),
           ...(source && { sources: source }),
           page: page,
           pageSize: pageSize,
            ["api-key"]: GUARDIANNEWSAPI_API_KEY,
        }
    };

    try {
        const response = await instance(`${GUARDIANNEWSAPI_BASEURL + GET_GARDIAN_NEWS_API_SOURCES }`, httpConfig1);
        return response
    } catch (error) {
        throw error
    }
}




export const fetchNYTNEWSApiNewsSources = async (query, category, source, fromDate, toDate, language, sortBy, page, pageSize) => {
    const httpConfig1 = {
        method: "GET",
        tokenType: "user",
        headers: {
            "Content-Type": "application/json",
        },
        params: {
            q: query , 
            ...( fromDate && {["begin_date"]: fromDate}) ,
            ...( toDate && {["end_date"]: toDate }) ,
            // ...(sortBy && {sortBy: sortBy }),
           // ...(language && { language }),
        //    ...(category && { category: category }),
        //    ...(source && { sources: source }),
        page: page,
        pageSize: pageSize,
            ["api-key"]: NYTAPI_API_KEY,
        }
    };

    try {
        const response = await instance(`${NYTAPI_BASE_URL + GET_NYT_NEWS_API_SOURCES }`, httpConfig1);
        return response
    } catch (error) {
        throw error
    }
}