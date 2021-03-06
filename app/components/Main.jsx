let React = require('react');
let AboutComponent = require('AboutComponent');

import { LayoutComponent, LayoutInteriorComponent, LayoutHeaderComponent, LayoutFooterComponent } from 'LayoutModule';

import { LightboxController } from 'LightboxModule';

let Main = (props) => {
	return (
		<div className="app-wrapper">
			
			{/* header */}
			<LayoutHeaderComponent/>
			
			{/* interior */}
			<LayoutInteriorComponent children={props.children} />
			
			{/* footer */}
			<LayoutFooterComponent/>
			
			<LightboxController/>
			
		</div>
	);
}

module.exports = Main;