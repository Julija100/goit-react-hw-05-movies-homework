import React from 'react';
import { useState, useEffect } from 'react';
import {
    fetchMoviesByName,
    fetchPopularMoviesByDay,
    fetchMoviesById,
    fetchMoviesByCast,
    fetchMoviesByReviews,
} from '../services/moviesApiService';
import { loadingStateStatus } from '../utils/loadingStateStatus';

export default function HomePage() {
    const [loadStatus, setLoadStatus] = useState(loadingStateStatus.IDLE);
    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);

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