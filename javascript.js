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

// function to change grid color
function colorChange(block) {
    if (block.style.backgroundColor == "white") {
        block.style.backgroundColor = "black"
    }
    else if (block.style.background == "white") {
        block.style.backgroundColor = 'black'
    }
}

const blocks = document.querySelectorAll('.block')
blocks.forEach((block => {
    block.addEventListener('mouseenter', (colorChange) => {
        if (block.style.backgroundColor == "white") {
            block.style.backgroundColor = "black"
        }
        else if (block.style.backgroundColor == "black") {
            block.style.backgroundColor = 'white'
        }
    });

}));
