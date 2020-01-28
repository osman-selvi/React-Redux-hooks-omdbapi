import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilms } from '../services/filmService';
import { getFetched } from "../actions/filmActions";


// import Card
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const Films = () => {

    // using fetch
    const dispatch = useDispatch();

    // get states
    const search = useSelector(state => state.search);
    const films = useSelector(state => state.films);


    // fetch data
    useEffect(() => {
        if (!films.isLoaded) {
            getFilms(films.currentPage, search.filter)
                .then((res) => {
                    dispatch(getFetched(res));
                });
        }
    });


    return (
        <div className="list-content">
            {
                films.isLoaded ?
                    (<div className="row">
                        {
                            films.items.map(item => {
                                return (<Card key={item.imdbID} detail={item} />)
                            })
                        }
                        <Pagination />
                    </div>
                    ) :
                    (<span className="loading">yükleniyor</span>)
            }
        </div>
    );
}

export default Films;
