import React, { Component } from "react";
import { Config } from '../../utils/Config';
import axios from 'axios';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Search extends Component {
    state = {
        'title': '',
        'year': '',
        'dataType': null,
        'dropdownOpen': false,
        'error': ''
    };

    onDropdownToggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    };

    onSelectItem = e => {
        this.setState({ dataType: e.currentTarget.textContent });
    };

    onFormChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onFormSubmit = async e => {
        e.preventDefault();

        const { dataType, title, year } = this.state;
        const endpoint = dataType === 'Movie' ? `${Config.API_URL}/movie` : `${Config.API_URL}/serie`;
        const values = dataType === 'Movie' ? { title, year } : { title };

        if (dataType === null) {
            return this.setState({ error: 'Please select Movie or Serie type before search' });
        }

        await axios.post(endpoint, values)
            .then(({ data }) => {
                this.setState({ error: '' });
                this.props.navigation.push(`/${dataType.toLowerCase()}/${data.title}`);
            })
            .catch(error => this.setState({ error: error.response.data }));
    };

    render() {
        return (
            <div className="search">
                <form className="search__form" onSubmit={this.onFormSubmit}>
                    <input
                        className="search__input"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.onFormChange}
                        placeholder="Title..."
                    />
                    {
                        this.state.dataType === 'Serie' ? null
                            :
                            <input
                                className="search__input"
                                type="number"
                                name="year"
                                value={this.state.year}
                                onChange={this.onFormChange}
                                placeholder="Year..."
                            />
                    }
                    <ButtonDropdown className="search__dropdown" isOpen={this.state.dropdownOpen} toggle={this.onDropdownToggle}>
                        <DropdownToggle caret className="search__btn">
                            {this.state.dataType === null ? 'Select type' : this.state.dataType}
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>
                                <div onClick={this.onSelectItem}>Movie</div>
                            </DropdownItem>
                            <DropdownItem>
                                <div onClick={this.onSelectItem}>Serie</div>
                            </DropdownItem>
                        </DropdownMenu>
                    </ButtonDropdown>
                    <input className="search__submit" type="submit" />
                </form>
                {this.state.error && <p className="search__error">{this.state.error}</p>}
            </div>
        );
    }
}

export default Search;