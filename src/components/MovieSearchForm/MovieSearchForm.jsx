import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchButton from '../../components/SearchButton/SearchButton';
import style from "../MovieSearchForm/StyledMovieSearchForm.module.css";

function MovieSearchForm({ getFormData }) {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value.toLowerCase());
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        getFormData(inputValue.trim());

        setInputValue('');
    };
    return (
        <form className={style.form} onSubmit={onFormSubmit}>
            <div>
                <label>
                    <span className={style.searchMovie}>Search movie</span>
                    <input className={style.input}
                        type="text"
                        autoComplete='off'
                        autoFocus
                        placeholder='Enter movie'
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </label>
                <SearchButton/>
            </div>
        </form>
    );
}

MovieSearchForm.propTypes = {
    getFormData: PropTypes.func.isRequired,
};

export default MovieSearchForm;