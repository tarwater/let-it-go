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
            abstention: null,
            activeCard: null,
            maxCalendarTime: Date.now()
        }
    }

    componentDidMount() {
        this.runTimer();
    }

    newItem = (e) => {
        e.preventDefault();

        if(this.state.name === "") return;

        let cards = this.state.cards;
        let date;

        if(this.state.abstention == null || this.state.abstention.length === 0){
            date = new Date();
        } else {
            date = this.state.abstention;
        }

        let newCard = {
            date: date,
            name: this.state.name,
            key: new Date().getTime()
        };
        cards.push(newCard);

        this.setState({
            cards: cards,
            name: '',
            activeCard: newCard.key
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

        let activeCard = this.state.cards.find(c => c.key === this.state.activeCard) || null;
        activeCard = activeCard !== null ? <Card key={activeCard.key} date={activeCard.date} name={activeCard.name} time={this.state.time}/> : null;

        let cards = this.state.cards.map(c =>
            <li onClick={() => this.setState({activeCard: c.key})}>{c.name}</li>
        );

        return (
            <div className="App">
                <h1>Renunciation Timer</h1>
                <h2>give it up</h2>

                <div className="controls">
                    <form onSubmit={this.newItem}>
                        <input type="text" placeholder="I gave up this" value={this.state.name}
                               onChange={this.handleOnNameChange}/>
                        <span className="on">on</span>
                        <Flatpickr
                            data-enable-time
                            onChange={date => {
                                this.setState({abstention: date});
                            }}
                            options={{maxDate: this.state.maxCalendarTime}}
                        />
                        <button id="add" type="submit">Done With It</button>
                    </form>
                </div>
                {activeCard}
                <ul>
                    {cards}
                </ul>
            </div>
        );
    }
}

export default App;
