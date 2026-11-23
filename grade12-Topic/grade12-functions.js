
/* =====================================================
   MATHS HELP SA - GRADE 12
   TOPIC 2: FUNCTIONS AND INVERSE FUNCTIONS
===================================================== */


/* =====================================================
   1. OPEN AND CLOSE SECTIONS
===================================================== */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const icon = button.querySelector("span:last-child");

    if (icon) {
        icon.textContent = section.hidden ? "+" : "−";
    }
}


/* =====================================================
   2. GRAPH GENERATOR
===================================================== */

function createGraph(title, functions, caption, legend) {

    const width = 500;
    const height = 360;

    function mapX(x) {
        return 250 + (x * 42);
    }

    function mapY(y) {
        return 180 - (y * 32);
    }

    let grid = "";

    // Vertical grid lines
    for (let x = -5; x <= 5; x++) {

        const screenX = mapX(x);

        grid += `
            <line
                x1="${screenX}"
                y1="20"
                x2="${screenX}"
                y2="340"
                stroke="#e2e8f0"
                stroke-width="1"
            />

            <text
                x="${screenX}"
                y="198"
                font-size="11"
                text-anchor="middle"
                fill="#475569"
            >${x}</text>
        `;
    }

    // Horizontal grid lines
    for (let y = -5; y <= 5; y++) {

        const screenY = mapY(y);

        grid += `
            <line
                x1="40"
                y1="${screenY}"
                x2="460"
                y2="${screenY}"
                stroke="#e2e8f0"
                stroke-width="1"
            />

            <text
                x="230"
                y="${screenY - 4}"
                font-size="11"
                text-anchor="end"
                fill="#475569"
            >${y}</text>
        `;
    }

    // Draw mathematical functions
    let graphLines = "";

    functions.forEach(func => {

        let path = "";

        const steps = 250;

        for (let i = 0; i <= steps; i++) {

            const x = func.min + (
                (func.max - func.min) * i / steps
            );

            const y = func.fn(x);

            if (!Number.isFinite(y) || y < -5.5 || y > 5.5) {
                continue;
            }

            const screenX = mapX(x);
            const screenY = mapY(y);

            path += `${path === "" ? "M" : "L"} ${screenX} ${screenY} `;
        }

        graphLines += `
            <path
                d="${path}"
                fill="none"
                stroke="${func.color}"
                stroke-width="3"
                stroke-linecap="round"
            />
        `;
    });

    return `
        <div class="graph-container">

            <h4>${title}</h4>

            <svg
                class="function-graph"
                viewBox="0 0 ${width} ${height}"
                role="img"
                aria-label="${title}"
            >

                ${grid}

                <!-- X axis -->
                <line
                    x1="40"
                    y1="180"
                    x2="460"
                    y2="180"
                    stroke="#172554"
                    stroke-width="2"
                />

                <!-- Y axis -->
                <line
                    x1="250"
                    y1="20"
                    x2="250"
                    y2="340"
                    stroke="#172554"
                    stroke-width="2"
                />

                <!-- Axis labels -->
                <text x="465" y="175" fill="#172554" font-size="14">x</text>
                <text x="258" y="17" fill="#172554" font-size="14">y</text>

                ${graphLines}

            </svg>

            <p class="graph-caption">${caption}</p>

            <div class="graph-legend">
                ${legend}
            </div>

        </div>
    `;
}


/* =====================================================
   3. UNIT 1: FUNCTIONS - NOTES
===================================================== */

const unit1Notes = `

    <div class="unit-notes">

        <h4>1. What is a function?</h4>

        <p>
            A function is a relationship where every input value
            has exactly one output value.
        </p>

        <div class="formula-box">
            y = f(x)
        </div>

        <p>
            The symbol f(x) means the output of the function
            when the input is x.
        </p>

    </div>


    <div class="unit-notes">

        <h4>2. Domain and Range</h4>

        <p><strong>Domain:</strong> All the possible input values (x-values).</p>

        <p><strong>Range:</strong> All the possible output values (y-values).</p>

        <p>Example:</p>

        <div class="formula-box">
            f(x) = x²
        </div>

        <p>
            If the domain is -2 ≤ x ≤ 2, the range is
            0 ≤ y ≤ 4.
        </p>

    </div>


    <div class="unit-notes">

        <h4>3. Function notation</h4>

        <p>
            When you are given a function, substitute the given
            value of x into the expression.
        </p>

        <div class="formula-box">
            If f(x) = 2x + 3, then f(2) = 2(2) + 3 = 7
        </div>

    </div>


    <div class="unit-notes">

        <h4>4. Types of functions</h4>

        <ul>
            <li><strong>Linear function:</strong> f(x) = mx + c</li>
            <li><strong>Quadratic function:</strong> f(x) = ax² + bx + c</li>
            <li><strong>Hyperbolic function:</strong> f(x) = a/x + q</li>
            <li><strong>Exponential function:</strong> f(x) = abˣ</li>
        </ul>

    </div>


    <div class="unit-notes">

        <h4>5. Important graph properties</h4>

        <ul>
            <li>The x-intercept is where the graph crosses the x-axis.</li>
            <li>The y-intercept is where the graph crosses the y-axis.</li>
            <li>The turning point is the maximum or minimum point of a parabola.</li>
            <li>The axis of symmetry divides a parabola into two equal halves.</li>
            <li>A function must give only one output for each input.</li>
        </ul>

    </div>

`;


/* =====================================================
   4. UNIT 1: FUNCTIONS - GRAPHS
===================================================== */

const functionGraphs = `

    ${createGraph(
        "Graph 1: Straight Line",
        [
            {
                min: -5,
                max: 5,
                fn: x => 2 * x + 1,
                color: "#2563eb"
            }
        ],
        "The straight-line function y = 2x + 1.",
        `
            <span>
                <span class="function-line"></span>
                y = 2x + 1
            </span>
        `
    )}

    ${createGraph(
        "Graph 2: Parabola",
        [
            {
                min: -2.2,
                max: 2.2,
                fn: x => x * x,
                color: "#2563eb"
            }
        ],
        "The quadratic function y = x².",
        `
            <span>
                <span class="function-line"></span>
                y = x²
            </span>
        `
    )}

    ${createGraph(
        "Graph 3: Hyperbola",
        [
            {
                min: -5,
                max: -0.2,
                fn: x => 1 / x,
                color: "#2563eb"
            },
            {
                min: 0.2,
                max: 5,
                fn: x => 1 / x,
                color: "#2563eb"
            }
        ],
        "The hyperbolic function y = 1/x. It is undefined at x = 0.",
        `
            <span>
                <span class="function-line"></span>
                y = 1/x
            </span>
        `
    )}

`;


/* =====================================================
   5. UNIT 1: FUNCTIONS - WORKED EXAMPLES
===================================================== */

const unit1Examples = [

    {
        question: "Given f(x) = 3x + 5, calculate f(2).",

        steps: [
            "Step 1: Write down the function.",
            "f(x) = 3x + 5",
            "Step 2: Substitute x = 2.",
            "f(2) = 3(2) + 5",
            "Step 3: Multiply.",
            "f(2) = 6 + 5"
        ],

        answer: "f(2) = 11"
    },

    {
        question: "Given f(x) = x² - 4, calculate f(-3).",

        steps: [
            "Step 1: Write down the function.",
            "f(x) = x² - 4",
            "Step 2: Substitute x = -3.",
            "f(-3) = (-3)² - 4",
            "Step 3: Square -3.",
            "f(-3) = 9 - 4"
        ],

        answer: "f(-3) = 5"
    },

    {
        question: "Determine the x-intercept of y = 2x - 8.",

        steps: [
            "Step 1: At the x-intercept, y = 0.",
            "0 = 2x - 8",
            "Step 2: Add 8 to both sides.",
            "8 = 2x",
            "Step 3: Divide by 2.",
            "x = 4"
        ],

        answer: "The x-intercept is (4 ; 0)."
    },

    {
        question: "Determine the turning point of y = x² - 6x + 5.",

        steps: [
            "Step 1: Use the turning-point formula.",
            "x = -b / 2a",
            "Step 2: Identify a = 1 and b = -6.",
            "x = -(-6) / (2 × 1)",
            "x = 3",
            "Step 3: Substitute x = 3 into the function.",
            "y = 3² - 6(3) + 5",
            "y = 9 - 18 + 5 = -4"
        ],

        answer: "The turning point is (3 ; -4)."
    },

    {
        question: "Determine the y-intercept of f(x) = 4x² - 3x + 7.",

        steps: [
            "Step 1: At the y-intercept, x = 0.",
            "Step 2: Substitute x = 0.",
            "f(0) = 4(0)² - 3(0) + 7",
            "Step 3: Simplify.",
            "f(0) = 7"
        ],

        answer: "The y-intercept is (0 ; 7)."
    }

];


/* =====================================================
   6. UNIT 1: FUNCTIONS - PRACTICE QUESTIONS
===================================================== */

const unit1Practice = [

    {
        question: "Given f(x) = 2x + 7, calculate f(3).",
        answer: ["13"]
    },

    {
        question: "Given f(x) = x² + 2, calculate f(4).",
        answer: ["18"]
    },

    {
        question: "Determine the x-intercept of y = 3x - 12.",
        answer: ["4"]
    },

    {
        question: "Determine the y-intercept of y = 5x + 9.",
        answer: ["9"]
    },

    {
        question: "Determine the turning point of y = x² - 4x + 3. Enter the x-coordinate.",
        answer: ["2"]
    }

];


/* =====================================================
   7. UNIT 2: INVERSE FUNCTIONS - NOTES
===================================================== */

const unit2Notes = `

    <div class="unit-notes">

        <h4>1. What is an inverse function?</h4>

        <p>
            An inverse function reverses the action of the
            original function. It changes the output back
            into the original input.
        </p>

        <div class="formula-box">
            f⁻¹(x)
        </div>

        <p>
            The symbol f⁻¹(x) represents the inverse function.
            It does not mean 1/f(x).
        </p>

    </div>


    <div class="unit-notes">

        <h4>2. How to determine an inverse function</h4>

        <ol>
            <li>Write the original function as y = f(x).</li>
            <li>Interchange x and y.</li>
            <li>Make y the subject of the formula.</li>
            <li>Write the answer as f⁻¹(x).</li>
        </ol>

    </div>


    <div class="unit-notes">

        <h4>3. Example of finding an inverse</h4>

        <div class="formula-box">
            f(x) = 2x + 4
        </div>

        <p>Step 1: Write y = 2x + 4.</p>

        <p>Step 2: Interchange x and y.</p>

        <div class="formula-box">
            x = 2y + 4
        </div>

        <p>Step 3: Make y the subject.</p>

        <div class="formula-box">
            x - 4 = 2y
            <br>
            y = (x - 4)/2
        </div>

        <p>Therefore:</p>

        <div class="formula-box">
            f⁻¹(x) = (x - 4)/2
        </div>

    </div>


    <div class="unit-notes">

        <h4>4. Graphs of inverse functions</h4>

        <ul>
            <li>A function and its inverse are reflections of each other in the line y = x.</li>
            <li>The domain of the original function becomes the range of its inverse.</li>
            <li>The range of the original function becomes the domain of its inverse.</li>
            <li>Their graphs are symmetrical about the line y = x.</li>
        </ul>

    </div>


    <div class="unit-notes">

        <h4>5. Important restriction</h4>

        <p>
            A function must be one-to-one to have an inverse
            that is also a function.
        </p>

        <p>
            For example, y = x² is not one-to-one over all real
            numbers. We can restrict its domain to x ≥ 0 so
            that its inverse is a function.
        </p>

    </div>

`;


/* =====================================================
   8. UNIT 2: INVERSE FUNCTIONS - GRAPHS
===================================================== */

const inverseGraphs = `

    ${createGraph(
        "Graph 1: A Function and Its Inverse",
        [
            {
                min: -5,
                max: 2,
                fn: x => 2 * x + 1,
                color: "#2563eb"
            },
            {
                min: -5,
                max: 5,
                fn: x => (x - 1) / 2,
                color: "#eab308"
            },
            {
                min: -5,
                max: 5,
                fn: x => x,
                color: "#16a34a"
            }
        ],
        "The function y = 2x + 1 and its inverse y = (x - 1)/2 are reflections in y = x.",
        `
            <span>
                <span class="function-line"></span>
                Original function
            </span>

            <span>
                <span class="inverse-line"></span>
                Inverse function
            </span>

            <span>
                <span class="reflection-line"></span>
                Line y = x
            </span>
        `
    )}

    ${createGraph(
        "Graph 2: Quadratic Function and Its Inverse",
        [
            {
                min: 0,
                max: 2.2,
                fn: x => x * x,
                color: "#2563eb"
            },
            {
                min: 0,
                max: 4.84,
                fn: x => Math.sqrt(x),
                color: "#eab308"
            },
            {
                min: -5,
                max: 5,
                fn: x => x,
                color: "#16a34a"
            }
        ],
        "The function y = x², with x ≥ 0, and its inverse y = √x.",
        `
            <span>
                <span class="function-line"></span>
                y = x²
            </span>

            <span>
                <span class="inverse-line"></span>
                y = √x
            </span>

            <span>
                <span class="reflection-line"></span>
                Line y = x
            </span>
        `
    )}

`;


/* =====================================================
   9. UNIT 2: INVERSE FUNCTIONS - WORKED EXAMPLES
===================================================== */

const unit2Examples = [

    {
        question: "Determine the inverse of f(x) = 3x + 6.",

        steps: [
            "Step 1: Write y = 3x + 6.",
            "Step 2: Interchange x and y.",
            "x = 3y + 6",
            "Step 3: Subtract 6 from both sides.",
            "x - 6 = 3y",
            "Step 4: Divide by 3."
        ],

        answer: "f⁻¹(x) = (x - 6)/3"
    },

    {
        question: "Determine the inverse of f(x) = 5x - 10.",

        steps: [
            "Step 1: Write y = 5x - 10.",
            "Step 2: Interchange x and y.",
            "x = 5y - 10",
            "Step 3: Add 10 to both sides.",
            "x + 10 = 5y",
            "Step 4: Divide by 5."
        ],

        answer: "f⁻¹(x) = (x + 10)/5"
    },

    {
        question: "Determine the inverse of f(x) = (x + 4)/2.",

        steps: [
            "Step 1: Write y = (x + 4)/2.",
            "Step 2: Interchange x and y.",
            "x = (y + 4)/2",
            "Step 3: Multiply both sides by 2.",
            "2x = y + 4",
            "Step 4: Subtract 4."
        ],

        answer: "f⁻¹(x) = 2x - 4"
    },

    {
        question: "Determine the inverse of f(x) = x², where x ≥ 0.",

        steps: [
            "Step 1: Write y = x².",
            "Step 2: Interchange x and y.",
            "x = y²",
            "Step 3: Take the square root of both sides.",
            "y = ±√x",
            "Step 4: Since the original domain is x ≥ 0, use the positive root."
        ],

        answer: "f⁻¹(x) = √x, where x ≥ 0."
    },

    {
        question: "If f(x) = 2x + 3, determine f⁻¹(9).",

        steps: [
            "Step 1: First determine the inverse.",
            "y = 2x + 3",
            "Interchange x and y.",
            "x = 2y + 3",
            "2y = x - 3",
            "y = (x - 3)/2",
            "Step 2: Substitute x = 9.",
            "f⁻¹(9) = (9 - 3)/2"
        ],

        answer: "f⁻¹(9) = 3"
    }

];


/* =====================================================
   10. UNIT 2: INVERSE FUNCTIONS - PRACTICE
===================================================== */

const unit2Practice = [

    {
        question: "Determine the inverse of f(x) = 2x + 8. Enter the constant term.",
        answer: ["-4"]
    },

    {
        question: "Determine the inverse of f(x) = 4x - 12. Enter the constant term.",
        answer: ["3"]
    },

    {
        question: "If f(x) = 3x + 1, calculate f⁻¹(10).",
        answer: ["3"]
    },

    {
        question: "If f(x) = x², where x ≥ 0, what is f⁻¹(16)?",
        answer: ["4"]
    },

    {
        question: "What is the equation of the line of reflection between a function and its inverse?",
        answer: ["y=x", "y = x"]
    }

];


/* =====================================================
   11. DISPLAY NOTES
===================================================== */

document.getElementById("unit1Notes").innerHTML = unit1Notes;

document.getElementById("unit2Notes").innerHTML = unit2Notes;


/* =====================================================
   12. DISPLAY GRAPHS
===================================================== */

document.getElementById("unit1Notes").innerHTML += functionGraphs;

document.getElementById("unit2Notes").innerHTML += inverseGraphs;


/* =====================================================
   13. DISPLAY WORKED EXAMPLES
===================================================== */

function displayExamples(examples, containerId, prefix) {

    const container = document.getElementById(containerId);

    container.innerHTML = `
        <div class="worked-examples">

            ${examples.map((example, index) => {

                const solutionId = `${prefix}-solution-${index}`;

                return `

                    <div class="example-card">

                        <h4>Worked Example ${index + 1}</h4>

                        <div class="example-question">
                            ${example.question}
                        </div>

                        <button
                            class="step-button"
                            onclick="toggleAnswer('${solutionId}', this)"
                        >
                            Show Solution
                        </button>

                        <div
                            class="solution-steps"
                            id="${solutionId}"
                            hidden
                        >

                            ${example.steps.map(step => `
                                <p>${step}</p>
                            `).join("")}

                            <p class="answer">
                                ${example.answer}
                            </p>

                        </div>

                    </div>

                `;

            }).join("")}

        </div>
    `;
}


function toggleAnswer(solutionId, button) {

    const solution = document.getElementById(solutionId);

    if (!solution) return;

    solution.hidden = !solution.hidden;

    button.textContent = solution.hidden
        ? "Show Solution"
        : "Hide Solution";
}


displayExamples(unit1Examples, "unit1Examples", "unit1");

displayExamples(unit2Examples, "unit2Examples", "unit2");


/* =====================================================
   14. DISPLAY PRACTICE QUESTIONS
===================================================== */

function displayPractice(questions, containerId, prefix) {

    const container = document.getElementById(containerId);

    container.innerHTML = `
        <div class="practice-questions">

            ${questions.map((question, index) => {

                return `

                    <div class="practice-card">

                        <h4>Practice Question ${index + 1}</h4>

                        <p>${question.question}</p>

                        <input
                            type="text"
                            id="${prefix}-answer-${index}"
                            placeholder="Enter your answer"
                        >

                        <button
                            class="check-button"
                            onclick="checkPractice('${prefix}', ${index})"
                        >
                            Check Answer
                        </button>

                        <p
                            class="feedback"
                            id="${prefix}-feedback-${index}"
                        ></p>

                    </div>

                `;

            }).join("")}

        </div>
    `;
}


function checkPractice(prefix, index) {

    let questions;

    if (prefix === "unit1") {
        questions = unit1Practice;
    } else {
        questions = unit2Practice;
    }

    const input = document.getElementById(
        `${prefix}-answer-${index}`
    );

    const feedback = document.getElementById(
        `${prefix}-feedback-${index}`
    );

    const userAnswer = input.value.trim().toLowerCase();

    if (userAnswer === "") {

        feedback.style.color = "#d97706";
        feedback.textContent = "Please enter an answer.";

        return;
    }

    const correctAnswers = questions[index].answer.map(
        answer => answer.toLowerCase().trim()
    );

    const userNumber = Number(userAnswer);

    const correct = correctAnswers.some(answer => {

        const correctNumber = Number(answer);

        if (
            userAnswer !== "" &&
            Number.isFinite(userNumber) &&
            Number.isFinite(correctNumber)
        ) {
            return Math.abs(userNumber - correctNumber) < 0.000001;
        }

        return userAnswer.replace(/\s/g, "") ===
               answer.replace(/\s/g, "");
    });

    if (correct) {

        feedback.style.color = "#15803d";
        feedback.textContent = "Correct! Well done.";

    } else {

        feedback.style.color = "#dc2626";
        feedback.textContent = "Not quite. Try again.";

    }
}


displayPractice(unit1Practice, "unit1Practice", "unit1");

displayPractice(unit2Practice, "unit2Practice", "unit2");


/* =====================================================
   15. FINAL QUIZ QUESTIONS
===================================================== */

const quizData = [

    {
        question: "If f(x) = 2x + 4, what is f(3)?",

        options: [
            "6",
            "10",
            "8",
            "12"
        ],

        answer: 1
    },

    {
        question: "What is the y-intercept of y = 3x + 7?",

        options: [
            "3",
            "7",
            "-7",
            "0"
        ],

        answer: 1
    },

    {
        question: "What is the x-intercept of y = 2x - 10?",

        options: [
            "2",
            "10",
            "5",
            "-5"
        ],

        answer: 2
    },

    {
        question: "What is the turning point of y = x² - 4x + 3?",

        options: [
            "(2 ; -1)",
            "(4 ; 3)",
            "(-2 ; 1)",
            "(2 ; 1)"
        ],

        answer: 0
    },

    {
        question: "Which statement describes a function?",

        options: [
            "Every input has two outputs.",
            "Every input has exactly one output.",
            "Every output must be zero.",
            "Every input must be positive."
        ],

        answer: 1
    },

    {
        question: "What is the inverse of f(x) = 2x + 6?",

        options: [
            "2x - 6",
            "(x + 6)/2",
            "(x - 6)/2",
            "2x + 6"
        ],

        answer: 2
    },

    {
        question: "What is the inverse of f(x) = 3x - 9?",

        options: [
            "(x + 9)/3",
            "(x - 9)/3",
            "3x + 9",
            "3x - 9"
        ],

        answer: 0
    },

    {
        question: "A function and its inverse are reflections in which line?",

        options: [
            "y = 0",
            "x = 0",
            "y = x",
            "y = -x"
        ],

        answer: 2
    },

    {
        question: "What is the inverse of f(x) = x², where x ≥ 0?",

        options: [
            "x²",
            "√x",
            "-√x",
            "1/x"
        ],

        answer: 1
    },

    {
        question: "If f(x) = 2x + 1, what is f⁻¹(7)?",

        options: [
            "2",
            "3",
            "4",
            "5"
        ],

        answer: 2
    }

];


/* =====================================================
   16. START QUIZ
===================================================== */

function startQuiz() {

    const quizArea = document.getElementById("quizArea");

    const quizResults = document.getElementById("quizResults");

    const startButton = document.getElementById("startQuiz");

    const questionsContainer = document.getElementById("quizQuestions");

    quizResults.hidden = true;

    quizArea.hidden = false;

    startButton.hidden = true;

    questionsContainer.innerHTML = quizData.map((question, index) => {

        return `

            <div class="quiz-question">

                <h4>
                    Question ${index + 1}: ${question.question}
                </h4>

                ${question.options.map((option, optionIndex) => {

                    return `

                        <label class="quiz-option">

                            <input
                                type="radio"
                                name="quiz${index}"
                                value="${optionIndex}"
                                onchange="updateQuizProgress()"
                            >

                            ${option}

                        </label>

                    `;

                }).join("")}

            </div>

        `;

    }).join("");

    updateQuizProgress();
}


/* =====================================================
   17. UPDATE QUIZ PROGRESS
===================================================== */

function updateQuizProgress() {

    let answered = 0;

    quizData.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="quiz${index}"]:checked`
        );

        if (selected) {
            answered++;
        }

    });

    document.getElementById("questionProgress").textContent =
        `Questions answered: ${answered} of ${quizData.length}`;

    document.getElementById("quizScore").textContent =
        `Answered: ${answered} / ${quizData.length}`;

    const percentage = (answered / quizData.length) * 100;

    document.getElementById("progressBar").style.width =
        `${percentage}%`;
}


/* =====================================================
   18. SUBMIT QUIZ
===================================================== */

function submitQuiz() {

    let score = 0;

    let unanswered = 0;

    quizData.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="quiz${index}"]:checked`
        );

        if (!selected) {

            unanswered++;

        } else if (Number(selected.value) === question.answer) {

            score++;

        }

    });

    if (unanswered > 0) {

        alert(
            `Please answer all the questions. You still have ${unanswered} unanswered question(s).`
        );

        return;
    }

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("finalScore").textContent =
        `Your Score: ${score} / 10`;

    let feedback = "";

    if (score === 10) {

        feedback = "Excellent! You have mastered this topic.";

    } else if (score >= 8) {

        feedback = "Very good! You understand most of the work.";

    } else if (score >= 6) {

        feedback = "Good effort! Keep practising to improve.";

    } else if (score >= 4) {

        feedback = "You are making progress. Review your notes and try again.";

    } else {

        feedback = "Keep learning! Go through the notes and worked examples before trying again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

}


/* =====================================================
   19. RETRY QUIZ
===================================================== */

function retryQuiz() {

    document.getElementById("quizResults").hidden = true;

    document.getElementById("quizArea").hidden = true;

    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizQuestions").innerHTML = "";

    document.getElementById("questionProgress").textContent =
        "Question 1 of 10";

    document.getElementById("quizScore").textContent =
        "Answered: 0 / 10";

    document.getElementById("progressBar").style.width = "0%";

}
