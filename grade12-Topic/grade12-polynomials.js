
/* =====================================================
   MATHSHELPSA - GRADE 12
   TOPIC: POLYNOMIALS
===================================================== */


/* =====================================================
   1. OPEN AND CLOSE UNITS
===================================================== */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);
    const icon = button.querySelector(".toggle-icon");

    if (!section) return;

    section.hidden = !section.hidden;

    if (icon) {
        icon.textContent = section.hidden ? "+" : "−";
    }
}


/* =====================================================
   2. UNIT 1 NOTES
   FACTORISE THIRD-DEGREE POLYNOMIALS
===================================================== */

const unit1Notes = `

<div class="unit-notes">

    <h4>1. What is a Polynomial?</h4>

    <p>
        A polynomial is an algebraic expression containing variables,
        coefficients and non-negative whole-number powers.
    </p>

    <p>Examples:</p>

    <div class="formula-box">
        x³ + 2x² - 5x + 6
    </div>

    <div class="formula-box">
        2x³ - 3x² + 4x - 7
    </div>

    <h4>2. What is a Third-Degree Polynomial?</h4>

    <p>
        A third-degree polynomial is also called a cubic polynomial.
        Its highest power of the variable is 3.
    </p>

    <div class="polynomial-expression">
        ax³ + bx² + cx + d
    </div>

    <p>
        Where a, b, c and d are constants and a is not zero.
    </p>

    <h4>3. What Does Factorising Mean?</h4>

    <p>
        Factorising means rewriting an expression as a product
        of simpler expressions called factors.
    </p>

    <p>For example:</p>

    <div class="formula-box">
        x² - 9 = (x - 3)(x + 3)
    </div>

    <p>
        We can also factorise cubic expressions into three
        linear factors or a linear factor and a quadratic factor.
    </p>

    <h4>4. Factorising by Grouping</h4>

    <p>
        When a cubic polynomial has four terms, we can group
        the terms into pairs.
    </p>

    <p>Example:</p>

    <div class="formula-box">
        x³ + 2x² - x - 2
    </div>

    <p>Step 1: Group the terms.</p>

    <div class="formula-box">
        (x³ + 2x²) - (x + 2)
    </div>

    <p>Step 2: Take out the common factors.</p>

    <div class="formula-box">
        x²(x + 2) - 1(x + 2)
    </div>

    <p>Step 3: Take out the common bracket.</p>

    <div class="formula-box">
        (x + 2)(x² - 1)
    </div>

    <p>Step 4: Factorise the difference of two squares.</p>

    <div class="formula-box">
        (x + 2)(x - 1)(x + 1)
    </div>

    <h4>5. Difference of Two Cubes</h4>

    <div class="formula-box">
        a³ - b³ = (a - b)(a² + ab + b²)
    </div>

    <p>Example:</p>

    <div class="formula-box">
        x³ - 8
    </div>

    <p>Since 8 = 2³:</p>

    <div class="formula-box">
        x³ - 2³
    </div>

    <p>Therefore:</p>

    <div class="formula-box">
        (x - 2)(x² + 2x + 4)
    </div>

    <h4>6. Sum of Two Cubes</h4>

    <div class="formula-box">
        a³ + b³ = (a + b)(a² - ab + b²)
    </div>

    <p>Example:</p>

    <div class="formula-box">
        x³ + 27
    </div>

    <p>Since 27 = 3³:</p>

    <div class="formula-box">
        (x + 3)(x² - 3x + 9)
    </div>

    <h4>7. Common Factor First</h4>

    <p>
        Always check whether all the terms have a common factor
        before using another factorisation method.
    </p>

    <p>Example:</p>

    <div class="formula-box">
        2x³ + 6x² + 4x
    </div>

    <p>Take out 2x:</p>

    <div class="formula-box">
        2x(x² + 3x + 2)
    </div>

    <p>Factorise the quadratic:</p>

    <div class="formula-box">
        2x(x + 1)(x + 2)
    </div>

    <h4>8. Important Tips</h4>

    <ul>
        <li>Look for a common factor first.</li>
        <li>Check whether the expression can be grouped.</li>
        <li>Remember the difference of two squares.</li>
        <li>Remember the sum and difference of two cubes.</li>
        <li>Multiply your factors to check your answer.</li>
    </ul>

</div>

`;


/* =====================================================
   3. UNIT 2 NOTES
   REMAINDER AND FACTOR THEOREMS
===================================================== */

const unit2Notes = `

<div class="unit-notes">

    <h4>1. The Remainder Theorem</h4>

    <p>
        The remainder theorem helps us find the remainder when
        a polynomial is divided by a linear expression.
    </p>

    <p>
        If a polynomial P(x) is divided by (x - a), the remainder
        is P(a).
    </p>

    <div class="formula-box">
        Remainder = P(a)
    </div>

    <p>Example:</p>

    <p>Find the remainder when:</p>

    <div class="formula-box">
        P(x) = x³ - 2x + 4
    </div>

    <p>is divided by (x - 2).</p>

    <p>Step 1: Identify a.</p>

    <div class="formula-box">
        x - 2 = 0

        <br><br>

        x = 2
    </div>

    <p>Step 2: Substitute x = 2.</p>

    <div class="formula-box">
        P(2) = 2³ - 2(2) + 4
    </div>

    <p>Step 3: Calculate.</p>

    <div class="formula-box">
        P(2) = 8 - 4 + 4

        <br><br>

        P(2) = 8
    </div>

    <div class="remainder-box">
        <strong>Therefore, the remainder is 8.</strong>
    </div>

    <h4>2. The Factor Theorem</h4>

    <p>
        The factor theorem tells us whether a linear expression
        is a factor of a polynomial.
    </p>

    <div class="formula-box">
        (x - a) is a factor of P(x) if P(a) = 0.
    </div>

    <p>Example:</p>

    <p>Determine whether (x - 2) is a factor of:</p>

    <div class="formula-box">
        P(x) = x³ - 4x² + x + 6
    </div>

    <p>Substitute x = 2.</p>

    <div class="formula-box">
        P(2) = 2³ - 4(2²) + 2 + 6
    </div>

    <div class="formula-box">
        = 8 - 16 + 2 + 6

        <br><br>

        = 0
    </div>

    <div class="factor-box">
        <strong>
            Since P(2) = 0, (x - 2) is a factor.
        </strong>
    </div>

    <h4>3. Finding a Factor Using Synthetic Division</h4>

    <p>
        Once we know that (x - a) is a factor, we can use
        synthetic division to find the remaining quadratic factor.
    </p>

    <p>Example:</p>

    <div class="formula-box">
        P(x) = x³ - 4x² + x + 6
    </div>

    <p>We already established that (x - 2) is a factor.</p>

    <p>Use the coefficients:</p>

    <div class="formula-box">
        1, -4, 1, 6
    </div>

    <p>Synthetic division:</p>

    <div class="polynomial-expression">
        2 | 1 &nbsp; -4 &nbsp; 1 &nbsp; 6
        <br>
        &nbsp; | &nbsp;&nbsp;&nbsp; 2 &nbsp; -4 &nbsp; -6
        <hr>
        &nbsp; &nbsp; 1 &nbsp; -2 &nbsp; -3 &nbsp; 0
    </div>

    <p>The quotient is:</p>

    <div class="formula-box">
        x² - 2x - 3
    </div>

    <p>Factorise the quadratic:</p>

    <div class="formula-box">
        (x - 3)(x + 1)
    </div>

    <p>Therefore the complete factorisation is:</p>

    <div class="factor-box">
        <strong>
            P(x) = (x - 2)(x - 3)(x + 1)
        </strong>
    </div>

    <h4>4. Solving Cubic Equations</h4>

    <p>
        To solve a cubic equation, first write it in the form
        P(x) = 0. Then factorise and set each factor equal to zero.
    </p>

    <p>For example:</p>

    <div class="formula-box">
        (x - 2)(x - 3)(x + 1) = 0
    </div>

    <p>Set each factor equal to zero:</p>

    <div class="formula-box">
        x - 2 = 0
        <br><br>
        x - 3 = 0
        <br><br>
        x + 1 = 0
    </div>

    <div class="factor-box">
        <strong>
            Solutions: x = 2, x = 3 or x = -1
        </strong>
    </div>

    <h4>5. Important Difference</h4>

    <div class="remainder-box">
        <strong>Remainder Theorem:</strong>

        <p>
            Used to calculate the remainder after division.
        </p>
    </div>

    <div class="factor-box">
        <strong>Factor Theorem:</strong>

        <p>
            Used to determine whether a linear expression is a factor.
        </p>
    </div>

    <h4>6. Important Tips</h4>

    <ul>
        <li>For (x - a), substitute x = a.</li>
        <li>For (x + a), substitute x = -a.</li>
        <li>If the remainder is zero, the divisor is a factor.</li>
        <li>Remember to include missing powers with zero coefficients in synthetic division.</li>
        <li>After factorising, set each factor equal to zero to solve.</li>
        <li>Always check your roots by substituting them into the original polynomial.</li>
    </ul>

</div>

`;


/* =====================================================
   4. DISPLAY NOTES
===================================================== */

document.getElementById("unit1Notes").innerHTML = unit1Notes;
document.getElementById("unit2Notes").innerHTML = unit2Notes;


/* =====================================================
   5. WORKED EXAMPLES
===================================================== */

const workedExamples = {

    unit1: [

        {
            title: "Example 1: Factorising by Grouping",

            question:
                "Factorise completely: x³ + 2x² - x - 2",

            steps: [
                "Step 1: Group the terms.",
                "(x³ + 2x²) - (x + 2)",
                "Step 2: Take out the common factors.",
                "x²(x + 2) - 1(x + 2)",
                "Step 3: Take out the common bracket.",
                "(x + 2)(x² - 1)",
                "Step 4: Factorise the difference of two squares.",
                "(x + 2)(x - 1)(x + 1)"
            ],

            answer:
                "(x + 2)(x - 1)(x + 1)"
        },

        {
            title: "Example 2: Common Factor and Quadratic Factorisation",

            question:
                "Factorise completely: 2x³ + 6x² + 4x",

            steps: [
                "Step 1: Identify the common factor.",
                "The common factor is 2x.",
                "Step 2: Take out the common factor.",
                "2x(x² + 3x + 2)",
                "Step 3: Find two numbers whose product is 2 and sum is 3.",
                "The numbers are 1 and 2.",
                "Step 4: Factorise the quadratic.",
                "2x(x + 1)(x + 2)"
            ],

            answer:
                "2x(x + 1)(x + 2)"
        },

        {
            title: "Example 3: Difference of Two Cubes",

            question:
                "Factorise completely: x³ - 8",

            steps: [
                "Step 1: Recognise that 8 = 2³.",
                "x³ - 2³",
                "Step 2: Apply the difference of two cubes formula.",
                "a³ - b³ = (a - b)(a² + ab + b²)",
                "Step 3: Substitute a = x and b = 2.",
                "(x - 2)(x² + 2x + 4)"
            ],

            answer:
                "(x - 2)(x² + 2x + 4)"
        },

        {
            title: "Example 4: Sum of Two Cubes",

            question:
                "Factorise completely: x³ + 27",

            steps: [
                "Step 1: Recognise that 27 = 3³.",
                "x³ + 3³",
                "Step 2: Apply the sum of two cubes formula.",
                "a³ + b³ = (a + b)(a² - ab + b²)",
                "Step 3: Substitute a = x and b = 3.",
                "(x + 3)(x² - 3x + 9)"
            ],

            answer:
                "(x + 3)(x² - 3x + 9)"
        }

    ],


    unit2: [

        {
            title: "Example 1: Using the Remainder Theorem",

            question:
                "Find the remainder when P(x) = x³ - 2x² + 3x - 5 is divided by (x - 2).",

            steps: [
                "Step 1: Identify a = 2.",
                "Step 2: Apply the remainder theorem.",
                "Remainder = P(2)",
                "Step 3: Substitute.",
                "P(2) = 2³ - 2(2²) + 3(2) - 5",
                "P(2) = 8 - 8 + 6 - 5",
                "P(2) = 1"
            ],

            answer:
                "The remainder is 1."
        },

        {
            title: "Example 2: Using the Factor Theorem",

            question:
                "Determine whether (x - 2) is a factor of P(x) = x³ - 4x² + x + 6.",

            steps: [
                "Step 1: If (x - 2) is a factor, test x = 2.",
                "Step 2: Substitute into P(x).",
                "P(2) = 2³ - 4(2²) + 2 + 6",
                "P(2) = 8 - 16 + 2 + 6",
                "P(2) = 0",
                "Step 3: Apply the factor theorem.",
                "Since P(2) = 0, (x - 2) is a factor."
            ],

            answer:
                "(x - 2) is a factor."
        },

        {
            title: "Example 3: Factorising Using Synthetic Division",

            question:
                "Factorise completely: x³ - 4x² + x + 6, given that (x - 2) is a factor.",

            steps: [
                "Step 1: Write the coefficients.",
                "1, -4, 1, 6",
                "Step 2: Use 2 in synthetic division.",
                "Bring down 1.",
                "Multiply 1 × 2 = 2. Add to -4 to get -2.",
                "Multiply -2 × 2 = -4. Add to 1 to get -3.",
                "Multiply -3 × 2 = -6. Add to 6 to get 0.",
                "Step 3: Write the quotient.",
                "x² - 2x - 3",
                "Step 4: Factorise the quadratic.",
                "(x - 3)(x + 1)",
                "Step 5: Include the known factor.",
                "(x - 2)(x - 3)(x + 1)"
            ],

            answer:
                "(x - 2)(x - 3)(x + 1)"
        },

        {
            title: "Example 4: Solving a Cubic Equation",

            question:
                "Solve: x³ - 2x² - 5x + 6 = 0",

            steps: [
                "Step 1: Let P(x) = x³ - 2x² - 5x + 6.",
                "Step 2: Test x = 1.",
                "P(1) = 1 - 2 - 5 + 6",
                "P(1) = 0",
                "Therefore (x - 1) is a factor.",
                "Step 3: Divide by (x - 1) using synthetic division.",
                "The quotient is x² - x - 6.",
                "Step 4: Factorise the quadratic.",
                "x² - x - 6 = (x - 3)(x + 2)",
                "Step 5: Write the complete equation.",
                "(x - 1)(x - 3)(x + 2) = 0",
                "Step 6: Set each factor equal to zero."
            ],

            answer:
                "x = 1, x = 3 or x = -2"
        }

    ]

};


/* =====================================================
   6. DISPLAY WORKED EXAMPLES
===================================================== */

function displayExamples(unit, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    workedExamples[unit].forEach(example => {

        const card = document.createElement("div");
        card.className = "example-card";

        const title = document.createElement("h4");
        title.textContent = example.title;

        const question = document.createElement("div");
        question.className = "example-question";
        question.textContent = example.question;

        const button = document.createElement("button");
        button.className = "step-button";
        button.textContent = "Show Solution";

        const solution = document.createElement("div");
        solution.className = "solution-steps";
        solution.hidden = true;

        example.steps.forEach(step => {

            const paragraph = document.createElement("p");
            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const answer = document.createElement("p");
        answer.className = "answer";
        answer.textContent = "Final Answer: " + example.answer;

        solution.appendChild(answer);

        button.addEventListener("click", function () {

            solution.hidden = !solution.hidden;

            button.textContent = solution.hidden
                ? "Show Solution"
                : "Hide Solution";

        });

        card.appendChild(title);
        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(solution);

        container.appendChild(card);

    });

}


displayExamples("unit1", "unit1Examples");
displayExamples("unit2", "unit2Examples");


/* =====================================================
   7. PRACTICE QUESTIONS
===================================================== */

const practiceQuestions = {

    unit1: [

        {
            question:
                "Factorise completely: x³ + 3x² + 2x",

            answers: [
                "x(x + 1)(x + 2)"
            ],

            explanation:
                "Take out x first: x(x² + 3x + 2) = x(x + 1)(x + 2)."
        },

        {
            question:
                "Factorise completely: x³ - 4x",

            answers: [
                "x(x - 2)(x + 2)"
            ],

            explanation:
                "Take out x: x(x² - 4). Then use the difference of two squares."
        },

        {
            question:
                "Factorise completely: x³ - 27",

            answers: [
                "(x - 3)(x² + 3x + 9)"
            ],

            explanation:
                "Use the difference of two cubes: x³ - 3³."
        },

        {
            question:
                "Factorise completely: x³ + 2x² - 9x - 18",

            answers: [
                "(x + 2)(x - 3)(x + 3)",
                "(x + 2)(x + 3)(x - 3)"
            ],

            explanation:
                "Group the terms: x²(x + 2) - 9(x + 2), then factorise x² - 9."
        },

        {
            question:
                "Factorise completely: 2x³ + 10x² + 12x",

            answers: [
                "2x(x + 2)(x + 3)"
            ],

            explanation:
                "Take out 2x, then factorise x² + 5x + 6."
        }

    ],


    unit2: [

        {
            question:
                "Find the remainder when P(x) = x³ + 2x² - 3x + 4 is divided by (x - 2).",

            answers: ["14"],

            explanation:
                "Use P(2): 8 + 8 - 6 + 4 = 14. The correct remainder is 14."
        },

        {
            question:
                "Determine whether (x + 1) is a factor of P(x) = x³ - 2x² - 5x + 6. Enter YES or NO.",

            answers: ["yes"],

            explanation:
                "Substitute x = -1. P(-1) = -1 - 2 + 5 + 6 = 8, so it is not a factor. The correct answer is NO."
        },

        {
            question:
                "Find the remainder when P(x) = 2x³ - x + 5 is divided by (x + 1).",

            answers: ["4"],

            explanation:
                "Use P(-1): -2 + 1 + 5 = 4."
        },

        {
            question:
                "Given P(x) = x³ - 4x² + x + 6, determine the remainder when divided by (x - 3).",

            answers: ["0"],

            explanation:
                "P(3) = 27 - 36 + 3 + 6 = 0."
        },

        {
            question:
                "Solve x³ - 2x² - 5x + 6 = 0. Enter the three roots separated by commas.",

            answers: [
                "1,3,-2",
                "1,-2,3",
                "3,1,-2",
                "3,-2,1",
                "-2,1,3",
                "-2,3,1"
            ],

            explanation:
                "Factorise into (x - 1)(x - 3)(x + 2) = 0. The roots are 1, 3 and -2."
        }

    ]

};


/* =====================================================
   8. NORMALISE PRACTICE ANSWERS
===================================================== */

function normaliseAnswer(value) {

    return String(value)
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/−/g, "-")
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/,/g, ",")
        .replace(/\u00b2/g, "^2")
        .replace(/\u00b3/g, "^3");
}


/* =====================================================
   9. DISPLAY PRACTICE QUESTIONS
===================================================== */

function displayPractice(unit, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    practiceQuestions[unit].forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "practice-card";

        const heading = document.createElement("h4");
        heading.textContent = "Question " + (index + 1);

        const question = document.createElement("p");
        question.textContent = item.question;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter your answer";

        const button = document.createElement("button");
        button.className = "check-button";
        button.textContent = "Check Answer";

        const feedback = document.createElement("p");
        feedback.className = "feedback";

        button.addEventListener("click", function () {

            const userAnswer = normaliseAnswer(input.value);

            const acceptedAnswers = item.answers.map(
                answer => normaliseAnswer(answer)
            );

            if (userAnswer === "") {

                feedback.textContent = "Please enter your answer.";
                feedback.style.color = "#dc2626";

            } else if (acceptedAnswers.includes(userAnswer)) {

                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#15803d";

            } else {

                feedback.textContent =
                    "Not quite. " + item.explanation;

                feedback.style.color = "#dc2626";

            }

        });

        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(input);
        card.appendChild(button);
        card.appendChild(feedback);

        container.appendChild(card);

    });

}


displayPractice("unit1", "unit1Practice");
displayPractice("unit2", "unit2Practice");


/* =====================================================
   10. QUIZ QUESTIONS
===================================================== */

const quizData = [

    {
        question:
            "What is the highest power in a third-degree polynomial?",

        options: ["1", "2", "3", "4"],

        answer: 2
    },

    {
        question:
            "Which formula represents the difference of two cubes?",

        options: [
            "(a - b)(a² + ab + b²)",
            "(a + b)(a² + ab + b²)",
            "(a - b)(a² - ab + b²)",
            "(a + b)(a² - ab + b²)"
        ],

        answer: 0
    },

    {
        question:
            "Factorise x³ - 8.",

        options: [
            "(x - 2)(x² - 2x + 4)",
            "(x + 2)(x² + 2x + 4)",
            "(x - 2)(x² + 2x + 4)",
            "(x - 8)(x² + 8)"
        ],

        answer: 2
    },

    {
        question:
            "What is the first step when factorising 2x³ + 6x² + 4x?",

        options: [
            "Use the remainder theorem",
            "Take out the common factor 2x",
            "Use the sum of cubes",
            "Divide by x - 2"
        ],

        answer: 1
    },

    {
        question:
            "According to the remainder theorem, what is the remainder when P(x) is divided by (x - a)?",

        options: [
            "P(-a)",
            "P(0)",
            "P(a)",
            "P(x)"
        ],

        answer: 2
    },

    {
        question:
            "If P(3) = 0, which expression is a factor of P(x)?",

        options: [
            "(x + 3)",
            "(x - 3)",
            "(x + 1)",
            "(x - 1)"
        ],

        answer: 1
    },

    {
        question:
            "What does a remainder of zero tell us?",

        options: [
            "The polynomial cannot be factorised",
            "The divisor is a factor",
            "The polynomial has no roots",
            "The divisor is always x"
        ],

        answer: 1
    },

    {
        question:
            "Find the remainder when P(x) = x² + 3x + 2 is divided by (x + 1).",

        options: ["0", "2", "4", "6"],

        answer: 0
    },

    {
        question:
            "Which expression is the quotient when x³ - 4x² + x + 6 is divided by (x - 2)?",

        options: [
            "x² + 2x + 3",
            "x² - 2x - 3",
            "x² - 4x + 3",
            "x² + 2x - 3"
        ],

        answer: 1
    },

    {
        question:
            "Solve (x - 2)(x - 3)(x + 1) = 0.",

        options: [
            "x = 2, 3 or -1",
            "x = -2, -3 or 1",
            "x = 2, -3 or -1",
            "x = 0, 2 or 3"
        ],

        answer: 0
    }

];


/* =====================================================
   11. QUIZ VARIABLES
===================================================== */

let currentQuestion = 0;
let quizScore = 0;


/* =====================================================
   12. START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("startQuiz").hidden = true;
    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizResults").hidden = true;

    showQuestion();

}


/* =====================================================
   13. DISPLAY QUESTION
===================================================== */

function showQuestion() {

    const container = document.getElementById("quizQuestions");

    const question = quizData[currentQuestion];

    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "quiz-question";

    const heading = document.createElement("h4");

    heading.textContent =
        "Question " + (currentQuestion + 1) +
        ": " + question.question;

    card.appendChild(heading);

    question.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "quiz-option";
        label.style.display = "block";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "quizAnswer";
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        card.appendChild(label);

    });

    container.appendChild(card);

    document.getElementById("questionProgress").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + quizData.length;

    document.getElementById("quizScore").textContent =
        "Score: " + quizScore;

    document.getElementById("progressBar").style.width =
        (currentQuestion / quizData.length * 100) + "%";

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =====================================================
   14. SUBMIT QUIZ ANSWER
===================================================== */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;
    }

    const selectedAnswer = Number(selected.value);

    if (selectedAnswer === quizData[currentQuestion].answer) {

        quizScore++;

    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =====================================================
   15. FINISH QUIZ
===================================================== */

function finishQuiz() {

    document.getElementById("quizArea").hidden = true;
    document.getElementById("quizResults").hidden = false;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").textContent =
        "Your Score: " + quizScore + " / " + quizData.length;

    let feedback = "";

    if (quizScore >= 8) {

        feedback =
            "Excellent work! You understand polynomials very well.";

    } else if (quizScore >= 6) {

        feedback =
            "Good job! Revise a few areas to improve your score.";

    } else if (quizScore >= 4) {

        feedback =
            "You are making progress. Practise more factorisation questions.";

    } else {

        feedback =
            "Keep practising. Review the notes and worked examples, then try again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

}


/* =====================================================
   16. RETRY QUIZ
===================================================== */

function retryQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("quizResults").hidden = true;
    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";

    document.getElementById("questionProgress").textContent =
        "Question 1 of 10";

    document.getElementById("progressBar").style.width = "0%";

}
