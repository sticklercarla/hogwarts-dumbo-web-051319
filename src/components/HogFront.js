import React from 'react';


class HogFront extends React.Component {

  onPigClick = (event) => {
    console.log(event.target)
  }

  render(){
    console.log(this.props)
    return(
      <div  onClick={this.onPigClick} className="ui eight wide column link">
        <div  className="ui fluid raised link card">
          <div className="image">
            <img src={this.props.image}/>
          </div>
          <div className="content">
            <p className="header">{this.props.name}</p>
          </div>
        </div>
      </div>
    )
  }
}


export default HogFront;
