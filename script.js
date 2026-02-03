const questions = [
    { word: "CAT", correct: "Kucing", options: ["Kucing", "Anjing", "Burung"] },
    { word: "DOG", correct: "Anjing", options: ["Kucing", "Anjing", "Ikan"] },
    { word: "APPLE", correct: "Apel", options: ["Apel", "Jeruk", "Pisang"] },
    { word: "BOOK", correct: "Buku", options: ["Meja", "Buku", "Pensil"] }
];

let index = 0;
let score = 0;

const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

function startGame() {
    startScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    loadQuestion();
}

function loadQuestion() {
    const q = questions[index];

    document.getElementById("question").innerHTML =
        `Apa arti kata: <b>${q.word}</b>?`;

    document.getElementById("current").innerText = index + 1;
    document.getElementById("total").innerText = questions.length;
    document.getElementById("score").innerText = score;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsDiv.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
    document.getElementById("nextBtn").classList.add("hidden");
}

function checkAnswer(answer) {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll("#options button");

    buttons.forEach(btn => btn.disabled = true);

    if (answer === questions[index].correct) {
        result.innerText = "✅ Jawaban Benar!";
        result.style.color = "green";
        score += 10;
    } else {
        result.innerText = "❌ Jawaban Salah";
        result.style.color = "red";
    }

    document.getElementById("score").innerText = score;
    document.getElementById("nextBtn").classList.remove("hidden");
}

function nextQuestion() {
    index++;
    if (index >= questions.length) {
        finishGame();
    } else {
        loadQuestion();
    }
}

function finishGame() {
    gameScreen.classList.add("hidden");
    endScreen.classList.remove("hidden");
    document.getElementById("finalScore").innerText = score;
}

function restartGame() {
    index = 0;
    score = 0;
    endScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
}
