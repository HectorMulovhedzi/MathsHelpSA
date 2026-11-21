
/* =====================================
   MATHSHELP SA - ANALYTICAL GEOMETRY
===================================== */


/* =====================================
   1. OPEN AND CLOSE SECTIONS
===================================== */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.hidden = !section.hidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = section.hidden ? "＋" : "−";
    }

}


/* =====================================
   2. UNIT 1 WORKED EXAMPLES
   THE INCLINATION OF A LINE
===================================== */

const unit1Examples = [

    {
        question: "Calculate the gradient of a line with an inclination of 45°.",

        steps: [
            "Formula: m = tan θ",
            "Substitute θ = 45°.",
            "m = tan 45°",
            "m = 1"
        ],

        answer: "The gradient is 1."
    },

    {
        question: "Determine the inclination of a line with a gradient of 1.",

        steps: [
            "Formula: m = tan θ",
            "Substitute m = 1.",
            "1 = tan θ",
            "θ = tan⁻¹(1)",
            "θ = 45°"
        ],

        answer: "The inclination is 45°."
    },

    {
        question: "Calculate the gradient of a line with an inclination of 135°.",

        steps: [
            "Formula: m = tan θ",
            "Substitute θ = 135°.",
            "m = tan 135°",
            "m = -1"
        ],

        answer: "The gradient is -1."
    },

    {
        question: "Determine the inclination of a line with a gradient of -1.",

        steps: [
            "Formula: m = tan θ",
            "-1 = tan θ",
            "θ = tan⁻¹(-1)",
            "The reference angle is 45°.",
            "The inclination is in the second quadrant.",
            "θ = 180° - 45°"
        ],

        answer: "The inclination is 135°."
    },

    {
        question: "Calculate the gradient of a horizontal line.",

        steps: [
            "A horizontal line has an inclination of 0°.",
            "Formula: m = tan θ",
            "m = tan 0°",
            "m = 0"
        ],

        answer: "The gradient is 0."
    }

];


/* =====================================
   3. UNIT 2 WORKED EXAMPLES
   EQUATION OF A STRAIGHT LINE
===================================== */

const unit2Examples = [

    {
        question: "Identify the gradient and y-intercept of y = 3x + 5.",

        steps: [
            "Compare with y = mx + c.",
            "m = 3",
            "c = 5"
        ],

        answer: "Gradient = 3; y-intercept = (0; 5)."
    },

    {
        question: "Calculate the gradient of a line passing through A(2; 3) and B(4; 7).",

        steps: [
            "Formula: m = (y₂ - y₁) / (x₂ - x₁)",
            "m = (7 - 3) / (4 - 2)",
            "m = 4 / 2",
            "m = 2"
        ],

        answer: "The gradient is 2."
    },

    {
        question: "Find the equation of a line with gradient 2 passing through (1; 4).",

        steps: [
            "Formula: y - y₁ = m(x - x₁)",
            "Substitute m = 2 and (1; 4).",
            "y - 4 = 2(x - 1)",
            "y - 4 = 2x - 2",
            "y = 2x + 2"
        ],

        answer: "The equation is y = 2x + 2."
    },

    {
        question: "Find the equation of a line with gradient 3 and y-intercept 4.",

        steps: [
            "Formula: y = mx + c",
            "Substitute m = 3 and c = 4.",
            "y = 3x + 4"
        ],

        answer: "The equation is y = 3x + 4."
    },

    {
        question: "Find the equation of the line passing through (1; 2) and (3; 6).",

        steps: [
            "First calculate the gradient.",
            "m = (6 - 2) / (3 - 1)",
            "m = 4 / 2 = 2",
            "Use y - y₁ = m(x - x₁).",
            "y - 2 = 2(x - 1)",
            "y - 2 = 2x - 2",
            "y = 2x"
        ],

        answer: "The equation is y = 2x."
    }

];


/* =====================================
   4. DISPLAY WORKED EXAMPLES
===================================== */

function displayExamples(examples, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const heading = document.createElement("h4");

        heading.textContent = `Example ${index + 1}`;

        const question = document.createElement("p");

        question.textContent = item.question;

        const button = document.createElement("button");

        button.className = "solution-button";

        button.textContent = "Show Solution";

        const solution = document.createElement("div");

        solution.className = "solution";

        solution.hidden = true;

        item.steps.forEach(step => {

            const paragraph = document.createElement("p");

            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const finalAnswer = document.createElement("p");

        const strong = document.createElement("strong");

        strong.textContent = item.answer;

        finalAnswer.appendChild(strong);

        solution.appendChild(finalAnswer);

        button.addEventListener("click", function () {

            solution.hidden = !solution.hidden;

            button.textContent = solution.hidden
                ? "Show Solution"
                : "Hide Solution";

        });

        card.appendChild(heading);

        card.appendChild(question);

        card.appendChild(button);

        card.appendChild(solution);

        container.appendChild(card);

    });

}


/* =====================================
   5. UNIT 1 PRACTICE QUESTIONS
===================================== */

const unit1Questions = [

    {
        question: "Calculate the gradient when θ = 30°.",
        answer: "m = tan 30° = √3 / 3."
    },

    {
        question: "Calculate the gradient when θ = 60°.",
        answer: "m = tan 60° = √3."
    },

    {
        question: "What is the inclination of a horizontal line?",
        answer: "0°."
    },

    {
        question: "What is the gradient of a vertical line?",
        answer: "Undefined."
    },

    {
        question: "Determine the inclination if m = -1.",
        answer: "135°."
    },

    {
        question: "Calculate the gradient if the inclination is 120°.",
        answer: "m = tan 120° = -√3."
    },

    {
        question: "Determine the inclination if the gradient is √3.",
        answer: "60°."
    },

    {
        question: "Determine the inclination if the gradient is -√3.",
        answer: "120°."
    },

    {
        question: "What is the gradient of a line inclined at 0°?",
        answer: "0."
    },

    {
        question: "What is the gradient of a line inclined at 90°?",
        answer: "Undefined."
    }

];


/* =====================================
   6. UNIT 2 PRACTICE QUESTIONS
===================================== */

const unit2Questions = [

    {
        question: "Identify the gradient and y-intercept of y = 5x + 2.",
        answer: "Gradient = 5; y-intercept = (0; 2)."
    },

    {
        question: "Calculate the gradient through (1; 2) and (3; 6).",
        answer: "m = (6 - 2) / (3 - 1) = 2."
    },

    {
        question: "Find the equation of a line with gradient 3 and y-intercept 4.",
        answer: "y = 3x + 4."
    },

    {
        question: "Find the equation of a line with gradient 2 passing through (2; 5).",
        answer: "y - 5 = 2(x - 2), therefore y = 2x + 1."
    },

    {
        question: "Determine the y-intercept of y = -4x + 7.",
        answer: "(0; 7)."
    },

    {
        question: "Calculate the gradient through (2; 5) and (4; 1).",
        answer: "m = (1 - 5) / (4 - 2) = -2."
    },

    {
        question: "Find the equation of a line with gradient -1 passing through (3; 4).",
        answer: "y - 4 = -(x - 3), therefore y = -x + 7."
    },

    {
        question: "Find the equation of a line passing through (0; 6) with gradient 2.",
        answer: "y = 2x + 6."
    },

    {
        question: "What is the gradient of the line y = -3x + 8?",
        answer: "-3."
    },

    {
        question: "Find the equation of a line passing through (1; 2) and (3; 4).",
        answer: "m = 1, therefore y = x + 1."
    }

];


/* =====================================
   7. DISPLAY PRACTICE QUESTIONS
===================================== */

function displayPractice(questions, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const heading = document.createElement("h4");

        heading.textContent = `Question ${index + 1}`;

        const question = document.createElement("p");

        question.textContent = item.question;

        const button = document.createElement("button");

        button.className = "answer-button";

        button.textContent = "Show Answer";

        const answer = document.createElement("div");

        answer.className = "practice-answer";

        answer.hidden = true;

        const answerText = document.createElement("p");

        answerText.textContent = item.answer;

        answer.appendChild(answerText);

        button.addEventListener("click", function () {

            answer.hidden = !answer.hidden;

            button.textContent = answer.hidden
                ? "Show Answer"
                : "Hide Answer";

        });

        card.appendChild(heading);

        card.appendChild(question);

        card.appendChild(button);

        card.appendChild(answer);

        container.appendChild(card);

    });

}


/* =====================================
   8. LOAD ALL CONTENT
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    displayExamples(unit1Examples, "unit1WorkedExamples");

    displayExamples(unit2Examples, "unit2WorkedExamples");

    displayPractice(unit1Questions, "unit1Questions");

    displayPractice(unit2Questions, "unit2Questions");

    console.log("Analytical Geometry loaded successfully.");

});
