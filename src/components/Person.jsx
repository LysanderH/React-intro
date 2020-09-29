import React, {Component} from 'react';

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <ul>
                <li>{this.props.name}</li>
                <li>{this.props.age}</li>
                <li>{this.props.loc}</li>
                <li>{this.props.poids}</li>
                <li>{this.props.hairColor}</li>
            </ul>
        );
    }
}

export default Person;