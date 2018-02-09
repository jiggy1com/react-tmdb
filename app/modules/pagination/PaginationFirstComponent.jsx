let React = require('react');

let PaginationFirstComponent = React.createClass({
	render: function(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-left"}></span>
				<span className={"fa fa-chevron-left"}></span>
			</button>
		);
	}
});

module.exports = PaginationFirstComponent;