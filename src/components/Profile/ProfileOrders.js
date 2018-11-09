import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default ({ orders }) => {
    return (
        <div className="row">
            <div className="col-sm-12 mb2">
                <span className="b f3 bb">Latest Orders</span>
            </div>
            <div className="col-sm-12">
                {
                    orders && orders.length >= 1 ? orders.sort((a, b) => moment(a.dateOrdered).format('DD/MM/YYYY HH:MM') !== moment(b.dateOrdered).format('DD/MM/YYYY HH:MM') ? moment(a.dateOrdered).format('DD/MM/YYYY HH:MM') > moment(b.dateOrdered).format('DD/MM/YYYY HH:MM') ? -1 : 1 : 0).map(order => {
                        return (
                            <article key={order._id} className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
                                <div className="dtc w2 w3-ns v-mid">
                                    <img src={order.customer.avatar} className="ba b--black-10 db br-100 w2 w3-ns h2 h3-ns" alt={order.customer.username} />
                                </div>
                                <div className="dtc v-mid pl3">
                                    <h1 className="f6 f5-ns fw6 lh-title black mv0">Order datetime: {moment(order.dateOrdered).format('DD/MM/YYYY HH:MM')}</h1>
                                    <h2 className="f6 fw4 mt0 mb0 black-60">Movies Rented: {order.movies.length}, Series Rented: {order.series.length}</h2>
                                </div>
                                <div className="dtc v-mid">
                                    <form className="w-100 tr">
                                        <button className="f6 button-reset bg-white ba b--black-10 dim pointer pv1 black-60"><Link to={`/order/${order._id}`}>Go to order</Link></button>
                                    </form>
                                </div>
                            </article>
                        );
                    }) :
                        <div>
                            <span className="b f3 bb">No orders found.</span>
                        </div>
                }
            </div>
        </div>
    );
};