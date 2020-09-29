import React from 'react';
import Person from "./components/Person";
import Counter from "./components/Counter";

function App() {
    const increment = () => {

    }

    return (
        <div className="App">
            <header className="App-header">
                {/*<Person age={25} name="Lysander" loc="Liège"/>*/}
                <Counter />
            </header>
        </div>
    );
}

export default App;