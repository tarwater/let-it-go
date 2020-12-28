import React, {Component} from 'react';
import './App.css';
import Card from "./components/Card/Card";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            cards: [],
            name: ''
        }

        this.newItem = this.newItem.bind(this);
    }

    newItem() {
        let cards = this.state.cards;
        cards.push({
            id: Date.now(),
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

    render() {
        let cards = this.state.cards.map(c => {
            return <Card key={c.id} id={c.id} name={c.name}/>
        });

        return (
            <div className="App">
                <h1>Renunciation Timer</h1>
                <h2>give it up</h2>

                <ul id="list">
                    {cards}
                </ul>

                <input type="text" placeholder="i gave up this" value={this.state.name} onChange={this.handleOnNameChange}/>
                <button id="add" onClick={this.newItem}>I'm Done</button>
            </div>
        );
    }
}

export default App;
