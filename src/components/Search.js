import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { setSearchOptions } from "../actions/searchActions";


const Search = () => {

    let history = useHistory();

    // using the dispatch for actions
    const dispatch = useDispatch();

    // using the state for forms
    const [inputValue, setInputValue] = useState('');
    const [radioValue, setRadioValue] = useState('');
    const [errMsg, setErrMsg] = useState('');

    // film name onChange event
    const handleInput = (e) => {
        setInputValue(e.target.value);
    }

    // film type onChange event
    const handleRadio = (e) => {
        setRadioValue(e.target.value);
    }

    // form button onClick event
    const searchForm = () => {
        // validation input
        if (inputValue.trim().length > 1) {
            setErrMsg('');

            dispatch(setSearchOptions({
                name: inputValue,
                type: radioValue ? radioValue : ""
            }));

            history.push(`/movies?q=${inputValue}`);
        }
        else {
            // display error message
            setErrMsg('Lütfen bir film adı giriniz.');
        }
    }

    return (
        <div className="search">
            <h1 className="search-head">Arama</h1>
            <div className="search-list">
                <div className="search-list-item">
                    <h4>Film adı</h4>
                    <input type="text" onChange={handleInput} value={inputValue} className="form-control text-search" placeholder="Joker" />
                </div>
                <div className="search-list-item">
                    <h4>Film türü</h4>
                    <div className="type">
                        <input type="radio" onChange={handleRadio} value="movie" name="filmtype" id="movieType" className="form-control" />
                        <label htmlFor="movieType">Movie</label>
                    </div>
                    <div className="type">
                        <input type="radio" onChange={handleRadio} value="series" name="filmtype" id="seriesType" className="form-control" />
                        <label htmlFor="seriesType">Series</label>
                    </div>
                </div>
                <div className="search-list-item error-msg">{errMsg}</div>
                <button onClick={searchForm}>Arama</button>
            </div>
        </div>
    );
}

export default Search;