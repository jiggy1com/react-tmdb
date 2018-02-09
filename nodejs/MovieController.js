
let requestPromise = require('request-promise');

const APIHOST = 'https://api.themoviedb.org/3/';
const APIKEY = '6cdb4ea303aa341e1cbeca1aafb8527a';
const APIREADACCESSTOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2RiNGVhMzAzYWEzNDFlMWNiZWNhMWFhZmI4NTI3YSIsInN1YiI6IjVhNTlhOGFjMGUwYTI2N2ZkNzAwNTc4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.twbf3NBpuwcb0aTAAF71S4AU1xOH70-SbyxhOetpOUs';

let setOptions = function(obj){
	
	let options = {
		uri : APIHOST + obj.path + '?api_key=' + APIKEY,
		method : 'POST',
		json : true,
		qs : {},
		headers : {
			// "Authorization" : "Basic " + new Buffer(credentials.mail.username + ":" + credentials.mail.password).toString("base64"),
			// "Content-Type" : "application/x-www-form-urlencoded; charset=UTF-8"
		}
	};
	
	// extend
	if(obj){
		for(key in obj){
			if(options.hasOwnProperty(key)){
				options[key] = obj[key];
			}else{
				options[key] = obj[key];
			}
		}
	}
	
	return options;
};

exports.getDiscoverMovie = function(req, res){
	let obj = {
		path : 'discover/tv',
		method : 'GET'
	};
	let options = setOptions(obj);
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

exports.getLatest = function(req, res) {
	console.log('getlatest');
	let obj = {
		path : 'movie/latest',
		method : 'GET'
	};
	let options = setOptions(obj);
	let promise = requestPromise(options);
	console.log('options', options);
	promise.then(function(resp){
		let arr = [resp];
		res.json({
			success : true,
			data : [{
				results: arr,
				total_results: arr.length,
				total_pages : 1,
				page : 1
			}]
		});
	})
	.catch(function(err){
		res.json({
			success : false,
			message : err
		});
	});
};

exports.getMoviesByCategory = function(req, res) {
	
	console.log('getMoviesByCategory');
	
	let obj = {
		path : 'movie/'+ req.params.category + '/',
		method : 'GET',
		qs : {
			page : req.params.page
		}
	};
	let options = setOptions(obj);
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

exports.getMovie = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId,
		method : 'GET'
	};
	let options = setOptions(obj);
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

exports.getReviews = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/reviews',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getVideos = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/videos',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getImages = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/images',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getCredits = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/credits',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getKeywords = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/keywords',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getReleaseDates = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/release_dates',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getRecommendations = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/recommendations',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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

exports.getSimilar = function(req, res) {
	let obj = {
		path : 'movie/' + req.params.movieId + '/similar',
		method : 'GET',
		// qs : {
		// 	page : req.params.page
		// }
	};
	let options = setOptions(obj);
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



// module.exports = {
// 	test: function(req, res){
// 		console.log('test works');
// 		res.json({
// 			'it' : 'works'
// 		});
// 	}
// });
