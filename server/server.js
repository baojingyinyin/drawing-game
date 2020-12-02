var msg = "Hello World!";
console.log(msg);

var express = require ('express');
var app = express();

var server = app.listen(process.env.PORT || 3000);
                        
app.use(express.static('docs'));

var socket = require('socket.io')(httpServer, {
  cors: {
    origin: "https://mighty-meadow-16492.herokuapp.com/",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

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


