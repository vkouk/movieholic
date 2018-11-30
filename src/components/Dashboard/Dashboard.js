import React, { Component, lazy, Suspense } from 'react';
import { connect } from 'react-redux';
import { getLatestOrders, getLatestMembers, getMostRented } from '../../actions';
import Spinner from '../Common/Spinner';
const DashboardList = lazy(() => import('./DashboardList'));

class Dashboard extends Component {
    componentDidMount() {
        if (this.props.user.isAdmin && this.props.isAuthenticated) {
            this.props.getLatestOrders();
            this.props.getLatestMembers();
            this.props.getMostRented();
        } else {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div className="dashboard">
                <Suspense fallback={<Spinner />}>
                    <DashboardList data={this.props.mostRented} headerTitle={'Most Rented'} />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <DashboardList data={this.props.orders} headerTitle={'Latest Orders'} />
                </Suspense>
                <Suspense fallback={<Spinner />}>
                    <DashboardList data={this.props.members} headerTitle={'Latest Members'} />
                </Suspense>
            </div>
        )
    }
}

const mapStateToProps = ({ dashboard, auth }) => {
    const { orders, members, mostRented, error } = dashboard;
    const { user, isAuthenticated } = auth;

    return { orders, members, mostRented, error, user, isAuthenticated };
}

export default connect(mapStateToProps, { getLatestOrders, getLatestMembers, getMostRented })(Dashboard);