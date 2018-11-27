import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Pagination from '../Common/Pagination';
import Checkout from '../../utils/Checkout';
import { returnRentTotal } from '../../utils/Helpers';

class ProfileOrders extends Component {
    state = {
        'currentPage': null,
        'totalPages': null,
        'currentData': this.props.orders
    };

    onPageChanged = data => {
        const { currentPage, totalPages, pageLimit } = data;

        const offset = (currentPage - 1) * pageLimit;
        const currentData = this.props.orders.slice(offset, offset + pageLimit);
        this.setState({ currentPage, totalPages, currentData });
    };

    render() {
        const { error, navigation } = this.props;
        const {
            currentPage,
            totalPages,
            currentData,
        } = this.state;
        const totalData = this.props.orders.length;

        if (totalData === 0) {
            return (
                <div>
                    <span className="b f3 bb">No orders found.</span>
                </div>
            );
        }

        return (
            <div className="list__row list__row--size">
                <div className="list__col list__col--big ml-3">
                    <span className="b f3 bb">Latest Orders</span>
                </div>
                <div className="list__col list__col--big">
                    {
                        currentData.sort((a, b) => b.dateOrdered - a.dateOrdered).map(order => {
                            return (
                                <div key={order._id} className="list__table bb b--black-05 pb2 mt2">
                                    <div>
                                        <h1 className="f6 f5-ns fw6 lh-title black mv0">Order datetime: {moment(order.dateOrdered).format('DD/MM/YYYY HH:MM')}</h1>
                                        <h2 className="f6 fw4 mt0 mb0 black-60">Movies Rented: {order.movies.length}, Series Rented: {order.series.length}</h2>
                                    </div>
                                    <div className="list__table list__table--center">
                                        <div className="list__btn"><Link to={`/order/${order._id}`}>See Order</Link></div>
                                        <div>
                                            {order.dateReturned || (moment(order.dateOrdered).format('DD/MM/YYYY') === moment(new Date()).format('DD/MM/YYYY')) ? null : <Checkout rentId={order._id} amount={returnRentTotal(order.movies, order.series, order.dateOrdered)} navigation={navigation} />}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                    {error && <div className="list__error">{error}</div>}
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
                                pageLimit={5}
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

export default ProfileOrders;