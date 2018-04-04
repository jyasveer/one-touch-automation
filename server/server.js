const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const redis = require('redis');
const exec = require('child_process').exec;
const curl = require('curlrequest');

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
      res.status(400).send({
        err
      });
    }
    if (reply > 0) {
      console.log('user list exists');
      redisClient.lrange('usernames', 0, reply, function (err, reply) {
        if (err) {
          res.status(400).send({
            err
          });
        }
        if (reply.indexOf(username) != -1) {
          redisClient.hget('users', username, function (err, reply) {
            if (err) {
              res.status(400).send({
                err
              });
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
          redisClient.rpush('usernames', username, function (err, reply) {
            if (err) {
              res.status(400).send({
                err
              });
            }
            console.log(reply);
            redisClient.hset('users', username, password, function (err, reply) {
              if (err) {
                res.status(400).send({
                  err
                });
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
      redisClient.rpush('usernames', username, function (err, reply) {
        if (err) {
          res.status(400).send({
            err
          });
        }
        console.log(reply);
        redisClient.hset('users', username, password, function (err, reply) {
          if (err) {
            res.status(400).send({
              err
            });
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
  redisClient.get('supported-os-family', function (err, reply) {
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
  redisClient.get(location, function (err, reply) {
    if (err) {
      res.status(400).send(err);
    }
    res.send({
      message: 'data for location: ' + location,
      data: reply
    });
  });
});

app.get('/create-vm/id', (req, res) => {
  var curl_username = process.env.ansibletower_userid;
  var curl_password = process.env.ansibletower_password_awx;
  var cmd = "curl -s -k -u " + curl_username + ":" + curl_password + " -X GET -H \'Content-Type: application/json\'";
  var url = " http://p-bng-opseng-awx01.juniper.net/";
  var api = "api/v1/job_templates/";
  var str = "One Touch Automation-Provision Instance";
  var curl_req = cmd + url + api;

  exec(curl_req, function (err, reply) {
    if (err) {
      res.status(400).send({
        err
      });
    }
    if (reply) {
      reply = JSON.parse(reply);
    }
    var data = null;
    if (reply.results) {
      reply.results.forEach((item) => {
        console.log(str);
        console.log(item.name, item.type);
        if (item.name === str && item.type === 'job_template') {
            data = {
              id: item.id,
              url: item.url
            }
        }
      });
    }
    res.send({
      message: 'launch id for creating vm',
      data: data
    });
  });
});

app.get('/delete-vm/id', (req, res) => {
  var curl_username = process.env.ansibletower_userid;
  var curl_password = process.env.ansibletower_password_awx;
  var cmd = "curl -s -k -u " + curl_username + ":" + curl_password + " -X GET -H \'Content-Type: application/json\'";
  var url = " http://p-bng-opseng-awx01.juniper.net/";
  var api = "api/v1/job_templates/";
  var str = "One Touch Automation - Deletion instance";
  var curl_req = cmd + url + api;

  exec(curl_req, function (err, reply) {
    if (err) {
      res.status(400).send({
        err
      });
    }
    if (reply) {
      reply = JSON.parse(reply);
    }
    var data = null;
    if (reply.results) {
      reply.results.forEach((item) => {
        if (item.name === str && item.type === 'job_template') {
            data = {
              id: item.id,
              url: item.url
            }
        }
      });
    }
    res.send({
      message: 'launch id for deleting vm',
      data: data
    });
  });
});

app.post('/create-vm', (req, res) => {
  var vm = req.body.vm;
  var id = req.body.id;
  var curl_username = process.env.ansibletower_userid;
  var curl_password = process.env.ansibletower_password;
  var curl_cmd_post = "curl -s -k -u " + curl_username + ":" + curl_password + " -X POST -H \'Content-Type: application/json\'";
  var url = " https://p-ansible-tower01.juniper.net/api/v1/job_templates/" + id + "/launch/";
  var obj = ' -d  \'' + vm + '\'';
  var curl_req = curl_cmd_post + obj + url;

  exec(curl_req, function (err, stdout, stderr) {
    console.log('/create-vm err', err);
    console.log('/create-vm stdout', stdout);
    console.log('/create-vm stderr', stderr);
    if (err) {
      res.status(400).send({
        err
      });
    } else {
      res.send({
        message: 'create vm job started',
        data: stdout
      });
    }
  });
});

app.post('/delete-vm', (req, res) => {
  var vm = req.body.vm;
  var id = req.body.id;
  var curl_username = process.env.ansibletower_userid;
  var curl_password = process.env.ansibletower_password;
  var curl_cmd_post = "curl -s -k -u " + curl_username + ":" + curl_password + " -X POST -H \'Content-Type: application/json\'";
  var url = " https://p-ansible-tower01.juniper.net/api/v1/job_templates/" + id + "/launch/";
  var obj = ' -d  \'' + vm + '\'';
  var curl_req = curl_cmd_post + obj + url;

  exec(curl_req, function (err, stdout, stderr) {
    console.log('/delete-vm err', err);
    console.log('/delete-vm stdout', stdout);
    console.log('/delete-vm stderr', stderr);
    if (err) {
      res.status(400).send({
        err
      });
    } else {
      res.send({
        message: 'delete vm job started',
        data: stdout
      });
    }
  });
});

app.get('/job/status/:id', (req, res) => {
  var id = req.params.id;
  var curl_username = process.env.ansibletower_userid;
  var curl_password = process.env.ansibletower_password;
  var cmd = "curl -s -k -u " + curl_username + ":" + curl_password + " -X GET -H \'Content-Type: application/json\'";
  var url = " https://p-ansible-tower01.juniper.net/";
  var api = "api/v1/jobs/";
  var curl_req = cmd + url + api + id;

  exec(curl_req, function (err, stdout) {
    if (err) {
      res.status(400).send({
        err
      });
    }
    if (stdout) {
      res.send({
        message: 'job status for id ' + id,
        data: stdout
      });
    }
  });
});

app.post('/create-vc', (req, res) => {
  var data = req.body.data;
  var location = req.body.location;
  redisClient.set(location, data, function (err, reply) {
    if (err) {
      res.status(400).send({
        err
      });
    }
    res.send({
      message: 'data for `' + location + '` is updated.',
      data: {
        reply,
        data
      }
    });
  });
});

app.listen(8082, () => {
  console.log('server is started in port 8082!');
});