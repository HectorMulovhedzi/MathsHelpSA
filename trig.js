// ==========================================
// MATHSHELP SA - GRADE 11 TRIGONOMETRY
// ==========================================


// ==========================================
// 1. OPEN AND CLOSE SECTIONS
// ==========================================

function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = isHidden ? "−" : "＋";
    }

    // Draw graphs when the learner opens the graphs section
    if (sectionId === "graphsContent" && isHidden) {
        drawTrigGraphs();
    }
}


// ==========================================
// 2. SHOW AND HIDE WORKED SOLUTIONS
// ==========================================

function showSteps(stepsId) {
    const steps = document.getElementById(stepsId);

    if (!steps) return;

    if (steps.style.display === "block") {
        steps.style.display = "none";
    } else {
        steps.style.display = "block";
    }
}


// ==========================================
// 3. PRACTICE QUESTIONS
// ==========================================

const trigPracticeQuestions = [

    {
        question: "1. State the quotient identity for tangent.",
        answer: "tan θ = sin θ / cos θ",
        explanation: "The quotient identity states that tangent is equal to sine divided by cosine, provided cos θ is not zero."
    },

    {
        question: "2. State the Pythagorean identity.",
        answer: "sin² θ + cos² θ = 1",
        explanation: "This identity comes from the Pythagorean theorem and is one of the most important trigonometric identities."
    },

    {
        question: "3. Make sin² θ the subject of sin² θ + cos² θ = 1.",
        answer: "sin² θ = 1 − cos² θ",
        explanation: "Subtract cos² θ from both sides."
    },

    {
        question: "4. Simplify: cos² θ × tan θ + tan θ × sin² θ.",
        answer: "tan θ",
        explanation: "Factor out tan θ: tan θ(cos² θ + sin² θ). Using the identity, cos² θ + sin² θ = 1. Therefore, the answer is tan θ."
    },

    {
        question: "5. Simplify: (2 tan θ × cos θ × sin θ) / (cos² θ − 1).",
        answer: "−2",
        explanation: "Use tan θ = sin θ / cos θ and cos² θ − 1 = −sin² θ. Simplifying gives −2, wherever the original expression is defined."
    },

    {
        question: "6. At which angles is tan θ undefined between 0° and 360°?",
        answer: "90° and 270°",
        explanation: "Tangent is undefined when cos θ = 0. Between 0° and 360°, this happens at 90° and 270°."
    },

    {
        question: "7. Simplify: tan² θ × cos² θ.",
        answer: "sin² θ",
        explanation: "Replace tan² θ with sin² θ / cos² θ. Multiplying by cos² θ allows the cos² terms to cancel."
    },

    {
        question: "8. Make cos² θ the subject of sin² θ + cos² θ = 1.",
        answer: "cos² θ = 1 − sin² θ",
        explanation: "Subtract sin² θ from both sides."
    },

    {
        question: "9. Simplify: sin θ / cos θ.",
        answer: "tan θ",
        explanation: "This is the quotient identity: tan θ = sin θ / cos θ."
    },

    {
        question: "10. Complete the identity: cos² θ − 1 = ?",
        answer: "−sin² θ",
        explanation: "From sin² θ + cos² θ = 1, subtract 1 and rearrange to get cos² θ − 1 = −sin² θ."
    }

];


// Display practice questions

function createPractice() {

    const container = document.getElementById("trigonometryPractice");

    if (!container) return;

    container.innerHTML = "";

    trigPracticeQuestions.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const answerId = "trigPracticeAnswer" + index;

        card.innerHTML = `
            <h4>${item.question}</h4>

            <button
                class="answer-button"
                onclick="togglePracticeAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer" id="${answerId}" hidden>

                <p><strong>Answer:</strong> ${item.answer}</p>

                <p><strong>Explanation:</strong> ${item.explanation}</p>

            </div>
        `;

        container.appendChild(card);

    });

}


// Show and hide practice answers

function togglePracticeAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (!answer) return;

    answer.hidden = !answer.hidden;

    button.textContent = answer.hidden ? "Show Answer" : "Hide Answer";

}


// ==========================================
// 4. TRIGONOMETRY QUIZ QUESTIONS
// ==========================================

const trigQuizQuestions = [

    {
        question: "What is sin 30°?",
        options: ["1", "1/2", "√3/2", "0"],
        answer: 1,
        explanation: "The exact value of sin 30° is 1/2."
    },

    {
        question: "What is cos 60°?",
        options: ["√3/2", "1", "1/2", "0"],
        answer: 2,
        explanation: "The exact value of cos 60° is 1/2."
    },

    {
        question: "Which identity is correct?",
        options: [
            "sin² θ − cos² θ = 1",
            "sin² θ + cos² θ = 1",
            "sin θ + cos θ = 1",
            "tan θ + cos θ = 1"
        ],
        answer: 1,
        explanation: "The Pythagorean identity is sin² θ + cos² θ = 1."
    },

    {
        question: "Which expression is equal to tan θ?",
        options: [
            "cos θ / sin θ",
            "sin θ × cos θ",
            "sin θ / cos θ",
            "1 / sin θ"
        ],
        answer: 2,
        explanation: "The quotient identity states tan θ = sin θ / cos θ."
    },

    {
        question: "What is tan 45°?",
        options: ["0", "1", "√3", "1/2"],
        answer: 1,
        explanation: "The exact value of tan 45° is 1."
    },

    {
        question: "At which angle is tan θ undefined?",
        options: ["0°", "45°", "90°", "180°"],
        answer: 2,
        explanation: "Tangent is undefined when cos θ = 0. This happens at 90° and 270° in the interval from 0° to 360°."
    },

    {
        question: "What is sin² θ equal to?",
        options: [
            "1 + cos² θ",
            "1 − cos² θ",
            "cos² θ − 1",
            "1 / cos² θ"
        ],
        answer: 1,
        explanation: "Rearranging sin² θ + cos² θ = 1 gives sin² θ = 1 − cos² θ."
    },

    {
        question: "In which quadrant are both sine and cosine positive?",
        options: [
            "Quadrant I",
            "Quadrant II",
            "Quadrant III",
            "Quadrant IV"
        ],
        answer: 0,
        explanation: "In Quadrant I, both sine and cosine are positive."
    },

    {
        question: "What is cos 0°?",
        options: ["0", "1/2", "−1", "1"],
        answer: 3,
        explanation: "The exact value of cos 0° is 1."
    },

    {
        question: "Simplify: tan² θ × cos² θ.",
        options: [
            "cos² θ",
            "tan θ",
            "sin² θ",
            "1"
        ],
        answer: 2,
        explanation: "Since tan² θ = sin² θ / cos² θ, multiplying by cos² θ gives sin² θ."
    }

];


// ==========================================
// 5. DISPLAY THE QUIZ
// ==========================================

function createTrigQuiz() {

    const container = document.getElementById("trigQuiz");

    if (!container) return;

    container.innerHTML = `
        <div class="quiz-instructions">
            <p><strong>Instructions:</strong></p>
            <p>Choose one answer for each question.</p>
            <p>There are 10 questions. Each question is worth 1 mark.</p>
        </div>

        <form id="trigQuizForm">

            <div id="trigQuizQuestions"></div>

            <button type="button"
                class="answer-button"
                id="submitTrigQuiz"
                onclick="submitTrigQuiz()">
                Submit Quiz
            </button>

        </form>

        <div id="trigQuizResults" hidden>

            <h3>Your Quiz Results</h3>

            <p id="trigFinalScore"></p>

            <p id="trigFinalFeedback"></p>

            <h3>Corrections and Explanations</h3>

            <div id="trigCorrections"></div>

            <button class="answer-button"
                onclick="retryTrigQuiz()">
                Try Again
            </button>

        </div>
    `;

    const questionsContainer = document.getElementById("trigQuizQuestions");

    trigQuizQuestions.forEach((item, index) => {

        const questionCard = document.createElement("div");

        questionCard.className = "practice-card";

        let optionsHTML = "";

        item.options.forEach((option, optionIndex) => {

            optionsHTML += `
                <label class="quiz-option">

                    <input
                        type="radio"
                        name="trigQuestion${index}"
                        value="${optionIndex}">

                    ${option}

                </label>
            `;

        });

        questionCard.innerHTML = `
            <h4>Question ${index + 1}</h4>

            <p>${item.question}</p>

            <div class="quiz-options">
                ${optionsHTML}
            </div>
        `;

        questionsContainer.appendChild(questionCard);

    });

}

function submitTrigQuiz() {

    const results = document.getElementById("trigQuizResults");
    const scoreDisplay = document.getElementById("trigFinalScore");
    const feedbackDisplay = document.getElementById("trigFinalFeedback");
    const corrections = document.getElementById("trigCorrections");

    // Check that the quiz result elements exist
    if (!results || !scoreDisplay || !feedbackDisplay || !corrections) {
        alert("Quiz results could not be found. Please check your HTML.");
        console.error("Missing quiz result elements.");
        return;
    }

    let score = 0;

    corrections.innerHTML = "";

    trigQuizQuestions.forEach((item, index) => {

        const selected = document.querySelector(
            `input[name="trigQuestion${index}"]:checked`
        );

        const selectedAnswer = selected
            ? Number(selected.value)
            : -1;

        const correct = selectedAnswer === item.answer;

        if (correct) {
            score++;
        }

        const learnerAnswer = selectedAnswer === -1
            ? "Not answered"
            : item.options[selectedAnswer];

        const correctAnswer = item.options[item.answer];

        const card = document.createElement("div");

        card.className = "practice-card";

        card.innerHTML = `
            <h4>Question ${index + 1}</h4>

            <p><strong>Your answer:</strong> ${learnerAnswer}</p>

            <p><strong>Correct answer:</strong> ${correctAnswer}</p>

            <p><strong>Result:</strong>
                ${correct ? "Correct" : "Incorrect"}
            </p>

            <p><strong>Explanation:</strong> ${item.explanation}</p>
        `;

        corrections.appendChild(card);

    });

    const percentage = Math.round(
        (score / trigQuizQuestions.length) * 100
    );

    scoreDisplay.textContent =
        `Your mark: ${score}/${trigQuizQuestions.length} (${percentage}%)`;

    if (percentage >= 80) {
        feedbackDisplay.textContent =
            "Excellent work! You understand these concepts well.";
    } else if (percentage >= 50) {
        feedbackDisplay.textContent =
            "Good effort! Review your corrections and keep practising.";
    } else {
        feedbackDisplay.textContent =
            "Keep practising! Review your notes and worked examples.";
    }

    // Force the results to become visible
    results.hidden = false;
    results.style.display = "block";

    const submitButton = document.getElementById("submitTrigQuiz");

    if (submitButton) {
        submitButton.disabled = true;
    }

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// 7. RETRY THE QUIZ
// ==========================================

function retryTrigQuiz() {

    createTrigQuiz();

    document.getElementById("trigQuiz").scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// ==========================================
// 8. TRIGONOMETRIC GRAPHS
// ==========================================

function drawTrigGraphs() {

    const container = document.getElementById("trigGraphs");

    if (!container) return;

    // Avoid creating duplicate graphs
    if (container.dataset.created === "true") {
        ["sinGraph", "cosGraph", "tanGraph"].forEach(id => {
            const canvas = document.getElementById(id);

            if (canvas) {
                drawTrigGraph(canvas, id);
            }
        });

        return;
    }

    container.innerHTML = `
        <div class="graph-card">

            <h4>1. Sine Graph</h4>

            <p>Equation: y = sin x</p>

            <p>The sine graph has a maximum value of 1 and a minimum value of −1.</p>

            <canvas id="sinGraph" class="trig-canvas" height="300"></canvas>

        </div>

        <div class="graph-card">

            <h4>2. Cosine Graph</h4>

            <p>Equation: y = cos x</p>

            <p>The cosine graph starts at 1 when x = 0°.</p>

            <canvas id="cosGraph" class="trig-canvas" height="300"></canvas>

        </div>

        <div class="graph-card">

            <h4>3. Tangent Graph</h4>

            <p>Equation: y = tan x</p>

            <p>The tangent graph is undefined at 90° and 270°.</p>

            <canvas id="tanGraph" class="trig-canvas" height="300"></canvas>

        </div>
    `;

    container.dataset.created = "true";

    drawTrigGraph(document.getElementById("sinGraph"), "sinGraph");
    drawTrigGraph(document.getElementById("cosGraph"), "cosGraph");
    drawTrigGraph(document.getElementById("tanGraph"), "tanGraph");

}


// ==========================================
// 9. DRAW EACH GRAPH
// ==========================================

function drawTrigGraph(canvas, graphType) {

    if (!canvas) return;

    const width = canvas.clientWidth;

    const height = 300;

    if (width === 0) return;

    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    canvas.style.height = height + "px";

    const ctx = canvas.getContext("2d");

    ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    const left = 45;
    const right = width - 20;
    const top = 20;
    const bottom = height - 35;

    const graphWidth = right - left;
    const graphHeight = bottom - top;

    const minX = -360;
    const maxX = 360;

    const minY = graphType === "tanGraph" ? -3 : -1.5;
    const maxY = graphType === "tanGraph" ? 3 : 1.5;

    function xPosition(x) {
        return left + ((x - minX) / (maxX - minX)) * graphWidth;
    }

    function yPosition(y) {
        return bottom - ((y - minY) / (maxY - minY)) * graphHeight;
    }

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = "#dbeafe";
    ctx.lineWidth = 1;

    for (let x = -360; x <= 360; x += 90) {

        const px = xPosition(x);

        ctx.beginPath();
        ctx.moveTo(px, top);
        ctx.lineTo(px, bottom);
        ctx.stroke();

    }

    const yStep = graphType === "tanGraph" ? 1 : 0.5;

    for (let y = minY; y <= maxY + 0.001; y += yStep) {

        const py = yPosition(y);

        ctx.beginPath();
        ctx.moveTo(left, py);
        ctx.lineTo(right, py);
        ctx.stroke();

    }

    // Axes
    ctx.strokeStyle = "#172554";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(left, yPosition(0));
    ctx.lineTo(right, yPosition(0));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(xPosition(0), top);
    ctx.lineTo(xPosition(0), bottom);
    ctx.stroke();

    // X-axis labels
    ctx.fillStyle = "#172554";
    ctx.font = "11px Arial";
    ctx.textAlign = "center";

    for (let x = -360; x <= 360; x += 90) {

        ctx.fillText(
            x + "°",
            xPosition(x),
            bottom + 17
        );

    }

    // Y-axis labels
    ctx.textAlign = "right";

    for (let y = minY; y <= maxY + 0.001; y += yStep) {

        ctx.fillText(
            Number(y.toFixed(1)).toString(),
            left - 7,
            yPosition(y) + 4
        );

    }

    // Graph curve
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 2.5;

    ctx.beginPath();

    let drawing = false;

    for (let x = minX; x <= maxX; x += 1) {

        const radians = x * Math.PI / 180;

        let y;

        if (graphType === "sinGraph") {
            y = Math.sin(radians);
        }

        else if (graphType === "cosGraph") {
            y = Math.cos(radians);
        }

        else {
            y = Math.tan(radians);
        }

        // Avoid drawing tangent's vertical asymptotes
        if (
            !Number.isFinite(y) ||
            y < minY ||
            y > maxY ||
            (graphType === "tanGraph" && Math.abs(Math.cos(radians)) < 0.025)
        ) {

            drawing = false;
            continue;

        }

        const px = xPosition(x);
        const py = yPosition(y);

        if (!drawing) {
            ctx.moveTo(px, py);
            drawing = true;
        } else {
            ctx.lineTo(px, py);
        }

    }

    ctx.stroke();

    // Graph title
    ctx.fillStyle = "#102a56";
    ctx.font = "bold 13px Arial";
    ctx.textAlign = "left";

    if (graphType === "sinGraph") {
        ctx.fillText("y = sin x", left, 13);
    }

    else if (graphType === "cosGraph") {
        ctx.fillText("y = cos x", left, 13);
    }

    else {
        ctx.fillText("y = tan x", left, 13);
    }

}


// ==========================================
// 10. LOAD EVERYTHING WHEN PAGE OPENS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    createPractice();

    createTrigQuiz();

    console.log("MathsHelpSA Trigonometry loaded successfully.");

});


// Redraw graphs when the browser window changes size

window.addEventListener("resize", function () {

    const container = document.getElementById("trigGraphs");

    if (container && container.dataset.created === "true") {
        drawTrigGraphs();
    }

});