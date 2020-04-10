import React, {Component} from 'react';
import './assets/css/favourites.scss'
import PropTypes from 'prop-types'

export default class Favourites extends Component {

    render() {

        const {favourites} = this.props;
        if(this.props.isLoading){
            return <div>Is Loading...</div>
        }

        return (

            <div>
                <ul className='item-list'>
                    {favourites.map(favourite =>
                        <li className='item' key={favourite.UUID}>
                            <i className='fa fa-map-marker map-marker'/>
                            <ul className='item-address'>
                                <li><a className='item-heading'>{favourite.AddressInfo.Title}</a></li>
                                <li><a
                                    className='item-subheading'>{`${favourite.AddressInfo.AddressLine1} - ${favourite.AddressInfo.Postcode}`}</a>
                                </li>
                            </ul>
                            <a className='item-distance'>{Math.round(favourite.AddressInfo.Distance * 100) / 100}km</a>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

Favourites.propTypes = {
    favourites: PropTypes.array.isRequired
};



