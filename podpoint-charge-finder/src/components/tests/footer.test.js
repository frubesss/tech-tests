import React from 'react';
import Footer from '../footer'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'

describe('Footer Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer buttonClick={() => {}}/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Navigation Item', () => {

        it('should render with the favourites navigation item active', () => {
            expect(wrapper.find('.footer-nav').childAt(1).hasClass('active')).toBe(true);
        });

        describe('click', () => {

            beforeEach(() => {
                wrapper = shallow(<Footer buttonClick={() => {}} buttonActive={'MAP'}/>);
                wrapper.find('.footer-nav').childAt(0).simulate('click');
            });

            it('should change to the selected navigation item when a new navigation item is selected', () => {
                expect(wrapper.find('.footer-nav').childAt(0).hasClass('active')).toBe(true);
            });

            it('should remove active class from the previous navigation item when a new navigation item is selected', () => {
                expect(wrapper.find('.footer-nav').childAt(1).hasClass('active')).toBe(false);
            });

        });

    })

});
