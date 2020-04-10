import React, {Component} from 'react';
import './assets/css/header.scss'
import PropTypes from "prop-types";

export default class Header extends Component {
    render() {
        return (
            <div className="header-nav">
                <a>{this.props.buttonActive}</a>
            </div>
        );
    }
}

Header.propTypes = {
    buttonActive: PropTypes.string.isRequired
};

Header.defaultProps = {
    buttonActive: 'FAVOURITES'
};