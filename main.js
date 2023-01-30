import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

/* const selector = document.querySelector("#color-picker");

const addOptionsSelector = (object) => {
  for (let key in object) {
    const option = document.createElement("option");
    option.innerText = object[key];
    option.value = key;
    selector.appendChild(option);
  }
};

addOptionsSelector(COLOR_PALETTE);

const changeBackgroundColor = () => {
  selector.addEventListener("change", (event) => {
    const h2 = document.querySelector("h2");
    const newColor = selector.value;
    document.body.style.backgroundColor = newColor;
    const colorName = COLOR_PALETTE[newColor];
    h2.textContent = COLOR_PALETTE[newColor] ? colorName : "-";
  });
};
 */
//changeBackgroundColor();

const changeBackgroundColor2 = () => {
  const inputColor = document.querySelector("input");
  const h2Value = document.querySelector("h2.value");
 
  inputColor.addEventListener("input", (event) => {
    document.body.style.backgroundColor = inputColor.value;
    h2Value.textContent = inputColor.value;  
  /* const h2Action = document.querySelector("h2.action");
    const h1= document.querySelector("h1");
     if (inputColor.value = "#FFFFFF"){
        h1.classList.add ("black-text");
        h2Value.classList.add ("black-text");
        h2Action.classList.add ("black-text");
    } else {
        h1.classList.remove ("black-text");
        h2Value.classList.remove ("black-text");
        h2Action.classList.remove ("black-text");
    } */
  });
};

changeBackgroundColor2();
