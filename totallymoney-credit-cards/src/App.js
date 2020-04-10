import React from 'react';
import CreditCards from './components/creditCards';
import './assets/customerForm.scss'
import {CustomerForm} from './components/customerForm'

export default class App extends React.Component {

    state = {
        formSubmitted: false
    };

    submitForm = (values) => {
        this.setState({formSubmitted: true, customer: values})
    };

    render() {

        const {formSubmitted, customer} = this.state;

        return (
            <div>
            <img class="cat" src="https://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"/>
                {formSubmitted ? <CreditCards customer={customer}/> : <CustomerForm submitForm={this.submitForm}/>}
            </div>
        );
    }
}