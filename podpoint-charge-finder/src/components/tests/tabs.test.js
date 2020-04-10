import React from 'react';
import Tabs from '../tabs'
import renderer from 'react-test-renderer'
import {shallow} from "enzyme/build/index";

describe('Tabs Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Tabs buttonClick={() => {}}/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(wrapper).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with the favourites tab active', () => {
        expect(wrapper.find('.btn-group').childAt(1).hasClass('active')).toBe(true);
    });

    describe('Tabs', () => {

        it('should render with the favourites tab active', () => {
            expect(wrapper.find('.btn-group').childAt(1).hasClass('active')).toBe(true);
        });

        describe('click', () => {

            beforeEach(() => {
                wrapper = shallow(<Tabs buttonClick={() => {}} buttonActive={'NEARBY'}/>);
                wrapper.find('.btn-group').childAt(0).simulate('click');
            });

            it('should change to the selected tab when a new tab is selected', () => {
                expect(wrapper.find('.btn-group').childAt(0).hasClass('active')).toBe(true);
            });

            it('should remove active class from the previous tab when a new tab is selected', () => {
                expect(wrapper.find('.btn-group').childAt(1).hasClass('active')).toBe(false);
            });

        });

    })


});
