let spriteSheet;
let frameCount = 22;
let frameWidth = 961 / 22;
let frameHeight = 37;
let currentFrame = 0;
let bgMusic;

function preload() {
  spriteSheet = loadImage('索尼克move/run.png');
  bgMusic = loadSound('索尼克move/music.mp3'); // 請將音樂檔放在此路徑
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
  userStartAudio();
  if (bgMusic) {
    bgMusic.loop();
  }
}



function draw() {
  background('#006000');
  let x = (width - frameWidth) / 2;
  let y = (height - frameHeight) / 2;
  let frameToShow = Math.floor(currentFrame);
  image(
    spriteSheet,
    x, y,
    frameWidth*1.5, frameHeight*1.5, 
    frameToShow * frameWidth, 0,
    frameWidth, frameHeight
  );
  currentFrame += 1;
  if (currentFrame >= frameCount) currentFrame = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
