let React = require('react');
let { Link } = require('react-router');

let hyphenate = require('Hyphenate');

let TVDetailKeywordsComponent = React.createClass({
	
	render: function(){
		
		let { keywords } = this.props;
		
		return (
			<div id={"tv-keywords"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Keywords</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{keywords.map(function(obj){
							
							let link = '/keywords/' + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
							return (
								<Link key={obj.id} to={link}  className={"badge badge-primary mr-1"}>
									{obj.name}
								</Link>
							)
							
						})}
					</div>
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailKeywordsComponent;