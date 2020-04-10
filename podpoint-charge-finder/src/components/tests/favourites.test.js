import React from 'react';
import Favourites from '../Favourites'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';

describe('Favourites Component', () => {

    let wrapper;

    const mockedFavourites = [{
        UUID: 1,
        AddressInfo: {
            Title: 'Albert Dock Road',
            AddressLine1: '22 Boaty Road',
            AddressLine2: 'Sealife Avenue',
            Postcode: 'L1 9EH',
            Distance: 0.126332312
        }
    },
        {
            UUID: 2,
            AddressInfo: {
                Title: 'Super Duper Pod Point',
                AddressLine1: 'Testing Avenue',
                AddressLine2: 'Wirral',
                Postcode: 'L12 2ER',
                Distance: 0.1236332312
            }
        }
    ];

    beforeEach(() => {
        wrapper = shallow(<Favourites favourites={mockedFavourites}/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render a list of pod point favourites', () => {
        expect(wrapper.find('.item-list').children()).toHaveLength(2);
    });

    it('should round up the distance to two decimal places with correct formatting', () => {
        expect(wrapper.find('.item-distance').first().text()).toEqual('0.13km');
    });

});
