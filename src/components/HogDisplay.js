import React, { Component } from 'react';
import HogFront from "./HogFront.js"


class HogDisplay extends Component{
  render(){
    const hogs = this.props.hogData.map((hog, index) => {
      return (
        <HogFront
          key={index}
          name={hog.name}
          specialty={hog.specialty}
          image={hog.image}
          weight={hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}
          medal={hog['highest medal achieved']}
        />

      )
    })
    return(
      <div className="ui grid container">
      {hogs}
      </div>
    )
  }
}

export default HogDisplay;
