
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
// 5. QUIZ QUESTIONS - 50 QUESTIONS
// GRADE 11: EXPONENTS AND SURDS
// ==========================================

const quizQuestions = [

    // ======================================
    // EASY QUESTIONS: 1-15
    // ======================================

    {
        difficulty: "Easy",
        question: "Calculate: 2³",
        options: ["6", "8", "9", "12"],
        answer: 1,
        explanation: "2³ = 2 × 2 × 2 = 8."
    },
    {
        difficulty: "Easy",
        question: "Calculate: 5²",
        options: ["10", "20", "25", "32"],
        answer: 2,
        explanation: "5² = 5 × 5 = 25."
    },
    {
        difficulty: "Easy",
        question: "Simplify: a² × a³",
        options: ["a⁵", "a⁶", "a¹", "a⁹"],
        answer: 0,
        explanation: "When multiplying powers with the same base, add the exponents: a² × a³ = a⁵."
    },
    {
        difficulty: "Easy",
        question: "Calculate: 7⁰",
        options: ["0", "7", "-7", "1"],
        answer: 3,
        explanation: "Any non-zero number raised to the power zero equals 1."
    },
    {
        difficulty: "Easy",
        question: "Calculate: 3⁻²",
        options: ["-9", "1/9", "9", "1/6"],
        answer: 1,
        explanation: "3⁻² = 1/3² = 1/9."
    },
    {
        difficulty: "Easy",
        question: "Simplify: (2³)²",
        options: ["2⁵", "2⁹", "2⁶", "2¹"],
        answer: 2,
        explanation: "Multiply the exponents: (2³)² = 2⁶."
    },
    {
        difficulty: "Easy",
        question: "Calculate: √49",
        options: ["7", "8", "6", "9"],
        answer: 0,
        explanation: "√49 = 7 because 7 × 7 = 49."
    },
    {
        difficulty: "Easy",
        question: "Simplify: √12",
        options: ["3√2", "2√3", "4√3", "6√2"],
        answer: 1,
        explanation: "√12 = √(4 × 3) = 2√3."
    },
    {
        difficulty: "Easy",
        question: "Simplify: 3√2 + 4√2",
        options: ["7√4", "12√2", "√6", "7√2"],
        answer: 3,
        explanation: "Add the coefficients of like surds: 3√2 + 4√2 = 7√2."
    },
    {
        difficulty: "Easy",
        question: "Calculate: √3 × √12",
        options: ["3", "12", "6", "15"],
        answer: 2,
        explanation: "√3 × √12 = √36 = 6."
    },
    {
        difficulty: "Easy",
        question: "Calculate: 27^(1/3)",
        options: ["9", "3", "6", "27"],
        answer: 1,
        explanation: "27^(1/3) = ∛27 = 3."
    },
    {
        difficulty: "Easy",
        question: "Calculate: 16^(1/2)",
        options: ["4", "8", "2", "16"],
        answer: 0,
        explanation: "16^(1/2) = √16 = 4."
    },
    {
        difficulty: "Easy",
        question: "Simplify: x⁶ ÷ x²",
        options: ["x⁸", "x³", "x⁴", "x¹²"],
        answer: 2,
        explanation: "Subtract the exponents: x⁶ ÷ x² = x⁴, where x ≠ 0."
    },
    {
        difficulty: "Easy",
        question: "Simplify: (3a²)²",
        options: ["3a⁴", "6a⁴", "9a²", "9a⁴"],
        answer: 3,
        explanation: "(3a²)² = 3² × a⁴ = 9a⁴."
    },
    {
        difficulty: "Easy",
        question: "Calculate: (-2)⁴",
        options: ["-16", "16", "-8", "8"],
        answer: 1,
        explanation: "(-2)⁴ = (-2)(-2)(-2)(-2) = 16."

    },

    // ======================================
    // MEDIUM QUESTIONS: 16-35
    // ======================================

    {
        difficulty: "Medium",
        question: "Simplify: 2⁴ × 2⁻²",
        options: ["2⁶", "2⁸", "4", "2⁻⁶"],
        answer: 2,
        explanation: "Add the exponents: 2⁴ × 2⁻² = 2² = 4."
    },
    {
        difficulty: "Medium",
        question: "Simplify: 5³ ÷ 5",
        options: ["125", "25", "5", "625"],
        answer: 1,
        explanation: "Write 5 as 5¹. Then 5³ ÷ 5¹ = 5² = 25."
    },
    {
        difficulty: "Medium",
        question: "Calculate: 81^(3/4)",
        options: ["27", "9", "3", "81"],
        answer: 0,
        explanation: "The fourth root of 81 is 3. Then 3³ = 27."
    },
    {
        difficulty: "Medium",
        question: "Calculate: 32^(2/5)",
        options: ["2", "8", "16", "4"],
        answer: 3,
        explanation: "The fifth root of 32 is 2. Then 2² = 4."
    },
    {
        difficulty: "Medium",
        question: "Rewrite x⁻³ using a positive exponent.",
        options: ["-x³", "1/x³", "x³", "1/3x"],
        answer: 1,
        explanation: "A negative exponent means take the reciprocal: x⁻³ = 1/x³."
    },
    {
        difficulty: "Medium",
        question: "Simplify: (2a³b⁻²)²",
        options: ["4a⁵b⁻⁴", "2a⁶b⁻²", "4a⁶/b⁴", "4a⁶b⁴"],
        answer: 2,
        explanation: "Square every factor: 2² × a⁶ × b⁻⁴ = 4a⁶/b⁴."
    },
    {
        difficulty: "Medium",
        question: "Simplify: √75",
        options: ["5√3", "3√5", "15√3", "25√3"],
        answer: 0,
        explanation: "√75 = √(25 × 3) = 5√3."
    },
    {
        difficulty: "Medium",
        question: "Simplify: 3√8 - √18",
        options: ["√2", "3√2", "5√2", "6√2"],
        answer: 1,
        explanation: "3√8 - √18 = 3(2√2) - 3√2 = 3√2."
    },
    {
        difficulty: "Medium",
        question: "Calculate: √5 × √20",
        options: ["5", "10", "20", "100"],
        answer: 1,
        explanation: "√5 × √20 = √100 = 10."
    },
    {
        difficulty: "Medium",
        question: "Calculate: √48 ÷ √3",
        options: ["3", "16", "4", "8"],
        answer: 2,
        explanation: "√48 ÷ √3 = √(48/3) = √16 = 4."
    },
    {
        difficulty: "Medium",
        question: "Calculate: 64^(1/3)",
        options: ["4", "8", "16", "32"],
        answer: 0,
        explanation: "The cube root of 64 is 4."
    },
    {
        difficulty: "Medium",
        question: "Solve: 2ˣ = 64",
        options: ["4", "5", "6", "8"],
        answer: 2,
        explanation: "64 = 2⁶. Therefore x = 6."
    },
    {
        difficulty: "Medium",
        question: "Solve: 3^(x-1) = 27",
        options: ["2", "4", "3", "5"],
        answer: 1,
        explanation: "27 = 3³. Therefore x - 1 = 3, so x = 4."
    },
    {
        difficulty: "Medium",
        question: "Simplify: x⁴ × x⁻⁷",
        options: ["x¹¹", "x³", "x⁻¹¹", "1/x³"],
        answer: 3,
        explanation: "x⁴ × x⁻⁷ = x⁻³ = 1/x³, where x ≠ 0."
    },
    {
        difficulty: "Medium",
        question: "Simplify: √180",
        options: ["6√5", "5√6", "9√2", "3√20"],
        answer: 0,
        explanation: "√180 = √(36 × 5) = 6√5."
    },
    {
        difficulty: "Medium",
        question: "Simplify: 2√12 + √27",
        options: ["5√3", "7√3", "6√3", "9√3"],
        answer: 1,
        explanation: "2√12 + √27 = 2(2√3) + 3√3 = 7√3."
    },
    {
        difficulty: "Medium",
        question: "Simplify: √(a²), where a is a real number.",
        options: ["a²", "-a", "|a|", "a"],
        answer: 2,
        explanation: "The principal square root is non-negative, so √(a²) = |a|."
    },
    {
        difficulty: "Medium",
        question: "What is the difference between (-3)² and -3²?",
        options: ["Both are 9", "Both are -9", "Both are 6", "9 and -9 respectively"],
        answer: 3,
        explanation: "(-3)² = 9, while -3² = -(3²) = -9."
    },
    {
        difficulty: "Medium",
        question: "Simplify: 4³ ÷ 2⁴",
        options: ["2", "4", "8", "16"],
        answer: 1,
        explanation: "4³ = 64 and 2⁴ = 16. Therefore 64 ÷ 16 = 4."
    },
    {
        difficulty: "Medium",
        question: "Calculate: 9^(1/2) + 16^(1/2)",
        options: ["5", "7", "9", "25"],
        answer: 1,
        explanation: "√9 + √16 = 3 + 4 = 7."
    },

    // ======================================
    // DIFFICULT QUESTIONS: 36-50
    // ======================================

    {
        difficulty: "Difficult",
        question: "Simplify: (2⁻² × 2⁵) ÷ 2",
        options: ["2", "4", "8", "16"],
        answer: 1,
        explanation: "2⁻² × 2⁵ ÷ 2¹ = 2⁻²⁺⁵⁻¹ = 2² = 4."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (3²)³ ÷ 3⁴",
        options: ["3", "9", "27", "81"],
        answer: 1,
        explanation: "(3²)³ ÷ 3⁴ = 3⁶ ÷ 3⁴ = 3² = 9."
    },
    {
        difficulty: "Difficult",
        question: "Calculate: (16³ ÷ 4²)^(1/2)",
        options: ["8", "12", "16", "32"],
        answer: 2,
        explanation: "16³ ÷ 4² = 4096 ÷ 16 = 256. √256 = 16."
    },
    {
        difficulty: "Difficult",
        question: "Calculate: 27^(2/3) ÷ 9",
        options: ["1", "2", "3", "9"],
        answer: 0,
        explanation: "27^(2/3) = (∛27)² = 3² = 9. Then 9 ÷ 9 = 1."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (x³y⁻²)² ÷ (x⁻¹y)",
        options: ["x⁵/y³", "x⁷/y⁵", "x⁶/y⁴", "x⁷y⁵"],
        answer: 1,
        explanation: "(x³y⁻²)² = x⁶y⁻⁴. Dividing by x⁻¹y gives x⁷y⁻⁵ = x⁷/y⁵."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: √200 - √50",
        options: ["5√2", "10√2", "15√2", "5√3"],
        answer: 0,
        explanation: "√200 - √50 = 10√2 - 5√2 = 5√2."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: 3√27 - 2√12 + √75",
        options: ["5√3", "8√3", "10√3", "12√3"],
        answer: 2,
        explanation: "9√3 - 4√3 + 5√3 = 10√3."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (√5 + √2)(√5 - √2)",
        options: ["7", "√3", "5", "3"],
        answer: 3,
        explanation: "Use difference of two squares: (√5)² - (√2)² = 5 - 2 = 3."
    },
    {
        difficulty: "Difficult",
        question: "Calculate: 1 ÷ 2⁻³",
        options: ["1/8", "8", "-8", "6"],
        answer: 1,
        explanation: "2⁻³ = 1/8. Therefore 1 ÷ 1/8 = 8."
    },
    {
        difficulty: "Difficult",
        question: "Solve: 5^(2x-1) = 125",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "125 = 5³. Therefore 2x - 1 = 3, so 2x = 4 and x = 2."
    },
    {
        difficulty: "Difficult",
        question: "Solve: 4^(x+1) = 1/16",
        options: ["-3", "-2", "2", "3"],
        answer: 0,
        explanation: "1/16 = 4⁻². Therefore x + 1 = -2, so x = -3."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (2x⁻²y³)⁻¹",
        options: ["2x²/y³", "x²/(2y³)", "2y³/x²", "x²y³/2"],
        answer: 1,
        explanation: "Take the reciprocal: 1/(2x⁻²y³) = x²/(2y³)."
    },
    {
        difficulty: "Difficult",
        question: "Calculate: √18 × √8",
        options: ["6", "10", "12", "24"],
        answer: 2,
        explanation: "√18 × √8 = √144 = 12."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (√3 + √12)²",
        options: ["9", "12", "18", "27"],
        answer: 3,
        explanation: "√12 = 2√3. Therefore (3√3)² = 9 × 3 = 27."
    },
    {
        difficulty: "Difficult",
        question: "Simplify: (3⁴ × 9⁻¹) ÷ 27^(1/3)",
        options: ["1", "2", "3", "9"],
        answer: 2,
        explanation: "3⁴ = 81, 9⁻¹ = 1/9 and 27^(1/3) = 3. So (81 ÷ 9) ÷ 3 = 3."
    }

];



// ==========================================
// 6. QUIZ VARIABLES
// ==========================================

let selectedAnswers = {};


// ==========================================
// 7. START QUIZ
// ==========================================

function startQuiz() {

    selectedAnswers = {};

    document.querySelector(".quiz-intro").hidden = true;
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

    const container = document.getElementById("quizQuestions");

    quizQuestions.forEach((item, index) => {

        const card = document.createElement("div");
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

            const optionText = document.createTextNode(
                ` ${String.fromCharCode(65 + optionIndex)}. ${option}`
            );

            label.append(radio, optionText);
            card.appendChild(label);

        });

        container.appendChild(card);

    });

}


// ==========================================
// 9. UPDATE QUIZ PROGRESS
// ==========================================

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


// ==========================================
// 10. SUBMIT AND MARK QUIZ
// ==========================================

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

        feedback = "Excellent work! You understand Exponents and Surds very well.";

    } else if (percentage >= 50) {

        feedback = "Good effort! Review the corrections and keep practising.";

    } else {

        feedback = "Keep learning! Go through your notes and worked examples before trying again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

    displayCorrections();

}


// ==========================================
// 11. DISPLAY CORRECTIONS
// ==========================================

function displayCorrections() {

    const container =
        document.getElementById("correctionsContainer");

    container.innerHTML = "<h3>Quiz Corrections</h3>";

    quizQuestions.forEach((question, index) => {

        const card = document.createElement("div");
        card.className = "correction-card";

        const questionText = document.createElement("h4");

        questionText.textContent =
            `Question ${index + 1}: ${question.question}`;

        const userAnswer = document.createElement("p");

        const selected = selectedAnswers[index];

        userAnswer.textContent =
            `Your answer: ${question.options[selected]}`;

        const correctAnswer = document.createElement("p");

        correctAnswer.textContent =
            `Correct answer: ${question.options[question.answer]}`;

        const explanation = document.createElement("p");

        explanation.textContent =
            `Explanation: ${question.explanation}`;

        if (selected === question.answer) {

            card.classList.add("correct-answer");

            const result = document.createElement("p");
            result.textContent = "Correct!";
            result.className = "correct-text";

            card.append(questionText, result, userAnswer, explanation);

        } else {

            card.classList.add("wrong-answer");

            const result = document.createElement("p");
            result.textContent = "Incorrect";
            result.className = "wrong-text";

            card.append(
                questionText,
                result,
                userAnswer,
                correctAnswer,
                explanation
            );

        }

        container.appendChild(card);

    });

}


// ==========================================
// 12. RETRY QUIZ
// ==========================================

function retryQuiz() {

    startQuiz();

}


// ==========================================
// 13. CONNECT BUTTONS
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

    console.log("Exponents and Surds quiz loaded!");

});
