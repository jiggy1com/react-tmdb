let React = require('react');
let { Link } = require('react-router');

let hyphenate = require('Hyphenate');
let TVDetailGenresComponent = React.createClass({
	
	// badge badge-primary
	
	render: function(){
		let { genres } = this.props;
		
		return (
			<div id={"tv-external-ids"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Genres</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{genres.map(function(obj){
							let link = "/genre/tv/" + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
							return (
								<Link key={obj.id} to={link}  className={"btn btn-primary mr-1"}>
									{obj.name}
								</Link>
							)
						})}
					</div>
				</div>
				
			</div>
		);
	}
	
});

module.exports = TVDetailGenresComponent;