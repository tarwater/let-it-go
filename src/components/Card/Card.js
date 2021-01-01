import React, {Component} from 'react';
import Indicator from "./Indicator/Indicator";

class Card extends Component {

    // constructor(props) {
    //     super(props);
    // }

    timeSince = oldtime => {
        let now = new Date(this.props.time);
        let seconds = Math.floor((now - oldtime) / 1000);

        seconds++; // always a second behind -- why?

        let values = {
            days: 0,
            mins: 0,
            hours: 0
        };

        if(seconds >= 86400){
            values["days"] = Math.floor(seconds / 86400);
            seconds = seconds % 86400;
        }

        if(seconds >= 3600){
            values["hours"] = Math.floor(seconds / 3600);
            seconds = seconds % 3660;
        }

        if(seconds >= 60){
            values["mins"] = Math.floor(seconds / 60);
            seconds = seconds % 60;
        }

        values["secs"] = seconds
        return values;
    }

    render() {
        let timestamp = new Date(this.props.date);
        let vals = this.timeSince(timestamp);

        return (
            <li className="card">
                <span className="card-title">{this.props.name}</span>
                <Indicator label="days" value={vals.days}/>
                <Indicator label="hours" value={vals.hours}/>
                <Indicator label="mins" value={vals.mins}/>
                <Indicator label="secs" value={vals.secs}/>
            </li>
        )
    }
}

export default Card;
