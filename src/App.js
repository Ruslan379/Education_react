import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import './App.css';


import { App1, App6, App7, OldCounter, Counter, SignupForm } from './react_cm/cm04-07&08_React';

function App() {
  return (
    <>
      {/*//! Заставка React   */}
      {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      </div> */}

      <div>
        <h2>Хук useState</h2>
        <App1 />
      </div>

      <div>
        <h2>Хук useEffect</h2>
        <App6 />
      </div>

      <div>
        <h2>Аналог componentDidMount</h2>
        <App7 />
      </div>

      <div>
        <h2>OldCounter - Counter</h2>
        <OldCounter />
      </div>

      <div>
        <h2>Hook-Counter</h2>
        <Counter />
      </div>

      <div>
        <h2>SignupForm</h2>
        <SignupForm />
      </div>

    </>
  );
}

export default App;
