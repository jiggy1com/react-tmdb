let React = require('react');

/*
original html
<div className="container-fluid interior-wrapper">
	<div className="row">
		<div className="col-12">
			{props.children}
		</div>
	</div>
</div>
*/

let LayoutInteriorComponent = (props) => {
	return (
		<div>
			{props.children}
		</div>
	);
};

module.exports = LayoutInteriorComponent;