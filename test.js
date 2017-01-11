const http = require('http')
const port = 8080
const fs = require('fs')

const requestHandler = (request, response) => {
  if(request.url === "/test"){
   fs.readFile("./test.json", function (err, data) {
     if(err){
       response.writeHead(404);
       response.write("Not Found!");
     }else{
       response.writeHead(200, {'Content-Type': 'text/html'});
       var jsonObj = JSON.parse(data);
       for(var each in jsonObj){
         response.write(each + ' : ' +jsonObj[each] + '\n');
       }
     }
    response.end();
   });
  }

  else if(request.url === "/test1"){
   fs.readFile("./test1.json", function (err, data) {
     if(err){
       response.writeHead(404);
       response.write("Not Found!");
     }else{
       response.writeHead(200, {'Content-Type': 'text/html'});
       var jsonObj = JSON.parse(data);
       for(var each in jsonObj){
         response.write(each + ' : ' +jsonObj[each] + '\n');
       }
     }
    response.end();
   });
  }
  else{
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write("nothing as such" + '\n');
    response.end();
  }
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('Oopz', err)
  }
  console.log(`server is listening on ${port}`)
})
