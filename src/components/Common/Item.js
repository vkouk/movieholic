import React from 'react';
import { Link } from 'react-router-dom';

export default ({ genre, plot, poster, released, stock, title, location }) => {
    return (
        <div className="col-sm-3">
            <article className="bg-white center mw5 ba b--black-10 mv4">
                <div className="pv2 ph3">
                    <h1 className="f6 ttu tracked">{genre}</h1>
                </div>
                <img src={poster !== 'N/A' ? poster : 'https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png'} className="w-100 db" alt={title} />
                <div className="pa3">
                    <Link href="#" to={ location === '/movies' ? `/movie/${title}` : `/serie/${title}` } className="link dim lh-title">{title}</Link>
                    <small className="gray db pv2">Released {released} - {stock} left in stock</small>
                </div>
            </article>
        </div>
    );
};