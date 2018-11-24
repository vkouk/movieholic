import React from 'react';
import { returnRentProductCost } from '../../utils/Helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default ({ _id, title, poster, genre, rating, onMovieCartRemove }) => {
    return (
        <div className="col-sm-12 cart__item">
            <div className="link w-100 bb b--black-10 pb2 mt2 blue">
                <div className="dim">
                    <div className="dtc w3">
                        <img src={poster} className="db w-100" alt={title} />
                    </div>
                </div>
                <div className="dtc v-top pl2">
                    <h1 className="f6 f5-ns fw6 lh-title black mv0">{title}</h1>
                    <h2 className="f6 fw4 mt2 mb0 black-60">{genre}</h2>
                    <h2 className="f6 fw4 mt2 mb0 black-60">Price per day: {returnRentProductCost(rating, new Date())}€</h2>
                    <div className="f6 fw4 mt2 mb0 black-60" onClick={e => onMovieCartRemove(e, _id)}>Remove from cart <FontAwesomeIcon icon={faTrash} /></div>
                </div>
            </div>
        </div>
    );
};