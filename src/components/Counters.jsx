import React, {Component} from 'react';
import Counter from "./Counter";

class Counters extends Component {
    constructor() {
        super();
        this.state = {
            counters: [
                {'id': 1, 'count': 0},
                {'id': 2, 'count': 0},
                {'id': 3, 'count': 0},
                {'id': 4, 'count': 0}
            ]
        }
    }

    addOne = (e, id) => {
        e.preventDefault();

        // Create local copy to change.
        const counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === id) {
                counter.count += 1;
            }
        });
        // Update state by replacing counters array
        this.setState({counters: counters});
    }

    substractOne = (e, id) => {
        const counters = this.state.counters.slice();
        counters.forEach((counter) => {
            if (counter.id === id) {
                counter.count = counter.count > 0 ? counter.count - 1 : counter.count;
            }
        });
        this.setState({counters: counters});
    }

    render() {
        return (this.state.counters.map((counter) =>
            <Counter key={counter.id} addOne={this.addOne} substractOne={this.substractOne} counter={counter}/>
        ));
    }
}

export default Counters;