var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var particle;
var plinkos = [];
var divisions = [];
var turn=0;
var PLAY=1;
var GAMESTATE=PLAY;


var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  
  
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));

       

       
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : ",20,35);
  Engine.update(engine);
 
  stroke("gold")
  line(2, 498, 800, 498);
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   
   
  
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   
    
     
    }
}

function mousePressed(){
  if(GAMESTATE!=="END"){
    turn++
    particles=new Particle(mouseX,10,10,10);
    
  }
  
}