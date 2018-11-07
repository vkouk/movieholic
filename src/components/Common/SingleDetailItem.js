import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

export default ({ genre, poster, released, stock, title, writer, onButtonClick }) => {
    return (
        <div className='container p-5'>
            <div className='row'>
                <div className="col-sm-4">
                    <img src={poster} className="w-100 db" alt={title} />
                </div>
                <div className="col-sm-8">
                    <article className="bg-white center mw5 ba bw2 b--black-10 mv4">
                        <div className="pv2 ph3">
                            <h1 className="f6 ttu tracked">Title: {title}</h1>
                            <h1 className="f6 ttu tracked">Genre: {genre}</h1>
                            <h1 className="f6 ttu tracked">Writer: {writer}</h1>
                        </div>
                        <div className="pa3">
                            <div onClick={onButtonClick} className={stock <= 0 ? 'is-disabled' : null}>
                                Add to cart: <FontAwesomeIcon icon={faCartPlus} className="fa-lg pointer dark-blue" />
                            </div>
                            <small className="gray db pv2">Released {released} - {stock} left in stock</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};