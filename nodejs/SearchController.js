
let requestPromise = require('request-promise');
let api = require('./API');

exports.getMulti = function(req, res){
	
	console.log('body', req.body);
	
	let obj = {
		path : 'search/multi',
		method : 'GET',
		qs : {
			query : req.body.search,
			page : 1
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

exports.getMovie = function(req, res){
	
	console.log('body', req.body);
	
	let obj = {
		path : 'search/movie',
		method : 'GET',
		qs : {
			query : req.body.search,
			page : 1
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

exports.getTV = function(req, res){
	
	console.log('body', req.body);
	
	let obj = {
		path : 'search/tv',
		method : 'GET',
		qs : {
			query : req.body.search,
			page : 1
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

exports.getPerson = function(req, res){
	
	console.log('body', req.body);
	
	let obj = {
		path : 'search/person',
		method : 'GET',
		qs : {
			query : req.body.search,
			page : 1
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};
