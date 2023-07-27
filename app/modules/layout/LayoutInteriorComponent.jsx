import React from 'react';
import {Route, Routes} from "react-router-dom";
import {IndexComponent} from "IndexComponent";
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

export class LayoutInteriorComponent extends React.Component {
	render(){
		return (
			<div>
				{/*{this.props.children}*/}
			</div>
		);
	}
}
