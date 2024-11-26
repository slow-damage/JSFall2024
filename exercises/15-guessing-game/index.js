import prompt from "picoprompt";

const guessingGame = () => {
    const isValidNumber = (num) => !isNaN(num) && num >= 1 && num <= 10; 
    const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
    const randomNum = getRandomNumber(1, 10);

    while (true) { 
        let answer = Number(prompt("Pick a number between 1 and 10: ")); // Prompt for a number vs a string

        if (!isValidNumber(answer)) { // Handles invalid inputs
            console.log("Please enter a valid number between 1 and 10."); 
            continue; // Prompt again without exiting
        }

        if (answer === randomNum) {
            console.log("Congratulations! You guessed the correct number.");
            break; // Exit the loop on correct answer 
        } else if (answer < randomNum) {
            console.log("Wrong! Try a higher number.");
        } else {
            console.log("Wrong! Try a lower number."); 
        }
    }
};

guessingGame(); // Starts function 