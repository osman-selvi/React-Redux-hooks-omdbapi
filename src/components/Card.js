import React from 'react';
import { Link } from "react-router-dom";

import noImage from './../styles/image/no-image.png'

const Card = (props) => {
    const { detail } = props;

    //no image
    const poster = detail.Poster !== 'N/A' ? detail.Poster : noImage;

    return (
        <div className="col-md-4 col-sm-6">
            <Link to="/movie" className="movie-card">
                <figure className="figure">
                    <div className="img-wrap">
                        <span className="type"> {detail.Type}</span>
                        <span className="bg" style={{ backgroundImage: `url(${poster})` }}></span>
                    </div>
                </figure>
                <div className="card-body">
                    <h5 className="card-title">{detail.Title}</h5>
                    <div className="card-text">
                        <div className="item"><strong>Yıl:</strong> {detail.Year}</div>
                        <div className="item"><strong>Tür:</strong> {detail.Type}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Card;