
/* =========================================
   MATHSHELP SA
   GRADE 12
   EXPONENTIAL AND LOGARITHMIC FUNCTIONS
========================================= */


/* =========================================
   1. OPEN AND CLOSE SECTIONS
========================================= */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const icon = button.querySelector(".toggle-icon");

    if (icon) {
        icon.textContent = isHidden ? "−" : "+";
    }
}


/* =========================================
   2. UNIT 1 NOTES
   REVISION OF EXPONENTIAL LAWS
========================================= */

const unit1Notes = `

<div class="unit-notes">

<h4>1. What is an exponential expression?</h4>

<p>An exponential expression is an expression where the variable or number appears as an exponent.</p>

<div class="formula-box">
    a<sup>n</sup>
</div>

<p>In this expression:</p>

<ul>
    <li><strong>a</strong> is the base.</li>
    <li><strong>n</strong> is the exponent or power.</li>
</ul>

</div>


<div class="unit-notes">

<h4>2. Laws of Exponents</h4>

<p>These laws help us simplify exponential expressions.</p>

<div class="formula-box">
    <p>Law 1: a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup></p>
    <p>Law 2: a<sup>m</sup> ÷ a<sup>n</sup> = a<sup>m−n</sup></p>
    <p>Law 3: (a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup></p>
    <p>Law 4: (ab)<sup>n</sup> = a<sup>n</sup>b<sup>n</sup></p>
    <p>Law 5: (a/b)<sup>n</sup> = a<sup>n</sup>/b<sup>n</sup></p>
    <p>Law 6: a<sup>0</sup> = 1</p>
    <p>Law 7: a<sup>−n</sup> = 1/a<sup>n</sup></p>
    <p>Law 8: a<sup>1/n</sup> = ⁿ√a</p>
</div>

<p><strong>Important:</strong> The base a must be non-zero for negative and zero exponents. For real-valued fractional powers, the base must also satisfy the relevant root restrictions.</p>

</div>


<div class="unit-notes">

<h4>3. Exponential Functions</h4>

<p>An exponential function has the general form:</p>

<div class="formula-box">
    f(x) = ab<sup>x</sup> + q
</div>

<ul>
    <li>a determines the vertical stretch and direction.</li>
    <li>b is the exponential base.</li>
    <li>q shifts the graph vertically.</li>
</ul>

<p>For the basic function y = b<sup>x</sup>:</p>

<ul>
    <li>If b is greater than 1, the graph shows exponential growth.</li>
    <li>If 0 is less than b and b is less than 1, the graph shows exponential decay.</li>
    <li>The graph passes through (0; 1).</li>
    <li>The horizontal asymptote is y = 0.</li>
    <li>The domain is all real numbers.</li>
    <li>The range is y greater than 0.</li>
</ul>

</div>


<div class="unit-notes">

<h4>4. Exponential Growth and Decay</h4>

<p><strong>Growth:</strong> A quantity increases over time.</p>

<div class="formula-box">
    A = P(1 + r)<sup>n</sup>
</div>

<p><strong>Decay:</strong> A quantity decreases over time.</p>

<div class="formula-box">
    A = P(1 − r)<sup>n</sup>
</div>

<ul>
    <li>P = original amount</li>
    <li>r = rate expressed as a decimal</li>
    <li>n = number of time periods</li>
    <li>A = final amount</li>
</ul>

</div>

<div class="graph-container">

<h4>Exponential Growth and Decay</h4>

<svg class="function-graph" viewBox="0 0 500 320"
     role="img" aria-label="Graph showing exponential growth and decay">

    <defs>
        <pattern id="expGrid" width="40" height="30" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 30"
                  fill="none" stroke="#dbeafe" stroke-width="1"/>
        </pattern>
    </defs>

    <rect width="500" height="320" fill="url(#expGrid)"/>

    <line x1="35" y1="260" x2="475" y2="260"
          stroke="#172554" stroke-width="2"/>

    <line x1="250" y1="285" x2="250" y2="20"
          stroke="#172554" stroke-width="2"/>

    <text x="480" y="265" font-size="13" fill="#172554">x</text>
    <text x="260" y="20" font-size="13" fill="#172554">y</text>

    <path d="M 65 255 C 140 250, 200 220, 250 190
             C 310 145, 365 65, 430 20"
          fill="none" stroke="#2563eb" stroke-width="3"/>

    <path d="M 65 20 C 140 65, 190 145, 250 190
             C 310 220, 365 250, 430 255"
          fill="none" stroke="#eab308" stroke-width="3"/>

    <circle cx="250" cy="190" r="4" fill="#172554"/>

    <text x="330" y="55" font-size="13" fill="#2563eb">Growth</text>
    <text x="85" y="75" font-size="13" fill="#a16207">Decay</text>

</svg>

<p class="graph-caption">
    Blue: exponential growth. Yellow: exponential decay. Illustrative curves.
</p>

</div>
`;


/* =========================================
   3. UNIT 2 NOTES
   LOGARITHMS
========================================= */

const unit2Notes = `

<div class="unit-notes">

<h4>1. What is a logarithm?</h4>

<p>A logarithm is another way of writing an exponential statement.</p>

<div class="formula-box">
    b<sup>y</sup> = x
    &nbsp; ⇔ &nbsp;
    log<sub>b</sub>x = y
</div>

<p>This means that a logarithm asks:</p>

<p><strong>To what exponent must we raise the base to get the given number?</strong></p>

<p>Example:</p>

<div class="formula-box">
    2<sup>3</sup> = 8
    <br>
    log<sub>2</sub>8 = 3
</div>

</div>


<div class="unit-notes">

<h4>2. Conditions for Logarithms</h4>

<p>For log<sub>b</sub>x to be defined in the real numbers:</p>

<ul>
    <li>The base b must be positive.</li>
    <li>The base b cannot equal 1.</li>
    <li>The argument x must be positive.</li>
</ul>

<div class="formula-box">
    b > 0, &nbsp; b ≠ 1, &nbsp; x > 0
</div>

<p><strong>Remember:</strong> You cannot take the logarithm of zero or a negative number in the real number system.</p>

</div>


<div class="unit-notes">

<h4>3. Laws of Logarithms</h4>

<p>These laws help us simplify logarithmic expressions.</p>

<div class="formula-box">

    <p>Law 1: log<sub>b</sub>(MN) = log<sub>b</sub>M + log<sub>b</sub>N</p>

    <p>Law 2: log<sub>b</sub>(M/N) = log<sub>b</sub>M − log<sub>b</sub>N</p>

    <p>Law 3: log<sub>b</sub>(M<sup>n</sup>) = n log<sub>b</sub>M</p>

    <p>Law 4: log<sub>b</sub>1 = 0</p>

    <p>Law 5: log<sub>b</sub>b = 1</p>

</div>

</div>


<div class="unit-notes">

<h4>4. Changing Between Exponential and Logarithmic Forms</h4>

<p>Example 1:</p>

<div class="formula-box">
    3<sup>4</sup> = 81
    <br>
    log<sub>3</sub>81 = 4
</div>

<p>Example 2:</p>

<div class="formula-box">
    5<sup>2</sup> = 25
    <br>
    log<sub>5</sub>25 = 2
</div>

</div>


<div class="unit-notes">

<h4>5. Logarithmic Functions</h4>

<p>The general logarithmic function is:</p>

<div class="formula-box">
    y = log<sub>b</sub>x
</div>

<ul>
    <li>The domain is x greater than 0.</li>
    <li>The range is all real numbers.</li>
    <li>The vertical asymptote is x = 0.</li>
    <li>The graph passes through (1; 0).</li>
    <li>If b is greater than 1, the graph increases.</li>
</ul>

</div>


<div class="unit-notes">

<h4>6. Solving Logarithmic Equations</h4>

<p>When solving logarithmic equations:</p>

<ol>
    <li>Use the laws of logarithms where necessary.</li>
    <li>Convert logarithmic form into exponential form.</li>
    <li>Solve the resulting equation.</li>
    <li>Check that all logarithm arguments are positive.</li>
</ol>

<p>Always reject solutions that make a logarithm undefined.</p>

</div>


<div class="graph-container">

<h4>Logarithmic Function</h4>

<svg class="function-graph" viewBox="0 0 500 320"
     role="img" aria-label="Graph of a logarithmic function">

    <defs>
        <pattern id="logGrid" width="40" height="30" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 30"
                  fill="none" stroke="#dbeafe" stroke-width="1"/>
        </pattern>
    </defs>

    <rect width="500" height="320" fill="url(#logGrid)"/>

    <line x1="35" y1="160" x2="475" y2="160"
          stroke="#172554" stroke-width="2"/>

    <line x1="130" y1="285" x2="130" y2="20"
          stroke="#172554" stroke-width="2"/>

    <text x="480" y="165" font-size="13" fill="#172554">x</text>
    <text x="140" y="20" font-size="13" fill="#172554">y</text>

    <line x1="130" y1="20" x2="130" y2="285"
          stroke="#dc2626" stroke-width="2" stroke-dasharray="6,5"/>

    <path d="M 145 270
             C 150 230, 160 200, 175 180
             C 200 150, 235 130, 280 115
             C 330 95, 390 75, 450 60"
          fill="none" stroke="#2563eb" stroke-width="3"/>

    <circle cx="175" cy="160" r="4" fill="#2563eb"/>

    <text x="140" y="300" font-size="12" fill="#dc2626">x = 0</text>
    <text x="185" y="150" font-size="12" fill="#2563eb">(1; 0)</text>

</svg>

<p class="graph-caption">
    The logarithmic graph has a vertical asymptote at x = 0.
</p>

</div>
`;


/* =========================================
   4. DISPLAY NOTES
========================================= */

document.getElementById("unit1Notes").innerHTML = unit1Notes;
document.getElementById("unit2Notes").innerHTML = unit2Notes;


/* =========================================
   5. WORKED EXAMPLES
========================================= */

const unit1Examples = [

    {
        question: "Simplify: 2³ × 2⁴",

        steps: [
            "Step 1: Identify that the bases are the same.",
            "Step 2: Add the exponents.",
            "2³ × 2⁴ = 2³⁺⁴",
            "2⁷ = 128"
        ],

        answer: "128"
    },

    {
        question: "Simplify: (3²)³",

        steps: [
            "Step 1: Use the power of a power law.",
            "(aᵐ)ⁿ = aᵐⁿ",
            "(3²)³ = 3²ˣ³",
            "3⁶ = 729"
        ],

        answer: "729"
    },

    {
        question: "Simplify: 5⁶ ÷ 5²",

        steps: [
            "Step 1: The bases are the same.",
            "Step 2: Subtract the exponents.",
            "5⁶ ÷ 5² = 5⁶⁻²",
            "5⁴ = 625"
        ],

        answer: "625"
    },

    {
        question: "Simplify: 4⁻²",

        steps: [
            "Step 1: Use the negative exponent law.",
            "a⁻ⁿ = 1/aⁿ",
            "4⁻² = 1/4²",
            "4⁻² = 1/16"
        ],

        answer: "1/16"
    },

    {
        question: "A population of 200 grows by 10% each year. Calculate the population after 2 years.",

        steps: [
            "Step 1: Write down the growth formula.",
            "A = P(1 + r)ⁿ",
            "Step 2: Substitute the values.",
            "A = 200(1 + 0.10)²",
            "A = 200(1.1)²",
            "A = 200 × 1.21"
        ],

        answer: "242"
    },

    {
        question: "Solve: 2ˣ = 32",

        steps: [
            "Step 1: Express 32 as a power of 2.",
            "2ˣ = 2⁵",
            "Step 2: Since the bases are equal, the exponents are equal.",
            "x = 5"
        ],

        answer: "5"
    },

    {
        question: "Solve: 3ˣ⁺¹ = 81",

        steps: [
            "Step 1: Express 81 as a power of 3.",
            "3ˣ⁺¹ = 3⁴",
            "Step 2: Equate the exponents.",
            "x + 1 = 4",
            "x = 3"
        ],

        answer: "3"
    }

];


const unit2Examples = [

    {
        question: "Calculate: log₂ 8",

        steps: [
            "Step 1: Change to exponential form.",
            "2ˣ = 8",
            "Step 2: Ask what power of 2 gives 8.",
            "2³ = 8",
            "Therefore x = 3."
        ],

        answer: "3"
    },

    {
        question: "Calculate: log₃ 81",

        steps: [
            "Step 1: Change to exponential form.",
            "3ˣ = 81",
            "Step 2: Express 81 as a power of 3.",
            "3⁴ = 81",
            "Therefore x = 4."
        ],

        answer: "4"
    },

    {
        question: "Expand: log₂(8 × 4)",

        steps: [
            "Step 1: Use the product law.",
            "log₂(8 × 4) = log₂8 + log₂4",
            "Step 2: Calculate each logarithm.",
            "= 3 + 2",
            "= 5"
        ],

        answer: "5"
    },

    {
        question: "Simplify: log₅ 25 − log₅ 5",

        steps: [
            "Step 1: Calculate each logarithm.",
            "log₅25 = 2",
            "log₅5 = 1",
            "Step 2: Subtract.",
            "2 − 1 = 1"
        ],

        answer: "1"
    },

    {
        question: "Solve: log₂ x = 5",

        steps: [
            "Step 1: Convert to exponential form.",
            "2⁵ = x",
            "Step 2: Calculate.",
            "x = 32"
        ],

        answer: "32"
    },

    {
        question: "Solve: log₃(x + 2) = 2",

        steps: [
            "Step 1: Convert to exponential form.",
            "x + 2 = 3²",
            "Step 2: Simplify.",
            "x + 2 = 9",
            "Step 3: Solve for x.",
            "x = 7",
            "Step 4: Check the argument.",
            "7 + 2 = 9, which is positive."
        ],

        answer: "7"
    },

    {
        question: "Solve: log₂ x + log₂ 4 = 5",

        steps: [
            "Step 1: Calculate log₂4.",
            "log₂4 = 2",
            "Step 2: Substitute.",
            "log₂x + 2 = 5",
            "log₂x = 3",
            "Step 3: Convert to exponential form.",
            "x = 2³",
            "x = 8"
        ],

        answer: "8"
    }

];


/* =========================================
   6. DISPLAY WORKED EXAMPLES
========================================= */

function displayExamples(examples, containerId, prefix) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const question = document.createElement("div");
        question.className = "example-question";
        question.textContent = `Example ${index + 1}: ${example.question}`;

        const button = document.createElement("button");
        button.className = "step-button";
        button.textContent = "Show Solution";

        button.addEventListener("click", function () {
            toggleAnswer(`${prefix}Solution${index}`, button);
        });

        const solution = document.createElement("div");
        solution.className = "solution-steps";
        solution.id = `${prefix}Solution${index}`;
        solution.hidden = true;

        example.steps.forEach(step => {

            const paragraph = document.createElement("p");
            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const answer = document.createElement("p");
        answer.className = "answer";
        answer.textContent = `Final Answer: ${example.answer}`;

        solution.appendChild(answer);

        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(solution);

        container.appendChild(card);

    });

}


/* =========================================
   7. SHOW AND HIDE SOLUTIONS
========================================= */

function toggleAnswer(solutionId, button) {

    const solution = document.getElementById(solutionId);

    if (!solution) return;

    solution.hidden = !solution.hidden;

    button.textContent = solution.hidden
        ? "Show Solution"
        : "Hide Solution";

}


/* =========================================
   8. DISPLAY EXAMPLES FOR BOTH UNITS
========================================= */

displayExamples(unit1Examples, "unit1Examples", "unit1");

displayExamples(unit2Examples, "unit2Examples", "unit2");


/* =========================================
   9. PRACTICE QUESTIONS
========================================= */

const unit1Practice = [

    {
        question: "Simplify: 3² × 3³",
        answer: "243"
    },

    {
        question: "Simplify: 2⁵ ÷ 2²",
        answer: "8"
    },

    {
        question: "Calculate: 5⁰",
        answer: "1"
    },

    {
        question: "Calculate: 2⁻³",
        answer: "1/8"
    },

    {
        question: "Solve: 2ˣ = 16",
        answer: "4"
    },

    {
        question: "Solve: 5ˣ = 125",
        answer: "3"
    },

    {
        question: "A quantity of 500 increases by 20%. Calculate its new value.",
        answer: "600"
    }

];


const unit2Practice = [

    {
        question: "Calculate: log₂ 16",
        answer: "4"
    },

    {
        question: "Calculate: log₃ 27",
        answer: "3"
    },

    {
        question: "Calculate: log₅ 1",
        answer: "0"
    },

    {
        question: "Calculate: log₄ 64",
        answer: "3"
    },

    {
        question: "Solve: log₂ x = 4",
        answer: "16"
    },

    {
        question: "Solve: log₃ x = 3",
        answer: "27"
    },

    {
        question: "Solve: log₂(x + 1) = 3",
        answer: "7"
    }

];


/* =========================================
   10. DISPLAY PRACTICE QUESTIONS
========================================= */

function displayPractice(questions, containerId, prefix) {

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

        const input = document.createElement("input");
        input.type = "text";
        input.id = `${prefix}Answer${index}`;
        input.placeholder = "Enter your answer";

        const button = document.createElement("button");
        button.className = "check-button";
        button.textContent = "Check Answer";

        button.addEventListener("click", function () {
            checkPractice(
                `${prefix}Answer${index}`,
                `${prefix}Feedback${index}`,
                item.answer
            );
        });

        const feedback = document.createElement("p");
        feedback.className = "feedback";
        feedback.id = `${prefix}Feedback${index}`;

        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(input);
        card.appendChild(button);
        card.appendChild(feedback);

        container.appendChild(card);

    });

}


/* =========================================
   11. CHECK PRACTICE ANSWERS
========================================= */

function normaliseAnswer(answer) {

    return answer
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/,/g, ".")
        .replace(/−/g, "-");

}


function checkPractice(inputId, feedbackId, correctAnswer) {

    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);

    if (!input || !feedback) return;

    const userAnswer = normaliseAnswer(input.value);
    const correct = normaliseAnswer(correctAnswer);

    if (userAnswer === "") {

        feedback.textContent = "Please enter an answer.";
        feedback.style.color = "#d97706";
        return;

    }

    if (userAnswer === correct) {

        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#15803d";

    } else {

        feedback.textContent = "Not quite. Try again.";
        feedback.style.color = "#dc2626";

    }

}


/* =========================================
   12. DISPLAY PRACTICE FOR BOTH UNITS
========================================= */

displayPractice(unit1Practice, "unit1Practice", "u1");

displayPractice(unit2Practice, "unit2Practice", "u2");


/* =========================================
   13. QUIZ QUESTIONS
   10 QUESTIONS = 10 MARKS
========================================= */

const quizData = [

    {
        question: "Simplify: 2³ × 2²",

        options: [
            "2⁵",
            "2⁶",
            "2¹",
            "2⁸"
        ],

        answer: "2⁵"
    },

    {
        question: "Calculate: 5⁰",

        options: [
            "0",
            "1",
            "5",
            "10"
        ],

        answer: "1"
    },

    {
        question: "Simplify: 3⁵ ÷ 3²",

        options: [
            "3⁷",
            "3³",
            "3¹⁰",
            "3²"
        ],

        answer: "3³"
    },

    {
        question: "Calculate: 2⁻²",

        options: [
            "4",
            "-4",
            "1/4",
            "1/2"
        ],

        answer: "1/4"
    },

    {
        question: "Solve: 2ˣ = 64",

        options: [
            "4",
            "5",
            "6",
            "8"
        ],

        answer: "6"
    },

    {
        question: "Calculate: log₂ 32",

        options: [
            "3",
            "4",
            "5",
            "6"
        ],

        answer: "5"
    },

    {
        question: "Calculate: log₃ 1",

        options: [
            "0",
            "1",
            "3",
            "-1"
        ],

        answer: "0"
    },

    {
        question: "Calculate: log₅ 125",

        options: [
            "2",
            "3",
            "4",
            "5"
        ],

        answer: "3"
    },

    {
        question: "Solve: log₂ x = 3",

        options: [
            "6",
            "8",
            "9",
            "16"
        ],

        answer: "8"
    },

    {
        question: "What is the vertical asymptote of y = log₃ x?",

        options: [
            "y = 0",
            "x = 1",
            "x = 0",
            "y = 1"
        ],

        answer: "x = 0"
    }

];


/* =========================================
   14. QUIZ VARIABLES
========================================= */

let currentQuestion = 0;
let quizScore = 0;
let userAnswers = [];


/* =========================================
   15. START QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;
    userAnswers = [];

    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizResults").hidden = true;

    document.getElementById("startQuiz").hidden = true;

    document.getElementById("submitQuiz").hidden = false;

    showQuestion();

}


/* =========================================
   16. DISPLAY QUIZ QUESTION
========================================= */

function showQuestion() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    container.innerHTML = "";

    const item = quizData[currentQuestion];

    const questionCard = document.createElement("div");

    questionCard.className = "quiz-question";

    const heading = document.createElement("h4");

    heading.textContent =
        `Question ${currentQuestion + 1}: ${item.question}`;

    questionCard.appendChild(heading);

    item.options.forEach(option => {

        const label = document.createElement("label");

        label.className = "quiz-option";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "quizAnswer";
        radio.value = option;

        if (userAnswers[currentQuestion] === option) {
            radio.checked = true;
        }

        radio.addEventListener("change", function () {
            userAnswers[currentQuestion] = option;
        });

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        questionCard.appendChild(label);

    });

    container.appendChild(questionCard);

    updateQuizProgress();

}


/* =========================================
   17. UPDATE QUIZ PROGRESS
========================================= */

function updateQuizProgress() {

    const progress = document.getElementById("questionProgress");
    const score = document.getElementById("quizScore");
    const progressBar = document.getElementById("progressBar");

    if (progress) {
        progress.textContent =
            `Question ${currentQuestion + 1} of ${quizData.length}`;
    }

    if (score) {
        score.textContent = `Marks: ${quizScore}/10`;
    }

    if (progressBar) {
        progressBar.style.width =
            `${((currentQuestion + 1) / quizData.length) * 100}%`;
    }

}


/* =========================================
   18. SUBMIT ANSWER AND MOVE TO NEXT
========================================= */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (selected) {
        userAnswers[currentQuestion] = selected.value;
    }

    if (!userAnswers[currentQuestion]) {

        alert("Please select an answer before continuing.");
        return;

    }

    if (currentQuestion < quizData.length - 1) {

        currentQuestion++;
        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================
   19. FINISH QUIZ
========================================= */

function finishQuiz() {

    quizScore = 0;

    quizData.forEach((item, index) => {

        if (userAnswers[index] === item.answer) {
            quizScore++;
        }

    });

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("submitQuiz").hidden = true;

    document.getElementById("finalScore").textContent =
        `${quizScore}/10`;

    const feedback = document.getElementById("finalFeedback");

    if (quizScore >= 8) {

        feedback.textContent =
            "Excellent work! You have a strong understanding of this topic.";

    } else if (quizScore >= 5) {

        feedback.textContent =
            "Good effort! Revise the sections where you made mistakes.";

    } else {

        feedback.textContent =
            "Keep practising. Review the notes and worked examples, then try again.";

    }

}


/* =========================================
   20. RETRY QUIZ
========================================= */

function retryQuiz() {

    startQuiz();

}


/* =========================================
   21. CONNECT QUIZ BUTTONS
========================================= */

document.getElementById("startQuiz").addEventListener(
    "click",
    startQuiz
);

document.getElementById("submitQuiz").addEventListener(
    "click",
    submitQuiz
);

document.getElementById("retryQuiz").addEventListener(
    "click",
    retryQuiz
);
