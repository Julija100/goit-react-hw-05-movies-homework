import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { BASE_URL_IMG } from '../../services/moviesApi';


export default function MoviesGallery ({ movies, url })