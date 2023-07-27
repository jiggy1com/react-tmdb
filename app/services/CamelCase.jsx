import React from 'react';

export class CamelCase extends React.Component {

	setCamelCase(str){
		let arr = str.split(' ');
		let returnThis = [];
		arr.forEach(function(word){
			returnThis.push( word.charAt(0).toUpperCase() + word.slice(1, word.length) );
		});
		return returnThis.join(' ');
	}

	render(){
		let { str } = this.props;
		let camelCaseVersion = this.setCamelCase(str);
		return (
			<span>
				{camelCaseVersion}
			</span>
		)
	}

}

CamelCase.defaultProps = {
	str : ''
}
