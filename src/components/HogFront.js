import React from 'react';


class HogFront extends React.Component {

  render(){
    console.log(this.props)
    return(
      <div className="ui eight wide column link instant move reveal">
        <div  className="ui fluid raised link card visible content">
          <div className="image">
            <img src={this.props.image}/>
          </div>
          <div className="content">
            <p className="header">{this.props.name}</p>
          </div>
        </div>
        <div className="hidden content">
          <h1>{this.props.name}</h1>
          <h2>Specialty: {this.props.specialty}</h2>
          <h3>Hog to Fridge Ratio: {this.props.weight}</h3>
          <h3>Medal: {this.props.medal}</h3>
        </div>
      </div>
    )
  }
}


export default HogFront;
