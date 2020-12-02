// █████████████████████████████████████████████████
// ★
// ART102 MM Fall 2020 Studio 9: Drawing Game
// Code:  YIN YU 
// ★
// Sources: https://www.youtube.com/watch?v=bjULmG8fqc8
// █████████████████████████████████████████████████


var socket;

// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
//   setup drawing environment  
// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  cursor(CROSS);
  socket = io.connect('http://localhost:3000');
  socket.on ('mouse',newEvent);
}

// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
//   recieve event 
// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

function newEvent (data){
  noStroke();  
  fill(50,200,random(150,255),50);
  ellipse(data.x,data.y,random(10,30));
          
}

// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂
//   create a brush 
// ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂

function mouseDragged() {
   var data = {
             x: mouseX,
             y: mouseY
             
   }
  

  socket.emit('mouse',data);   
  noStroke();  
  fill(255,0,random(150,255),50);
  ellipse(mouseX,mouseY,random(10,30));
          }
 












