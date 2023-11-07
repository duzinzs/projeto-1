function setup() {
    createCanvas(400,400);
    background(" purple");
  }
  
  function draw() {
    stroke("red");
    fill ("blue");
    
    if(mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
    