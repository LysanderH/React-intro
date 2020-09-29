import React from 'react';
import Person from "./components/Person";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Person age={25} name="Lysander" loc="Liège"/>
            </header>
        </div>
    );
}

export default App;