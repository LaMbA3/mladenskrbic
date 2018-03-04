import React, { Component } from 'react';
import './css/App.css';
import Projects from './components/Projects';
import Aboutnew from './components/Aboutnew';
import Contact from './components/Contact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Aboutnew/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
