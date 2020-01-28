import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPageNumber } from "../actions/filmActions";



const Pagination = () => {

    const dispatch = useDispatch();

    const films = useSelector(state => state.films);

    // total Page Count
    var totalPageCount = films.totalCount / films.pageSize;

    const nextPageNumber = () => {
        dispatch(setPageNumber(films.currentPage + 1));
    }
    const prevPageNumber = () => {
        dispatch(setPageNumber(films.currentPage - 1));
    }
    const setPage = (number) => {
        dispatch(setPageNumber(number));
    }
    const renderPagination = () => {
        const render = [];
        for (let index = 1; index <= totalPageCount; index++) {
            render.push((<li key={index}><button onClick={() => setPage(index)}>{index}</button></li>))
        }
        return render;
    }


    return (
        <div className="col-md-12 pagination d-flex justify-content-center">
            {
                films.currentPage > 1 ? (<button className="btn-np" onClick={() => prevPageNumber()}>Geri</button>) : (null)
            }
            <ul className="numbers">
                {renderPagination()}
            </ul>
            {
                films.currentPage + 1 < totalPageCount ? (<button className="btn-np" onClick={() => nextPageNumber()}>İleri</button>) : (null)
            }
        </div>
    );
}

export default Pagination;
