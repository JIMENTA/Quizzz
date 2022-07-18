export class Question {

    /**
     * 
     * @param {string} text the questions 
     * @param {string[]} choices the options
     * @param {string} answer the answer
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer
    }

    /**
     * 
     * @returns {boolean} true if the answer is correct
     */

    rightAnswer(choice) {
        return choice === this.answer
    }
}