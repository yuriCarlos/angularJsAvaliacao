var http = require('http');
var express = require('express');
var path = require('path');

const router = express()
const server = http.createServer(router)
console.log(path.resolve(__dirname, 'client'))
router.use(express.static(path.resolve(__dirname, 'client')));

var port = process.env.PORT || 3000;

server.listen(port, () =>{
	console.log("http://localhost:" + port)
})