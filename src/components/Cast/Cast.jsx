import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { fetchMoviesByCast } from "../../services/moviesApiService";
import { loadingStatus } from "../../utils/loadingStateStatusConstants";
import Loader from "../../components/Loader/Loader";
import CastList from "../CastList/CastList";

export default function Cast() {
  const [loadStatus, setLoadStatus] = useState(loadingStatus.IDLE);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setLoadStatus(loadingStatus.PENDING);

    fetchMoviesByCast(movieId).then((response) => {
      setCast(response.cast);

      setLoadStatus(loadingStatus.RESOLVED);
    });
  }, [movieId]);

  return (
    <>
      {loadStatus === loadingStatus.PENDING && <Loader />}
      {loadStatus === loadingStatus.RESOLVED && <CastList castData={cast} />}
      {loadStatus === loadingStatus.REJECTED && <h2>Something wrong ...</h2>}
    </>
  );
}
