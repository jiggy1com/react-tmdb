let React = require('react');

let PaginationPrevComponent = React.createClass({
	render: function(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-left"}></span>
			</button>
		);
	}
});

module.exports = PaginationPrevComponent;