import React from 'react';
import { useState, useEffect } from 'react';
import { fetchPopularMoviesByDay } from '../services/moviesApiService';
import { loadingStateStatus } from '../utils/loadingStateStatus';
import MovieGallery from '../../src/components/MovieGallery/MovieGallery'
import Loader from '../components/Loader/Loader'
import ErrorNotification from '../components/ErrorNotification/ErrorNotification'


import Container from "@material-ui/core/Container";

export default function HomePage() {
    const [loadStatus, setLoadStatus] = useState(loadingStateStatus.IDLE);
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoadStatus(loadingStateStatus.PENDING);

        fetchPopularMoviesByDay(pageNumber).then((movies) => {
            setMovies(movies.results);
            setLoadStatus(loadingStateStatus.RESOLVED);
        });
    }, [pageNumber]);

    const onNextPageClick = () => {
        setPageNumber(pageNumber + 1);
    };
    return (
        <>
        </>
    )
}