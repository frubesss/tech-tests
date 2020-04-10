import React, {Component} from 'react';
import Header from './components/header'
import Footer from './components/footer'
import Favourites from './components/favourites'
import Tabs from './components/tabs'

export default class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            favourites: [],
            buttonActive: 'FAVOURITES',
            isLoading: false
        };
        this.buttonClick = this.buttonClick.bind(this)
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('https://api.openchargemap.io/v2/poi/?client=ocm.app.web.5.2.7_20151008&verbose=false&output=json&operator=3&latitude=51.52351420000001&longitude=-0.0917564&distance=10&distanceunit=KM&maxresults=10')
            .then(response => response.json())
            .then(data => this.setState({favourites: data, isLoading: false}))
    }

    buttonClick(buttonName) {
        this.setState({
            buttonActive: buttonName
        });
    }

    render() {

        let {buttonActive, favourites, isLoading} = this.state;

        return (
            <div>
                <Header buttonActive={buttonActive}/>
                {buttonActive === 'FAVOURITES' &&
                <div>
                    <Tabs buttonClick={this.buttonClick} buttonActive={buttonActive}/>
                    <Favourites favourites={favourites} isLoading={isLoading}/>
                </div>
                }
                <Footer buttonActive={buttonActive} buttonClick={this.buttonClick}/>
            </div>
        );
    }
}