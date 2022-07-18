import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";


/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui UI Object
 */

const renderPage = (quiz, ui) => {

    if (quiz.isEnded()) {
        ui.showScore(quiz.score)
    } else {

        ui.showQuestion(quiz.getQuestionIndex().text)
        ui.showChoices(quiz.getQuestionIndex().choices,
            (currentChoise) => {
                quiz.guess(currentChoise);
                renderPage(quiz, ui)
            });
        ui.showProgress(quiz.questionIndex + 1, quiz.questions.length)
    }


}

function main() {
    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage(quiz, ui)
}

main();