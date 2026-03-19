// Step 1: Define Quiz Data

const quizData = [
    {
        question: "what does HTML stand for?",
        option: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hyper Machine Language",
            "HyperLink and Text Markup Language",
        ],
        correct: 0,
    },

    {
        question:
            "Which CSS property is used to control the spacing between elements?",
        option: ["margin", "padding", "spacing", "border-spacing"],
        correct: 1,
    },

    {
        question:
            "What is the JavaScript function used to selecct an HTML element by its id?",
        option: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },

    {
        question:
            "In React.Js, which hook is used to perform side effects in a function component?",
        option: [
            "useEffect", "useState", "useContext", "useReducer",
        ],
        correct: 0,
    },

    {
        question: "Which HTML tag is used to create an ordered list?",
        option: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
];

//2 step 2: JavaScript Initialization
const quiz = document.querySelector("#quiz");
const scores = document.querySelector(".score");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
    document.querySelectorAll(
        " #question, #option_1, #option_2, #option_3, #option_4"
    );
const submitBtn = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

// Step 3: load Quiz Function

const loadQuiz = () => {
    const { question, option } = quizData[currentQuiz];
    console.log(option);

    questionElm.innerText = `${currentQuiz + 1}: ${question}`
    scores.innerText = `Score: ${score}/${quizData.length} `;
    //    option.forEach((curOption, index) => (option_1.innerText = curOption));
    option.forEach(
        (curOption, index) =>
            (window[`option_${index + 1}`].innerText = curOption)
    );
};


loadQuiz();

//? Step 4: Get seleccted Answer function on button click
const getSelectedOption = () => {

    let answerElement = Array.from(answerElm)
    return answerElement.findIndex((curElm) => curElm.checked);
};


const deselectedAnswers = () => {
    return answerElm.forEach((curElm) => (curElm.checked = false));
}

submitBtn.addEventListener('click', () => {
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);

    if (selectedOptionIndex === quizData[currentQuiz].correct) {
        score = score + 1;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        deselectedAnswers();
        loadQuiz();
    } else {
        quiz.innerHTML = `
        <div class="result">
        <h2>⌛ Your Score: ${score}/${quizData.length} Correct Answers </h2>
        <p>Congratulations on completing the quiz! 🏆 </p>
        <button class="reload-button" onclick="location.reload()">Play Again 🔄 </button>
        </div>
        `;
    }
});