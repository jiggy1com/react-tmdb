let React = require('react');

let PaginationNextComponent = React.createClass({
	render: function(){
		return (
			<button className={"btn btn-primary"} onClick={this.props.handler}>
				<span className={"fa fa-chevron-right"}></span>
			</button>
		);
	}
});

module.exports = PaginationNextComponent;