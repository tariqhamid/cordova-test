# cordova-test
##Amber Smalltalk with Cordova/Phonegap

####cd www
####bower install
####npm install
####cd ..
####cordova serve


Added the code below to cordova-lib/blob/master/cordova-lib/src/cordova/serve.js
to enable writing back of source files from cordova project "platforms" directory
to cordova project directory "www" :

```javascript
server.app.get('/' + platform + '/*', getPlatformHandler(platform, locations.www, locations.configXml));

// https://github.com/apache/cordova-lib/blob/master/cordova-lib/src/cordova/serve.js
server.app.put('/' + platform + '/*', function (req, res, next) {
  var file    = locations.www + '/../..' + url.parse(req.url).pathname;
  var stream  = fs.createWriteStream(file);
  var file2   = './' + req.url.split('/').slice(2).join('/');
  var stream2 = fs.createWriteStream(file2);

  stream.on('error', function(error) {
    res.writeHead(400, {'Content-Type' : 'text/plain',
                        'Access-Control-Allow-Origin' : '*'});
    res.write('File could not be created. Did you forget to create the src directory on the server?');

    res.end();
  });
  stream.on('close', function() {
    res.writeHead(201, {'Content-Type' : 'text/plain',
                        'Access-Control-Allow-Origin' : '*'});
    res.end();
  });
  req.setEncoding('utf8');
  req.on('data', function(data) {
    //console.log(data);
    stream.write(data);
    stream2.write(data);
  });
  req.on('end', function() {
    stream.end();
    stream2.end();
  });

  ///next(); // pass control to the next handler
})
```
