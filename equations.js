
// =====================================
// EQUATIONS AND INEQUALITIES
// MATHSHELPSA - GRADE 11
// =====================================

// =====================================
// OPEN AND CLOSE PAGE SECTIONS
// =====================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = isHidden ? "−" : "＋";
    }

}
// =====================================
// 1. WORKED EXAMPLES
// =====================================

const workedExamples = [

    {
        question: "Solve: 2x + 5 = 15",
        steps: [
            "2x + 5 = 15",
            "Subtract 5 from both sides.",
            "2x = 10",
            "Divide both sides by 2.",
            "x = 5"
        ],
        answer: "x = 5"
    },

    {
        question: "Solve: 3x - 7 = 14",
        steps: [
            "3x - 7 = 14",
            "Add 7 to both sides.",
            "3x = 21",
            "Divide by 3.",
            "x = 7"
        ],
        answer: "x = 7"
    },

    {
        question: "Solve: 5x + 10 = 35",
        steps: [
            "5x + 10 = 35",
            "Subtract 10.",
            "5x = 25",
            "Divide by 5.",
            "x = 5"
        ],
        answer: "x = 5"
    },

    {
        question: "Solve: 4(x + 2) = 24",
        steps: [
            "4(x + 2) = 24",
            "Expand the brackets.",
            "4x + 8 = 24",
            "Subtract 8.",
            "4x = 16",
            "Divide by 4.",
            "x = 4"
        ],
        answer: "x = 4"
    },

    {
        question: "Solve: 2(x - 3) = 10",
        steps: [
            "2(x - 3) = 10",
            "Expand the brackets.",
            "2x - 6 = 10",
            "Add 6.",
            "2x = 16",
            "Divide by 2.",
            "x = 8"
        ],
        answer: "x = 8"
    },

    {
        question: "Solve: 3x + 4 = x + 12",
        steps: [
            "3x + 4 = x + 12",
            "Subtract x from both sides.",
            "2x + 4 = 12",
            "Subtract 4.",
            "2x = 8",
            "x = 4"
        ],
        answer: "x = 4"
    },

    {
        question: "Solve: 5x - 3 = 2x + 12",
        steps: [
            "5x - 3 = 2x + 12",
            "Subtract 2x.",
            "3x - 3 = 12",
            "Add 3.",
            "3x = 15",
            "x = 5"
        ],
        answer: "x = 5"
    },

    {
        question: "Solve: x/3 + 2 = 6",
        steps: [
            "x/3 + 2 = 6",
            "Subtract 2.",
            "x/3 = 4",
            "Multiply by 3.",
            "x = 12"
        ],
        answer: "x = 12"
    },

    {
        question: "Solve: 2x/5 = 8",
        steps: [
            "2x/5 = 8",
            "Multiply both sides by 5.",
            "2x = 40",
            "Divide by 2.",
            "x = 20"
        ],
        answer: "x = 20"
    },

    {
        question: "Solve: x² - 9 = 0",
        steps: [
            "x² - 9 = 0",
            "Add 9 to both sides.",
            "x² = 9",
            "Take the square root of both sides.",
            "x = ±3"
        ],
        answer: "x = 3 or x = -3"
    },

    {
        question: "Solve: x² - 5x + 6 = 0",
        steps: [
            "x² - 5x + 6 = 0",
            "Factorise.",
            "(x - 2)(x - 3) = 0",
            "x - 2 = 0 or x - 3 = 0",
            "x = 2 or x = 3"
        ],
        answer: "x = 2 or x = 3"
    },

    {
        question: "Solve: x² + 5x + 6 = 0",
        steps: [
            "x² + 5x + 6 = 0",
            "Factorise.",
            "(x + 2)(x + 3) = 0",
            "x + 2 = 0 or x + 3 = 0",
            "x = -2 or x = -3"
        ],
        answer: "x = -2 or x = -3"
    },

    {
        question: "Solve: x² - 7x + 12 = 0",
        steps: [
            "x² - 7x + 12 = 0",
            "Factorise.",
            "(x - 3)(x - 4) = 0",
            "x = 3 or x = 4"
        ],
        answer: "x = 3 or x = 4"
    },

    {
        question: "Solve: x² - 4x = 0",
        steps: [
            "x² - 4x = 0",
            "Take out the common factor x.",
            "x(x - 4) = 0",
            "x = 0 or x - 4 = 0",
            "x = 0 or x = 4"
        ],
        answer: "x = 0 or x = 4"
    },

    {
        question: "Solve: x² + 2x - 8 = 0",
        steps: [
            "x² + 2x - 8 = 0",
            "Factorise.",
            "(x + 4)(x - 2) = 0",
            "x = -4 or x = 2"
        ],
        answer: "x = -4 or x = 2"
    },

    {
        question: "Solve: x + 4 > 9",
        steps: [
            "x + 4 > 9",
            "Subtract 4 from both sides.",
            "x > 5"
        ],
        answer: "x > 5"
    },

    {
        question: "Solve: 3x < 18",
        steps: [
            "3x < 18",
            "Divide both sides by 3.",
            "x < 6"
        ],
        answer: "x < 6"
    },

    {
        question: "Solve: -2x > 10",
        steps: [
            "-2x > 10",
            "Divide both sides by -2.",
            "Reverse the inequality sign.",
            "x < -5"
        ],
        answer: "x < -5"
    },

    {
        question: "Solve: 2x + 3 ≤ 11",
        steps: [
            "2x + 3 ≤ 11",
            "Subtract 3.",
            "2x ≤ 8",
            "Divide by 2.",
            "x ≤ 4"
        ],
        answer: "x ≤ 4"
    },

    {
        question: "Solve: 5 - x ≥ 2",
        steps: [
            "5 - x ≥ 2",
            "Subtract 5.",
            "-x ≥ -3",
            "Divide by -1 and reverse the sign.",
            "x ≤ 3"
        ],
        answer: "x ≤ 3"
    }

];


// =====================================
// 2. DISPLAY WORKED EXAMPLES
// =====================================

function displayWorkedExamples() {

    const container = document.getElementById("workedExamples");

    container.innerHTML = "";

    workedExamples.forEach((example, index) => {

        const card = document.createElement("article");

        card.className = "example-card";

        const title = document.createElement("h3");
        title.textContent = `Example ${index + 1}`;

        const question = document.createElement("p");
        question.textContent = example.question;

        const button = document.createElement("button");
        button.className = "solution-button";
        button.textContent = "Show Solution";

        const solution = document.createElement("div");
        solution.className = "solution";

        example.steps.forEach(step => {

            const paragraph = document.createElement("p");
            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const answer = document.createElement("p");
        answer.innerHTML = `<strong>Final Answer: ${example.answer}</strong>`;

        solution.appendChild(answer);

        button.addEventListener("click", () => {

            const isHidden = solution.style.display !== "block";

            solution.style.display = isHidden ? "block" : "none";

            button.textContent = isHidden
                ? "Hide Solution"
                : "Show Solution";

        });

        card.appendChild(title);
        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(solution);

        container.appendChild(card);

    });

}


// =====================================
// 3. PRACTICE QUESTIONS
// =====================================

const practiceData = [

    { question: "Solve: x + 6 = 10", answer: "x = 4" },
    { question: "Solve: 2x = 18", answer: "x = 9" },
    { question: "Solve: 3x + 2 = 14", answer: "x = 4" },
    { question: "Solve: 5x - 5 = 20", answer: "x = 5" },
    { question: "Solve: 4x + 8 = 28", answer: "x = 5" },

    { question: "Solve: 2(x + 3) = 16", answer: "x = 5" },
    { question: "Solve: 3(x - 2) = 12", answer: "x = 6" },
    { question: "Solve: 4x + 3 = 2x + 13", answer: "x = 5" },
    { question: "Solve: x/4 = 5", answer: "x = 20" },
    { question: "Solve: 3x/2 = 9", answer: "x = 6" },

    { question: "Solve: x² - 16 = 0", answer: "x = ±4" },
    { question: "Solve: x² - 9x + 20 = 0", answer: "x = 4 or x = 5" },
    { question: "Solve: x² + 7x + 12 = 0", answer: "x = -3 or x = -4" },
    { question: "Solve: x² - 25 = 0", answer: "x = ±5" },
    { question: "Solve: x² - 6x + 8 = 0", answer: "x = 2 or x = 4" },

    { question: "Solve: x + 5 > 12", answer: "x > 7" },
    { question: "Solve: 4x ≤ 20", answer: "x ≤ 5" },
    { question: "Solve: -3x < 12", answer: "x > -4" },
    { question: "Solve: 2x - 4 ≥ 8", answer: "x ≥ 6" },
    { question: "Solve: 10 - 2x > 4", answer: "x < 3" }

];


// =====================================
// 4. DISPLAY PRACTICE QUESTIONS
// =====================================

function createPractice() {

    const container = document.getElementById("equationsPractice");

    container.innerHTML = "";

    practiceData.forEach((item, index) => {

        const card = document.createElement("article");

        card.className = "practice-card";

        const title = document.createElement("h3");
        title.textContent = `Question ${index + 1}`;

        const question = document.createElement("p");
        question.textContent = item.question;

        const button = document.createElement("button");
        button.className = "answer-button";
        button.textContent = "Show Answer";

        const answer = document.createElement("div");
        answer.className = "practice-answer";

        const answerText = document.createElement("p");
        answerText.textContent = item.answer;

        answer.appendChild(answerText);

        button.addEventListener("click", () => {

            const isHidden = answer.style.display !== "block";

            answer.style.display = isHidden ? "block" : "none";

            button.textContent = isHidden
                ? "Hide Answer"
                : "Show Answer";

        });

        card.appendChild(title);
        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(answer);

        container.appendChild(card);

    });

}


// =====================================
// 5. QUIZ - TO BE COMPLETED
// =====================================

// We will add:
// 15 Easy questions
// 20 Medium questions
// 15 Difficult questions
//
// Each question will have:
// - Four answer options
// - Correct answer
// - Explanation
// - Difficulty level
//
// After submission, learners will see:
// - Their answer
// - Correct answer
// - Whether they were correct
// - Step-by-step correction


// =====================================
// 6. LOAD PAGE
// =====================================

document.addEventListener("DOMContentLoaded", () => {

    displayWorkedExamples();

    createPractice();

});
