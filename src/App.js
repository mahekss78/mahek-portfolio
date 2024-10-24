import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Certificates from './components/Certificates';
import Qualifications from './components/Qualifications';
import Project from './components/Project';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <div id="particles-js"></div> {/* Consider adding styles or functionality to this */}
      <Header />
      <main>
      


        <Home />
        <About />
        <Project />
        <Certificates />
        <Qualifications />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;
