import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import HogDisplay from './HogDisplay'
import hogs from '../porkers_data';

class App extends Component {

  state = {
    allHogs: hogs
  }

  onButtonClick = (event) => {
    const sortedName = hogs.sort((a,b) => a.name.localeCompare(b.name))

    const filteredHogs = hogs.filter(hog => hog.greased === true)

    const weight = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

    const sortedWeight = hogs.sort((a,b) => a[weight] - b[weight])

    if (event.target.id === "greasy-hogs") {
      this.setState({
        allHogs: filteredHogs
      })
    } else if (event.target.id === "name-hogs") {
      this.setState({
        allHogs: sortedName
      }) 
    } else if (event.target.id === "weight-hogs") {
      this.setState({
        allHogs: sortedWeight
      })
    }
  }

  render(){
    return (
      <div className="App">
          < Nav onButtonClick={this.onButtonClick}/>
          < HogDisplay hogData={this.state.allHogs}/>
      </div>
    )
  }
}

export default App;
