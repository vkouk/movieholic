import React, { Component } from 'react';
import Item from './Item';

class ListItem extends Component {
    state = {
        'title': '',
        'error': ''
    };

    onFieldChange = e => {
        e.preventDefault();

        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
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
                        this.props.data.filter(rec => rec.title.toLowerCase().search(this.state.title.toLowerCase()) !== -1).sort((a, b) => a.title !== b.title ? a.title < b.title ? -1 : 1 : 0).map(record => {
                            return (
                                <Item
                                    key={record._id}
                                    location={this.props.location}
                                    {...record}
                                />
                            )
                        })}
                </div>
            </div>
        );
    }
}

export default ListItem;
