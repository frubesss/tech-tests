import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/footer.scss'
import PropTypes from "prop-types";

export default class Footer extends Component {

    render() {

        let {buttonClick, buttonActive} = this.props;

        return (
            <div className="footer-nav">
                <a onClick={() => {
                    buttonClick('MAP')
                }} className={buttonActive === 'MAP' ? 'footer-nav-item active' : 'footer-nav-item'}>
                    <i className="fa fa-map-marker"/>
                    Map
                </a>
                <a onClick={() => {
                    buttonClick('FAVOURITES')
                }} className={buttonActive === 'FAVOURITES' ? 'footer-nav-item active' : 'footer-nav-item'}>
                    <i className="fa fa-star"/>
                    Favourites
                </a>
                <a onClick={() => {
                    buttonClick('ACCOUNT')
                }} className={buttonActive === 'ACCOUNT' ? 'footer-nav-item active' : 'footer-nav-item'}>
                    <i className="fa fa-user-circle"/>
                    Account
                </a>
            </div>
        );
    }

}

Footer.propTypes = {
    buttonClick: PropTypes.func.isRequired,
    buttonActive: PropTypes.string.isRequired
};

Footer.defaultProps = {
    buttonActive: 'FAVOURITES'
};