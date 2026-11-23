
/* =============================================
   MATHSHELPSA - GRADE 12
   ANALYTICAL GEOMETRY
============================================= */


/* =============================================
   1. CIRCLE DIAGRAMS
============================================= */

// UNIT 1: EQUATION OF A CIRCLE

function circleDiagram1() {

    return `
    <div class="diagram-box">

        <h4>Equation of a Circle</h4>

        <svg viewBox="0 0 420 340"
             role="img"
             aria-label="Circle with centre at 2 comma 1 and radius 3">

            <!-- GRID -->
            ${Array.from({length: 11}, (_, i) => `
                <line x1="${50 + i * 30}" y1="20"
                      x2="${50 + i * 30}" y2="320"
                      stroke="#dbeafe"/>

                <line x1="50" y1="${20 + i * 30}"
                      x2="350" y2="${20 + i * 30}"
                      stroke="#dbeafe"/>
            `).join("")}

            <!-- X AND Y AXES -->
            <line x1="40" y1="260" x2="370" y2="260"
                  stroke="#102a56" stroke-width="2"/>

            <line x1="110" y1="320" x2="110" y2="10"
                  stroke="#102a56" stroke-width="2"/>

            <text x="375" y="265" font-size="13">x</text>
            <text x="115" y="15" font-size="13">y</text>

            <!-- CIRCLE -->
            <circle cx="170" cy="230" r="90"
                    fill="#bfdbfe"
                    fill-opacity="0.35"
                    stroke="#2563eb"
                    stroke-width="3"/>

            <!-- RADIUS -->
            <line x1="170" y1="230"
                  x2="260" y2="230"
                  stroke="#dc2626"
                  stroke-width="3"/>

            <!-- CENTRE -->
            <circle cx="170" cy="230" r="5"
                    fill="#102a56"/>

            <!-- POINT ON CIRCLE -->
            <circle cx="260" cy="230" r="5"
                    fill="#dc2626"/>

            <!-- LABELS -->
            <text x="175" y="250"
                  font-size="12"
                  fill="#102a56">
                Centre (2 ; 1)
            </text>

            <text x="205" y="218"
                  font-size="13"
                  fill="#dc2626">
                r = 3
            </text>

            <text x="266" y="232"
                  font-size="12"
                  fill="#dc2626">
                P
            </text>

        </svg>

        <p><strong>Equation:</strong>
        (x - 2)² + (y - 1)² = 9</p>

        <p>Centre = (2 ; 1) | Radius = 3</p>

    </div>
    `;
}


// UNIT 2: TANGENT TO A CIRCLE

function circleDiagram2() {

    return `
    <div class="diagram-box">

        <h4>Equation of a Tangent to a Circle</h4>

        <svg viewBox="0 0 420 340"
             role="img"
             aria-label="Circle with a tangent perpendicular to its radius">

            <!-- AXES -->
            <line x1="30" y1="260" x2="390" y2="260"
                  stroke="#102a56" stroke-width="2"/>

            <line x1="110" y1="320" x2="110" y2="15"
                  stroke="#102a56" stroke-width="2"/>

            <text x="395" y="265" font-size="13">x</text>
            <text x="115" y="15" font-size="13">y</text>

            <!-- CIRCLE -->
            <circle cx="200" cy="190" r="85"
                    fill="#bfdbfe"
                    fill-opacity="0.35"
                    stroke="#2563eb"
                    stroke-width="3"/>

            <!-- RADIUS -->
            <line x1="200" y1="190"
                  x2="200" y2="105"
                  stroke="#dc2626"
                  stroke-width="3"/>

            <!-- TANGENT -->
            <line x1="80" y1="105"
                  x2="320" y2="105"
                  stroke="#16a34a"
                  stroke-width="3"/>

            <!-- RIGHT ANGLE -->
            <path d="M200 125 L220 125 L220 105"
                  fill="none"
                  stroke="#102a56"
                  stroke-width="2"/>

            <!-- CENTRE -->
            <circle cx="200" cy="190" r="5"
                    fill="#102a56"/>

            <!-- POINT OF CONTACT -->
            <circle cx="200" cy="105" r="5"
                    fill="#dc2626"/>

            <!-- LABELS -->
            <text x="210" y="200"
                  font-size="13"
                  fill="#102a56">
                Centre
            </text>

            <text x="210" y="95"
                  font-size="13"
                  fill="#dc2626">
                P
            </text>

            <text x="125" y="145"
                  font-size="13"
                  fill="#dc2626">
                Radius
            </text>

            <text x="260" y="92"
                  font-size="13"
                  fill="#16a34a">
                Tangent
            </text>

            <text x="225" y="145"
                  font-size="12"
                  fill="#102a56">
                90°
            </text>

        </svg>

        <p>
            The tangent is perpendicular to the radius
            at the point of contact.
        </p>

    </div>
    `;
}


/* =============================================
   2. LESSON NOTES
============================================= */

const unitNotes = {

    unit1: `

        <h4>1. What is a Circle?</h4>

        <p>
            A circle is a set of points that are all the same
            distance from a fixed point called the centre.
            This distance is called the radius.
        </p>

        <h4>2. Equation of a Circle</h4>

        <div class="formula-box">
            (x - a)² + (y - b)² = r²
        </div>

        <p>Where:</p>

        <ul>
            <li>(a ; b) is the centre.</li>
            <li>r is the radius.</li>
            <li>r² is the radius squared.</li>
        </ul>

        <div class="note-box">

            <h4>Example</h4>

            <p>
                (x - 3)² + (y + 2)² = 25
            </p>

            <p>Centre = (3 ; -2)</p>

            <p>Radius = √25 = 5</p>

            <p>
                Remember: the signs inside the brackets
                are opposite to the centre coordinates.
            </p>

        </div>

        <h4>3. Circle with Centre at the Origin</h4>

        <div class="formula-box">
            x² + y² = r²
        </div>

        <p>
            When the centre is (0 ; 0), the equation
            becomes x² + y² = r².
        </p>

        <h4>4. Finding the Centre and Radius</h4>

        <p>Consider:</p>

        <div class="formula-box">
            (x + 4)² + (y - 1)² = 36
        </div>

        <ul>
            <li>Centre = (-4 ; 1)</li>
            <li>Radius = √36 = 6</li>
            <li>Diameter = 12</li>
        </ul>

        <h4>5. General Equation of a Circle</h4>

        <div class="formula-box">
            x² + y² + Dx + Ey + F = 0
        </div>

        <p>
            To find the centre and radius, complete the square
            for the x-terms and y-terms.
        </p>

        <div class="note-box">

            <h4>Worked illustration</h4>

            <p>x² + y² - 6x + 4y - 12 = 0</p>

            <p>(x² - 6x) + (y² + 4y) = 12</p>

            <p>(x - 3)² + (y + 2)² = 25</p>

            <p>Centre = (3 ; -2)</p>

            <p>Radius = 5</p>

        </div>

    `,


    unit2: `

        <h4>1. What is a Tangent?</h4>

        <p>
            A tangent is a straight line that touches a circle
            at exactly one point.
        </p>

        <p>
            The point where the tangent touches the circle
            is called the point of contact.
        </p>

        <h4>2. Important Tangent Property</h4>

        <p>
            A tangent to a circle is perpendicular to the radius
            at the point of contact.
        </p>

        <div class="formula-box">
            m(radius) × m(tangent) = -1
        </div>

        <h4>3. Finding the Gradient</h4>

        <div class="formula-box">
            m = (y₂ - y₁) / (x₂ - x₁)
        </div>

        <p>
            Use this formula to calculate the gradient
            of the radius.
        </p>

        <h4>4. Finding the Tangent Gradient</h4>

        <div class="note-box">

            <p>If the radius gradient is 2:</p>

            <p>m(tangent) = -1/2</p>

            <p>If the radius gradient is -3:</p>

            <p>m(tangent) = 1/3</p>

        </div>

        <h4>5. Equation of a Straight Line</h4>

        <div class="formula-box">
            y - y₁ = m(x - x₁)
        </div>

        <p>Where:</p>

        <ul>
            <li>m is the gradient.</li>
            <li>(x₁ ; y₁) is a point on the line.</li>
        </ul>

        <h4>6. Steps to Find the Equation of a Tangent</h4>

        <ol>
            <li>Identify the centre of the circle.</li>
            <li>Identify the point of contact.</li>
            <li>Calculate the gradient of the radius.</li>
            <li>Find the negative reciprocal.</li>
            <li>Substitute into the straight-line equation.</li>
            <li>Simplify your final answer.</li>
        </ol>

        <div class="note-box">

            <h4>Important Exception</h4>

            <p>
                If the radius is horizontal, the tangent is vertical.
            </p>

            <p>
                If the radius is vertical, the tangent is horizontal.
            </p>

            <p>
                Vertical tangent: x = constant.
            </p>

            <p>
                Horizontal tangent: y = constant.
            </p>

        </div>

    `

};


/* =============================================
   3. WORKED EXAMPLES
============================================= */

const workedExamples = {

    unit1: [

        {
            question:
                "Determine the centre and radius of (x - 4)² + (y + 3)² = 49.",

            steps: [
                "Compare with (x - a)² + (y - b)² = r².",
                "The x-coordinate of the centre is 4.",
                "The y-coordinate of the centre is -3.",
                "Centre = (4 ; -3).",
                "Radius = √49 = 7."
            ],

            answer: "Centre = (4 ; -3), Radius = 7"
        },

        {
            question:
                "Find the equation of a circle with centre (-2 ; 5) and radius 4.",

            steps: [
                "Use (x - a)² + (y - b)² = r².",
                "a = -2 and b = 5.",
                "r = 4, therefore r² = 16.",
                "Substitute the values.",
                "(x + 2)² + (y - 5)² = 16."
            ],

            answer: "(x + 2)² + (y - 5)² = 16"
        },

        {
            question:
                "Determine the centre and radius of x² + y² - 8x + 6y - 15 = 0.",

            steps: [
                "Group the x-terms and y-terms.",
                "(x² - 8x) + (y² + 6y) = 15.",
                "Complete the square: add 16 and 9.",
                "(x - 4)² + (y + 3)² = 40.",
                "Centre = (4 ; -3).",
                "Radius = √40 = 2√10."
            ],

            answer: "Centre = (4 ; -3), Radius = 2√10"
        }

    ],


    unit2: [

        {
            question:
                "A circle has centre (2 ; 3). Find the gradient of the tangent at (4 ; 6).",

            steps: [
                "Find the gradient of the radius.",
                "m = (6 - 3) / (4 - 2).",
                "m(radius) = 3/2.",
                "The tangent is perpendicular to the radius.",
                "m(tangent) = -2/3."
            ],

            answer: "m = -2/3"
        },

        {
            question:
                "Find the equation of the tangent at (3 ; 4), if the centre is (1 ; 1).",

            steps: [
                "Calculate the gradient of the radius.",
                "m(radius) = (4 - 1) / (3 - 1) = 3/2.",
                "m(tangent) = -2/3.",
                "Use y - y₁ = m(x - x₁).",
                "y - 4 = -2/3(x - 3).",
                "Multiply by 3: 3y - 12 = -2x + 6.",
                "Rearrange: 2x + 3y - 18 = 0."
            ],

            answer: "2x + 3y - 18 = 0"
        },

        {
            question:
                "A circle has centre (0 ; 0) and radius 5. Determine the tangent at (3 ; 4).",

            steps: [
                "Find the gradient of the radius.",
                "m(radius) = 4/3.",
                "m(tangent) = -3/4.",
                "Use y - 4 = -3/4(x - 3).",
                "Multiply by 4: 4y - 16 = -3x + 9.",
                "Rearrange: 3x + 4y = 25."
            ],

            answer: "3x + 4y = 25"
        }

    ]

};


/* =============================================
   4. PRACTICE QUESTIONS
============================================= */

const practiceQuestions = {

    unit1: [

        {
            question:
                "Determine the centre of (x - 5)² + (y + 2)² = 64.",

            answer: "(5,-2)",
            displayAnswer: "(5 ; -2)"
        },

        {
            question:
                "Determine the radius of (x + 3)² + (y - 4)² = 81.",

            answer: "9",
            displayAnswer: "9"
        },

        {
            question:
                "Find the equation of a circle with centre (2 ; -1) and radius 6.",

            answer: "(x-2)^2+(y+1)^2=36",
            displayAnswer: "(x - 2)² + (y + 1)² = 36"
        },

        {
            question:
                "Determine the centre of x² + y² - 10x + 4y + 13 = 0.",

            answer: "(5,-2)",
            displayAnswer: "(5 ; -2)"
        },

        {
            question:
                "Determine the radius of x² + y² + 6x - 8y + 9 = 0.",

            answer: "4",
            displayAnswer: "4"
        }

    ],


    unit2: [

        {
            question:
                "A radius has gradient 4. Find the gradient of the tangent.",

            answer: "-1/4",
            displayAnswer: "-1/4"
        },

        {
            question:
                "A radius has gradient -2. Find the gradient of the tangent.",

            answer: "1/2",
            displayAnswer: "1/2"
        },

        {
            question:
                "Find the gradient of the radius from (1 ; 2) to (3 ; 6).",

            answer: "2",
            displayAnswer: "2"
        },

        {
            question:
                "A circle has centre (0 ; 0). Find the tangent equation at (0 ; 5).",

            answer: "y=5",
            displayAnswer: "y = 5"
        },

        {
            question:
                "A circle has centre (0 ; 0). Find the tangent equation at (5 ; 0).",

            answer: "x=5",
            displayAnswer: "x = 5"
        }

    ]

};


/* =============================================
   5. DISPLAY LESSON NOTES AND DIAGRAMS
============================================= */

function displayNotes() {

    document.getElementById("unit1Notes").innerHTML =
        circleDiagram1() + unitNotes.unit1;

    document.getElementById("unit2Notes").innerHTML =
        circleDiagram2() + unitNotes.unit2;

}


/* =============================================
   6. DISPLAY WORKED EXAMPLES
============================================= */

function displayExamples(unitNumber) {

    const container = document.getElementById(
        `unit${unitNumber}Examples`
    );

    const examples = workedExamples[`unit${unitNumber}`];

    container.innerHTML = examples.map((example, index) => `

        <div class="example-card">

            <h4>Example ${index + 1}</h4>

            <p><strong>Question:</strong></p>

            <p>${example.question}</p>

            <div class="solution">

                <h4>Step-by-step solution</h4>

                <ol>
                    ${example.steps.map(step => `
                        <li>${step}</li>
                    `).join("")}
                </ol>

                <p>
                    <strong>Final Answer:</strong>
                    ${example.answer}
                </p>

            </div>

        </div>

    `).join("");

}


/* =============================================
   7. DISPLAY PRACTICE QUESTIONS
============================================= */

function displayPractice(unitNumber) {

    const container = document.getElementById(
        `unit${unitNumber}Practice`
    );

    const questions = practiceQuestions[`unit${unitNumber}`];

    container.innerHTML = questions.map((item, index) => `

        <div class="practice-question">

            <p>
                <strong>Question ${index + 1}:</strong>
                ${item.question}
            </p>

            <input
                type="text"
                id="answer-unit${unitNumber}-${index}"
                placeholder="Enter your answer"
                autocomplete="off"
            >

            <button onclick="checkPracticeAnswer(${unitNumber}, ${index})">
                Check Answer
            </button>

            <p
                id="feedback-unit${unitNumber}-${index}"
                class="answer-feedback">
            </p>

        </div>

    `).join("");

}


/* =============================================
   8. CHECK PRACTICE ANSWERS
============================================= */

function normaliseAnswer(answer) {

    return answer
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/²/g, "^2")
        .replace(/−/g, "-")
        .replace(/;/g, ",")
        .replace(/√/g, "sqrt");
}


function checkPracticeAnswer(unitNumber, questionIndex) {

    const input = document.getElementById(
        `answer-unit${unitNumber}-${questionIndex}`
    );

    const feedback = document.getElementById(
        `feedback-unit${unitNumber}-${questionIndex}`
    );

    const question =
        practiceQuestions[`unit${unitNumber}`][questionIndex];

    const userAnswer = normaliseAnswer(input.value);

    const correctAnswer = normaliseAnswer(question.answer);

    if (userAnswer === "") {

        feedback.textContent = "Please enter an answer first.";

        feedback.style.color = "#d97706";

        return;
    }

    if (userAnswer === correctAnswer) {

        feedback.textContent = "Correct! Well done.";

        feedback.style.color = "#16a34a";

    } else {

        feedback.textContent =
            `Not quite. Correct answer: ${question.displayAnswer}`;

        feedback.style.color = "#dc2626";

    }

}


/* =============================================
   9. OPEN AND CLOSE UNIT SECTIONS
============================================= */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    section.hidden = !section.hidden;

    const symbol = button.querySelector("span");

    if (symbol) {

        symbol.textContent = section.hidden ? "+" : "−";

    }

}


/* =============================================
   10. QUIZ QUESTIONS
============================================= */

const quizData = [

    {
        question: "What is the standard equation of a circle?",

        options: [
            "(x - a)² + (y - b)² = r²",
            "y = mx + c",
            "x² - y² = r",
            "y = ax² + bx + c"
        ],

        answer: 0
    },

    {
        question: "What is the centre of (x - 3)² + (y + 4)² = 25?",

        options: [
            "(-3 ; 4)",
            "(3 ; -4)",
            "(3 ; 4)",
            "(-3 ; -4)"
        ],

        answer: 1
    },

    {
        question: "What is the radius of (x + 2)² + (y - 1)² = 36?",

        options: [
            "36",
            "12",
            "6",
            "18"
        ],

        answer: 2
    },

    {
        question: "What is the centre of x² + y² = 49?",

        options: [
            "(7 ; 7)",
            "(0 ; 0)",
            "(49 ; 49)",
            "(0 ; 7)"
        ],

        answer: 1
    },

    {
        question: "What is the radius of x² + y² - 4x - 6y - 12 = 0?",

        options: [
            "3",
            "4",
            "5",
            "25"
        ],

        answer: 2
    },

    {
        question: "A tangent to a circle is always perpendicular to the:",

        options: [
            "Diameter only",
            "Radius at the point of contact",
            "Centre",
            "Circumference"
        ],

        answer: 1
    },

    {
        question: "If the radius has gradient 3, what is the tangent gradient?",

        options: [
            "3",
            "-3",
            "1/3",
            "-1/3"
        ],

        answer: 3
    },

    {
        question: "What is the gradient perpendicular to a line with gradient -2?",

        options: [
            "2",
            "-1/2",
            "1/2",
            "-2"
        ],

        answer: 2
    },

    {
        question: "A circle has centre (0 ; 0). What is the tangent equation at (0 ; 4)?",

        options: [
            "x = 4",
            "y = 4",
            "y = 0",
            "x = 0"
        ],

        answer: 1
    },

    {
        question: "A circle has centre (0 ; 0) and point of contact (3 ; 4). What is the tangent equation?",

        options: [
            "3x + 4y = 25",
            "4x + 3y = 25",
            "3x - 4y = 25",
            "x + y = 7"
        ],

        answer: 0
    }

];


/* =============================================
   11. QUIZ VARIABLES
============================================= */

let currentQuestion = 0;

let score = 0;


/* =============================================
   12. START QUIZ
============================================= */

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("startQuiz").hidden = true;

    document.getElementById("quizResults").hidden = true;

    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";

    showQuestion();

}


/* =============================================
   13. DISPLAY QUESTION
============================================= */

function showQuestion() {

    const question = quizData[currentQuestion];

    document.getElementById("questionProgress").textContent =
        `Question ${currentQuestion + 1} of ${quizData.length}`;

    document.getElementById("quizScore").textContent =
        `Score: ${score}`;

    document.getElementById("progressBar").style.width =
        `${((currentQuestion + 1) / quizData.length) * 100}%`;

    document.getElementById("quizQuestions").innerHTML = `

        <h3>${question.question}</h3>

        ${question.options.map((option, index) => `

            <label>
                <input
                    type="radio"
                    name="quizAnswer"
                    value="${index}"
                >
                ${option}
            </label>

        `).join("")}

    `;

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =============================================
   14. SUBMIT QUIZ ANSWER
============================================= */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;
    }

    const userAnswer = Number(selected.value);

    if (userAnswer === quizData[currentQuestion].answer) {

        score++;

    }

    if (currentQuestion < quizData.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =============================================
   15. FINISH QUIZ
============================================= */

function finishQuiz() {

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("finalScore").textContent =
        `Your final score is ${score} out of ${quizData.length}.`;

    const percentage = (score / quizData.length) * 100;

    let feedback = "";

    if (percentage >= 80) {

        feedback =
            "Excellent work! You understand Analytical Geometry very well.";

    } else if (percentage >= 60) {

        feedback =
            "Good job! Keep practising to improve your understanding.";

    } else if (percentage >= 40) {

        feedback =
            "You are making progress. Revise the notes and try again.";

    } else {

        feedback =
            "Keep learning! Go through the worked examples before trying again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

    document.getElementById("progressBar").style.width = "100%";

}


/* =============================================
   16. RETRY QUIZ
============================================= */

function retryQuiz() {

    document.getElementById("quizResults").hidden = true;

    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizArea").hidden = true;

    document.getElementById("progressBar").style.width = "0%";

    document.getElementById("quizScore").textContent = "Score: 0";

}


/* =============================================
   17. LOAD EVERYTHING
============================================= */

document.addEventListener("DOMContentLoaded", function () {

    displayNotes();

    displayExamples(1);
    displayExamples(2);

    displayPractice(1);
    displayPractice(2);

});
