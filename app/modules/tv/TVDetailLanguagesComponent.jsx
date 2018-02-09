let React = require('react');

let TVDetailLanguagesComponent = React.createClass({
	
	
	render: function(){
		
		let { languages } = this.props;
		
		return (
			<div id={"tv-external-ids"} className={"mb-5"}>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						<h2 className={"card-header"}>Languages</h2>
					</div>
				</div>
				
				<div className={"row mb-3"}>
					<div className={"col-12"}>
						{languages.map(function(val){
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

module.exports = TVDetailLanguagesComponent;