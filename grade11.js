
// Show or hide a lesson
function showLesson(lessonId) {
    const lesson = document.getElementById(lessonId);

    lesson.style.display =
        lesson.style.display === "block" ? "none" : "block";
}

// Show or hide worked solution steps
function showSteps(stepsId) {
    const steps = document.getElementById(stepsId);

    steps.style.display =
        steps.style.display === "block" ? "none" : "block";
}

// 20 practice questions for each topic
// Each question includes its answer and a short explanation.

const practiceData = {

    exponents: [
        ["Simplify: 2³ × 2⁴", "2³⁺⁴ = 2⁷ = 128"],
        ["Simplify: 5⁶ ÷ 5²", "5⁶⁻² = 5⁴ = 625"],
        ["Simplify: (3²)³", "3²ˣ³ = 3⁶ = 729"],
        ["Calculate: 4⁰", "Any non-zero number to the power 0 is 1. Answer: 1"],
        ["Calculate: 2⁻³", "2⁻³ = 1/2³ = 1/8"],
        ["Simplify: 3² × 3⁻¹", "3²⁺⁽⁻¹⁾ = 3¹ = 3"],
        ["Calculate: (2 × 3)²", "6² = 36"],
        ["Calculate: 2³ + 2²", "8 + 4 = 12. Add the powers' values; do not add the exponents."],
        ["Simplify: 10³ ÷ 10", "10³ ÷ 10¹ = 10² = 100"],
        ["Simplify: x³ × x⁵", "x³⁺⁵ = x⁸"],
        ["Simplify: x⁷ ÷ x²", "x⁷⁻² = x⁵, where x ≠ 0"],
        ["Simplify: (a²b³)²", "a⁴b⁶. Multiply each exponent by 2."],
        ["Calculate: 16^(1/2)", "√16 = 4"],
        ["Calculate: 27^(1/3)", "∛27 = 3"],
        ["Calculate: 8^(-2/3)", "∛8 = 2, so 2⁻² = 1/4"],
        ["Solve: 2ˣ = 32", "32 = 2⁵, therefore x = 5"],
        ["Solve: 3^(x+1) = 81", "81 = 3⁴, so x + 1 = 4. Therefore x = 3"],
        ["Simplify: (x⁻²)⁻¹", "x², where x ≠ 0"],
        ["TRICK: Calculate 0⁻²", "Undefined. A negative exponent means a reciprocal, and division by zero is not allowed."],
        ["TRICK: Compare (-2)⁴ and -2⁴", "(-2)⁴ = 16, but -2⁴ = -(2⁴) = -16. Brackets matter."]
    ],

    equations: [
        ["Solve: 3x + 5 = 20", "3x = 15, so x = 5"],
        ["Solve: 7x - 4 = 24", "7x = 28, so x = 4"],
        ["Solve: 2(x + 3) = 14", "2x + 6 = 14, so x = 4"],
        ["Solve: 5x + 2 = 3x + 10", "2x = 8, so x = 4"],
        ["Solve: x/3 + 2 = 6", "x/3 = 4, so x = 12"],
        ["Solve: 4(x - 2) = 2x + 6", "4x - 8 = 2x + 6; 2x = 14; x = 7"],
        ["Solve: x² = 49", "x = ±7. Both 7 and -7 have a square of 49."],
        ["Solve: x² - 9 = 0", "x² = 9, so x = ±3"],
        ["Factorise and solve: x² + 5x + 6 = 0", "(x + 2)(x + 3) = 0, so x = -2 or x = -3"],
        ["Solve: x² - 5x + 6 = 0", "(x - 2)(x - 3) = 0, so x = 2 or x = 3"],
        ["Solve: x² - 4 = 0", "(x - 2)(x + 2) = 0, so x = ±2"],
        ["Solve: 2x² - 8 = 0", "2x² = 8; x² = 4; x = ±2"],
        ["Solve: x² + 4x + 4 = 0", "(x + 2)² = 0, so x = -2"],
        ["Solve: x² - 2x - 8 = 0", "(x - 4)(x + 2) = 0, so x = 4 or x = -2"],
        ["Solve: 2x + 3 < 11", "2x < 8, so x < 4"],
        ["Solve: -3x > 12", "Divide by -3 and reverse the inequality: x < -4"],
        ["Solve simultaneously: x + y = 10 and x - y = 2", "Add the equations: 2x = 12, so x = 6. Then y = 4."],
        ["Solve: (x - 1)(x + 4) = 0", "x - 1 = 0 or x + 4 = 0. So x = 1 or x = -4"],
        ["TRICK: Solve: x² = -9 over the real numbers", "There is no real solution because the square of a real number cannot be negative."],
        ["TRICK: Solve: 2(x + 3) = 2x + 6", "Both sides are identical. Every real value of x is a solution."]
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
        ["Simplify: sin²θ + cos²θ", "Using the identity sin²θ + cos²θ = 1. Answer: 1"],
        ["If sin θ = 3/5 and θ is acute, find cos θ.", "Using a 3-4-5 triangle, cos θ = 4/5"],
        ["If opposite = 6 and hypotenuse = 10, find sin θ.", "sin θ = opposite/hypotenuse = 6/10 = 3/5"],
        ["If adjacent = 8 and hypotenuse = 10, find cos θ.", "cos θ = 8/10 = 4/5"],
        ["If opposite = 5 and adjacent = 5, find tan θ.", "tan θ = 5/5 = 1"],
        ["Solve sin θ = 1/2 for 0° ≤ θ ≤ 360°.", "θ = 30° or 150°"],
        ["Solve cos θ = 1/2 for 0° ≤ θ ≤ 360°.", "θ = 60° or 300°"],
        ["Solve tan θ = 1 for 0° ≤ θ ≤ 360°.", "θ = 45° or 225°"],
        ["Simplify: (sin θ)/(cos θ)", "This is the identity tan θ, where cos θ ≠ 0"],
        ["TRICK: Calculate tan 90°", "Undefined. tan θ = sin θ/cos θ, and cos 90° = 0."],
        ["TRICK: If sin θ = 0.5, must θ be 30°?", "Not always. Between 0° and 360°, θ can be 30° or 150°."]
    ],

    probability: [
        ["A fair die is rolled. Find P(rolling a 4).", "1 favourable outcome out of 6. Answer: 1/6"],
        ["A fair coin is tossed. Find P(heads).", "1/2"],
        ["A die is rolled. Find P(rolling an even number).", "Even numbers: 2, 4, 6. Answer: 3/6 = 1/2"],
        ["A die is rolled. Find P(rolling a number greater than 4).", "Outcomes: 5 and 6. Answer: 2/6 = 1/3"],
        ["A bag has 3 red and 2 blue balls. Find P(red).", "3/5"],
        ["A bag has 4 green and 6 yellow balls. Find P(yellow).", "6/10 = 3/5"],
        ["Find the complement of an event with probability 0.3.", "P(not A) = 1 - 0.3 = 0.7"],
        ["If P(A) = 0.6, find P(not A).", "1 - 0.6 = 0.4"],
        ["Two coins are tossed. Find P(two heads).", "Possible outcomes: HH, HT, TH, TT. Answer: 1/4"],
        ["Two dice are rolled. Find P(a total of 7).", "Six outcomes give 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Answer: 6/36 = 1/6"],
        ["If P(A) = 0.4 and P(B) = 0.3 and they are mutually exclusive, find P(A or B).", "P(A ∪ B) = 0.4 + 0.3 = 0.7"],
        ["If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, find P(A ∪ B).", "0.5 + 0.4 - 0.2 = 0.7"],
        ["Two independent events have probabilities 1/2 and 1/3. Find P(both).", "1/2 × 1/3 = 1/6"],
        ["A card is selected from a standard 52-card deck. Find P(an ace).", "There are 4 aces. Answer: 4/52 = 1/13"],
        ["A card is selected from a standard deck. Find P(a heart).", "There are 13 hearts. Answer: 13/52 = 1/4"],
        ["A die is rolled. Find P(not rolling a 6).", "5 outcomes are not 6. Answer: 5/6"],
        ["A bag has 2 red and 3 blue balls. One ball is selected and replaced. Find P(two red balls in two selections).", "2/5 × 2/5 = 4/25"],
        ["TRICK: Can a probability be 1.2?", "No. A probability must be between 0 and 1 inclusive."],
        ["TRICK: If P(A) = 0.7, can P(not A) also be 0.7?", "No. P(not A) = 1 - 0.7 = 0.3."],
        ["TRICK: Two events are mutually exclusive. Can they happen together?", "No. Mutually exclusive events cannot happen at the same time, so P(A ∩ B) = 0."]
    ]
};

// Build the practice questions on the page
function createPractice(topic, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    const questions = practiceData[topic];

    const heading = document.createElement("h4");
    heading.textContent = "Practice: 20 Questions";
    container.appendChild(heading);

    const intro = document.createElement("p");
    intro.textContent =
        "Try each question before revealing its answer. TRICK questions test common mistakes.";
    container.appendChild(intro);

    questions.forEach((item, index) => {
        const [question, answer] = item;
        const isTrick = question.startsWith("TRICK:");

        const card = document.createElement("div");
        card.className = "practice-question";

        const number = document.createElement("h5");
        number.textContent = `Question ${index + 1}`;

        const type = document.createElement("span");
        type.className = isTrick ? "question-tag trick-tag" : "question-tag";
        type.textContent = isTrick ? "TRICK QUESTION" : "PRACTICE";

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

        card.append(number, type, questionText, answerButton, answerBox);
        container.appendChild(card);
    });
}

// Add all four practice sets when the page loads
document.addEventListener("DOMContentLoaded", function () {
    createPractice("exponents", "exponentsPractice");
    createPractice("equations", "equationsPractice");
    createPractice("trigonometry", "trigonometryPractice");
    createPractice("probability", "probabilityPractice");

    console.log("Grade 11 lessons and 80 practice questions loaded!");
});
