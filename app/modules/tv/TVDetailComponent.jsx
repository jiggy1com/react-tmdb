let React = require('react');

let TVDetailComponent = React.createClass({
	render: function(){
		return (
			<div className={"card mb-5"}>
				<div className={"card-body"}>
					{this.props.children}
				</div>
			</div>
		)
	}
});

module.exports = TVDetailComponent;