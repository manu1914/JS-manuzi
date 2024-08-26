function setup() {
    createCanvas(600, 600);
     background("white");
  }
  
  
  function draw() {
    
    stroke ("rgb(245,4,136)");
    fill ("pink");
    
    
     // console.log(mouseIsPressed);
    
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }