import React from 'react';
import { LayoutInteriorComponent, LayoutHeaderComponent, LayoutFooterComponent } from 'app/modules/layout/LayoutModule';
import { LightboxController } from 'app/modules/lightbox/LightboxModule';
import {Redirect, Route, Routes, Navigate} from "react-router-dom";
import {IndexComponent} from "IndexComponent";

import {AppRoutes} from 'app/modules/routes/RoutesModule';

const routeComponents = AppRoutes.map(({path, element, redirectTo}, key) =>
	redirectTo
	? <Route exact path={path} element={<Navigate to={redirectTo} />} key={key} />
	: <Route exact path={path} element={element} key={key}  />

);

export class Main extends React.Component {
	// constructor(props) {
	// 	super(props);
	// }
	render(){
		return(
			<div className="app-wrapper">

				{/* header */}
				<LayoutHeaderComponent/>

				{/* interior */}
				<LayoutInteriorComponent children={this.props.children} />

				<Routes>
					{routeComponents}
				</Routes>

				{/* footer */}
				<LayoutFooterComponent/>

				<LightboxController/>

			</div>
		)
	}
}

// let Main = (props) => {
// 	return (
// 		<div className="app-wrapper">
//
// 			{/* header */}
// 			<LayoutHeaderComponent/>
//
// 			{/* interior */}
// 			<LayoutInteriorComponent children={props.children} />
//
// 			{/* footer */}
// 			<LayoutFooterComponent/>
//
// 			<LightboxController/>
//
// 		</div>
// 	);
// }
//
// module.exports = Main;
