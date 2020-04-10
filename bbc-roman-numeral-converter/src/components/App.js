import React, {Component} from "react";
import RomanNumeralConverter from "./RomanNumeralConverter";
import "../assets/App.css";

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {numberInserted: 0};
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        this.setState({numberInserted: parseInt(event.target.value, 10)});
    }

    render() {
        return (
            <div className="App">
                <input
                    className="numeric-input-field"
                    type="number"
                    min={0}
                    max={3999}
                    onChange={this.onChange}
                />
                <RomanNumeralConverter numberInserted={this.state.numberInserted}/>
            </div>
        );
    }
}
