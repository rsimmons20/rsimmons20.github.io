var img;
var img1;
var showStartScreen = true;
var TryAgain = false;
var ran = 0;
var people = [
 {name: "Mermaid Man", enemy: "EVIL!"}, {name: "Mr. Turner", enemy: "Dinkleberg..."}, {name: "The Mask", enemy: "Loki"}, {name: "Courage", enemy: "Le Quack"}, {name: "Bill", enemy: "Fiction"}, {name: "Rick Astley", enemy: "Loneliness"}

]
// This function holds the arrays for the quote images and the quotes themselves.
function preload() {
  myImage = [loadImage("assets/MermaidMan.JPG"), loadImage("assets/Dinkleberg.JPG"), loadImage("assets/Mask.JPG"), loadImage("assets/Courage.JPG"), loadImage("assets/Bill.JPG"), loadImage("assets/Astley.JPG")];
  img = loadImage("assets/Meme.JPG");
  mySounds = [loadSound('assets/EVIL.mp3'), loadSound('assets/DINKLE.mp3'), loadSound('assets/STOP.mp3'), loadSound('assets/EEE.mp3'), loadSound('assets/BILLBILL.mp3'), loadSound('assets/GIVEUP.mp3')];
}
// This function is responsible for where the quote image's are located and for adjusting the hue, saturation, and brightness.
function setup() {
  createCanvas(windowWidth, windowHeight);
    colorMode(HSB, width);
  imageMode(CENTER);

}
// This function is responsible for the red background and calls the Rainbow background. It is also responsible for the click for a quote text. It is also responsible for the image of TryAgain's location.
function draw() {
  background (0, width, width);
  if (showStartScreen === true) {
    stroke(0);
    textSize(50);
    var texts = "CLICK FOR A QUOTE!!!"
    text(texts, windowWidth/2-textWidth(texts)/2, height/2);
  }
  else if (TryAgain == true) {
    image(img, 500, 250);
  }
  else if (showStartScreen === false) {
       drawRainbowGradient();
    showQuote(ran);
  }
}
// This funciton is responsible for the Rainbow background that appears when the mouse is clicked.
  function drawRainbowGradient() {
  for (var i = 0; i < width; i++) {
     stroke(i, width, width);
     line(i, 0, i, height);

  }
}
// This function is responsible for where the image resides and how loud the quote is.
function showQuote(quoteNum) {
  image(myImage[quoteNum], width/2, height/2);
  mySounds[quoteNum].setVolume(0.1);
}
// This function tells the enemy of the person in the picture in the console by returning it.
function getEnemies(){
  return people[ran].name + " is enemies with " + people[ran].enemy;
}
// When the mouse is first clicked, it makes the start screen go away and it plays a quote with an image.
// It also tells the person in the image's enemy with getEnemies. It also says that when there is a start
// screen, the volume goes to zero. When TryAgain is true, an image will appear saying that the quote machine
// is broken. This is only done manually.
function mouseClicked() {
  if (showStartScreen === true) {
    showStartScreen = false
    ran = floor(random(6));
     mySounds[ran].play();
     getEnemies();
     console.log(getEnemies());
  }
  else {
    showStartScreen = true
    mySounds[ran].setVolume(0.0);
  }
  if (TryAgain == true) {
      mySounds[ran].setVolume(0.0);
    }
}
