// Import third party packages
import inquirer from "inquirer";
import chalk from "chalk";

// Import custom modules
import { guessNumberQuestion } from "./questions.js";


// Import types
import { type IPlayerGuess } from "./types/input.js";



export class Game {

    private startNumber: number;
    private endNumber: number;
    private randomNumber: number;


    constructor(startNumber: number, endNumber: number) {
        this.startNumber = startNumber;
        this.endNumber = endNumber;
        this.randomNumber = this.generateNumber();
    }


    /**
     * Generate random number
     */
    private generateNumber(): number {

        // Generate Number based on provided range
        return Math.floor(Math.random() * (this.endNumber - this.startNumber)) + this.startNumber;


    }


    /**
     * Ask user to guess number
     */
    private async askPlayerToGuessNumber(): Promise<number> {

        // Prompt Questions and get user input
        const { playerGuess }: IPlayerGuess = await inquirer.prompt(
            guessNumberQuestion
        );

        // Return player guessed number
        return playerGuess;
    }


    /**
     * Check Player Guess
     */
    private async checkPlayerGuess(randomNumber: number, playerGuess: number) {

        // Check if player Guess is correct
        if (playerGuess == randomNumber) {

            // Log message
            console.log('');
            console.log(chalk.bgGreen.white.bold(' 🎉 CONGRATULATIONS!!! YOU GUESSED IT RIGHT 🎉'));
            console.log('');

        }
        // Check if player Guess is greater than randomNumber 
        else if (playerGuess > randomNumber) {

            // Log message
            console.log('');
            console.log(chalk.bold.red('TRY A SMALLER NUMBER 😅'));
            console.log('');
            // Ask player agin to guess the number 
            this.start();
        }
        else {

            // Log message
            console.log('');
            console.log(chalk.bold.red('TRY A GREATER NUMBER 😅'));
            console.log('');

            // Ask player agin to guess the number 
            this.start();
        }
    }


    /**
     * Start the game
     */
    public async start() {

        // Ask player to guess the number 
        const playerGuess: number = await this.askPlayerToGuessNumber();

        // Check player guess
        this.checkPlayerGuess(this.randomNumber, playerGuess);

    }
}