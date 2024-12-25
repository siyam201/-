
// script.js
    // 100 ধাঁধার প্রশ্ন এবং তাদের সঠিক উত্তর
    const riddles =[
        { question: "পাখি নই তবুও আছে লেজ মাথা পাখা।উরে উরে যাই তবু যেথা ইচ্ছা সেথা।", answer: "উরোজাহাজ" },



        ];
[]
let currentRiddleIndex = 0;
let score = 0;

const riddleQuestionElement = document.getElementById("riddle-question");
const userAnswerInput = document.getElementById("user-answer");
const submitBtn = document.getElementById("submit-btn");
const resultElement = document.getElementById("result");
const nextBtn = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

function showRiddle() {
    const currentRiddle = riddles[currentRiddleIndex];
    riddleQuestionElement.textContent = currentRiddle.question;
    userAnswerInput.value = '';
    resultElement.textContent = '';
    nextBtn.style.display = 'none';
}

function checkAnswer() {
    const currentRiddle = riddles[currentRiddleIndex];
    const userAnswer = userAnswerInput.value.trim().toLowerCase();

    if (userAnswer === currentRiddle.answer.toLowerCase()) {
        score++;
        resultElement.textContent = "সঠিক উত্তর!";
    } else {
        resultElement.textContent = `ভুল উত্তর! সঠিক উত্তর ছিল: ${currentRiddle.answer}`;
    }

    scoreElement.textContent = `স্কোর: ${score}`;
    nextBtn.style.display = 'block';
    submitBtn.disabled = true;
}

function nextRiddle() {
    currentRiddleIndex++;
    if (currentRiddleIndex < riddles.length) {
        showRiddle();
        submitBtn.disabled = false;
    } else {
        resultElement.textContent = `আপনি সমস্ত ধাঁধার উত্তর দিয়েছেন! আপনার চূড়ান্ত স্কোর: ${score}`;
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'none';
    }
}

submitBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", nextRiddle);

// Initialize the game
showRiddle();
