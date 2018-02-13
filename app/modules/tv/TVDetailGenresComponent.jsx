let React = require('react');
let hyphenate = require('Hyphenate');
let TVDetailGenresComponent = React.createClass({
	
	
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
							let link = "#/genre/" + hyphenate.hyphenateAndLowercase(obj.name) + '/' + obj.id;
							return (
								<a key={obj.id} href={link}  className={"badge badge-primary mr-1"}>
									{obj.name}
								</a>
							)
						})}
					</div>
				</div>
				
			</div>
		);
	}
	
});

module.exports = TVDetailGenresComponent;