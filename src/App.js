import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card/Card";
import "flatpickr/dist/themes/material_green.css";
import Flatpickr from "react-flatpickr";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            name: '',
            time: Date.now(),
            abstention: null
        }
    }

    componentDidMount() {
        this.runTimer();
    }

    newItem = (e) => {
        e.preventDefault();
        let cards = this.state.cards;
        cards.push({
            date: this.state.abstention || Date.now(),
            name: this.state.name,
            key: new Date().getTime()
        });

        this.setState({
            cards: cards,
            name: '',
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
            return <Card key={c.key} date={c.date} name={c.name} time={this.state.time}/>
        });

        return (
            <div className="App">
                <h1>Renunciation Timer</h1>
                <h2>give it up</h2>

                <div className="controls">
                    <form onSubmit={this.newItem}>
                        <input type="text" placeholder="i gave up this" value={this.state.name}
                               onChange={this.handleOnNameChange} required/>
                        <span>on:</span>
                        <Flatpickr
                            data-enable-time
                            onChange={date => {
                                this.setState({abstention: date});
                            }}
                        />
                        <button id="add" type="submit">I'm Done</button>
                    </form>
                </div>

                <ul id="list">
                    {cards}
                </ul>
            </div>
        );
    }
}

export default App;
