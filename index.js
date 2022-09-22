const containerEl = document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    containerEl.appendChild(colorContainerEl);
    
} 

const colorConatainerEls = document.querySelectorAll(".color-container");

generateColors();

function generateColors(){
    colorConatainerEls.forEach(
        (colorcontainerEl) => {
        const newColorCode = randomColor();
        colorcontainerEl.style.backgroundColor = "#" + newColorCode;
        colorcontainerEl.innerText = "#" + newColorCode;
    });

}

function randomColor(){
    const chars = "0123456abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0; index < colorCodeLength; index++) {
       
        const randomNUm = Math.floor( Math.random()*chars.length);
        colorCode += chars.substring(randomNUm, randomNUm + 1);
         
    }
    return colorCode;
}