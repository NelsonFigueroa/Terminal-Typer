const terminal = document.querySelector("#terminal");
const div = document.querySelector("#empty");
const resetButton = document.querySelector("#reset-button")
const whiteButton = document.querySelector("#white-button")
const blueButton = document.querySelector("#blue-button")
const greenButton = document.querySelector("#green-button")


var outputCode =
  `const terminal = document.querySelector("#terminal");<br>
  var parsedCode = outputCode.split(" ")<br>
  var i = 0;<br>
  function addCode() {<br>
  &emsp;&emsp;terminal.innerHTML += parsedCode[i] + " ";<br><br>
  &emsp;&emsp;if (i == parsedCode.length - 1) {<br>
  &emsp;&emsp;&emsp;&emsp;i = 0;<br>
  &emsp;&emsp;else {<br>
  &emsp;&emsp;&emsp;&emsp;i += 1;<br>
  &emsp;&emsp;}<br>
  }<br><br>
  document.addEventListener("keydown", addCode, false);<br>
  `

var parsedCode = outputCode.split(" ")
var i = 0;

function addCode() {

  // Output to <p> tags
  terminal.innerHTML += parsedCode[i] + " ";
  // Scroll view automatically to <div> under <p> tag
  div.scrollIntoView();

  if (i == parsedCode.length - 1) {
    i = 0;
  }
  else {
    i += 1;
  }
}

function reset() {
  terminal.innerHTML = "";
  i = 0;
  console.log("Reset Clicked!");
}

function changeColor(color) {
  terminal.style.color = color;
}

document.addEventListener("keydown", addCode, false);
resetButton.addEventListener("click", reset, false);
whiteButton.addEventListener("click", function() { changeColor('white'); } , false);
blueButton.addEventListener("click", function() { changeColor('#006AB1'); } , false);
greenButton.addEventListener("click", function() { changeColor('#00DE5B'); } , false);
