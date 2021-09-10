var rains = [];

function setup() {
  
  createCanvas(windowWidth, windowHeight + 1000);
  
   background(color(173, 216, 230));
  
   for(var i = 0;i<1000;i++){
    rains[i] = {
      x : random(width),
      y : random(250*10, 150),
      h : 10,
      
      display : function(){
        stroke(255);
        strokeWeight(4);
        line(this.x,this.y,this.x,this.y+10);
      },
      move : function(){
        if(this.y>height) {
          this.y = 175;
        }
        this.y = this.y + 5;
      }
    };
  }
}


function draw() {
  
   background(0,100,255);
  for(var i = 0; i<rains.length; i++){
  rains[i].display();
  rains[i].move();
}
  
       //light green grass
   
   strokeWeight(0);
   
  fill(144, 238, 144);
  
    rect(0,500,1800,1800);
    
       //white clouds
       
  fill("grey");
 
 strokeWeight(0);
  
    ellipse(150,150,100,100);
    ellipse(180,180,100,100);
    ellipse(210,140,100,100);
    ellipse(240,160,100,100);
    ellipse(270,150,100,100);
    ellipse(550,140,100,100);
    ellipse(580,120,100,100);
    ellipse(610,170,100,100);
    ellipse(640,160,100,100);
    ellipse(670,130,100,100);  
    ellipse(950,160,100,100);
    ellipse(980,130,100,100);
    ellipse(1010,150,100,100);
    ellipse(1040,130,100,100);
    ellipse(1070,170,100,100);
    
    
    
    
}
