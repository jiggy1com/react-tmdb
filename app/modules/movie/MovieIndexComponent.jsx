let React = require('react');


// let MoviePopularComponent = require('./MoviePopularComponent');

let MovieIndexComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h1 className="heading">Movies</h1>
				<p>These are not the droids you're looking for.</p>
			</div>
		);
	}
});

module.exports = MovieIndexComponent;