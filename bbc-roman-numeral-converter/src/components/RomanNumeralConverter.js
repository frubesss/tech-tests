import React, {Component} from "react";
import PropTypes from "prop-types";

const romanNumeralLookUp = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

export default class RomanNumeralConverter extends Component {
    constructor(props) {
        super(props);
        this.handleConversion = this.handleConversion.bind(this);
    }

    handleConversion(numberInserted) {
        let convertedRomanNumeral = '', i;
        const validationMessage = 'Please enter a number between 1 and 3999';

        if (numberInserted < 1 || numberInserted > 3999) {
            return validationMessage;
        } else {
            for (i in romanNumeralLookUp) {
                while (numberInserted >= romanNumeralLookUp[i]) {
                    convertedRomanNumeral += i;
                    numberInserted -= romanNumeralLookUp[i];
                }
            }
            return convertedRomanNumeral;
        }
    }

    render() {
        return (
            <div>
                <h1>{this.handleConversion(this.props.numberInserted)}</h1>
            </div>
        );
    }
}

RomanNumeralConverter.propTypes = {
    numberInserted: PropTypes.number,
};
