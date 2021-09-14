import { useState } from 'react';
import PropTypes from 'prop-types';
import SearchButton from '../../components/SearchButton/SearchButton';

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
        <form onSubmit={onFormSubmit}>
            <div>
                <label>
                    <span>Search movie</span>
                    <input
                        type="text"
                        autoComplete='off'
                        autoFocus
                        placeholder='Enter movie'
                        value={inputValue}
                        onChange={onInputChange}
                    />
                </label>
                <SearchButton />
            </div>
        </form>
    );
}

MovieSearchForm.propTypes = {
    getFormData: PropTypes.func.isRequired,
};

export default MovieSearchForm;