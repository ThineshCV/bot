import React from 'react';
import './App.css';
import NavBar from './NavBar'
import Blog from './Blog'
import SimpleFooter from './SimpleFooter';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Blog />
        <SimpleFooter />
      </div>
    );
  }
}

export default App;
