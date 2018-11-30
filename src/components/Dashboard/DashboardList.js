import React, { Component } from 'react';
import DashboardListItem from './DashboardListItem';
import Pagination from '../Common/Pagination';

class DashboardList extends Component {
    state = {
        'currentPage': null,
        'totalPages': null,
        'currentData': this.props.data
    };

    onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentData = this.props.data.slice(offset, offset + pageLimit);
        this.setState({ currentPage, totalPages, currentData });
    };

    render() {
        const { headerTitle } = this.props;
        const {
            currentPage,
            totalPages,
            currentData,
        } = this.state;
        const totalData = this.props.data.length;

        if (totalData === 0) return null;

        return (
            <div className="dashboard__container">
                <div className="dashboard__header">{headerTitle}</div>
                <div className="dashboard__row">
                    {
                        currentData.map((record, i) => {
                            return (
                                <DashboardListItem
                                    key={i}
                                    record={record}
                                />
                            );
                        })
                    }
                </div>
                <div className="dashboard__footer">
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
        )
    }
}

export default DashboardList;