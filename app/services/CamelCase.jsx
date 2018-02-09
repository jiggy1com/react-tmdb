let React = require('react');

let CamelCase = React.createClass({
	
	getDefaultProps: function(){
		return {
			str : ''
		}
	},
	
	setCamelCase: function(str){
		let arr = str.split(' ');
		let returnThis = [];
		arr.forEach(function(word){
			returnThis.push( word.charAt(0).toUpperCase() + word.slice(1, word.length) );
		});
		return returnThis.join(' ');
	},
	
	render: function(){
		let { str } = this.props;
		let camelCaseVersion = this.setCamelCase(str);
		return (
			<span>
				{camelCaseVersion}
			</span>
		)
	}
	
});

module.exports = CamelCase;
