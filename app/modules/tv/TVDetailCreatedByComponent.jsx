let React = require('react');
let camelCase = require('CamelCase');
let hyphenate = require('Hyphenate');

let TVDetailCreatedByComponent = React.createClass({
	
	renderHtml: function(){
		
		let { createdBy } = this.props;
		
		if(createdBy.length === 0){
			return null
		}else{
			return (
				createdBy.map(function(obj){
					
					let linkName = hyphenate.hyphenate(obj.name);
					let href = '#/person/' + linkName + '/' + obj.id;
					let src = '//image.tmdb.org/t/p/' + 'w185' + obj.profile_path;
					
					return (
						<div key={obj.id} className={"col"}>
							<a href={href}>
								<img src={src} />
								{obj.name}
							</a>
						</div>
					)
				})
			)
		}
		
		
	},
	
	render: function(){
		
		let html = this.renderHtml();
		
		return (
			<div id={"tv-created-by"}>
				<div className={"container-fluid"}>
					<div className={"row mb-3"}>
						<div className={"col-12"}>
							<h2 className={"card-header"}>Created By</h2>
						</div>
					</div>
					<div className={"row"}>
						{html}
					</div>
				</div>
			</div>
		)
	}
	
});

module.exports = TVDetailCreatedByComponent;