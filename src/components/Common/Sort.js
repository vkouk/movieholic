import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Sort extends Component {
  state = {
    dropdownOpen: false,
    sortBy: null
  };

  onDropdownToggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  onSortChange = e => {
    this.setState({ sortBy: e.currentTarget.textContent });
    this.props.onSortBy(e.currentTarget.textContent);
  };

  render() {
    return (
      <ButtonDropdown
        className="search__dropdown"
        isOpen={this.state.dropdownOpen}
        toggle={this.onDropdownToggle}
      >
        <DropdownToggle caret className="search__btn">
          {this.state.sortBy === null
            ? "Sort By"
            : `Sort By - ${this.state.sortBy}`}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <div onClick={this.onSortChange}>Title</div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.onSortChange}>Rating</div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.onSortChange}>Stock</div>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default Sort;
