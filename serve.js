var connect=require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic (__dirname)).listen(8000,function(){
console.log(serveStatic);
    console.log(connect);
    console.log(__dirname)
});

//we are using the connect module to connnect to the v8 google chrome engine