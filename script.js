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
  "&emsp;",
  "&emsp;",
  'line_array = line.split("\n")',
  '<br>',
  "&emsp;",
  "&emsp;",
  'lines.append(line_array[0]) #Add to lines[]',
  '<br>',
  'fh.close()'
];

var bool = true;
var cursorColor = ''; // Default is white, this is used for blinkCursor()
var x = 0 // To keep track of lines in outputCode array
var i = 0; // To keep track of characters

// Get initial line, split by characters
code = outputCode[x].split("");

function addCode() {

  terminal.innerHTML += code[i];

  // Scroll view automatically to <div> under <p> tag
  div.scrollIntoView();

  // If last character is reached, reset character iterator to 0
  if (i == code.length - 1) {
    i = 0;

    // If last line is reached in array, start over
    if (x == outputCode.length - 1) {
      terminal.innerHTML += '<br><br>';
      x = 0;
      code = outputCode[x].split("");
    }
    // If it isn't the last line, go to next line
    else {
      x += 1;
      code = outputCode[x].split("");
    }

    // If next line is <br> or &emsp; (tab), print immediately
    if (outputCode[x] == '<br>' || outputCode[x] == '&emsp;') {
      terminal.innerHTML += outputCode[x];
      // If last line is reached in array, start over
      if (x == outputCode.length - 1) {
        terminal.innerHTML += '<br><br>';
        x = 0;
        code = outputCode[x].split("");
      }
      // If not, simply go to next line
      else {
        x += 1;
        code = outputCode[x].split("");
      }
    }
  }
  // If last character is not reached, go to next character
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
blueButton.addEventListener("click", function() { changeColor('#2f52e0'); } , false); // Blue color
greenButton.addEventListener("click", function() { changeColor('#0cf574'); } , false); // Green color
