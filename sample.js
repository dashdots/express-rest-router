var express = require('express');
var RestRouter = require('./index'); // change to require('express-rest-router') in your code
var restRouter = RestRouter();

restRouter.get('/article/#filter(date|id)/+from/*to/:list<page>?.html', function(req, res) {
  res.send(req.params);
  res.end();
});

var app = express();
app.use(restRouter);

app.listen(3000, function(){
  console.log('listen on 3000');
});


