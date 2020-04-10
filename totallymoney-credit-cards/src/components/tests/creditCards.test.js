import React from 'react';
import renderer from 'react-test-renderer'
import {mount} from 'enzyme';
import CreditCards from "../creditCards";

describe('Credit Cards Component', () => {

    let wrapper;

    const mockedCustomer = {
            employment: 'fullTimeEmployment',
            annualIncome: 1
        };

    const mockedRickStudentCustomer = {
            employment: 'student',
            annualIncome: 16001
        };

    const mockedFullTimeCustomer = {
        employment: 'fullTimeEmployment',
        annualIncome: 16001
    };

    beforeEach(() => {
        wrapper = mount(<CreditCards customer={mockedCustomer}/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should always offer anywhere card to the customer', () => {
        expect(wrapper.find('.title').text()).toBe('Anywhere Card');
    });

    it('should offer student card to a student customer', () => {
        wrapper = mount(<CreditCards customer={mockedRickStudentCustomer}/>);
        expect(wrapper.find('.title').first().text()).toBe('Student Life Card');
    });

    it('should offer liquid credit card to customer with income over 16000', () => {
        wrapper = mount(<CreditCards customer={mockedFullTimeCustomer}/>);
        expect(wrapper.find('.title').last().text()).toBe('Liquid Card');
    });

    it('should offer all cards to student customer with income over 16000', () => {
        wrapper = mount(<CreditCards customer={mockedRickStudentCustomer}/>);
        expect(wrapper.find('.card')).toHaveLength(3);
    });


});

