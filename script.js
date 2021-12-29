var x;
var y;
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var time = 0;
var timeSum = 0;
var lettersNum = 10;
var letterCount = 0;
var start = false;

function test(event) {
  if (start === true) {
    letterCount++;
    if (letterCount < lettersNum) {
      x = String.fromCharCode(event.which) || String.fromCharCode(event.keyCode); //use one of another depending on the browser support -> get the pressed key
      if (x == y) {
        timeSum += new Date().getTime()-time;
      } else {
        document.getElementById("box").style.backgroundColor = "#ee8e8e";
        document.getElementById("letters").style.fontSize = "40px";
        document.getElementById("letters").style.fontFamily = "monospace";
        document.getElementById("letters").innerHTML = "FAIL";
        x = "";
        y = "";
        time = 0;
        timeSum = 0;
        letterCount = 0;
        setTimeout(() => {
          start = false;
          document.getElementById("letters").innerHTML = "";
          document.getElementById("box").style.backgroundColor = "#e0eff4";
          document.getElementById("letters").style.fontSize = "50px";
          document.getElementById("letters").style.fontFamily = "Times";
          document.getElementById("play").style.display = "block";
          document.getElementById("score").innerHTML = "";
        },1000)
        return;
      }
      y = letters[Math.floor(Math.random()*letters.length)];
      document.getElementById("letters").innerHTML = y;
      time = new Date().getTime();
    } else {
      start = false;
      document.getElementById("score").innerHTML = "You typed " + lettersNum + " letters in " + timeSum + " miliseconds";
      document.getElementById("letters").innerHTML = "";
      x = "";
      y = "";
      time = 0;
      timeSum = 0;
      letterCount = 0;
      document.getElementById("play").style.display = "block";
    }
  }
}

function preTest() {
  start = true;
  document.getElementById("score").innerHTML = "";
  document.getElementById("play").style.display = "none";
  document.getElementById("box").style.backgroundColor = "#e0eff4";
  y = letters[Math.floor(Math.random()*letters.length)]
  document.getElementById("letters").innerHTML = y;
  time = new Date().getTime();
}