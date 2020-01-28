import React from 'react';
import { Link } from "react-router-dom";


const Card = (props) => {
    const { detail } = props;
    return (
        <div className="col-md-4 col-sm-6">
            <Link to="/movie" className="movie-card">
                <figure className="figure">
                    <div className="img-wrap">
                        <span className="type"> {detail.Type}</span>
                        <span className="bg" style={{ backgroundImage: `url(${detail.Poster})` }}></span>
                    </div>
                </figure>
                <div className="card-body">
                    <h5 className="card-title">{detail.Title}</h5>
                    <div className="card-text">
                        <div className="item"><strong>Yıl:</strong> {detail.Year}</div>
                        <div className="item"><strong>Tür:</strong> {detail.Type}</div>
                        <div className="item"><strong>Oyuncular:</strong> Joaquin Phoenix, Robert De Niro, Zazie Beetz, Frances Conroy</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;