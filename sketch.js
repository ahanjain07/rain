var drop,rain=[];

function setup() {
  createCanvas(windowWidth,windowHeight);
  for(var i=0; i<1000;i++){
   drop=new Drop(random(0,width),random(0,height))
   rain.push(drop); 
  }
  
}

function draw() {
  background("black");
  for(var i=0;i<rain.length;i++){
    rain[i].display()
    rain[i].fall()
  }  
  
}