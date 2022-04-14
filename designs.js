// Select color input
const colorPicker = document.querySelector("#colorPicker");

// Select size input
const inputHeight = document.querySelector("#inputHeight");
const inputWidth = document.querySelector("#inputWidth");
const submit = document.querySelector("#submit");
const pixelCanvas = document.querySelector("#pixelCanvas");
const reset = document.querySelector("#reset");

// When size is submitted by the user, call makeGrid()

let height = inputHeight.value;
let width = inputWidth.value;
let color = colorPicker.value;

inputHeight.onchange = (e) => {
  height = inputHeight.value;
};
inputWidth.onchange = (e) => {
  width = inputWidth.value;
};
colorPicker.onchange = (e) => {
  color = colorPicker.value;
};


submit.onclick = (e) => {
  e.preventDefault();
//   console.log(`
//     height: ${height}
//     width: ${width}
//     color: ${color}
//     `);
  makeGrid();
  e.target.disabled = "true";
};

// function to create colored Grid
function makeGrid() {
  for (let i = 1; i <= width; i++) {
    let row = document.createElement("tr");
    pixelCanvas.appendChild(row);
    for (let i = 1; i <= height; i++) {
      let column = document.createElement("td");
      row.appendChild(column);
      column.onclick = (e) => {
        e.target.style.backgroundColor = color;
      };
    }
  }

//   function to clear out the grid
  function clearElement(parent) {
    submit.disabled = false;
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  reset.addEventListener("click", () => {
    clearElement(pixelCanvas);
  });


}
