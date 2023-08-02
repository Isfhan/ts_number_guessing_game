// Import third party packages
import chalk from "chalk";

export class Message {


    /**
     * Show welcome message to player
     */
    public welcome() {

        console.log(chalk.bgWhite.red.bold(' Welcome To Typescript Number Guessing Game '));

    }


    /**
     * Show instruction tp player
     */
    public instruction() {

        console.log(chalk.bold.white('==================================================================='));

        console.log(chalk.bold.green('Note: First you need to create your desire numbers range to play'));

        console.log(chalk.bold.white('==================================================================='));
    }

}
