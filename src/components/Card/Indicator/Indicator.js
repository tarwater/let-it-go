import React, {Component} from 'react';

class Indicator extends Component {
    render() {
        return (
            <div className="indicator">
                <div className="indicator-value">{this.props.value}</div>
                <div className="indicator-label">{this.props.label}</div>
            </div>
        )
    }
}

export default Indicator;
