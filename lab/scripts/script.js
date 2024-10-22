const square = document.getElementById("square");
const triangle = document.getElementById("triangle");
const circle = document.getElementById("circle");
const input = document.getElementById("input");
const content = document.getElementById("content");

function rand(min, max) {
    let num = Math.random() * (max-min);
    num += min;
    return num;
}

function createFigures(figure) {
    let inputValue = input.value;

    for (let j = 0; j < inputValue; j++) {
        let randNum = rand(50, 300);
        let randPosX = rand(5, 85);
        let randPosY = rand(10, 60);
        let newFigure = document.createElement("div");
        newFigure.classList.add("figure");
        newFigure.classList.add(figure);

        if (figure === "triangle") {
            newFigure.style.height = (randNum / 2) + "px";       
        }
        else {
            newFigure.style.height = randNum + "px";
        }

        newFigure.style.width = randNum + "px";
        newFigure.style.top = randPosY + "%";
        newFigure.style.left = randPosX + "%";

        content.appendChild(newFigure);
    }
}

function selectFigure(Event) {
    if (Event.target.classList.contains("figure") ) {
        if (Event.target.classList.contains("yellow") ) {
            (Event.target.remove() );
        }
        else {
            Event.target.classList.add("yellow");
        }
    }
}

function limit() {
    let inputValue = input.value;
    if (inputValue < 0) {
        input.value = 0;
    }
    else if (inputValue > 150) {
        input.value = 150;
    }
}

square.addEventListener("click", () => createFigures("square") );
triangle.addEventListener("click", () => createFigures("triangle") );
circle.addEventListener("click", () => createFigures("circle") );
content.addEventListener("click", (Event) => selectFigure(Event) );
input.addEventListener("input", () => limit() )