for (let i = 0; i < (16 * 16); i++) {
    const container = document.querySelector("#container");
    const div = document.createElement("div");
    div.setAttribute("class", "block")
    div.style.display = "flex";
    div.style.height = '6.25vh';
    div.style.width = '6.25vw';
    div.style.alignItems = "center";
    div.style.backgroundColor = "white";
    container.style.border = "solid black";
    div.style.border = "solid black";
    div.style.margin = '2px';
    container.appendChild(div)
}


const blocks = document.querySelectorAll('.block')
// blocks.forEach((block => {
//     block.addEventListener('mouseenter', (colorChange) => {
//         if (block.style.backgroundColor == "white") {
//             block.style.backgroundColor = "black"
//         }
//         else if (block.style.backgroundColor == "black") {
//             block.style.backgroundColor = 'white'
//         }
//     });

// }));

function getRandomColor() {
    return '#' + Math.random().toString(16).substring(2, 8);
}

blocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        if (block.style.backgroundColor == "white") {
            block.style.backgroundColor = getRandomColor();
        } else if (block.style.backgroundColor !== "white") {
            block.style.backgroundColor = "white";
        }
    });
});
