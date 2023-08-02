export const getNumberRangeQuestion = [
    {
        name: "startNumber",
        type: "number",
        message: "Enter the start number:",
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter a valid number";
        },
    },
    {
        name: "endNumber",
        type: "number",
        message: "Enter the end number:",
        validate(input: number, answers: { startNumber: number }): string | boolean | Promise<string | boolean> {

            if (!isNaN(input) && input > answers.startNumber) {
                return true;
            }
            return "Please enter a valid number and make sure that number is greater than start number";
        },
    }
];

export const guessNumberQuestion = [
    {
        name: "playerGuess",
        type: "number",
        message: "Guess the generated number:",
        validate(input: number): string | boolean | Promise<string | boolean> {

            if (!isNaN(input)) {
                return true;
            }
            return "Please enter a valid number";
        },
    },
]