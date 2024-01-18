let fruit = ["A", "O", "A", "A", "O"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function organizeF() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "A") {
            appleShelf.textContent += "A";
        } else if (fruit[i] === "O") {
            orangeShelf.textContent += "O";
        }
    }
}

organizeF();

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.

