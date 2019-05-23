let fs = require('fs');
let path = '.';

function pathConcat(pathname) {
	return path + '/' + pathname;
}

function filereader(fsRef, path) {
	return new Promise(function (resolve, reject) {
		fsRef.readFile(path, 'utf8', function (e, d) {

			if (e) reject(e);

			else resolve(JSON.parse(d));
		});
	});
}

function getBuildings(req, res) {
	let path = pathConcat('api' + req.route.path + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(path);
	
	servicePromise
		.then((response) => {
			// let newList = response.results.filter(item => item.price);

			// response.results = newList;

			return response;
		})
		.then((response) => {
			res.json(response);
		});
}

function getUser(req, res) {
	if(req.params.userId === 'all') {

	} else {
		let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(path);
	
	servicePromise
		.then((response) => {
			res.json(response);
		});
	}
	
}

function list(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(path);
	
	servicePromise
		.then((response) => {
			res.json(response);
		});
}

function auth(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);

	console.log(path);
	
	servicePromise
		.then(resp => {
			let answer = resp;
			if (req.body && (req.body.email === 'ss@gmail.com')) {
				answer.info.success = true;
			}

			return answer;
		})
		.then((response) => {
			res.json(response);
		});
}

function universalHandler(req, res) {
	let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
		servicePromise = filereader(fs, path);
	console.log(path);
	servicePromise
		.then((response) => {
			res.json(response);
		});
}


module.exports = { getBuildings, pathConcat, getUser, list, auth, universalHandler };