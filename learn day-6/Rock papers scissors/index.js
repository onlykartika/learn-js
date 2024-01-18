let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function game(){
    let random = Math.floor(Math.random()* hands.length)
    return hands[random];
}

let guess = game()
console.log(guess)


