// Select color input
var colorPicker = document.getElementById("colorPicker");

// Select size inputs
var sizePicker = document.getElementById("sizePicker");
var boxHeight = document.getElementById("inputHeight").value;
var boxWidth = document.getElementById("inputWidth").value;


// When size is submitted by the user, call clearGrid
function formSubmit(event) {
    event.preventDefault();
    var canvas = document.getElementById("pixelCanvas");
    canvas.innerHTML = "";
    var boxHeight = document.getElementById("inputHeight").value;
    var boxWidth = document.getElementById("inputWidth").value;
    makeGrid(boxHeight, boxWidth);
  };



// After clearning the grid, make a new grid
function makeGrid(rows, cols) {
    var colorPicker = document.getElementById("colorPicker");
    var canvas = document.getElementById("pixelCanvas");
    console.log("Dimensions: " + rows + "," + cols);
    for (var r = 0; r < rows; r++) {
        var row = canvas.insertRow(r);
        for (var c = 0; c < cols; c++) {
            var cell = row.insertCell(c);
            cell.addEventListener("click", e => {
                e.target.style.background = colorPicker.value;
           });
        };
      };
    };

makeGrid(boxHeight, boxWidth);
