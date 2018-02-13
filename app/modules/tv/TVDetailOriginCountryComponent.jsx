let React = require('react');

let TVDetailOriginCountryComponent = React.createClass({
	
	
	render: function(){
		
		let { originCountry } = this.props;
		
		return (
			<div id={"tv-external-ids"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Origin Country</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{originCountry.map(function(val){
							return (
								<div key={val}>
									{val}
								</div>
							)
						})}
					</div>
				</div>
			
			</div>
		)
	}
	
});

module.exports = TVDetailOriginCountryComponent;