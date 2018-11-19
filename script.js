const terminal = document.querySelector("#terminal");
const cursor = document.querySelector("#cursor");
const div = document.querySelector("#empty");
const resetButton = document.querySelector("#reset-button");
const whiteButton = document.querySelector("#white-button");
const blueButton = document.querySelector("#blue-button");
const greenButton = document.querySelector("#green-button");

var outputCode = [
  '# Python',
  '<br>',
  '<br>',
  '# Open file for reading',
  '<br>',
  'textfile = input("Enter filename: ")',
  '<br>',
  'fh = open(textfile, "r") # read file',
  '<br>',
  'fh.seek(0)',
  '<br>',
  '<br>',
  '# Read from file and save each line to array',
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
  'fh.close()',
  '<br>',
  '<br>',
  '# Open output file to save shifted texts',
  '<br>',
  'textfile = input("Enter filename to save shifted plaintexts: "',
  '<br>',
  'fh = open(textfile, "w") # write to file',
  '<br>',
  'fh.seek(0)',
  '<br>',
  '<br>',
  '# Initialize string to store shifted strings',
  '<br>',
  'shifted = ""',
  '<br>',
  '<br>',
  '# Loop to go through each line in lines[] list',
  '<br>',
  'for line in lines:',
  '<br>',
  '&emsp;',
  '&emsp;',
  'print("Original: \\n" + line)',
  '<br>',
  '&emsp;',
  '&emsp;',
  '# Split line into characters for easier shifting',
  '<br>',
  '&emsp;',
  '&emsp;',
  'letters = list(line)',
  '<br>',
  '<br>',
  '&emsp;',
  '&emsp;',
  '# Loop to shift line by up to 25',
  '<br>',
  '&emsp;',
  '&emsp;',
  'for i in range(1, 26):',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '# Loop to go through each letter in each line and shift',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'for character in letters:',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '# Shift each letter and append to shifted string',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'if (ord(character) + i) > 90:',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'shifted += chr(ord(character) + i - 26) # make it A by subtracting 26',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'else:',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'shifted += chr(ord(character) + i)',
  '<br>',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '# Save string to file',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'fh.write(shifted + "\\n")',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '# Clear string for next iteration',
  '<br>',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  '&emsp;',
  'shifted = ""',
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
  // Scroll view automatically to <div> under <p> tag
  div.scrollIntoView();

  // If line is a tab or <br>, print immediately and go to next line
  if (outputCode[x] == '&emsp;' || outputCode[x] == '<br>') {
    terminal.innerHTML += outputCode[x];
    // If there are more lines in array, go to next line
    if (x < outputCode.length - 1){
      x += 1;
      return;
    }
    // If it is the last line, reset to 0
    else {
      x = 0;
      return;
    }
  }

  // If there are more characters in line, print them
  if (i < code.length) {
    terminal.innerHTML += code[i];
    i += 1; // increment iterator
    return;
  }
  // If there are no more characters, reset iterator.
  else if (i == code.length) {
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
  x = 0; // reset line iterator
  i = 0; // reset character iterator
}

function changeColor(color) {
  // Keep track of color changes for the cursor as well
  cursorColor = color;
  terminal.style.color = cursorColor;
  cursor.style.color = cursorColor;
}

// Set interval used for cursor blink
setInterval(function(){ blinkCursor(); }, 500);

// Event listener to add code to screen when a key is pressed
document.addEventListener("keydown", addCode, false);

// Event listener to reset screen when reset button is clicked
resetButton.addEventListener("click", reset, false);

// Event listeners to change text color when color circles are pressed
whiteButton.addEventListener("click", function() { changeColor('white'); } , false); // White color
blueButton.addEventListener("click", function() { changeColor('#2f52e0'); } , false); // Blue color
greenButton.addEventListener("click", function() { changeColor('#0cf574'); } , false); // Green color
