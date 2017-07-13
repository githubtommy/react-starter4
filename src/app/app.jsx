import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../scenes/home/home.jsx'
import About from '../scenes/about/about.jsx'
import Bio from '../scenes/bio/bio.jsx'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends React.Component {
	render() {

		// let page = this.props.location.pathname.substr(1);

		console.log("this:", this);
		console.log("this.props:", this.props);
		console.log("this.props.location:", this.props.location);





		return (

			<div className="container">
				<header>
					<br />
					<Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/bio">Bio</Link> |
					<br />
					<br />
				</header>

				<main>
					<Route exact path="/" component={Home} />
					<Route exact path="/about" component={About} />
					<Route exact path="/bio" component={Bio} />
				</main>

			</div>
		)
	}
}

//const App = () => (
//
//)

export default App
