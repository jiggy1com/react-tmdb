let React = require('react');

let Hyphenate = {

	hyphenate: function(str){
		return str.replace(/\s/g, '-');
	},
	
	hyphenateAndLowercase: function(str){
		return this.hyphenate(str).toLowerCase();
	}
	
};

module.exports = Hyphenate;