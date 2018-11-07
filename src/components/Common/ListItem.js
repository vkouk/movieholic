import React, { Component } from 'react';
import Item from './Item';
import Pagination from "./Pagination";

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
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="search">
                            <form className="search__form">
                                <input
                                    className="search__input"
                                    type="text"
                                    name="title"
                                    value={this.state.title}
                                    onChange={this.onFieldChange}
                                    placeholder="Search By Title..."
                                />
                            </form>
                        </div>
                    </div>
                    {
                        currentData.filter(rec => rec.title.toLowerCase().search(title.toLowerCase()) !== -1).sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0).map(record => {
                            return (
                                <Item
                                    key={record._id}
                                    location={this.props.location}
                                    {...record}
                                />
                            )
                        })}
                    <div className="col-sm-12 d-flex align-items-center justify-content-center flex-column">
                        {currentPage && (
                            <span className="text-secondary mb-2">
                                Page <span className="font-weight-bold">{currentPage}</span> /{" "}
                                <span className="font-weight-bold">{totalPages}</span>
                            </span>
                        )}
                        <div className="d-flex flex-row align-items-center">
                            <Pagination
                                totalRecords={totalData}
                                pageLimit={12}
                                pageNeighbours={1}
                                onPageChanged={this.onPageChanged}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListItem;
