let x, y, d;
let numShapes;
let spacing;

let angle = 0;
let spread = 0;
let opening = true;

let colorPalette = [
  '#7A3045',
  '#8F3D55',
  '#A84E68',
  '#BE627D',
  '#CF7891',
  '#DC8EA3',
  '#E6A4B5',
  '#EDB8C5',
  '#F2CAD4',
  '#F6D9E0',
  '#F9E4E9',
  '#FCEFF2'
];

function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width / 2;
  y = height / 2;

  d = width / 2;

  numShapes = 12;

  spacing = d / numShapes;

  rectMode(CENTER);

  angleMode(DEGREES);
}


function draw() {
  background(15);

  d = width / 2;

  stroke('#FBE8ED');
  strokeWeight(2);


  for (let i = 0; i < numShapes; i++) {

    fill(colorPalette[i]);

    push();

    translate(x, y);

    // each layer moves in a different direction
    rotate(i * 30);

    translate(spread, 0);

    // slowly rotate each shape
    rotate(i * 15 + angle);


    if (i % 2 == 0) {

      circle(0, 0, d);

    }

    else {

      square(0, 0, d);

    }


    pop();

    d = d - spacing;
  }


  angle = angle + 0.15;


  // slowly open and close
  if (opening == true) {

    spread = spread + 0.4;

    if (spread > width / 8) {
      opening = false;
    }

  }

  else {

    spread = spread - 0.4;

    if (spread < 0) {
      opening = true;
    }

  }
}