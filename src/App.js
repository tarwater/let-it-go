import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card/Card";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            name: '',
            time: Date.now()
        }
    }

    componentDidMount() {
        this.runTimer();
    }

    newItem = () => {
        let cards = this.state.cards;
        cards.push({
            date: Date.now(),
            name: this.state.name
        });

        this.setState({
            cards: cards,
            name: ''
        })
    }

    handleOnNameChange = (event) => {
        this.setState({name: event.target.value})
    };

    runTimer = () => {
        setInterval(() => {
            this.setState({
                time: Date.now()
            })
        }, 1000);
    }

    render() {
        let cards = this.state.cards.map(c => {
            return <Card key={c.date} date={c.date} name={c.name} time={this.state.time}/>
        });

        return (
            <div className="App">
                <h1>Renunciation Timer</h1>
                <h2>give it up</h2>

                <ul id="list">
                    {cards}
                </ul>

                <div className="controls">
                    <input type="text" placeholder="i gave up this" value={this.state.name}
                           onChange={this.handleOnNameChange}/>
                    <span>on:</span>
                    <input placeholder="date"/>
                    <button id="add" onClick={this.newItem}>I'm Done</button>
                </div>
            </div>
        );
    }
}

export default App;
