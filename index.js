var express = require('express');
var bodyParser = require('body-parser')

const MqttBroker =   require('./mqtt-broker').MqttBroker;
var Api =  require('./api').Api;

var broker = new MqttBroker();

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


var mqtt = require('mqtt');



app.use('/api',new Api());

app.use('/', express.static('public'));
// respond with "hello world" when a GET request is made to the homepage
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });
  