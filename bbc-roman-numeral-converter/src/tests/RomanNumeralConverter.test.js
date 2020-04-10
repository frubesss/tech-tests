import React from "react";
import {shallow} from "enzyme";
import RomanNumeralConverter from "../components/RomanNumeralConverter";

describe('App Component', () => {

    let appComponent;
    const validationMessage = 'Please enter a number between 1 and 3999';

    beforeEach(() => {
        appComponent = shallow(<RomanNumeralConverter/>);
    });

    it('should convert 1 to I', () => {
        expect(appComponent.instance().handleConversion(1)).toEqual('I');
    });

    it('should convert 4 to IV', () => {
        expect(appComponent.instance().handleConversion(4)).toEqual('IV');
    });

    it('should convert 6 to VI', () => {
        expect(appComponent.instance().handleConversion(6)).toEqual('VI');
    });

    it('should convert 39 to XXXIX', () => {
        expect(appComponent.instance().handleConversion(39)).toEqual('XXXIX');
    });

    it('should convert 40 to XL', () => {
        expect(appComponent.instance().handleConversion(40)).toEqual('XL');
    });

    it('should convert 3999 to MMMCMXCIX', () => {
        expect(appComponent.instance().handleConversion(3999)).toEqual('MMMCMXCIX');
    });

    it('should display validation message when 0 inserted', () => {
        expect(appComponent.instance().handleConversion(0)).toEqual(
            validationMessage
        );
    });

    it('should display validation message when a - value inserted', () => {
        expect(appComponent.instance().handleConversion(-20)).toEqual(
            validationMessage
        );
    });

    it('should display validation message when a value greater than 3999 inserted', () => {
        expect(appComponent.instance().handleConversion(4000)).toEqual(
            validationMessage
        );
    });

});
