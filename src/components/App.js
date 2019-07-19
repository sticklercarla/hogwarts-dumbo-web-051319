import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogDisplay from './HogDisplay'
import hogs from '../porkers_data';

class App extends Component {
  render(){
    
    return (
      <div className="App">
          < Nav />
          < HogDisplay hogData={hogs}/>

      </div>
    )
  }
}

export default App;
