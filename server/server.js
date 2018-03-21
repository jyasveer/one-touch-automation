const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const redis = require('redis');

const redisClient = redis.createClient();
redisClient.on('connect', function () {
  console.log('redis is connected');
});
redisClient.on('error', (err) => {
  console.log('Error in redis ' + err);
});

// creates a express app where i will hook my services
var app = express();

// middleware example to log the request into a file
app.use((req, res, next) => {
  var log = `${new Date()} : ${req.url} : ${req.method} : ${req.statusCode} : \n`;
  fs.appendFile('server.log', log);
  next();
});

// this is the step where we parse the body as json
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.db = redisClient;
  next();
});

app.use(cors());

app.get('/', function (req, res) {
  res.send('hello! this is a express app!');
});

app.post('/authenticate', function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  if (!username || !password) {
    res.status(400).send({
      message: 'Please enter username and password',
      data: {
        username: username,
        password: password
      }
    });
  }
  redisClient.llen('usernames', function (err, reply) {
    if (err) {
      res.status(400).send(error);
    }
    if (reply > 0) {
      console.log('user list exists');
      redisClient.lrange('usernames', 0, reply, function(err, reply) {
        if (err) {
          res.status(400).send(error);
        }
        if (reply.indexOf(username) != -1) {
          redisClient.hget('users', username, function(err, reply) {
            if (err) {
              res.status(400).send(error);
            }
            if (reply === password) {
              res.send({
                message: 'login successful',
                data: {
                  key: 'login-success',
                  username: username,
                  password: password
                }
              });
            } else {
              res.send({
                message: 'login unsuccessful',
                data: {
                  key: 'login-failure',
                  username: username,
                  password: password
                }
              });
            }
          });
        } else {
          redisClient.rpush('usernames', username, function(err, reply) {
            if (err) {
              res.status(400).send(error);
            }
            console.log(reply);
            redisClient.hset('users', username, password, function(err, reply) {
              if (err) {
                res.status(400).send(error);
              }
              res.send({
                message: 'user created',
                data: {
                  key: 'user-created',
                  username: username,
                  password: password
                }
              });
            });
          });
        }
      });
    } else {
      console.log('user list doesn\'t exist');
      redisClient.rpush('usernames', username, function(err, reply) {
        if (err) {
          res.status(400).send(error);
        }
        console.log(reply);
        redisClient.hset('users', username, password, function(err, reply) {
          if (err) {
            res.status(400).send(error);
          }
          res.send({
            message: 'user created',
            data: {
              key: 'user-created',
              username: username,
              password: password
            }
          });
        });
      });
    }
  });
});

app.get('/data/os', (req, res) => {
  redisClient.get('supported-os-family', function(err, reply) {
    if (err) {
      res.status(400).send(err);
    }
    res.send({
      message: 'os data',
      data: reply
    });
  });
});

app.get('/data/:location', (req, res) => {
  var location = req.params.location;
  redisClient.get(location, function(err, reply) {
    if (err) {
      res.status(400).send(err);
    }
    res.send({
      message: 'data for location: ' + location,
      data: reply
    });
  });
});

app.post('/create-vm', (req, res) => {
  var vm = req.body.vm;
  console.log('vm object', vm);
  res.send({
    message: 'vm created',
    data: vm
  });
});

app.post('/create-vc', (req, res) => {
  var data = req.body.data;
  var location = req.body.location;
  redisClient.set(location, data, function(err, reply) {
    if (err) {
      res.status(400).send(err);
    }
    res.send({
      message: 'data for `' + location + '` is updated.',
      data: {reply, data}
    });
  });
});

app.listen(8082, () => {
  console.log('server is started in port 8082!');
});
