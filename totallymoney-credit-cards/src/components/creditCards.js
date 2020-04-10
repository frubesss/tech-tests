import React from 'react';
import creditCardsData from '../data/creditCards'
import {Card} from './card'
import PropTypes from "prop-types";
import {studentCreditCardCheck, liquidCreditCardCheck} from '../helpers/rules/creditCardRules'

export default class CreditCards extends React.Component {

    state = {
        creditCards: []
    };

    componentDidMount() {
        this.findCreditCards();
    }

    findCreditCards = () => {

        const {customer} = this.props;

        const studentCreditCardFound = creditCardsData.filter(card => studentCreditCardCheck(card, customer));
        const liquidCreditCardFound = creditCardsData.filter(card => liquidCreditCardCheck(card, customer));

        const foundCreditCards = [...studentCreditCardFound, ...liquidCreditCardFound];

        this.setState({
            creditCards: foundCreditCards
        });

    };

    render() {
        return (
            <div>
                <Card creditCards={this.state.creditCards}/>
            </div>

        );
    }
};

CreditCards.propTypes = {
    customer: PropTypes.object.isRequired
};

