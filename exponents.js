
// ==========================================
// MATHSHELPSA - GRADE 11
// EXPONENTS AND SURDS
// ==========================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);
    const symbol = button.querySelector("span");

    if (section.hidden) {

        section.hidden = false;
        symbol.textContent = "−";

    } else {

        section.hidden = true;
        symbol.textContent = "＋";

    }

}
// ==========================================
// 1. WORKED EXAMPLES
// ==========================================

const workedExamples = [

    {
        question: "Simplify: 2³ × 2⁴",
        steps: [
            "Step 1: Identify the bases. Both bases are 2.",
            "Step 2: When multiplying powers with the same base, add the exponents.",
            "Step 3: 2³ × 2⁴ = 2³⁺⁴",
            "Step 4: 2⁷ = 128"
        ],
        answer: "128"
    },

    {
        question: "Simplify: 5⁶ ÷ 5²",
        steps: [
            "Step 1: The bases are the same.",
            "Step 2: Subtract the exponents when dividing.",
            "Step 3: 5⁶ ÷ 5² = 5⁶⁻²",
            "Step 4: 5⁴ = 625"
        ],
        answer: "625"
    },

    {
        question: "Simplify: (3²)³",
        steps: [
            "Step 1: Identify the power of a power.",
            "Step 2: Multiply the exponents.",
            "Step 3: (3²)³ = 3²ˣ³",
            "Step 4: 3⁶ = 729"
        ],
        answer: "729"
    },

    {
        question: "Calculate: 4⁰",
        steps: [
            "Step 1: Remember the zero exponent rule.",
            "Step 2: Any non-zero number raised to the power zero equals 1.",
            "Step 3: 4⁰ = 1"
        ],
        answer: "1"
    },

    {
        question: "Calculate: 2⁻³",
        steps: [
            "Step 1: A negative exponent means take the reciprocal.",
            "Step 2: 2⁻³ = 1/2³",
            "Step 3: 2³ = 8"
        ],
        answer: "1/8"
    },

    {
        question: "Simplify: 3² × 3⁻¹",
        steps: [
            "Step 1: Add the exponents.",
            "Step 2: 3² × 3⁻¹ = 3²⁺⁽⁻¹⁾",
            "Step 3: 3¹ = 3"
        ],
        answer: "3"
    },

    {
        question: "Calculate: (2 × 3)²",
        steps: [
            "Step 1: Calculate inside the brackets.",
            "Step 2: 2 × 3 = 6",
            "Step 3: 6² = 6 × 6"
        ],
        answer: "36"
    },

    {
        question: "Calculate: 2³ + 2²",
        steps: [
            "Step 1: Calculate each exponent separately.",
            "Step 2: 2³ = 8",
            "Step 3: 2² = 4",
            "Step 4: 8 + 4 = 12"
        ],
        answer: "12"
    },

    {
        question: "Simplify: 10³ ÷ 10",
        steps: [
            "Step 1: Write 10 as 10¹.",
            "Step 2: Subtract the exponents.",
            "Step 3: 10³ ÷ 10¹ = 10²"
        ],
        answer: "100"
    },

    {
        question: "Simplify: x³ × x⁵",
        steps: [
            "Step 1: The bases are both x.",
            "Step 2: Add the exponents.",
            "Step 3: x³ × x⁵ = x³⁺⁵"
        ],
        answer: "x⁸"
    },

    {
        question: "Simplify: x⁷ ÷ x²",
        steps: [
            "Step 1: Subtract the exponents.",
            "Step 2: x⁷ ÷ x² = x⁷⁻²"
        ],
        answer: "x⁵, where x ≠ 0"
    },

    {
        question: "Simplify: (a²b³)²",
        steps: [
            "Step 1: Multiply each exponent by 2.",
            "Step 2: (a²)² = a⁴",
            "Step 3: (b³)² = b⁶"
        ],
        answer: "a⁴b⁶"
    },

    {
        question: "Calculate: 16^(1/2)",
        steps: [
            "Step 1: A power of 1/2 means square root.",
            "Step 2: 16^(1/2) = √16"
        ],
        answer: "4"
    },

    {
        question: "Calculate: 27^(1/3)",
        steps: [
            "Step 1: A power of 1/3 means cube root.",
            "Step 2: 27^(1/3) = ∛27"
        ],
        answer: "3"
    },

    {
        question: "Calculate: 8^(-2/3)",
        steps: [
            "Step 1: The negative exponent means take the reciprocal.",
            "Step 2: 8^(-2/3) = 1/(8^(2/3))",
            "Step 3: ∛8 = 2",
            "Step 4: 2² = 4"
        ],
        answer: "1/4"
    },

    {
        question: "Solve: 2ˣ = 32",
        steps: [
            "Step 1: Write 32 as a power of 2.",
            "Step 2: 2ˣ = 2⁵",
            "Step 3: Equate the exponents."
        ],
        answer: "x = 5"
    },

    {
        question: "Solve: 3^(x+1) = 81",
        steps: [
            "Step 1: Write 81 as a power of 3.",
            "Step 2: 3^(x+1) = 3⁴",
            "Step 3: x + 1 = 4",
            "Step 4: x = 3"
        ],
        answer: "x = 3"
    },

    {
        question: "Simplify: (x⁻²)⁻¹",
        steps: [
            "Step 1: Multiply the exponents.",
            "Step 2: (-2) × (-1) = 2",
            "Step 3: x²"
        ],
        answer: "x², where x ≠ 0"
    },

    {
        question: "Calculate: √50",
        steps: [
            "Step 1: Find a perfect square factor of 50.",
            "Step 2: 50 = 25 × 2",
            "Step 3: √50 = √25 × √2",
            "Step 4: √25 = 5"
        ],
        answer: "5√2"
    },

    {
        question: "Simplify: 2√3 + 5√3",
        steps: [
            "Step 1: Identify the like surds.",
            "Step 2: Add their coefficients.",
            "Step 3: 2 + 5 = 7"
        ],
        answer: "7√3"
    }

];


// ==========================================
// 2. DISPLAY WORKED EXAMPLES
// ==========================================

function displayWorkedExamples() {

    const container =
        document.getElementById("workedExamples");

    if (!container) return;

    workedExamples.forEach((example, index) => {

        const card = document.createElement("div");
        card.className = "example-card";

        const heading = document.createElement("h4");
        heading.textContent =
            `Example ${index + 1}: ${example.question}`;

        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = "Show Solution";

        const solution = document.createElement("div");
        solution.className = "steps";
        solution.hidden = true;

        example.steps.forEach(step => {

            const paragraph = document.createElement("p");
            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const finalAnswer = document.createElement("p");
        finalAnswer.innerHTML =
            `<strong>Final Answer: ${example.answer}</strong>`;

        solution.appendChild(finalAnswer);

        button.addEventListener("click", () => {

            solution.hidden = !solution.hidden;

            solution.style.display =
                solution.hidden ? "none" : "block";

            button.textContent =
                solution.hidden ? "Show Solution" : "Hide Solution";

        });

        card.append(heading, button, solution);

        container.appendChild(card);

    });

}


// ==========================================
// 3. EXISTING 20 PRACTICE QUESTIONS
// ==========================================

const practiceData = [

    ["Simplify: 2³ × 2⁴", "2³⁺⁴ = 2⁷ = 128"],

    ["Simplify: 5⁶ ÷ 5²", "5⁶⁻² = 5⁴ = 625"],

    ["Simplify: (3²)³", "3²ˣ³ = 3⁶ = 729"],

    ["Calculate: 4⁰", "Any non-zero number to the power 0 is 1. Answer: 1"],

    ["Calculate: 2⁻³", "2⁻³ = 1/2³ = 1/8"],

    ["Simplify: 3² × 3⁻¹", "3²⁺⁽⁻¹⁾ = 3"],

    ["Calculate: (2 × 3)²", "6² = 36"],

    ["Calculate: 2³ + 2²", "8 + 4 = 12"],

    ["Simplify: 10³ ÷ 10", "10³ ÷ 10¹ = 100"],

    ["Simplify: x³ × x⁵", "x⁸"],

    ["Simplify: x⁷ ÷ x²", "x⁵, where x ≠ 0"],

    ["Simplify: (a²b³)²", "a⁴b⁶"],

    ["Calculate: 16^(1/2)", "√16 = 4"],

    ["Calculate: 27^(1/3)", "∛27 = 3"],

    ["Calculate: 8^(-2/3)", "∛8 = 2, so 2⁻² = 1/4"],

    ["Solve: 2ˣ = 32", "x = 5"],

    ["Solve: 3^(x+1) = 81", "x + 1 = 4, therefore x = 3"],

    ["Simplify: (x⁻²)⁻¹", "x², where x ≠ 0"],

    ["TRICK: Calculate 0⁻²", "Undefined because division by zero is not allowed."],

    ["TRICK: Compare (-2)⁴ and -2⁴", "(-2)⁴ = 16, while -2⁴ = -16."]

];


// ==========================================
// 4. DISPLAY PRACTICE QUESTIONS
// ==========================================

function createPractice() {

    const container =
        document.getElementById("exponentsPractice");

    if (!container) return;

    const heading = document.createElement("h3");
    heading.textContent = "Practice: 20 Questions";

    container.appendChild(heading);

    practiceData.forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "practice-question";

        const question = document.createElement("h4");
        question.textContent = `Question ${index + 1}`;

        const text = document.createElement("p");
        text.textContent =
            item[0].replace("TRICK: ", "");

        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = "Show Answer";

        const answer = document.createElement("div");
        answer.className = "answer-box";
        answer.textContent = item[1];
        answer.hidden = true;

        button.addEventListener("click", () => {

            answer.hidden = !answer.hidden;

            button.textContent =
                answer.hidden ? "Show Answer" : "Hide Answer";

        });

        card.append(question, text, button, answer);

        container.appendChild(card);

    });

}


// ==========================================
// 5. QUIZ QUESTION DATA
// WE WILL CREATE THE 50 QUESTIONS TOGETHER
// ==========================================

const quizQuestions = [];

/*
LATER WE WILL ADD:

15 EASY QUESTIONS
20 MEDIUM QUESTIONS
15 DIFFICULT QUESTIONS

Each question will contain:

{
    question: "Question goes here",
    options: ["A", "B", "C", "D"],
    answer: 0,
    difficulty: "Easy"
}

The answer number represents the correct option:
0 = A
1 = B
2 = C
3 = D
*/


// ==========================================
// 6. QUIZ VARIABLES
// ==========================================

let selectedAnswers = {};


// ==========================================
// 7. START QUIZ
// ==========================================

function startQuiz() {

    if (quizQuestions.length !== 50) {

        alert(
            "The 50 quiz questions have not been added yet. We will create them together."
        );

        return;
    }

    selectedAnswers = {};

    document.getElementById("quizResults").hidden = true;
    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizQuestions").innerHTML = "";

    displayQuizQuestions();

    updateQuizProgress();

}


// ==========================================
// 8. DISPLAY QUIZ QUESTIONS
// ==========================================

function displayQuizQuestions() {

    const container =
        document.getElementById("quizQuestions");

    quizQuestions.forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "quiz-question";

        const heading = document.createElement("h4");

        heading.textContent =
            `Question ${index + 1}: ${item.question}`;

        card.appendChild(heading);

        item.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");
            label.className = "quiz-option";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = optionIndex;

            radio.addEventListener("change", () => {

                selectedAnswers[index] = optionIndex;

                updateQuizProgress();

            });

            label.append(radio, document.createTextNode(option));

            card.appendChild(label);

        });

        container.appendChild(card);

    });

}


// ==========================================
// 9. UPDATE QUIZ PROGRESS
// ==========================================

function updateQuizProgress() {

    const answered =
        Object.keys(selectedAnswers).length;

    const progress =
        (answered / 50) * 100;

    document.getElementById("quizScore").textContent =
        `Answered: ${answered}/50`;

    document.getElementById("progressBar").style.width =
        `${progress}%`;

}


// ==========================================
// 10. SUBMIT AND MARK QUIZ
// ==========================================

function submitQuiz() {

    if (Object.keys(selectedAnswers).length !== 50) {

        alert("Please answer all 50 questions before submitting.");

        return;
    }

    let score = 0;

    quizQuestions.forEach((question, index) => {

        if (selectedAnswers[index] === question.answer) {
            score++;
        }

    });

    const percentage = (score / 50) * 100;

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("finalScore").textContent =
        `Your score: ${score}/50 (${percentage}%)`;

    let feedback;

    if (percentage >= 80) {
        feedback = "Excellent work! You understand this topic very well.";
    } else if (percentage >= 50) {
        feedback = "Good effort! Keep practising to improve your result.";
    } else {
        feedback = "Keep learning. Review the notes and worked examples, then try again.";
    }

    document.getElementById("finalFeedback").textContent =
        feedback;

}


// ==========================================
// 11. RETRY QUIZ
// ==========================================

function retryQuiz() {

    startQuiz();

}


// ==========================================
// 12. CONNECT BUTTONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    displayWorkedExamples();

    createPractice();

    document.getElementById("startQuiz")
        .addEventListener("click", startQuiz);

    document.getElementById("submitQuiz")
        .addEventListener("click", submitQuiz);

    document.getElementById("retryQuiz")
        .addEventListener("click", retryQuiz);

    console.log(
        "MathsHelpSA Exponents and Surds connected successfully!"
    );

});
