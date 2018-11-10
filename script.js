const terminal = document.querySelector("#terminal");
const cursor = document.querySelector("#cursor");
const div = document.querySelector("#empty");
const resetButton = document.querySelector("#reset-button");
const whiteButton = document.querySelector("#white-button");
const blueButton = document.querySelector("#blue-button");
const greenButton = document.querySelector("#green-button");

var outputCode = [
  'textfile = input("Enter filename: ")',
  '<br>',
  'fh = open(textfile, "r") #read file',
  '<br>',
  'fh.seek(0)',
  '<br>',
  '#Read from file and save each line to array',
  '<br>',
  'lines = []',
  '<br>',
  'for line in fh:',
  '<br>',
  '&emsp;',
  '&emsp;',
  'line_array = line.split("\\n")',
  '<br>',
  '&emsp;',
  '&emsp;',
  'lines.append(line_array[0])',
  '<br>',
  'fh.close()'
];

var bool = true;
var cursorColor = ''; // Default is white, this is used for blinkCursor()
var x = 0; // To keep track of lines in outputCode array
var i = 0; // To keep track of characters

function addCode() {

  // Split line by characters
  code = outputCode[x].split("");

  // If line is a tab or <br>, print immediately and go to next line
  if (outputCode[x] == '&emsp;' || outputCode[x] == '<br>') {
    terminal.innerHTML += outputCode[x];
    x += 1;
    return;
  }

  // If there are more characters in line, print them
  if (i < code.length - 1) {
    terminal.innerHTML += code[i];
    i += 1; // increment iterator
    return;
  }
  // If there are no more characters, reset iterator.
  else if (i == code.length - 1) {
    i = 0; // reset character iterator

    // If there are more lines in array, go to next line
    if (x < outputCode.length - 1) {
      x += 1;
    }
    // If it is the last line, reset to 0
    else {
      x = 0;
      code = outputCode[x].split("");
      terminal.innerHTML += '<br><br>';
    }
  }

}

// Scroll view automatically to <div> under <p> tag
div.scrollIntoView();

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
blueButton.addEventListener("click", function() { changeColor('#2f52e0'); } , false); // Blue color
greenButton.addEventListener("click", function() { changeColor('#0cf574'); } , false); // Green color
