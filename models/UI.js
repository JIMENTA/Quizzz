export class UI {

    /**
     * 
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerText = text
    }

    /**
     * 
     * @param {string[]} choices the choices of the question 
     */
    showChoices(choices, callback) {

        const choicesConteiner = document.getElementById('choices');
        choicesConteiner.innerHTML = '';

        for (let i = 0; i < choices.length; i++) {

            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button ' // clase que ya tenia definida en styles.css
            button.addEventListener("click", () => callback(choices[i]))

            choicesConteiner.append(button)

        }

    }

    /**
     * 
     * @param {number} score the total score
     */

    showScore(score) {

        const quizEnd = `
        <h1>Result</h1>
        <h2>Your score : ${score}</h2>
        `
        const element = document.getElementById('quiz');
        element.innerHTML = quizEnd;

    }

    showProgress(currentIndex, total) {
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}