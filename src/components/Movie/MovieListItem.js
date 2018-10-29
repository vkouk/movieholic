import React from 'react';

export default ({ genre, plot, poster, released, stock, title }) => {
    return (
        <div className="col-sm-3">
            <article className="bg-white center mw5 ba b--black-10 mv4">
                <div className="pv2 ph3">
                    <h1 className="f6 ttu tracked">{genre}</h1>
                </div>
                <img src={poster} className="w-100 db" alt={title} />
                <div className="pa3">
                    <a href="#" className="link dim lh-title">{title}</a>
                    <small className="gray db pv2">Released {released} - {stock} left in stock</small>
                </div>
            </article>
        </div>
    );
};