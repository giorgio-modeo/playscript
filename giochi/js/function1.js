document.onkeydown = function(blocco_tasti) {
 if(event.keyCode == 123){ return false; }
 if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'I'.charCodeAt(0)) { return false; }
 if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'C'.charCodeAt(0)) { return false; }
 if(blocco_tasti.ctrlKey && blocco_tasti.shiftKey && blocco_tasti.keyCode == 'J'.charCodeAt(0)) { return false; }
 if(blocco_tasti.ctrlKey && blocco_tasti.keyCode == 'U'.charCodeAt(0)){ return false; }
 if (blocco_tasti.keyCode == 'D'.charCodeAt(0)){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: 0.02, y: 0 });}
 if (blocco_tasti.keyCode == 'A'.charCodeAt(0)){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: -0.02, y: 0 });}
}
function tSP(){var tasto = window.event.keyCode;if (tasto == 32){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: 0, y: -0.06 });}}

var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();

var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: window.innerWidth - 10,
    height: window.innerHeight,
    wireframes: false
  }
});

//                              x    y width  height   modifiche
var topWall = Bodies.rectangle(window.innerWidth -(window.innerWidth / 2), 0,  window.innerWidth, 20, { isStatic: true });
var leftWall = Bodies.rectangle(0, window.innerHeight -(window.innerHeight / 2), 20, window.innerHeight, { isStatic: true });
var rightWall = Bodies.rectangle(window.innerWidth - 15, window.innerHeight -(window.innerHeight / 2), 20, window.innerHeight, { isStatic: true });
var bottomWall = Bodies.rectangle(window.innerWidth -(window.innerWidth / 2), window.innerHeight, window.innerWidth, 20, { isStatic: true });

var p1 = Bodies.rectangle(window.innerWidth - (window.innerWidth - 200), window.innerHeight -100, 80, 5, {isStatic:true});
var p2 = Bodies.rectangle(window.innerWidth - (window.innerWidth - 350), window.innerHeight -150, 80, 5, {isStatic:true});
var p3 = Bodies.rectangle(window.innerWidth - (window.innerWidth - 500), window.innerHeight -200, 80, 5, {isStatic:true});
var p4 = Bodies.rectangle(window.innerWidth - (window.innerWidth - 650), window.innerHeight -250, 80, 5, {isStatic:true});

var ball = Bodies.circle(90, window.innerHeight - 20, 20,{frictionAir: 0.06, render: {sprite: {texture: 'img/palla.png'}}});

World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, ball, p1, p2, p3, p4]); Engine.run(engine); Render.run(render);



// function tD(){var tasto = window.event.keyCode;if (tasto == 68){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: 0.02, y: 0 });}}
// function tD(){var tasto = window.event.keyCode;if (tasto == 68){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: 0.02, y: 0 });}}
// function tA(){var tasto = window.event.keyCode;if (tasto == 65){Body.applyForce( ball, { x: ball.position.x, y: ball.position.y }, { x: -0.02, y: 0 });}}
