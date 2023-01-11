import React from 'react';

export class Hyphenate {

	constructor() {
	}

	hyphenate(str){
		return str.replace(/\s/g, '-');
	}

	hyphenateAndLowercase(str){
		return this.hyphenate(str).toLowerCase();
	}

}
