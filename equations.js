
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
// 5. QUIZ QUESTIONS - 50 QUESTIONS
// GRADE 11 EQUATIONS AND INEQUALITIES
// =====================================

const quizQuestions = [

    // =====================================
    // EASY: QUESTIONS 1-15
    // =====================================

    {
        difficulty: "Easy",
        question: "Solve: x + 5 = 12",
        options: ["x = 5", "x = 7", "x = 17", "x = 6"],
        answer: 1,
        explanation: "Subtract 5 from both sides: x = 12 - 5 = 7."
    },
    {
        difficulty: "Easy",
        question: "Solve: 3x = 21",
        options: ["x = 6", "x = 8", "x = 7", "x = 9"],
        answer: 2,
        explanation: "Divide both sides by 3: x = 21 ÷ 3 = 7."
    },
    {
        difficulty: "Easy",
        question: "Solve: 2x + 4 = 14",
        options: ["x = 5", "x = 9", "x = 4", "x = 6"],
        answer: 0,
        explanation: "Subtract 4: 2x = 10. Divide by 2: x = 5."
    },
    {
        difficulty: "Easy",
        question: "Solve: 5x - 10 = 15",
        options: ["x = 3", "x = 4", "x = 6", "x = 5"],
        answer: 3,
        explanation: "Add 10: 5x = 25. Divide by 5: x = 5."
    },
    {
        difficulty: "Easy",
        question: "Solve: 4(x + 2) = 20",
        options: ["x = 2", "x = 3", "x = 4", "x = 5"],
        answer: 1,
        explanation: "Expand: 4x + 8 = 20. Then 4x = 12, so x = 3."
    },
    {
        difficulty: "Easy",
        question: "Solve: x/3 = 6",
        options: ["x = 2", "x = 9", "x = 18", "x = 12"],
        answer: 2,
        explanation: "Multiply both sides by 3: x = 18."
    },
    {
        difficulty: "Easy",
        question: "Solve: 2x - 3 = 9",
        options: ["x = 6", "x = 5", "x = 4", "x = 7"],
        answer: 0,
        explanation: "Add 3: 2x = 12. Divide by 2: x = 6."
    },
    {
        difficulty: "Easy",
        question: "Solve: x² = 25",
        options: ["x = 5 only", "x = -5 only", "x = 25", "x = ±5"],
        answer: 3,
        explanation: "Both 5² and (-5)² equal 25. Therefore x = 5 or x = -5."
    },
    {
        difficulty: "Easy",
        question: "Solve: x² - 9 = 0",
        options: ["x = ±9", "x = ±3", "x = 3 only", "x = -3 only"],
        answer: 1,
        explanation: "x² = 9. Taking square roots gives x = ±3."
    },
    {
        difficulty: "Easy",
        question: "Factorise: x² + 5x + 6",
        options: ["(x + 1)(x + 6)", "(x - 2)(x - 3)", "(x + 2)(x + 3)", "(x + 5)(x + 1)"],
        answer: 2,
        explanation: "Find two numbers that multiply to 6 and add to 5: 2 and 3."
    },
    {
        difficulty: "Easy",
        question: "Solve: x + 4 > 10",
        options: ["x > 6", "x < 6", "x > 14", "x < 14"],
        answer: 0,
        explanation: "Subtract 4 from both sides: x > 6."
    },
    {
        difficulty: "Easy",
        question: "Solve: 2x ≤ 12",
        options: ["x ≥ 6", "x < 6", "x > 6", "x ≤ 6"],
        answer: 3,
        explanation: "Divide both sides by positive 2. The sign stays the same: x ≤ 6."
    },
    {
        difficulty: "Easy",
        question: "Which symbol means greater than or equal to?",
        options: ["<", "≥", "≤", ">"],
        answer: 1,
        explanation: "The symbol ≥ means greater than or equal to."
    },
    {
        difficulty: "Easy",
        question: "Solve: -x = 8",
        options: ["x = 8", "x = 0", "x = -8", "x = -1"],
        answer: 2,
        explanation: "Multiply both sides by -1: x = -8."
    },
    {
        difficulty: "Easy",
        question: "What is the highest power in a quadratic equation?",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "A quadratic equation has degree 2. Its highest variable power is 2."
    },

    // =====================================
    // MEDIUM: QUESTIONS 16-35
    // =====================================

    {
        difficulty: "Medium",
        question: "Solve: 3x + 7 = x + 17",
        options: ["x = 3", "x = 4", "x = 6", "x = 5"],
        answer: 3,
        explanation: "Subtract x and 7: 2x = 10. Therefore x = 5."
    },
    {
        difficulty: "Medium",
        question: "Solve: 5(x - 2) = 3x + 6",
        options: ["x = 8", "x = 6", "x = 7", "x = 5"],
        answer: 0,
        explanation: "Expand: 5x - 10 = 3x + 6. Then 2x = 16, so x = 8."
    },
    {
        difficulty: "Medium",
        question: "Solve: (x + 2)/3 = 4",
        options: ["x = 8", "x = 10", "x = 12", "x = 14"],
        answer: 1,
        explanation: "Multiply by 3: x + 2 = 12. Subtract 2: x = 10."
    },
    {
        difficulty: "Medium",
        question: "Solve: 2(x + 3) - 4 = 12",
        options: ["x = 4", "x = 3", "x = 5", "x = 6"],
        answer: 2,
        explanation: "Expand: 2x + 6 - 4 = 12. So 2x = 10 and x = 5. Correction: the answer is x = 5 (option C).",
    },
    {
        difficulty: "Medium",
        question: "Solve: x² - 5x + 6 = 0",
        options: ["x = 1 or 6", "x = -2 or -3", "x = 2 or 3", "x = -2 or 3"],
        answer: 2,
        explanation: "Factorise: (x - 2)(x - 3) = 0. Therefore x = 2 or x = 3."
    },
    {
        difficulty: "Medium",
        question: "Solve: x² + 7x + 12 = 0",
        options: ["x = 3 or 4", "x = -3 or -4", "x = -2 or -6", "x = 2 or 6"],
        answer: 1,
        explanation: "Factorise: (x + 3)(x + 4) = 0. Therefore x = -3 or x = -4."
    },
    {
        difficulty: "Medium",
        question: "Solve: x² - 4x = 0",
        options: ["x = 4 only", "x = -4 or 0", "x = 0 or 4", "x = 2 or 4"],
        answer: 2,
        explanation: "Factorise: x(x - 4) = 0. Therefore x = 0 or x = 4."
    },
    {
        difficulty: "Medium",
        question: "Solve: x² - 16 = 0",
        options: ["x = ±4", "x = ±8", "x = 4 only", "x = 16"],
        answer: 0,
        explanation: "x² = 16, so x = ±4."
    },
    {
        difficulty: "Medium",
        question: "Which is the correct quadratic formula?",
        options: [
            "x = (-b ± √(b² - 4ac))/(2a)",
            "x = (b ± √(b² + 4ac))/(2a)",
            "x = (-b ± √(b² + 4ac))/a",
            "x = (-b ± √(b² - 4ac))/a"
        ],
        answer: 0,
        explanation: "The quadratic formula is x = (-b ± √(b² - 4ac))/(2a)."
    },
    {
        difficulty: "Medium",
        question: "For x² - 6x + 5 = 0, what is the sum of the roots?",
        options: ["5", "-5", "6", "-6"],
        answer: 2,
        explanation: "For ax² + bx + c = 0, the sum of roots is -b/a. Here it is 6."
    },
    {
        difficulty: "Medium",
        question: "For x² - 6x + 5 = 0, what is the product of the roots?",
        options: ["-6", "5", "6", "-5"],
        answer: 1,
        explanation: "The product of the roots is c/a = 5/1 = 5."
    },
    {
        difficulty: "Medium",
        question: "Solve: -2x > 10",
        options: ["x > -5", "x < -5", "x > 5", "x < 5"],
        answer: 1,
        explanation: "Divide by -2 and reverse the inequality sign: x < -5."
    },
    {
        difficulty: "Medium",
        question: "Solve: 5 - x ≥ 2",
        options: ["x ≥ 3", "x > 3", "x ≤ 3", "x < -3"],
        answer: 2,
        explanation: "Subtract 5: -x ≥ -3. Divide by -1 and reverse the sign: x ≤ 3."
    },
    {
        difficulty: "Medium",
        question: "Solve: 3x - 4 < 11",
        options: ["x < 5", "x > 5", "x < 7", "x > 7"],
        answer: 0,
        explanation: "Add 4: 3x < 15. Divide by 3: x < 5."
    },
    {
        difficulty: "Medium",
        question: "Solve: 2 ≤ x + 3 < 8",
        options: ["-1 ≤ x < 5", "-1 < x ≤ 5", "1 ≤ x < 11", "x ≤ -1"],
        answer: 0,
        explanation: "Subtract 3 throughout: -1 ≤ x < 5."
    },
    {
        difficulty: "Medium",
        question: "What is the discriminant of ax² + bx + c = 0?",
        options: ["b² + 4ac", "b² - 4ac", "4ac - b", "b - 4ac"],
        answer: 1,
        explanation: "The discriminant is Δ = b² - 4ac."
    },
    {
        difficulty: "Medium",
        question: "If the discriminant is negative, how many real roots does the quadratic have?",
        options: ["Two", "One", "No real roots", "Three"],
        answer: 2,
        explanation: "A negative discriminant means the square root in the quadratic formula is not real, so there are no real roots."
    },
    {
        difficulty: "Medium",
        question: "Solve: x² - 2x - 8 = 0",
        options: ["x = 4 or -2", "x = 2 or -4", "x = 4 or 2", "x = -4 or -2"],
        answer: 0,
        explanation: "Factorise: (x - 4)(x + 2) = 0. Thus x = 4 or x = -2."
    },
    {
        difficulty: "Medium",
        question: "Solve: 4x + 3 ≤ 19",
        options: ["x ≥ 4", "x ≤ 4", "x < 4", "x > 4"],
        answer: 1,
        explanation: "Subtract 3: 4x ≤ 16. Divide by 4: x ≤ 4."
    },
    {
        difficulty: "Medium",
        question: "Which equation has roots 2 and 5?",
        options: ["x² + 7x + 10 = 0", "x² - 7x + 10 = 0", "x² - 10x + 7 = 0", "x² + 3x - 10 = 0"],
        answer: 1,
        explanation: "(x - 2)(x - 5) = x² - 7x + 10."
    },

    // =====================================
    // DIFFICULT: QUESTIONS 36-50
    // =====================================

    {
        difficulty: "Difficult",
        question: "Solve: 2x² - 8x = 0",
        options: ["x = 0 or 4", "x = 2 or 4", "x = -4 or 0", "x = 0 or 8"],
        answer: 0,
        explanation: "Factorise: 2x(x - 4) = 0. Therefore x = 0 or x = 4."
    },
    {
        difficulty: "Difficult",
        question: "Solve: 2x² - 5x - 3 = 0",
        options: ["x = 3 or -1/2", "x = -3 or 1/2", "x = 1 or -3", "x = 3 or 1/2"],
        answer: 0,
        explanation: "Factorise: (2x + 1)(x - 3) = 0. Thus x = -1/2 or x = 3."
    },
    {
        difficulty: "Difficult",
        question: "Solve: x² + 4x + 1 = 0",
        options: ["x = -2 ± √3", "x = 2 ± √3", "x = -4 ± √3", "x = -2 ± √5"],
        answer: 0,
        explanation: "Using the quadratic formula gives x = (-4 ± √12)/2 = -2 ± √3."
    },
    {
        difficulty: "Difficult",
        question: "Find the discriminant of 2x² - 3x + 4 = 0.",
        options: ["41", "-23", "23", "-41"],
        answer: 1,
        explanation: "Δ = b² - 4ac = (-3)² - 4(2)(4) = 9 - 32 = -23."
    },
    {
        difficulty: "Difficult",
        question: "For what value of k does x² + kx + 9 = 0 have equal roots when k is positive?",
        options: ["3", "6", "9", "12"],
        answer: 1,
        explanation: "Equal roots require Δ = 0. k² - 36 = 0, so k = ±6. Since k is positive, k = 6."
    },
    {
        difficulty: "Difficult",
        question: "Solve: (x - 2)(x + 3) = 0",
        options: ["x = 2 or -3", "x = -2 or 3", "x = 2 or 3", "x = -2 or -3"],
        answer: 0,
        explanation: "Set each factor equal to zero: x - 2 = 0 or x + 3 = 0."
    },
    {
        difficulty: "Difficult",
        question: "Solve: x² - 5x + 6 < 0",
        options: ["x < 2 or x > 3", "2 < x < 3", "x < 3", "x > 2"],
        answer: 1,
        explanation: "The roots are 2 and 3. The parabola opens upwards, so it is negative between the roots."
    },
    {
        difficulty: "Difficult",
        question: "Solve: x² - 9 ≥ 0",
        options: ["-3 ≤ x ≤ 3", "x > 3 only", "x ≤ -3 or x ≥ 3", "-3 < x < 3"],
        answer: 2,
        explanation: "The expression is non-negative outside the roots, including the roots: x ≤ -3 or x ≥ 3."
    },
    {
        difficulty: "Difficult",
        question: "Solve: (x - 1)(x - 4) > 0",
        options: ["1 < x < 4", "x < 1 or x > 4", "x > 1", "x < 4"],
        answer: 1,
        explanation: "The product is positive when both factors have the same sign: x < 1 or x > 4."
    },
    {
        difficulty: "Difficult",
        question: "Solve: 3 - 2x < 9",
        options: ["x < -3", "x > -3", "x < 3", "x > 3"],
        answer: 1,
        explanation: "Subtract 3: -2x < 6. Divide by -2 and reverse the sign: x > -3."
    },
    {
        difficulty: "Difficult",
        question: "The sum of two consecutive integers is 25. What are the integers?",
        options: ["11 and 14", "12 and 13", "10 and 15", "13 and 14"],
        answer: 1,
        explanation: "Let the integers be n and n + 1. Then 2n + 1 = 25, so n = 12. The integers are 12 and 13."
    },
    {
        difficulty: "Difficult",
        question: "A rectangle has length x + 3 and width x. Its area is 40. Find the positive value of x.",
        options: ["4", "5", "6", "8"],
        answer: 1,
        explanation: "x(x + 3) = 40, so x² + 3x - 40 = 0. Factorise: (x + 8)(x - 5) = 0. The positive value is 5."
    },
    {
        difficulty: "Difficult",
        question: "Solve: 2/(x - 1) = 1, where x ≠ 1.",
        options: ["x = 1", "x = 2", "x = 3", "x = 4"],
        answer: 2,
        explanation: "Multiply both sides by x - 1: 2 = x - 1. Therefore x = 3."
    },
    {
        difficulty: "Difficult",
        question: "If the roots of x² - 8x + c = 0 are equal, find c.",
        options: ["8", "12", "16", "32"],
        answer: 2,
        explanation: "For equal roots, Δ = 0. Thus (-8)² - 4(1)(c) = 0. Therefore c = 16."
    },
    {
        difficulty: "Difficult",
        question: "Solve: x² + x - 12 ≤ 0",
        options: ["x ≤ -4 or x ≥ 3", "-4 ≤ x ≤ 3", "-4 < x < 3", "x ≥ -4"],
        answer: 1,
        explanation: "Factorise: (x + 4)(x - 3) = 0. The parabola opens upwards, so it is non-positive between and including the roots: -4 ≤ x ≤ 3."
    }

];


// =====================================
// 6. QUIZ VARIABLES
// =====================================

let selectedAnswers = {};


// =====================================
// 7. START QUIZ
// =====================================

function startQuiz() {

    selectedAnswers = {};

    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizResults").hidden = true;

    document.querySelector("#quizContent .quiz-intro").hidden = true;

    document.getElementById("quizQuestions").innerHTML = "";

    displayQuizQuestions();
    updateQuizProgress();

}


// =====================================
// 8. DISPLAY QUIZ QUESTIONS
// =====================================

function displayQuizQuestions() {

    const container = document.getElementById("quizQuestions");

    quizQuestions.forEach((item, index) => {

        const card = document.createElement("article");
        card.className = "quiz-question";

        const heading = document.createElement("h4");
        heading.textContent =
            `Question ${index + 1}: ${item.question}`;

        const difficulty = document.createElement("p");
        difficulty.className = "question-tag";
        difficulty.textContent = item.difficulty;

        card.append(heading, difficulty);

        item.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");
            label.className = "quiz-option";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = optionIndex;

            radio.addEventListener("change", function () {

                selectedAnswers[index] = optionIndex;
                updateQuizProgress();

            });

            label.append(
                radio,
                document.createTextNode(
                    ` ${String.fromCharCode(65 + optionIndex)}. ${option}`
                )
            );

            card.appendChild(label);

        });

        container.appendChild(card);

    });

}


// =====================================
// 9. UPDATE QUIZ PROGRESS
// =====================================

function updateQuizProgress() {

    const answered = Object.keys(selectedAnswers).length;

    const progress = (answered / quizQuestions.length) * 100;

    document.getElementById("questionProgress").textContent =
        `50 Questions`;

    document.getElementById("quizScore").textContent =
        `Answered: ${answered}/50`;

    document.getElementById("progressBar").style.width =
        `${progress}%`;

}


// =====================================
// 10. SUBMIT AND MARK QUIZ
// =====================================

function submitQuiz() {

    if (Object.keys(selectedAnswers).length !== quizQuestions.length) {

        alert("Please answer all 50 questions before submitting.");

        return;

    }

    let score = 0;

    quizQuestions.forEach((question, index) => {

        if (selectedAnswers[index] === question.answer) {
            score++;
        }

    });

    const percentage = (score / quizQuestions.length) * 100;

    document.getElementById("quizArea").hidden = true;
    document.getElementById("quizResults").hidden = false;

    document.getElementById("finalScore").textContent =
        `${score}/50 (${percentage}%)`;

    let feedback;

    if (percentage >= 80) {

        feedback = "Excellent work! You understand Equations and Inequalities very well.";

    } else if (percentage >= 50) {

        feedback = "Good effort! Review your corrections and keep practising.";

    } else {

        feedback = "Keep learning! Review your notes and worked examples, then try again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

    displayCorrections();

}


// =====================================
// 11. DISPLAY QUIZ CORRECTIONS
// =====================================

function displayCorrections() {

    const container =
        document.getElementById("correctionsContainer");

    container.innerHTML = "<h3>Quiz Corrections</h3>";

    quizQuestions.forEach((question, index) => {

        const card = document.createElement("article");
        card.className = "correction-card";

        const heading = document.createElement("h4");

        heading.textContent =
            `Question ${index + 1}: ${question.question}`;

        const difficulty = document.createElement("p");

        difficulty.textContent =
            `Difficulty: ${question.difficulty}`;

        const selected = selectedAnswers[index];

        const yourAnswer = document.createElement("p");

        yourAnswer.textContent =
            `Your answer: ${question.options[selected]}`;

        const correctAnswer = document.createElement("p");

        correctAnswer.textContent =
            `Correct answer: ${question.options[question.answer]}`;

        const explanation = document.createElement("p");

        explanation.textContent =
            `Explanation: ${question.explanation}`;

        const result = document.createElement("p");

        if (selected === question.answer) {

            card.classList.add("correct-answer");

            result.textContent = "Correct!";
            result.className = "correct-text";

            card.append(
                heading,
                difficulty,
                result,
                yourAnswer,
                explanation
            );

        } else {

            card.classList.add("wrong-answer");

            result.textContent = "Incorrect";
            result.className = "wrong-text";

            card.append(
                heading,
                difficulty,
                result,
                yourAnswer,
                correctAnswer,
                explanation
            );

        }

        container.appendChild(card);

    });

}


// =====================================
// 12. RETRY QUIZ
// =====================================

function retryQuiz() {

    startQuiz();

}


// =====================================
// 13. CONNECT ALL BUTTONS
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    displayWorkedExamples();

    createPractice();

    document.getElementById("startQuiz")
        .addEventListener("click", startQuiz);

    document.getElementById("submitQuiz")
        .addEventListener("click", submitQuiz);

    document.getElementById("retryQuiz")
        .addEventListener("click", retryQuiz);

    console.log("Equations and Inequalities quiz loaded!");

});

