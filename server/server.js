          var msg = "Hello World!";
console.log(msg);

var express = require ('express');
var app = express();

var server = app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
                        
app.use(express.static('pubilc'));

var socket = require('socket.io');
var io = socket(server);

io.sockets.on('connection',newConnection);

function newConnection(socket){
          
          console.log('new connection:'+socket.id); 
          socket.on('mouse',mouseMsg); 
          function mouseMsg(data){
                    
             socket.broadcast.emit('mouse',data);
             console.log(data);        
          }
}
