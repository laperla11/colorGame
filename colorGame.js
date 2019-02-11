var qSelect = selector => {
  return document.querySelector(selector);
};
var qsA = selector => {
  return document.querySelectorAll(selector);
};
var clog = value => {
  return console.log(value);
};

//istenen aralikta rastgele rakam secme
function randomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

//renklerden olusan array belirle
//rastgele RGB  renk kodu belirleme fonksioynu
function randomColor(max) {
  rColors = [];
  for (var i = 0; i < max; i++) {
    var r = randomIndex(256);
    var g = randomIndex(256);
    var b = randomIndex(256);
    rColors.push(`rgb(${r},${g},${b})`);
  } //for
  return rColors;
}

n6colors = randomColor(6); //6 farkli rastgele renk belirleme
n3colors = randomColor(3); //3 farkli rastgele renk belirleme
//clog(n6colors);
//clog(n3colors);

var btnRGB = qSelect("#colorDisplay");
btnRGB.style.backgroundColor = randomColor(1);

//bu rengi ekranda sergile
var newBtn = document.createElement("button");
var parentEl = qSelect("#stripe");
var lastEl = qSelect("#container");
parentEl.insertBefore(newBtn, lastEl);

//kutulara ulas
var messagae = qSelect("#message");
message.style.backgroundColor = "white";
var squares = qsA(".square");

var mode = "easy";
game();

//hard mode
qSelect(".selected").addEventListener("click", function() {
  mode === "hard";
  game(6);
});
///easy mode
qsA(".mode")[0].addEventListener("click", function() {
  game();
});

//new game
qSelect("#reset").addEventListener("click", function() {
  if (mode === "hard") {
    game(6);
  } else {
    game();
  }
});

function game(mode = 3) {
  //default game mode is "easy"
  var totalColors = randomColor(mode); //oyun moduna gore tum renkleri belirleme
  var targetColor = totalColors[randomIndex(totalColors.length)]; //hedef rengi secme ve sergileme
  newBtn.innerText = targetColor;
  newBtn.style.backgroundColor = targetColor;
  squares.forEach((square, i) => {
    //loop thorugh each square element
    square.style.backgroundColor = totalColors[i]; //assigning the colors to each square element
    square.addEventListener("click", function compareColor() {
      //adding eventListener to each saquare
      if (totalColors[i] === targetColor) {
        //if selection is correct this blocks run
        message.innerText = "right";
        message.style.backgroundColor = "green";
      } else {
        //if selection wrong this block runs
        message.innerText = "wrong!";
        message.style.backgroundColor = "red";
      } //else-if
    }); //event listener
  }); //foreach
}
