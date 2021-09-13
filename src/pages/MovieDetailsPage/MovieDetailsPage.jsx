import { useState, useEffect, Suspense, lazy } from "react";
import { Route, useParams } from "react-router";
import { NavLink, useRouteMatch, useLocation, Link } from "react-router-dom";

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
    import('../../components/Cast/Cast')
);

export default function MovieDetailsPage() {
    const [loadStatus, setLoadStatus] = useState(loadingStateStatus.IDLE);
    const [movie, setMovie] = useState(null);
    let { movieId } = useParams();
    const { url, path } = useRouteMatch();
    const location = useLocation();
    const [prevLocation, serPrevLocation] = useState(
        location?.state?.from ?? '/'
    );
    useEffect(() => {
        setLoadStatus(loadingStateStatus.PENDING);

        fetchMoviesById(movieId).then((result) => {
            setMovie(result);
            setLoadStatus(loadingStateStatus.RESOLVED);
        });
    }, [movieId]);


    return (
      <section className="movieDetails">
        {loadStatus === loadingStateStatus.PENDING && <Loader />}
        {loadStatus === loadingStateStatus.RESOLVED && (
          <Container maxWidth={"md"}>
            <Link
              to={prevLocation}
            >
              <ArrowBackIosIcon />
              <span>Go back</span>
            </Link>
            <MovieDetails movie={movie} />
            <ul>
              <li>
                <NavLink
                  to={`${url}/cast`}
                >
                  Cast
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`${url}/reviews`}
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Route path={`${path}/cast`}>
                <Cast />
              </Route>
              <Route path={`${path}/reviews`}>
                <Reviews />
              </Route>
            </Suspense>
          </Container>
        )}
        {loadStatus === loadingStateStatus.REJECTED && <h2>Something wrong ...</h2>}
      </section>
    );
}