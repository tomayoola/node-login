
/**
	* Node.js Login Boilerplate
	* More Info : http://kitchen.braitsch.io/building-a-login-system-in-node-js-and-mongodb/
	* Copyright (c) 2013-2016 Stephen Braitsch
**/

var http = require('http');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan   = require('morgan');
var errorHandler = require('errorhandler');
var cookieParser = require('cookie-parser');
var MongoStore = require('connect-mongo')(session);
var methodOverride = require('method-override');

var app = express();

app.locals.pretty = true;
app.set('port', process.env.PORT || 3000); //3000 not docker 8080 docker
app.set('views', __dirname + '/app/server/views');
app.set('view engine', 'jade');
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(require('stylus').middleware({ src: __dirname + '/app/public' }));
app.use(express.static(__dirname + '/app/public'));

// build mongo database connection url //

/*var dbHost = process.env.DB_HOST || 'localhost'
var dbPort = process.env.DB_PORT || 27017;
var dbName = process.env.DB_NAME || 'node-login';

var dbURL = 'mongodb://'+dbHost+':'+dbPort+'/'+dbName;*/
var dbURL = 'mongodb://appdbo:MiTSBWUinz7Dy40Dud5zaTzrxHGkoYHCxuSD4975QryN3wsiahhpHknGKdRVzwWt6i0WeitkPEtiLO5c1JwXcQ==@appdbo.documents.azure.com:10255/?ssl=true';
if (app.get('env') == 'live'){
// prepend url with authentication credentials //
	dbURL = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@'+dbHost+':'+dbPort+'/'+dbName;
}

mongoose.connect(dbURL);

app.use(session({
	secret: 'faeb4453e5d14fe6f6d04637f78077c76c73d1b4',
	proxy: true,
	resave: true,
	saveUninitialized: true,
	store: new MongoStore({ url: dbURL })
	})
);

require('./app/server/routes')(app);

/*const PORT = 8080;
const HOST = '0.0.0.0';
app.listen(PORT, HOST);
console.log("test");*/


http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
  console.log('server is running');
});
