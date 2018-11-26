import React, { Component } from 'react';
import Item from './Item';
import Sort from './Sort';
import Pagination from "./Pagination";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

class ListItem extends Component {
    state = {
        'title': '',
        'error': '',
        'currentPage': null,
        'totalPages': null,
        'currentData': this.props.data
    };

    onFieldChange = e => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    };

    onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentData = this.props.data.slice(offset, offset + pageLimit);
        this.setState({ currentPage, totalPages, currentData });
    };

    onSortBy = label => {
        let sortedData = [];

        if (label === 'Title') {
            sortedData = this.state.currentData.sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0);
        } else if (label === 'Stock') {
            sortedData = this.state.currentData.sort((a, b) => b.stock - a.stock);
        } else if (label === 'Rating') {
            sortedData = this.state.currentData.sort((a, b) => b.rating - a.rating);
        }

        this.setState({ currentData: sortedData });
    };

    render() {
        const {
            currentPage,
            totalPages,
            currentData,
            title
        } = this.state;
        const totalData = this.props.data.length;

        if (totalData === 0) return null;

        return (
            <div className="list">
                <div className={`${this.props.isHeaderVisible ? 'list__header  list__header--small' : 'list__header'}`}>
                    <div className="list__header__text">{this.props.location === '/' ? this.props.headerTitle : _.capitalize(this.props.location.slice(1))}</div>
                    <div className="list__search">
                        <div className="search search--borderless">
                            <form className="search__form">
                                <div className="search__control">
                                    <FontAwesomeIcon icon={faSearch} className="fa-sm search__icon" />
                                    <input
                                        className="search__input"
                                        type="text"
                                        name="title"
                                        value={this.state.title}
                                        onChange={this.onFieldChange}
                                        placeholder="Search By Title..."
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="list__sort"><Sort onSortBy={this.onSortBy} /></div>
                </div>
                <div className="list__row">
                    {
                        currentData.filter(rec => rec.title.toLowerCase().search(title.toLowerCase()) !== -1).map(record => {
                            return (
                                <Item
                                    isHeaderVisible={this.props.isHeaderVisible}
                                    isCartVisible={this.props.isCartVisible}
                                    onCartToggle={this.props.onCartToggle}
                                    key={record._id}
                                    location={this.props.location}
                                    {...record}
                                />
                            )
                        })}
                </div>
                <div className="list__footer">
                    {currentPage && (
                        <span className="text-secondary mb-2">
                            Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                            <span className="font-weight-bold">{totalPages}</span>
                        </span>
                    )}
                    <div className="d-flex flex-row align-items-center">
                        <Pagination
                            totalRecords={totalData}
                            pageLimit={8}
                            pageNeighbours={1}
                            onPageChanged={this.onPageChanged}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
