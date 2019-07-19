import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	clickedGreasyButton = (event) => {
		debugger
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
				<button onClick={this.clickedGreasyButton}>View Greasy Hogs</button>
				<button onClick={this.clickedWeightButton}>Sort Hogs by Weight</button>
				<button onClick={this.clickedNameButton}>Sort Hogs by Name</button>
			</div>
		</div>
	)
	}
}

export default Nav
