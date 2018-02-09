let React = require('react');

let PaginationLastComponent = React.createClass({
	render: function(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-right"}></span>
				<span className={"fa fa-chevron-right"}></span>
			</button>
		);
	}
});

module.exports = PaginationLastComponent;