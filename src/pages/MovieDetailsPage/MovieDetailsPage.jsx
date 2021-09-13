import { useState, useEffect, Suspense, lazy } from "react";
import { Router, useParams } from "react-router";
import { NavLink, useRouteMatch, useLocation, link } from "react-router-dom";

import Container from "@material-ui/core/Container";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { fetchMoviesById } from "../../services/moviesApiService";
import { loadingStateStatus } from "../../utils/loadingStateStatus";
import Loader from "../../components/Loader/Loader";
import MovieDetails from '../../components/MovieDetails/MovieDetails'

const Reviews = lazy(() =>
    import('../../components/Reviews/Reviews')
);
const Cast = lazy(() =>
    import ('../../components/Cast/Cast')
)