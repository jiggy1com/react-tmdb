
let requestPromise = require('request-promise');
let api = require('./API');

exports.getTest = function(req, res){
	res.json({
		needs : 'fixing'
	});
};

exports.getTVByCategory = function(req, res) {
	
	let obj = {
		path : 'tv/'+ req.params.category + '/',
		method : 'GET',
		qs : {
			page : req.params.page
		}
	};
	
	let options = api.setOptions(obj);
	let promise = requestPromise(options);
	
	promise.then(function(resp){
		res.json({
			success : true,
			data : resp
		});
	})
	.catch(function(err){
		res.json({
			success : false,
			message : err
		});
	});
	
};

exports.getTVDetail = function(req, res){
	
	let obj = {
		path : 'tv/' + req.params.tvId,
		method : 'GET',
		qs : {
			append_to_response : 'content_ratings,credits,external_ids,images,keywords,recommendations,similar,videos'
		}
	};
	
	let options = api.setOptions(obj);
	
	api.doRequest(req, res, options);
	
};

// exports.getImages = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/images',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getContentRatings = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/content_ratings',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getCredits = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/credits',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getExternalIds = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/external_ids',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getKeywords = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/keywords',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getRecommendations = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/recommendations',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getSimilar = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/similar',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };
//
// exports.getVideos = function(req, res){
// 	let obj = {
// 		path : 'tv/' + req.params.tvId + '/videos',
// 		method : 'GET'
// 	};
// 	let options = api.setOptions(obj);
// 	api.doRequest(req, res, options);
// };