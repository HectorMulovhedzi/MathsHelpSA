
// ==========================================
// SHOW OR HIDE LESSONS
// ==========================================

function showLesson(lessonId) {
    const lesson = document.getElementById(lessonId);

    if (!lesson) {
        console.error("Lesson not found:", lessonId);
        return;
    }

    lesson.style.display =
        lesson.style.display === "block" ? "none" : "block";
}


// ==========================================
// SHOW OR HIDE SOLUTION STEPS
// ==========================================

function showSteps(stepsId) {
    const steps = document.getElementById(stepsId);

    if (!steps) {
        console.error("Solution steps not found:", stepsId);
        return;
    }

    steps.style.display =
        steps.style.display === "block" ? "none" : "block";
}


// ==========================================
// PRACTICE QUESTIONS
// ==========================================

const practiceData = {

    exponents: [
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
    ],

    equations: [
        ["Solve: 3x + 5 = 20", "3x = 15, so x = 5"],
        ["Solve: 7x - 4 = 24", "7x = 28, so x = 4"],
        ["Solve: 2(x + 3) = 14", "2x + 6 = 14, so x = 4"],
        ["Solve: 5x + 2 = 3x + 10", "2x = 8, so x = 4"],
        ["Solve: x/3 + 2 = 6", "x/3 = 4, so x = 12"],
        ["Solve: 4(x - 2) = 2x + 6", "4x - 8 = 2x + 6, so x = 7"],
        ["Solve: x² = 49", "x = ±7"],
        ["Solve: x² - 9 = 0", "x = ±3"],
        ["Solve: x² + 5x + 6 = 0", "(x + 2)(x + 3) = 0, so x = -2 or -3"],
        ["Solve: x² - 5x + 6 = 0", "(x - 2)(x - 3) = 0, so x = 2 or 3"],
        ["Solve: x² - 4 = 0", "x = ±2"],
        ["Solve: 2x² - 8 = 0", "x = ±2"],
        ["Solve: x² + 4x + 4 = 0", "(x + 2)² = 0, so x = -2"],
        ["Solve: x² - 2x - 8 = 0", "x = 4 or x = -2"],
        ["Solve: 2x + 3 < 11", "x < 4"],
        ["Solve: -3x > 12", "Reverse the inequality: x < -4"],
        ["Solve simultaneously: x + y = 10 and x - y = 2", "x = 6 and y = 4"],
        ["Solve: (x - 1)(x + 4) = 0", "x = 1 or x = -4"],
        ["TRICK: Solve x² = -9 over real numbers", "There is no real solution."],
        ["TRICK: Solve 2(x + 3) = 2x + 6", "Every real number is a solution."]
    ],

    trigonometry: [
        ["Calculate: sin 30°", "sin 30° = 1/2"],
        ["Calculate: cos 60°", "cos 60° = 1/2"],
        ["Calculate: tan 45°", "tan 45° = 1"],
        ["Calculate: sin 90°", "sin 90° = 1"],
        ["Calculate: cos 0°", "cos 0° = 1"],
        ["Calculate: tan 30°", "tan 30° = √3/3"],
        ["Calculate: sin 60°", "sin 60° = √3/2"],
        ["Calculate: cos 30°", "cos 30° = √3/2"],
        ["Calculate: tan 60°", "tan 60° = √3"],
        ["Simplify: sin²θ + cos²θ", "Using the square identity, the answer is 1."],
        ["If sin θ = 3/5 and θ is acute, find cos θ.", "cos θ = 4/5"],
        ["If opposite = 6 and hypotenuse = 10, find sin θ.", "sin θ = 6/10 = 3/5"],
        ["If adjacent = 8 and hypotenuse = 10, find cos θ.", "cos θ = 8/10 = 4/5"],
        ["If opposite = 5 and adjacent = 5, find tan θ.", "tan θ = 5/5 = 1"],
        ["Solve sin θ = 1/2 for 0° ≤ θ ≤ 360°.", "θ = 30° or 150°"],
        ["Solve cos θ = 1/2 for 0° ≤ θ ≤ 360°.", "θ = 60° or 300°"],
        ["Solve tan θ = 1 for 0° ≤ θ ≤ 360°.", "θ = 45° or 225°"],
        ["Simplify: sin θ / cos θ", "tan θ, where cos θ ≠ 0"],
        ["TRICK: Calculate tan 90°", "Undefined because cos 90° = 0."],
        ["TRICK: If sin θ = 0.5, must θ be 30°?", "No. Between 0° and 360°, θ can be 30° or 150°."]
    ],

    functions: [
        ["Given y = 2x + 1, calculate y when x = 3.", "y = 2(3) + 1 = 7"],
        ["Given y = 3x - 2, calculate y when x = 2.", "y = 3(2) - 2 = 4"],
        ["Find the gradient between (1; 3) and (3; 7).", "m = (7 - 3)/(3 - 1) = 2"],
        ["Find the y-intercept of y = 4x + 5.", "The y-intercept is 5."],
        ["Find the gradient of y = -2x + 3.", "The gradient is -2."],
        ["Given y = x², calculate y when x = 3.", "y = 3² = 9"],
        ["Given y = x² + 2, calculate y when x = 3.", "y = 9 + 2 = 11"],
        ["Given y = x² - 4, calculate y when x = 2.", "y = 4 - 4 = 0"],
        ["What is the turning point of y = x²?", "The turning point is (0; 0)."],
        ["Does y = -x² open upwards or downwards?", "Downwards because the coefficient of x² is negative."],
        ["Find y when x = 2 in y = 6/x.", "y = 6/2 = 3"],
        ["Can x equal zero in y = 4/x?", "No. Division by zero is undefined."],
        ["Find the amplitude of y = 3 sin x.", "Amplitude = |3| = 3"],
        ["Find the amplitude of y = -2 cos x.", "Amplitude = |-2| = 2"],
        ["Find the period of y = sin x.", "The period is 360°."],
        ["What does q do in y = sin x + q?", "It shifts the graph vertically by q units."],
        ["What happens when a is negative in y = a sin x?", "The graph is reflected in the x-axis."],
        ["Calculate the average gradient between (2; 4) and (4; 16).", "(16 - 4)/(4 - 2) = 6"],
        ["TRICK: Is y = 1/x defined at x = 0?", "No. Division by zero is undefined."],
        ["TRICK: Does a negative amplitude mean the amplitude is negative?", "No. Amplitude is the absolute value of a and cannot be negative."]
    ],

    probability: [
        ["A fair die is rolled. Find P(rolling a 4).", "1/6"],
        ["A fair coin is tossed. Find P(heads).", "1/2"],
        ["A die is rolled. Find P(rolling an even number).", "3/6 = 1/2"],
        ["A die is rolled. Find P(rolling greater than 4).", "2/6 = 1/3"],
        ["A bag has 3 red and 2 blue balls. Find P(red).", "3/5"],
        ["A bag has 4 green and 6 yellow balls. Find P(yellow).", "6/10 = 3/5"],
        ["Find the complement of an event with probability 0.3.", "1 - 0.3 = 0.7"],
        ["If P(A) = 0.6, find P(not A).", "1 - 0.6 = 0.4"],
        ["Two coins are tossed. Find P(two heads).", "1/4"],
        ["Two dice are rolled. Find P(a total of 7).", "6/36 = 1/6"],
        ["If mutually exclusive events have probabilities 0.4 and 0.3, find P(A or B).", "0.4 + 0.3 = 0.7"],
        ["If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, find P(A ∪ B).", "0.5 + 0.4 - 0.2 = 0.7"],
        ["Two independent events have probabilities 1/2 and 1/3. Find P(both).", "1/2 × 1/3 = 1/6"],
        ["Find P(an ace) from a standard 52-card deck.", "4/52 = 1/13"],
        ["Find P(a heart) from a standard deck.", "13/52 = 1/4"],
        ["A die is rolled. Find P(not rolling a 6).", "5/6"],
        ["A bag has 2 red and 3 blue balls. A ball is replaced after each selection. Find P(two reds).", "2/5 × 2/5 = 4/25"],
        ["TRICK: Can a probability be 1.2?", "No. Probability must be between 0 and 1."],
        ["TRICK: If P(A) = 0.7, can P(not A) also be 0.7?", "No. P(not A) = 0.3."],
        ["TRICK: Can mutually exclusive events happen together?", "No. Their intersection has probability zero."]
    ]
};


// ==========================================
// CREATE PRACTICE QUESTIONS
// ==========================================

function createPractice(topic, containerId) {

    const container = document.getElementById(containerId);

    if (!container) {
        console.warn("Practice container not found:", containerId);
        return;
    }

    // Prevent questions from being added twice
    if (container.dataset.loaded === "true") {
        return;
    }

    const questions = practiceData[topic];

    if (!questions) {
        console.error("Practice topic not found:", topic);
        return;
    }

    const heading = document.createElement("h4");
    heading.textContent = "Practice: 20 Questions";

    const intro = document.createElement("p");
    intro.textContent =
        "Try each question before revealing the answer. Read the explanation carefully.";

    container.append(heading, intro);

    questions.forEach((item, index) => {

        const question = item[0];
        const answer = item[1];

        const isTrick = question.startsWith("TRICK:");

        const card = document.createElement("div");
        card.className = "practice-question";

        const number = document.createElement("h5");
        number.textContent = `Question ${index + 1}`;

        const tag = document.createElement("span");
        tag.className = isTrick
            ? "question-tag trick-tag"
            : "question-tag";

        tag.textContent = isTrick ? "TRICK QUESTION" : "PRACTICE";

        const questionText = document.createElement("p");
        questionText.textContent = question.replace("TRICK: ", "");

        const answerButton = document.createElement("button");
        answerButton.className = "answer-button";
        answerButton.textContent = "Show Answer";

        const answerBox = document.createElement("div");
        answerBox.className = "answer-box";
        answerBox.textContent = answer;
        answerBox.hidden = true;

        answerButton.addEventListener("click", function () {

            answerBox.hidden = !answerBox.hidden;

            answerButton.textContent =
                answerBox.hidden ? "Show Answer" : "Hide Answer";

        });

        card.append(
            number,
            tag,
            questionText,
            answerButton,
            answerBox
        );

        container.appendChild(card);

    });

    container.dataset.loaded = "true";
}


// ==========================================
// CONNECT ALL PRACTICE SECTIONS
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    createPractice("exponents", "exponentsPractice");

    createPractice("equations", "equationsPractice");

    createPractice("trigonometry", "trigonometryPractice");

    createPractice("functions", "functionsPractice");

    createPractice("probability", "probabilityPractice");

    console.log("MathsHelpSA Grade 11 JavaScript connected successfully!");

});
