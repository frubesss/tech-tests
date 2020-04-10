import React from 'react';
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme';
import {Card} from "../card";

describe('Card Component', () => {

    let wrapper;

    const mockedTwoCreditCards = [
        {
            "uuid": "1232323",
            "name": "Student Life Card",
            "apr": "18.9",
            "balanceTransferDuration": "0",
            "purchaseOfferDuration": "6",
            "credit": "1200"
        },
        {
            "uuid": "55667",
            "name": "Anywhere Card",
            "apr": "33.9",
            "balanceTransferDuration": "0",
            "purchaseOfferDuration": "0",
            "credit": "300"
        }
    ];

    const mockedOneCreditCards = [
        {
            "uuid": "1232323",
            "name": "Student Life Card",
            "apr": "18.9",
            "balanceTransferDuration": "0",
            "purchaseOfferDuration": "6",
            "credit": "1200"
        }
    ];

    beforeEach(() => {
        wrapper = shallow(<Card creditCards={mockedTwoCreditCards}/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render 2 credit cards when customer is eligible', () => {
        expect(wrapper.find('.card')).toHaveLength(2);
    });

    it('should render 1 credit cards when customer is eligible', () => {
        wrapper = shallow(<Card creditCards={mockedOneCreditCards}/>);
        expect(wrapper.find('.card')).toHaveLength(1);
    });

});
