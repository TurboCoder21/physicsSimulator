var left = false;
var right = false;

var bgimg;
var humanI;
let human;

var sliderSize;
var sliderSpeed;
var sliderGravity;
var sliderMass;



function preload() {
  bgimg = loadImage("skyGround.png");
  humanI = loadImage("redPlayer.png");
}


function setup() {
  createCanvas(1500, 800);
  human = new Human();
  createP("Size~");
  sliderSize=createSlider(80,200,100);
  createP("Speed~ ");
  sliderSpeed= createSlider(5,25,15);
  createP("Gravity~");
  sliderGravity= createSlider(0,10,5);
  createP("Mass~");
  sliderMass= createSlider(5,15,10);
}

function draw() {
  image(bgimg, 0, 0, width, height);
  human.show();
  human.move();
  human.size=sliderSize.value();
  human.xspeed=sliderSpeed.value();
  human.gravity=sliderGravity.value();
  human.mass=sliderMass.value();
}
function keyPressed() {
  if (keyCode == UP_ARROW) {
    human.jump();
  }
  if (keyCode == RIGHT_ARROW) {
    right = true;
  }
  if (keyCode == LEFT_ARROW) {
    left = true;
  }
}

function keyReleased() {
  left = false;
  right = false;
}
