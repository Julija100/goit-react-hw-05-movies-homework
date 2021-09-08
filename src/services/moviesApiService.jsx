import { BASE_URL, API_KEY } from "./moviesApi";

function responseStatusHandling(response) {
    if (response.ok) {
        return response.json();
    }
    throw new Error('Sorry, something happened! We are working on it!');
}

function fetchMoviesByName(movieName, pageNumber) {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${pageNumber}&language=en-US&include_adult=false&query=${movieName}`
    ).then(responseStatusHandling);
}

function fetch