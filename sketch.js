function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);

  blendMode(SOFT_LIGHT)

  fill("red")
  redcircle = circle(300, 175, 250, 50);
  
  fill("blue")
  bluecircle = circle(200, 300, 250, 50);
  
  fill("lime")
  limecircle = circle(400, 300, 250, 50);
  
  blendMode(BLEND)
}
