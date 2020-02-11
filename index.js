const RADIUS = 100;
let currDeg = 0,
  lastDeg = 0;
let x = 110,
  y = 0;
let xLast = x,
  yLast = y;
let points = [];
let stepSize = 5;
const Point = (x, y, hor = false, back = false) => {
  (this.x = x), (this.y = y), (this.xLast = xLast), (this.yLast = yLast);
  return {
    draw: () => {
      stroke(255, 255, 255);
      x++;
      //console.log(this.xLast, this.yLast, this.x, this.y);
      point(x, y);
      //line(this.xLast, this.yLast, this.x, this.y);
      //point(110 + RADIUS, y);
    }
  };
};
function setup() {
  cnv = createCanvas(1600, 1000);
  background(0);
  //cnv.parent("sketch");
}

function draw() {
  background(0);
  lastDeg = currDeg;
  currDeg += stepSize;
  for (let i = 0; i < currDeg - lastDeg; i++) {
    x = RADIUS * cos(radians(currDeg + i)) + 110;
    y = RADIUS * sin(radians(currDeg + i)) + height / 2;
    points.push(Point(x, y));
    points.push(Point(x, y, false, true));
    points.push(Point(x, y, true));
    points.push(Point(x, y, true, true));
  }
  /*
  x = RADIUS * cos(radians(currDeg)) + 110;
  y = RADIUS * sin(radians(currDeg)) + height / 2;
  xLast = RADIUS * cos(radians(lastDeg)) + 110;
  yLast = RADIUS * sin(radians(lastDeg)) + height / 2;
  noFill();
  //console.log(x, y, xLast, yLast);
  points.push(Point(x, y));
  */
  noFill();
  points.forEach(p => {
    p.draw();
  });
  strokeWeight(5);
  stroke(100, 100, 100);
  ellipse(110, height / 2, 200);
  strokeWeight(10);
  stroke(255, 0, 0);
  point(x, y);
}

$("input").on("change", () => {
  stepSize = $("input").val();
  console.log(stepSize, $("input").val());
});
