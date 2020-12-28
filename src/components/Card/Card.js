import React, {Component} from 'react';

class Card extends Component {

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <li><span>... seconds</span> since <span>{this.props.name}</span></li>
        )
    }
}

export default Card;
