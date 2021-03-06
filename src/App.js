import React from 'react';
import Header from "./components/Header"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import './App.css';



const App = () => {

  return (
    <div className="App">
      <Header/>
      <About/>
      <Projects/>
      <Footer />
      
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
