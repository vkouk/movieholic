import React, { Component } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class Popup extends Component {
  render() {
    const { onClose, children, type } = this.props;

    return ReactDOM.createPortal(
      <div className="popup">
        <div className="popup__row">
          <div className={`popup__container popup__${type}`}>
            <div className="popup__header">
              <div onClick={onClose}>
                <FontAwesomeIcon icon={faTimes} className="fa-lg popup__icon" />
              </div>
            </div>
            <div className="popup__content">{children}</div>
            {this.props.error && (
              <div className="popup__footer">
                <div className="popup__error">{this.props.error}</div>
              </div>
            )}
          </div>
        </div>
      </div>,
      document.getElementById("popup-root")
    );
  }
}

export default Popup;
