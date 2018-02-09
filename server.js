let express = require('express');
let path = require('path');
let app = new express();
const PORT = process.env.PORT || 8888;

// routes
require('./nodejs/routes')(app);

// headers

// app.use(function(req){
// 	if(req.headers['x-forwarded-proto'] === 'https'){
// 		res.redirect('http://' + req.hostname + req.url);
// 	}else{
// 		next();
// 	}
// });

// static path
app.use(express.static('public'));

//
// TV
//

// latest, popular, top rated, on the air, airing today
// app.get('/api/v1/tv/:category/:page', function(req, res){
//
// 	// set page to first page if page is not passed in
// 	if(!req.params.page){
// 		req.params.page = 1;
// 	}
//
// 	let obj = {
// 		path : 'tv/' + req.params.category ,
// 		method : 'GET',
// 		qs : {
// 			page : req.params.page
// 		}
// 	};
// 	let options = setOptions(obj);
// 	let promise = requestPromise(options);
//
// 	promise.then(function(resp){
// 		res.json({
// 			success : true,
// 			data : resp
// 		});
// 	})
// 	.catch(function(err){
// 		res.json({
// 			success : false,
// 			message : err
// 		});
// 	});
//
// });

// tv details
// app.get('/api/v1/tv/detail/:id', function(req, res){
//
// 	let obj = {
// 		path : 'tv/' + req.params.id,
// 		method : 'GET',
// 		qs : {
// 			page : req.params.page
// 		}
// 	};
// 	let options = setOptions(obj);
// 	let promise = requestPromise(options);
//
// 	promise.then(function(resp){
// 		res.json({
// 			success : true,
// 			data : resp
// 		});
// 	})
// 	.catch(function(err){
// 		res.json({
// 			success : false,
// 			message : err
// 		});
// 	});
//
// });

app.use(function(req, res){
	console.log('NodeJS Unknown Route for ' + req.hostname + req.path);
	res.type('text/html');
	res.sendFile('index.html', { root: path.resolve(__dirname, 'public') });
});

app.listen(PORT, function(){
	console.log('react web server is running on port 8888');
});