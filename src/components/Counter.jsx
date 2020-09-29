import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    addOne = () => {
        this.setState({count: this.state.count + 1});
    }

    substractOne = () => {
        this.setState({count: this.state.count > 0 ? this.state.count - 1 : this.state.count});
    }

    render() {
        return (
            <section>
                <h2 aria-level="2" role="heading">Compteur basique</h2>
                <p>
                    <span>{this.state.count}</span>
                    <button onClick={this.addOne}>+</button>
                    <button onClick={this.substractOne}>-</button>
                </p>
            </section>
        );
    }
}

export default Counter;