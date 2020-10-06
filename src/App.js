import React from 'react';
import Person from "./components/Person";
import Counters from "./components/Counters";

function App() {
    const increment = () => {

    }

    return (
        <div className="App">
            <header className="App-header">
                {/*<Person age={25} name="Lysander" loc="Liège"/>*/}
                <Counters />
            </header>
        </div>
    );
}

export default App;