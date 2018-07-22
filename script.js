const terminal = document.querySelector("#terminal");
const cursor = document.querySelector("#cursor");
const div = document.querySelector("#empty");
const resetButton = document.querySelector("#reset-button");
const whiteButton = document.querySelector("#white-button");
const blueButton = document.querySelector("#blue-button");
const greenButton = document.querySelector("#green-button");


var outputCode =
  `//Begin script.js<br><br>
  const terminal = document.querySelector("#terminal");<br>
  const cursor = document.querySelector("#cursor");<br>
  const div = document.querySelector("#empty");<br>
  const resetButton = document.querySelector("#reset-button");<br>
  const whiteButton = document.querySelector("#white-button");<br>
  const blueButton = document.querySelector("#blue-button");<br>
  const greenButton = document.querySelector("#green-button");<br><br>
  var parsedCode = outputCode.split(" ")<br>
  var i = 0;<br><br>

  function addCode() {<br>
  &emsp;&emsp;terminal.innerHTML += parsedCode[i] + " ";<br>
  &emsp;&emsp;div.scrollIntoView();<br><br>
  &emsp;&emsp;if (i == parsedCode.length - 1) {<br>
  &emsp;&emsp;&emsp;&emsp;i = 0;<br>
  &emsp;&emsp;else {<br>
  &emsp;&emsp;&emsp;&emsp;i += 1;<br>
  &emsp;&emsp;}<br>
  }<br><br>

  function blinkCursor() {<br>
  &emsp;if (bool) {<br>
  &emsp;&emsp;// Change cursor color to same color as the rest of the #terminal<br>
  &emsp;&emsp;cursor.style.color = cursorColor;<br>
  &emsp;&emsp;bool = false;<br>
  &emsp;}<br>
  &emsp;else {<br>
  &emsp;&emsp;// Change cursor color to same color as the background<br>
  &emsp;&emsp;cursor.style.color = 'black';<br>
  &emsp;&emsp;bool = true;<br>
  &emsp;}<br>
  }<br>

  function reset() {<br>
  &emsp;terminal.innerHTML = "";<br>
  &emsp;i = 0;<br>
  }<br><br>

  function changeColor(color) {<br>
  &emsp;// Keep track of color changes for the cursor as well<br>
  &emsp;cursorColor = color;<br>
  &emsp;terminal.style.color = cursorColor;<br>
  &emsp;cursor.style.color = cursorColor;<br>
  }<br><br>

  setInterval(function(){ blinkCursor(); }, 500);<br>
  document.addEventListener("keydown", addCode, false);<br>
  resetButton.addEventListener("click", reset, false);<br>
  whiteButton.addEventListener("click", function() { changeColor('white'); } , false);<br>
  blueButton.addEventListener("click", function() { changeColor('#006AB1'); } , false);<br>
  greenButton.addEventListener("click", function() { changeColor('#00DE5B'); } , false);<br><br>
  //End script.js<br><br>
  `

var parsedCode = outputCode.split(" ")
var bool = true;
var cursorColor = ''; // Default is white, this is used for blinkCursor()
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

function blinkCursor() {
  if (bool) {
    // Change cursor color to same color as the rest of the #terminal
    cursor.style.color = cursorColor;
    bool = false;
  }
  else {
    // Change cursor color to same color as the background
    cursor.style.color = 'black';
    bool = true;
  }
}


function reset() {
  terminal.innerHTML = "";
  i = 0;
}

function changeColor(color) {
  // Keep track of color changes for the cursor as well
  cursorColor = color;
  terminal.style.color = cursorColor;
  cursor.style.color = cursorColor;
}

// Set interval used for cursor blink

setInterval(function(){ blinkCursor(); }, 500);
document.addEventListener("keydown", addCode, false);
resetButton.addEventListener("click", reset, false);
whiteButton.addEventListener("click", function() { changeColor('white'); } , false);
blueButton.addEventListener("click", function() { changeColor('#006AB1'); } , false); // Blue color
greenButton.addEventListener("click", function() { changeColor('#00DE5B'); } , false); // Green color
