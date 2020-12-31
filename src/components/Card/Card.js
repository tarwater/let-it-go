import React, {Component} from 'react';

class Card extends Component {

    // constructor(props) {
    //     super(props);
    // }

    timeSince = oldtime => {
        let now = new Date(this.props.time);
        let seconds = Math.floor((now - oldtime) / 1000);

        seconds++; // always a second behind -- why?

        let str = "";

        if(seconds >= 86400){
            let days = Math.floor(seconds / 86400);
            str += days + " day(s), ";
            seconds = seconds % 86400;
        }

        if(seconds >= 3600){
            let hours = Math.floor(seconds / 3600);
            str += hours + " hour(s), ";
            seconds = seconds % 3660;
        }

        if(seconds >= 60){
            let minutes = Math.floor(seconds / 60);
            str += minutes + " minute(s), ";
            seconds = seconds % 60;
        }

        str += seconds + " second(s)";

        return str;
    }

    render() {
        let timestamp = new Date(this.props.date);
        let timeString = this.timeSince(timestamp);

        return (
            <li><span>{timeString}</span> since <span>{this.props.name}</span></li>
        )
    }
}

export default Card;
