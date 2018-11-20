import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

class Popup extends Component {
    render() {
        const { poster, title, plot, writer, stock, released, addToCart, onClose } = this.props;

        return ReactDOM.createPortal(
            <div className='popup'>
                <div className='popup__row'>
                    <div className="popup__container">
                        <div className="popup__header">
                            <div onClick={onClose}><FontAwesomeIcon icon={faTimes} className="fa-lg popup__icon" /></div>
                        </div>
                        <div className="popup__content">
                            <div className="popup__aside">
                                <div className="popup__thumbnail">
                                    <img src={poster} alt={title} />
                                </div>
                                <div className="popup__title">{title}</div>
                            </div>
                            <div className="popup__details">
                                <div onClick={addToCart} className={stock <= 0 ? 'is-disabled' : null}>
                                    Add to cart: <FontAwesomeIcon icon={faCartPlus} className="fa-lg popup__icon" />
                                </div>
                                <div className="popup__text">Plot: {plot}</div>
                                <div className="popup__text">Writer: {writer}</div>
                                <small>Released: {released}</small>
                            </div>
                        </div>
                        {this.props.error &&
                            <div className="popup__footer">
                                <div className="popup__error">{this.props.error}</div>
                            </div>
                        }
                    </div>
                </div>
            </div>,
            document.getElementById('popup-root')
        );
    }
}

export default Popup;