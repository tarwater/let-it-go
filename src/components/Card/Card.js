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

        if(seconds >= 3600 * 24){
            let days = Math.floor(seconds / 3600 * 24);
            str += days + " days, ";
            seconds = seconds % (3660 * 24);
        }

        if(seconds >= 3600){
            let hours = Math.floor(seconds / 3600);
            str += hours + " hours, ";
            seconds = seconds % 3660;
        }

        if(seconds >= 60){
            let minutes = Math.floor(seconds / 60);
            str += minutes + " minutes, ";
            seconds = seconds % 60;
        }

        str += seconds + " seconds";

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
