let React = require('react');

let LayoutFooterComponent = React.createClass({
	render: function(){
		return (
			
			<footer>
				<nav className="navbar fixed-bottom navbar-dark bg-dark">
					<div>
						Powered by <a href="http://developers.themoviedb.org" target="_blank">TMDB</a> & <a href="http://www.josephadamvelez.com" target="_blank">Joe Velez</a>
					</div>
				</nav>
			</footer>
			
		);
	}
});

module.exports = LayoutFooterComponent;