import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_URL_IMG } from '../../services/moviesApi';


export default function MoviesGallery({ movies, url }) {
    const location = useLocation();

    return (
        <div>
            {movies.map(({ id, poster_path, title }) => (
                <Link
                    to={{
                        pathname: `${url}/${id}`,
                        state: {from: location },
                    }}
                ></Link>
            )
)}
        </div>
    )
}