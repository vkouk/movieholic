import React, { Component } from "react";
import { connect } from "react-redux";
import Popup from "./Popup";
import { addToCart } from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartPlus } from "@fortawesome/free-solid-svg-icons";
import _ from "lodash";

class Item extends Component {
  state = {
    popupOpen: false,
    product: {
      _id: this.props._id,
      title: this.props.title,
      genre: this.props.genre,
      writer: this.props.writer,
      released: this.props.released,
      rating: this.props.rating,
      poster: this.props.poster,
      plot: this.props.plot
    },
    error: ""
  };

  onPopupToggle = () => {
    this.setState(prevState => ({
      popupOpen: !prevState.popupOpen,
      error: ""
    }));
  };

  onButtonClick = () => {
    const dataType = this.props.location.slice(1, -1);

    if (dataType === "movie") {
      const duplicatedMovies = () =>
        this.props.cart.movie
          ? this.props.cart.movie.some(
              movie => movie._id === this.state.product._id
            )
          : false;

      if (
        !_.isEmpty(this.props.cart.movie) &&
        Object.keys(this.props.cart.movie).length >= 1
      ) {
        if (duplicatedMovies()) {
          return this.setState({
            error: `Movie, ${this.state.product.title} already exists in cart!`
          });
        }

        this.props.addToCart({
          ...this.props.cart,
          movie: [this.state.product, ...this.props.cart.movie]
        });
      } else {
        this.props.addToCart({
          ...this.props.cart,
          movie: [this.state.product]
        });
      }
    } else {
      const duplicatedSeries = () =>
        this.props.cart.serie
          ? this.props.cart.serie.some(
              serie => serie._id === this.state.product._id
            )
          : false;

      if (
        !_.isEmpty(this.props.cart.serie) &&
        Object.keys(this.props.cart.serie).length >= 1
      ) {
        if (duplicatedSeries()) {
          return this.setState({
            error: `Serie, ${this.state.product.title} already exists in cart!`
          });
        }

        this.props.addToCart({
          ...this.props.cart,
          serie: [this.state.product, ...this.props.cart.serie]
        });
      } else {
        this.props.addToCart({
          ...this.props.cart,
          serie: [this.state.product]
        });
      }
    }

    if (!this.props.isCartVisible) {
      this.props.onCartToggle();
    }
  };

  onAddToCart = e => {
    e.preventDefault();

    this.onButtonClick();
  };

  render() {
    return (
      <div
        className={`${
          this.props.isHeaderVisible
            ? "list__col list__col--small"
            : "list__col"
        }`}
      >
        <div onClick={this.onPopupToggle}>
          <div className="list__item">
            <img
              src={
                this.props.poster !== "N/A"
                  ? this.props.poster
                  : "https://developers.google.com/maps/documentation/streetview/images/error-image-generic.png"
              }
              className="w-100 list__item__img"
              alt={this.props.title}
            />
            <div className="list__item__content">
              <div className="list__item__text">{this.props.title}</div>
              <small className="list__item__subtext list__item__subtext--borderless">
                {this.props.genre}
              </small>
              <div className="list__item__subcontent">
                <small className="list__item__subtext">
                  {this.props.stock} left in stock
                </small>
                <FontAwesomeIcon
                  icon={faStar}
                  className="fa-md list__item__icon"
                />{" "}
                <div className="list__item__text list__item__text--small">
                  {typeof this.props.rating === "undefined" ||
                  this.props.rating === null ||
                  this.props.rating === "N/A"
                    ? "N/A"
                    : this.props.rating}
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.popupOpen && (
          <Popup
            {...this.props}
            onClose={this.onPopupToggle}
            type={
              this.props.location === "/"
                ? "home"
                : this.props.location.slice(1, -1)
            }
            error={this.state.error}
          >
            <div className="popup__aside">
              <div className="popup__thumbnail">
                <img src={this.props.poster} alt={this.props.title} />
              </div>
              <div className="popup__title">{this.props.title}</div>
            </div>
            <div className="popup__details">
              <div className="popup__text">Plot: {this.props.plot}</div>
              <div className="popup__text">Writer: {this.props.writer}</div>
              <small>Released: {this.props.released}</small>
              <div
                onClick={this.onAddToCart}
                className={`${this.props.stock <= 0 ? "is-disabled" : null} ${
                  this.props.location === "/" ? "is-hidden" : null
                }`}
              >
                Add to cart:{" "}
                <FontAwesomeIcon
                  icon={faCartPlus}
                  className="fa-lg popup__icon"
                />
              </div>
            </div>
          </Popup>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ rent }) => {
  const { cart } = rent;

  return { cart };
};

export default connect(
  mapStateToProps,
  { addToCart }
)(Item);
