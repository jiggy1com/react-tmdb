let React = require('react');

let TVDetailProductionCompaniesComponent = React.createClass({
	
	
	render: function(){
		
		let { productionCompanies } = this.props;
		
		return (
			<div id={"tv-credits"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Production Companies</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{productionCompanies.map(function(obj){
							return (
								<div key={obj.id}>
									{obj.name}
								</div>
							)
						})}
					</div>
				</div>
				
			</div>
		)
	}
	
});

module.exports = TVDetailProductionCompaniesComponent;