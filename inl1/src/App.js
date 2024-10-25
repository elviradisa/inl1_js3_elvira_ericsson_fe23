import React from 'react';
import ClockComponent from './Clock.jsx'

class App extends React.Component {

    // konstruktorn används när man använder klasskomponenter och definierar
    // den första state:en, vilket är data som kan ändras över tid 
    constructor(props) {
        super(props)
        this.state = {
            // Date() - funktion som hanterar datum och tid
            // toLocaleTimeSTring() - metod som formatterar tid baserat på din tidzon
            time: new Date().toLocaleTimeString()
        }
        console.log('We are in the constructor');
    }

    // skickar tiden som en prop till ClockComponent
    render() {
        return (
            <>
                <ClockComponent time={this.state.time}></ClockComponent>
            </>
        )
    }

    // componentDidMount() - kallas på efter komponenten är renderad
    // setState - komponentens state uppdateras
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

}

export default App;
