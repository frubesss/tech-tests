import React, { Component } from 'react';
import './assets/css/tabs.scss'
import PropTypes from "prop-types";

export default class Tabs extends Component {

    render() {

        let {buttonClick, buttonActive} = this.props;

        return (
            <div>
                <div className='btn-group'>
                    <button onClick={() => {buttonClick('NEARBY')}}
                            className={buttonActive === 'NEARBY' ? 'btn pill active' : 'btn pill'}>NEARBY</button>
                    <button onClick={() => {buttonClick('FAVOURITES')}}
                            className={buttonActive === 'FAVOURITES' ? 'btn pill active' : 'btn pill'}>FAVOURITES</button>
                </div>
            </div>
        );
    }
}

Tabs.propTypes = {
    buttonClick: PropTypes.func.isRequired,
    buttonActive: PropTypes.string.isRequired
};

Tabs.defaultProps = {
    buttonActive: 'FAVOURITES'
};
