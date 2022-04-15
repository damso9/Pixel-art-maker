// Select color input
const colorPicker = document.querySelector("#colorPicker");
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect  -https://www.linkedin.com/in/damilola-ayodele/
// I Appreciate the REVIEW. Thanks for the encouragement. It means a lot! - I'll be pleased to connect - https://www.linkedin.com/in/damilola-ayodele/

// Select size input
const inputWidth = document.querySelector("#inputRow");
const inputHeight = document.querySelector("#inputColumn");
const submit = document.querySelector("#submit");
const pixelCanvas = document.querySelector("#pixelCanvas");
const reset = document.querySelector("#reset");

// When size is submitted by the user, call makeGrid()

let height;
let width;
let color;

inputHeight.onchange = (e) => {
  height = inputHeight.value;
};
inputWidth.onchange = (e) => {
  width = inputWidth.value;
};
colorPicker.oninput = (e) => {
  console.log(e.target.value);
  color = colorPicker.value;
};

submit.onclick = (e) => {
  e.preventDefault();
  if (height && width && color) {
    makeGrid();
    e.target.disabled = "true";
  }
};

// I Appreciate the REVIEW. Thanks for the encouragement I means a lot! - Damilola Ayodele!
/*
// @makeGrid function - creates a pixel like grid which contains
td element nested in tr using nested lOOPs!
*/
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
