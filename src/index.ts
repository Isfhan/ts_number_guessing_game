// Import third party packages
import inquirer from "inquirer";


// Import custom modules
import { Game } from "./game.js";
import { Message } from "./message.js";
import { getNumberRangeQuestion } from "./questions.js";


// Import types
import { type IPlayerInput } from "./types/input.js";



// Initialized Message Class 
const message = new Message();

// Show welcome message tp player
message.welcome();

// Show game instruction
message.instruction();


// Prompt Questions and get user input
const { startNumber, endNumber }: IPlayerInput = await inquirer.prompt(
    getNumberRangeQuestion
);


// Initialized Game Class 
const game: Game = new Game(startNumber, endNumber);

// Start the game
game.start();




