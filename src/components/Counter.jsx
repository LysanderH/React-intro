import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <section>
                <h2 aria-level="2" role="heading">Compteur basique {this.props.id}</h2>
                <div>
                    <span>{this.props.counter.count === 0 ? "Initialiser le compteur" : this.props.counter.count}</span>
                    <button onClick={e => this.props.addOne(e, this.props.counter.id)}>+</button>
                    {this.props.counter.count > 0 ? <button onClick={e => this.props.substractOne(e, this.props.counter.id)}>-</button> : ''}
                </div>
            </section>
        );
    }
}

export default Counter;