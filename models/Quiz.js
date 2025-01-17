import { Question } from "./Question.js";

export class Quiz {

    questionIndex = 0;
    score = 0;

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions) {
            this.questions = questions
        }
        /**
         * 
         * @returns {Question} the question found
         */
    getQuestionIndex() {
        return this.questions[this.questionIndex]
    }

    guess(answer) {
        if (this.getQuestionIndex().rightAnswer(answer)) {
            this.score++
        }
        this.questionIndex++
    }

    isEnded() {
        return this.questions.length === this.questionIndex
    }

}