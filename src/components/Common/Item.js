import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export default ({ poster, stock, title, rating, genre, location, isHeaderVisible }) => {
    return (
        <div className={`${isHeaderVisible ? 'list__col--small' : 'list__col'}`}>
            <Link href="#" to={location === '/movies' ? `/movie/${title}` : `/serie/${title}`}>
                <div className="list__item">
                    <img src={poster !== 'N/A' ? poster : 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png'} className="w-100 list__item__img" alt={title} />
                    <div className="list__item__content">
                        <div className="list__item__text">{title}</div>
                        <small className="list__item__subtext list__item__subtext--borderless">{genre}</small>
                        <div className="list__item__subcontent">
                            <small className="list__item__subtext">{stock} left in stock</small>
                            <FontAwesomeIcon icon={faStar} className="fa-md list__item__icon" />  <div className="list__item__text list__item__text--small">{typeof rating === 'undefined' || rating === null || rating === 'N/A' ? 'N/A' : rating}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};