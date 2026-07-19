import React from 'react';
import Header from './components/header/Header';
import Center from './components/center/Center';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';

export default function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Center />
      <Footer />
    </div>
  )
}


/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
*/