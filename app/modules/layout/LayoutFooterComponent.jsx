let React = require('react');
let { Link } = require('react-router');

let LayoutFooterComponent = React.createClass({
	render: function(){
		return (
			
			<footer>
				<nav className="navbar fixed-bottom navbar-dark bg-dark">
					<div>
						Powered by <Link to="http://developers.themoviedb.org" target="_blank">TMDB</Link> & <Link to="http://www.josephadamvelez.com" target="_blank">Joe Velez</Link>
					</div>
				</nav>
			</footer>
			
		);
	}
});

module.exports = LayoutFooterComponent;