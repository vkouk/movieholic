import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default ({ _id, title, poster, genre, onSerieCartRemove }) => {
    return (
        <div className="col-sm-12 cart__item">
            <article className="link dt w-100 bb b--black-10 pb2 mt2 blue">
                <Link to={`/serie/${title}`} className="dim" href="#0">
                    <div className="dtc w3">
                        <img src={poster} className="db w-100" alt={title} />
                    </div>
                </Link>
                <div className="dtc v-top pl2">
                    <Link to={`/serie/${title}`} href="#0"><h1 className="f6 f5-ns fw6 lh-title black mv0">{title}</h1></Link>
                    <h2 className="f6 fw4 mt2 mb0 black-60">{genre}</h2>
                    <div className="f6 fw4 mt2 mb0 black-60" onClick={ e => onSerieCartRemove(e, _id) }>Remove from cart <FontAwesomeIcon icon={faTrash} /></div>
                    <dl className="mt2 f6">
                        <dt className="clip">Price</dt>
                        <dd className="ml0">$75.00</dd>
                    </dl>
                </div>
            </article>
        </div>
    );
};