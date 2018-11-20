import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTimes } from '@fortawesome/free-solid-svg-icons';

class Popup extends Component {
    render() {
        const { title, genre, writer, stock, released, addToCart, onClose } = this.props;

        return ReactDOM.createPortal(
            <div className='popup'>
                <div className='popup__row'>
                    <div className="popup__container">
                        <div className="popup__header">
                            <div onClick={onClose}><FontAwesomeIcon icon={faTimes} className="fa-lg popup__icon" /></div>
                        </div>
                        <div className="popup__content">
                            <div onClick={addToCart} className={stock <= 0 ? 'is-disabled' : null}>
                                Add to cart: <FontAwesomeIcon icon={faCartPlus} className="fa-lg popup__icon" />
                            </div>
                            <small className="gray db pv2">Released {released} - {stock} left in stock</small>
                        </div>
                    </div>
                </div>
            </div>,
            document.getElementById('popup-root')
        );
    }
}

export default Popup;