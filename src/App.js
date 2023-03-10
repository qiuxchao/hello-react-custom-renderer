import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App-intro">
          <div className="button-container">
            <button className="decrement-button" onClick={() => setCount(count - 1)}>
              -
            </button>
            <div className="counter-text">{count}</div>
            <button className="increment-button" onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
