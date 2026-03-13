console.log("Hello, World!");
let no = "Foram";
let surname = "Upadhyay";
console.log(no + " " + surname);
console.error("This is an error message");
console.info("This is an info message");
console.log("This is a log message");
alert("Enter value of a");
let a=prompt("Enter here value of a");
//a=Number.parseInt(a);
let write=confirm("Do you want to write the value of a?");
if(write){
    location.href="https://www.google.com";
}
else{
    console.error("You are not a special");
}
// 1. Array of possible choices
let choices = ["S", "W", "G"];

// 2. Ask user for input
let userChoice = prompt("Enter S for Snake, W for Water, or G for Gun:").toUpperCase();

// 3. Generate a random choice for the computer
// Math.random() gives 0-1, multiplying by 3 gives 0-2.99, Math.floor makes it 0, 1, or 2.
let randomIndex = Math.floor(Math.random() * 3);
let cpuChoice = choices[randomIndex];

// 4. Function to determine the winner
const match = (cpu, user) => {
    if (cpu === user) {
        return "Nobody. It's a Tie!";
    }
    
    if (cpu === "S" && user === "W") {
        return "Computer";
    } else if (cpu === "S" && user === "G") {
        return "User";
    } else if (cpu === "W" && user === "S") {
        return "User";
    } else if (cpu === "W" && user === "G") {
        return "Computer";
    } else if (cpu === "G" && user === "S") {
        return "Computer";
    } else if (cpu === "G" && user === "W") {
        return "User";
    }
};

// 5. Run the function and show result
let result = match(cpuChoice, userChoice);

alert(`CPU chose: ${cpuChoice}\nYou chose: ${userChoice}\n\nThe winner is: ${result}`);

// Ask if user wants to play again
let playAgain = confirm("Do you want to play again?");
if (playAgain) {
    location.reload(); // Reloads the page to restart the script
}
console.log(window);
console.log(document.body);
document.body.style.border="5px dashed violet";