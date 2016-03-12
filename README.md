# express-rest-router

REST style path to express router

This package just inject and replace `path-to-regexp` into `rest-to-regexp` of `express/lib/router`.

Fully compatible with express.Router.

## Usage

```javascript
var restToRegexp = require('rest-to-regexp');
```

For more usage of path rules, look inside the [path-to-regexp](https://github.com/dashdots/rest-to-regexp#README.md)

## Sample

```javascript
var express = require('express');
var RestRouter = require('express-rest-router');
var restRouter = RestRouter();

restRouter.get('/article/#filter(date|id)/+from/*to/:list<page>?.html', function(req, res){
  res.send(req.params);
  res.end();
});

//or

restRouter.get({
  path:'/news/#filter/+from/*to/:list<page>?.html'
  rules:{
    filter: 'date|id',
  }
}, function(req, res){
  res.send({info:'from rest router', params: req.params});
  res.end();
});

/*
matches
  /article/list
  /article/list/
  /article/filter/id/from/10/list/1.html
  /article/filter/id/from/10/to/200/list/1.html

not match
  /article/filter/unknown/list
  /article/filter/id/to/200/list
  /article/filter/id/from/to/200/list/1.html
  /article/filter/id/from/10/to/list/1.html
*/

var app = express();
app.use(restRouter);

app.listen(3000, function(){
  console.log('listen on 3000');
});
```


```
GET /article/filter/id/from/10/to/200/list/1.html
-------------------------------------------------
req.params: {
    filter: 'id',
    from: 10,
    to: 200,
    page: 1,
}
```

## License

MIT
