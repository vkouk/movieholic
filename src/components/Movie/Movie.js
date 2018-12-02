import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchMovies } from "../../actions/movieActions";
import MovieList from "../Common/ListItem";
import PrivateRoute from "../Common/PrivateRoute";
import Spinner from "../Common/Spinner";

class Movie extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.fetchMovies();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.movies.length !== this.props.movies.length) {
      this.props.fetchMovies();
    }
  }

  renderContent = () => {
    if (this.props.movies.length === 0 || this.props.movies.length === null) {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 text-center pt-2">
              <Spinner />
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <MovieList
          isHeaderVisible={this.props.isHeaderVisible}
          isCartVisible={this.props.isCartVisible}
          onCartToggle={this.props.onCartToggle}
          location={this.props.location.pathname}
          data={this.props.movies}
        />
      );
    }
  };

  render() {
    return this.renderContent();
  }
}

const mapStateToProps = ({ movie, auth }) => {
  const { movies } = movie;
  const { isAuthenticated } = auth;

  return { movies, isAuthenticated };
};

export default PrivateRoute(
  connect(
    mapStateToProps,
    { fetchMovies }
  )(withRouter(Movie))
);
