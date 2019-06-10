var http = require('http');
var url = require('url');
var querystring = require('querystring');
var static = require('node-static');
var file = new static.Server('.', {
  cache: 0
});


function accept(req, res) {

  switch(req.url) {
    case '/employee.json': 
      file.serve(req, res);
      break;
    case '/00.json': 
      file.serve(req, res);
      break;
    case '/01.json': 
      file.serve(req, res);
      break;
    case '/02.json': 
      file.serve(req, res);
      break;
    case '/03.json': 
      file.serve(req, res);
      break;
    case '/04.json': 
      file.serve(req, res);
      break;
    case '/05.json': 
      file.serve(req, res);
      break;
    case '/06.json': 
      file.serve(req, res);
      break;
    case '/07.json': 
      file.serve(req, res);
      break;
    case '/08.json': 
      file.serve(req, res);
      break;
    case '/09.json': 
      file.serve(req, res);
      break;
    case '/10.json': 
      file.serve(req, res);
      break;
    case '/11.json': 
      file.serve(req, res);
      break;
    default:
      file.serve(req, res);
      break;
  }

}


// ------ запустить сервер -------

if (!module.parent) {
  http.createServer(accept).listen(8080);
} else {
  exports.accept = accept;
}