import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	clickedButton = (event) => {
		this.props.onButtonClick(event)
	}

	render() {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div>
				<button id="greasy-hogs" onClick={this.clickedButton}>View Greasy Hogs</button>
				<button id="weight-hogs" onClick={this.clickedButton}>Sort Hogs by Weight</button>
				<button id="name-hogs" onClick={this.clickedButton}>Sort Hogs by Name</button>
			</div>
		</div>
	)
	}
}

export default Nav
