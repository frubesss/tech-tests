import React from "react";
import {shallow} from "enzyme";
import App from "../components/App";
import renderer from "react-test-renderer";

describe('App Component', () => {

    let appComponent, input;

    beforeEach(() => {
        appComponent = shallow(<App/>);
    });

    it('Snapshot Test', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Input Field', () => {

        beforeEach(() => {
            input = appComponent.find('input');
        });

        it('numberInserted state updated when numeric value inserted into input field', () => {
            input.simulate('change', {target: {value: 2}});
            expect(appComponent.state().numberInserted).toEqual(2);
        });

        it('has min value of 0 property', () => {
            expect(input.props().min).toEqual(0);
        });

        it('has max value of 3999 property', () => {
            expect(input.props().max).toEqual(3999);
        });

        it('has number type property', () => {
            expect(input.props().type).toEqual('number');
        });

    });

});
