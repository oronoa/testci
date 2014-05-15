var request = require('superagent');
var expect = require('expect.js');

request.get('localhost:8080').end(function(res){
	console.log('fff');
});
