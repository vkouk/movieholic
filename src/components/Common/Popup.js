import React from 'react';
import ReactDOM from 'react-dom';

const popupRoot = document.getElementById('popup-root');

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    popupRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    popupRoot.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Popup;