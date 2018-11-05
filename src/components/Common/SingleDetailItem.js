import React from 'react';

export default ({ genre, poster, released, stock, title, onButtonClick }) => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-sm-6">
                    <article className="bg-white center mw5 ba b--black-10 mv4">
                        <div className="pv2 ph3">
                            <h1 className="f6 ttu tracked">{genre}</h1>
                        </div>
                        <img src={poster} className="w-100 db" alt={title} />
                        <div className="pa3">
                            <button className={ stock <= 0 ? 'is-disabled' : null } onClick={onButtonClick}><span>{title}</span></button>
                            <small className="gray db pv2">Released {released} - {stock} left in stock</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};