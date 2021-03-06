let React = require('react');

// TODO: import font awesome stylesheet to app.jsx

let PaginationFirstComponent = require('./PaginationFirstComponent');
let PaginationPrevComponent = require('./PaginationPrevComponent');
let PaginationNextComponent = require('./PaginationNextComponent');
let PaginationLastComponent = require('./PaginationLastComponent');
let PaginationPagesComponent = require('./PaginationPagesComponent');


let PaginationController = React.createClass({
	
	getInitialState: function(){
		return {
			
			minPages : 1,
			maxPages : 6, // 7
			perPage : 20,
			
			// props
			page : 0,
			total_pages : 0,
			total_results : 0
		}
	},
	
	componentDidMount: function(){
	
	},
	
	first:function(){
		this.props.notifyParent({
			action : 'first'
		});
	},
	
	last: function(){
		this.props.notifyParent({
			action : 'last'
		});
	},
	
	prev:function(){
		this.props.notifyParent({
			action : 'prev'
		});
	},
	
	next:function(){
		this.props.notifyParent({
			action : 'next'
		});
	},
	
	goToPage:function(e){
		console.log('goToPage', e);
		this.props.notifyParent({
			page : e.page
		});
	},
	
	render: function(){
		
		let self = this;
		let pageArray = [];
		let start 	= 1; // 1
		let mid 	= 4; // 4
		let end 	= 7; // 7
		
		let { minPages, maxPages, perPage } = this.state;
		let { page, total_pages, total_results } = this.props;
		
		let pages = (total_results / perPage).toFixed(0);
			pages = total_results % perPage > 0 ? parseInt(pages) + 1 : pages;
		
		// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
		
		if(page === 0){
			return (
				<span>
				</span>
			)
		}else{
			
			start = page < mid ? 1 : page - 3;
			end = page < mid ? 7 : page + 3;
			
			if(end > total_pages){
				end = total_pages;
			}
			
			for(let i=start; i<=end;i++){
				pageArray.push(i);
			}
			
			// if(page < mid){
			// 	for(let i=1; i<=end; i++){
			// 		pageArray.push(i);
			// 	}
			// }else{
			//
			// 	start = page-3;
			// 	end = page+3;
			//
			// 	for(let i=start; i<=end; i++){
			// 		pageArray.push(i);
			// 	}
			// }
			
			return (
				
				<div className={"container-fluid interior-wrapper mb-5"}>
					<div className={"row"}>
						<div className={"col-12 text-center paginationController"}>
							
							<PaginationFirstComponent handler={this.first} page={page} pageArray={pageArray}>
							</PaginationFirstComponent>
							
							<PaginationPrevComponent handler={this.prev} page={page} pageArray={pageArray}>
							</PaginationPrevComponent>
							
							<PaginationPagesComponent handler={this.goToPage} page={page} pageArray={pageArray} start={start} end={end} >
							</PaginationPagesComponent>
							
							<PaginationNextComponent handler={this.next} page={page} pageArray={pageArray}>
							</PaginationNextComponent>
							
							<PaginationLastComponent handler={this.last} page={page} pageArray={pageArray}>
							</PaginationLastComponent>
						
						</div>
					</div>
				</div>
				
				
			);
			
		}
		
	}
});

module.exports = PaginationController;