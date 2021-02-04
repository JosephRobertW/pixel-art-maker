// Select color input
var color = document.getElementById("colorPicker");

// Select size inputs
var canvas = document.getElementById("pixelCanvas");
var sizePicker = document.getElementById("sizePicker");
var boxHeight = document.getElementById("inputHeight").value;
var boxWidth = document.getElementById("inputWidth").value;


// When size is submitted by the user, call clearGrid
sizePicker.addEventListener("onSubmit", clearGrid());
function clearGrid() {
    while (canvas.firstChild !== null) {
        console.log("Child : " + canvas.firstChild.value)
        canvas.removeChild(canvas.firstChild);
        console.log("Grid cleared.");
        }
    makeGrid(boxHeight, boxWidth);
  }

// After clearning the grid, make a new grid
function makeGrid(boxHeight, boxWidth) {
    console.log("Dimensions: " + boxHeight + "," + boxWidth);
    for (var r = 0; r < boxHeight; r++) {
        let row = canvas.insertRow(r);
        for (var c = 0; c < boxWidth; c++) {
            let cell = row.insertCell(c);
                cell.addEventListener("click", paintCell());
                function paintCell(){
                cell.style.backgroundColor = color.value;
          }
        }
      }
    }
