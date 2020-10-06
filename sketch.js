var mrect,frect,a,b
function setup() {
  createCanvas(800,400);
 mrect = createSprite(400,100,80,40)
 mrect.shapeColor="green"
 mrect.debug=true
frect=createSprite(200,100,40,80)
frect.shapeColor="green"
frect.debug=true
a=createSprite(50,100,40,80)
a.shapeColor="green"
a.debug=true
b=createSprite(300,100,40,80)
b.shapeColor="green"
b.debug=true
}

function draw() {
  background(0);  
  mrect.x=World.mouseX
  mrect.y=World.mouseY

 if(isTouching(mrect,a)){

  

    a.shapeColor="red"
    mrect.shapeColor="red"
  }
  else{
    
    a.shapeColor="green"
    mrect.shapeColor="green"
  }
  if(isTouching(mrect,b)){

  

    b.shapeColor="red"
    mrect.shapeColor="red"
  }
  else{

    b.shapeColor="green"
    mrect.shapeColor="green"
  }
  if(isTouching(mrect,frect)){

  

    frect.shapeColor="red"
    mrect.shapeColor="red"
  }
  else{

    frect.shapeColor="green"
    mrect.shapeColor="green"
  }


  drawSprites();
}
