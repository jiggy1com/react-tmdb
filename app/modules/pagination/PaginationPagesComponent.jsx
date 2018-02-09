let React = require('react');

let PaginationPageComponent = require('./PaginationPageComponent');

let PaginationPagesComponent = React.createClass({
	
	handlePageComponentEvent: function(e){
		this.props.handler({
			page : e.page
		});
	},
	
	render: function(){
		
		let self = this;
		
		let { page, pageArray, handler } = this.props;
		
		if(pageArray.length < 1){
			return (
				<span>
				</span>
			)
		}else{
			
			let pageListHtml = pageArray.map(function(pageNumber) {
				return (
					
					<PaginationPageComponent key={pageNumber} page={page} pageNumber={pageNumber} handler={self.handlePageComponentEvent}>
					</PaginationPageComponent>
				)
			});
			
			return (
				<span>
					{pageListHtml}
				</span>
			)
		}
		
		
	}
});

module.exports = PaginationPagesComponent;