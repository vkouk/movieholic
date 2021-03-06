import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class ProfileIcon extends Component {
  state = {
    dropdownOpen: false
  };

  onDropdownToggle = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  };

  render() {
    return (
      <div className="profile__icon">
        <ButtonDropdown
          className="profile__icon__dropdown"
          isOpen={this.state.dropdownOpen}
          toggle={this.onDropdownToggle}
        >
          <DropdownToggle caret className="profile__icon__btn">
            <img
              src={
                this.props.avatar
                  ? this.props.avatar
                  : "https://cdn4.iconfinder.com/data/icons/mobile-aplication-web-development/842/user_blank-512.png"
              }
              className="br4 w2 dib"
              alt={this.props.username}
            />{" "}
            {this.props.username ? this.props.username : "Guest"}
          </DropdownToggle>
          <DropdownMenu>
            {this.props.isAuthenticated ? null : (
              <DropdownItem>
                <li className="header__menu__item">
                  <Link onClick={this.props.onHeaderToggle} to={"/"}>
                    Login
                  </Link>
                </li>
              </DropdownItem>
            )}
            {this.props.isAuthenticated ? (
              <DropdownItem>
                <li className="header__menu__item">
                  <Link
                    onClick={this.props.onHeaderToggle}
                    to={`/profile/${this.props._id}`}
                  >
                    Profile
                  </Link>
                </li>
              </DropdownItem>
            ) : null}
            <DropdownItem>
              <li className="header__menu__item">
                {this.props.isAuthenticated ? (
                  <a
                    onClick={e => {
                      this.props.onLogout(e);
                      this.props.onHeaderToggle();
                    }}
                  >
                    Logout
                  </a>
                ) : (
                  <Link to={"/"} onClick={this.props.onHeaderToggle}>
                    Register
                  </Link>
                )}
              </li>
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}

export default ProfileIcon;
