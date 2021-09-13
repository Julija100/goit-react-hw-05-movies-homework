import { Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';

const HomePage = lazy(() =>
  import('./pages/HomePage')
);

const MoviesPage = lazy(() =>
  import('./pages/MoviesPage/MoviesPage')
);

// const MovieDetailsPage = lazy(() =>
//   import ''
// )


 export default function App() {
  return (
    <>
      <Header/>
      </>
  );
}


