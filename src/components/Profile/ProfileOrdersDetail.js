import React, { Component } from "react";
import PrivateRoute from "../Common/PrivateRoute";
import { connect } from "react-redux";
import { getRent } from "../../actions";
import { returnRentProductCost } from "../../utils/Helpers";

class ProfileOrdersDetail extends Component {
  componentDidMount() {
    this.props.getRent(this.props.orderId);
  }

  render() {
    return (
      <div className="list__table">
        <div className="list__row">
          <div className="col-sm-6">
            <ul className="list pl0 mt0 measure center">
              {this.props.order.movies &&
              this.props.order.movies.length >= 1 ? (
                this.props.order.movies.map(movie => {
                  return (
                    <li
                      key={movie._id}
                      className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
                    >
                      <img
                        className="w3 h3 w3-ns h3-ns br-100"
                        src={movie.poster}
                        alt={movie.title}
                      />
                      <div className="pl3 flex-auto">
                        <span className="f6 db black-70 title">
                          {movie.title}
                        </span>
                        <span className="f6 db black-70 genre">
                          {movie.genre}
                        </span>
                      </div>
                      <div>
                        <span className="f6 link blue price">
                          Price:{" "}
                          {movie.rating
                            ? returnRentProductCost(
                                movie.rating,
                                this.props.order.dateOrdered
                              )
                            : 0}
                        </span>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                  <span className="b f3">No movies rented.</span>
                </li>
              )}
            </ul>
          </div>
          <div className="col-sm-6">
            <ul className="list pl0 mt0 measure center">
              {this.props.order.series &&
              this.props.order.series.length >= 1 ? (
                this.props.order.series.map(serie => {
                  return (
                    <li
                      key={serie._id}
                      className="flex items-center lh-copy pa3 ph0-l bb b--black-10"
                    >
                      <img
                        className="w3 h3 w3-ns h3-ns br-100"
                        src={serie.poster}
                        alt={serie.title}
                      />
                      <div className="pl3 flex-auto">
                        <span className="f6 db black-70 title">
                          {serie.title}
                        </span>
                        <span className="f6 db black-70 genre">
                          {serie.genre}
                        </span>
                      </div>
                      <div>
                        <span className="f6 link blue price">
                          Price:{" "}
                          {serie.rating
                            ? returnRentProductCost(
                                serie.rating,
                                this.props.order.dateOrdered
                              )
                            : 0}
                        </span>
                      </div>
                    </li>
                  );
                })
              ) : (
                <li className="flex items-center lh-copy pa3 ph0-l bb b--black-10">
                  <span className="b f3">No series rented.</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ rent }) => {
  const { order } = rent;

  return { order };
};

export default PrivateRoute(
  connect(
    mapStateToProps,
    { getRent }
  )(ProfileOrdersDetail)
);
