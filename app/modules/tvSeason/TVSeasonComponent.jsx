let React = require('react');

let TVSeasonComponent = React.createClass({
	
	getDefaultProps: function(){
		return {
			heading : ''
		}
	},
	
	render: function(){
		
		let { heading } = this.props;
		
		return(
			<div className={"card mb-5"}>
				<h3 className={"card-header"}>
					{heading}
				</h3>
				<div className={"card-body"}>
					{this.props.children}
				</div>
			</div>
		)
	}
	
});

module.exports = TVSeasonComponent;