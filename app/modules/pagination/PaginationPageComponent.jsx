let React = require('react');

let PaginationPageComponent = React.createClass({
	
	notifyPaginationPagesComponent: function(){
		this.props.handler({
			page : this.props.pageNumber
			
		});
	},
	
	render: function(){
		
		let { page, pageNumber } = this.props;
		
		let thisClass = page === pageNumber ? 'btn btn-info' : 'btn btn-primary';
		
		return (
			<button key={pageNumber} className={thisClass} onClick={this.notifyPaginationPagesComponent}>
				{this.props.pageNumber}
			</button>
		);
	}
});

module.exports = PaginationPageComponent;