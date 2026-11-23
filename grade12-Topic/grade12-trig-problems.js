
/* =====================================================
   MATHSHELPSA - GRADE 12
   TRIGONOMETRY: PROBLEM SOLVING IN TWO AND THREE DIMENSIONS
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
   2. UNIT 1 NOTES: TWO DIMENSIONS
===================================================== */

const unit1Notes = `
<div class="unit-notes">

    <h4>1. What is Trigonometry in Two Dimensions?</h4>

    <p>
        Two-dimensional trigonometry deals with problems on a flat
        surface. We use angles, lengths, heights and distances to
        calculate unknown sides or angles of triangles.
    </p>

    <p>Common examples include:</p>

    <ul>
        <li>Finding the height of a building.</li>
        <li>Calculating the distance between two points.</li>
        <li>Angles of elevation and depression.</li>
        <li>Finding the length of a ladder against a wall.</li>
        <li>Solving problems involving bearings.</li>
    </ul>

    <h4>2. Important Trigonometric Ratios</h4>

    <div class="formula-box">
        sin θ = Opposite / Hypotenuse
    </div>

    <div class="formula-box">
        cos θ = Adjacent / Hypotenuse
    </div>

    <div class="formula-box">
        tan θ = Opposite / Adjacent
    </div>

    <p>
        Remember: SOH CAH TOA helps you choose the correct ratio.
    </p>

    <h4>3. Angle of Elevation</h4>

    <p>
        An angle of elevation is measured upwards from a horizontal
        line when an observer looks at an object above them.
    </p>

    <div class="diagram-container">
        <h4>Angle of Elevation</h4>

        <svg viewBox="0 0 400 230" role="img"
             aria-label="Diagram showing an angle of elevation">

            <line x1="35" y1="180" x2="365" y2="180"
                  stroke="#172554" stroke-width="2"/>

            <line x1="90" y1="180" x2="290" y2="45"
                  stroke="#2563eb" stroke-width="3"/>

            <line x1="290" y1="45" x2="290" y2="180"
                  stroke="#172554" stroke-width="2"/>

            <path d="M270 180 L290 160 L290 180"
                  fill="none" stroke="#172554" stroke-width="2"/>

            <path d="M130 180 A40 40 0 0 0 124 158"
                  fill="none" stroke="#16a34a" stroke-width="2"/>

            <text x="135" y="169" font-size="15" fill="#16a34a">
                θ
            </text>

            <text x="45" y="202" font-size="13" fill="#172554">
                Observer
            </text>

            <text x="300" y="40" font-size="13" fill="#172554">
                Object
            </text>

            <text x="300" y="120" font-size="13" fill="#172554">
                Height
            </text>

            <text x="175" y="198" font-size="13" fill="#172554">
                Horizontal distance
            </text>

        </svg>

        <p class="diagram-caption">
            The observer looks upwards at an object.
        </p>
    </div>

    <h4>4. Angle of Depression</h4>

    <p>
        An angle of depression is measured downwards from a horizontal
        line when an observer looks at an object below them.
    </p>

    <div class="diagram-container">
        <h4>Angle of Depression</h4>

        <svg viewBox="0 0 400 230" role="img"
             aria-label="Diagram showing an angle of depression">

            <line x1="35" y1="55" x2="365" y2="55"
                  stroke="#172554" stroke-width="2"/>

            <line x1="90" y1="55" x2="290" y2="180"
                  stroke="#2563eb" stroke-width="3"/>

            <line x1="290" y1="55" x2="290" y2="180"
                  stroke="#172554" stroke-width="2"/>

            <path d="M270 55 L290 75 L290 55"
                  fill="none" stroke="#172554" stroke-width="2"/>

            <path d="M130 55 A40 40 0 0 1 124 77"
                  fill="none" stroke="#16a34a" stroke-width="2"/>

            <text x="135" y="82" font-size="15" fill="#16a34a">
                θ
            </text>

            <text x="40" y="40" font-size="13" fill="#172554">
                Observer
            </text>

            <text x="300" y="195" font-size="13" fill="#172554">
                Object
            </text>

            <text x="300" y="120" font-size="13" fill="#172554">
                Height
            </text>

            <text x="175" y="75" font-size="13" fill="#172554">
                Horizontal line
            </text>

        </svg>

        <p class="diagram-caption">
            The observer looks downwards at an object.
        </p>
    </div>

    <h4>5. Important Rules</h4>

    <ul>
        <li>Always draw a diagram before calculating.</li>
        <li>Mark the given angle clearly.</li>
        <li>Identify the opposite, adjacent and hypotenuse.</li>
        <li>Choose the correct trigonometric ratio.</li>
        <li>Use your calculator in degree mode when angles are given in degrees.</li>
        <li>Include the correct units in your final answer.</li>
    </ul>

    <div class="formula-box">
        SOH CAH TOA
    </div>

</div>
`;


/* =====================================================
   3. UNIT 2 NOTES: THREE DIMENSIONS
===================================================== */

const unit2Notes = `
<div class="unit-notes">

    <h4>1. What is Trigonometry in Three Dimensions?</h4>

    <p>
        Three-dimensional trigonometry involves solving problems
        involving length, width and height. We use right-angled
        triangles inside three-dimensional objects.
    </p>

    <p>Examples include:</p>

    <ul>
        <li>Finding the diagonal of a rectangular box.</li>
        <li>Finding the height of a building from a point in space.</li>
        <li>Calculating the distance between opposite corners of a room.</li>
        <li>Finding angles between a line and a horizontal plane.</li>
    </ul>

    <h4>2. The Three-Dimensional Pythagorean Theorem</h4>

    <p>
        First calculate the diagonal of the base. Then use that
        diagonal together with the height to calculate the
        space diagonal.
    </p>

    <div class="formula-box">
        Base diagonal² = length² + width²
    </div>

    <div class="formula-box">
        Space diagonal² = length² + width² + height²
    </div>

    <p>
        Therefore:
    </p>

    <div class="formula-box">
        d = √(length² + width² + height²)
    </div>

    <h4>3. Rectangular Prism Diagram</h4>

    <div class="diagram-container">
        <h4>Three-Dimensional Rectangular Prism</h4>

        <svg viewBox="0 0 420 280" role="img"
             aria-label="Rectangular prism showing length width height and diagonal">

            <!-- Front face -->
            <polygon points="70,95 245,95 245,220 70,220"
                     fill="#dbeafe" stroke="#172554"
                     stroke-width="2"/>

            <!-- Back face -->
            <polygon points="135,45 310,45 310,170 135,170"
                     fill="#eff6ff" stroke="#172554"
                     stroke-width="2"/>

            <!-- Connecting edges -->
            <line x1="70" y1="95" x2="135" y2="45"
                  stroke="#172554" stroke-width="2"/>

            <line x1="245" y1="95" x2="310" y2="45"
                  stroke="#172554" stroke-width="2"/>

            <line x1="245" y1="220" x2="310" y2="170"
                  stroke="#172554" stroke-width="2"/>

            <line x1="70" y1="220" x2="135" y2="170"
                  stroke="#172554" stroke-width="2"/>

            <!-- Space diagonal -->
            <line x1="70" y1="220" x2="310" y2="45"
                  stroke="#dc2626" stroke-width="3"
                  stroke-dasharray="6 4"/>

            <text x="145" y="238" font-size="14" fill="#172554">
                Length
            </text>

            <text x="35" y="155" font-size="14" fill="#172554">
                Height
            </text>

            <text x="320" y="115" font-size="14" fill="#172554">
                Width
            </text>

            <text x="175" y="115" font-size="14" fill="#dc2626">
                Diagonal
            </text>

        </svg>

        <p class="diagram-caption">
            The red dashed line represents the space diagonal.
        </p>
    </div>

    <h4>4. Finding an Angle in Three Dimensions</h4>

    <p>
        To calculate an angle, identify the right-angled triangle
        containing that angle. You may first need to calculate a
        horizontal diagonal before using a trigonometric ratio.
    </p>

    <div class="formula-box">
        tan θ = Vertical height / Horizontal distance
    </div>

    <h4>5. Important Rules</h4>

    <ul>
        <li>Draw the three-dimensional object.</li>
        <li>Identify the triangle containing the required angle.</li>
        <li>Calculate any missing diagonal first.</li>
        <li>Use Pythagoras where necessary.</li>
        <li>Use SOH CAH TOA to calculate unknown angles or lengths.</li>
        <li>Check that your answer makes sense in the diagram.</li>
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
            title: "Example 1: Finding the Height of a Building",

            question:
                "A learner stands 20 m from a building. The angle of elevation to the top of the building is 35°. Calculate the height of the building.",

            steps: [
                "Step 1: Identify the known information.",
                "Horizontal distance = 20 m",
                "Angle = 35°",
                "Unknown = Height (opposite side)",
                "Step 2: Choose the correct ratio.",
                "tan 35° = Opposite / Adjacent",
                "Step 3: Substitute.",
                "tan 35° = h / 20",
                "Step 4: Multiply both sides by 20.",
                "h = 20 × tan 35°",
                "h = 14.00 m"
            ],

            answer: "The height of the building is approximately 14.00 m."
        },

        {
            title: "Example 2: Finding a Distance",

            question:
                "A ladder makes an angle of 60° with the ground. The ladder is 8 m long. Calculate the distance between the bottom of the ladder and the wall.",

            steps: [
                "Step 1: Identify the known information.",
                "Hypotenuse = 8 m",
                "Angle = 60°",
                "Unknown = Adjacent side",
                "Step 2: Use cosine.",
                "cos 60° = Adjacent / Hypotenuse",
                "Step 3: Substitute.",
                "cos 60° = x / 8",
                "Step 4: Calculate.",
                "x = 8 × cos 60°",
                "x = 4 m"
            ],

            answer: "The distance from the wall is 4 m."
        },

        {
            title: "Example 3: Angle of Elevation",

            question:
                "A tree is 12 m high. A person stands 9 m away from the base of the tree. Calculate the angle of elevation to the top.",

            steps: [
                "Step 1: Opposite = 12 m.",
                "Adjacent = 9 m.",
                "Step 2: Use tangent.",
                "tan θ = 12 / 9",
                "Step 3: Calculate the inverse tangent.",
                "θ = tan⁻¹(12 / 9)",
                "θ = 53.13°"
            ],

            answer: "The angle of elevation is approximately 53.13°."
        }

    ],

    unit2: [

        {
            title: "Example 1: Space Diagonal of a Box",

            question:
                "A rectangular box has a length of 6 cm, width of 4 cm and height of 3 cm. Calculate its space diagonal.",

            steps: [
                "Step 1: Write the formula.",
                "d² = length² + width² + height²",
                "Step 2: Substitute.",
                "d² = 6² + 4² + 3²",
                "Step 3: Square the values.",
                "d² = 36 + 16 + 9",
                "d² = 61",
                "Step 4: Find the square root.",
                "d = √61",
                "d ≈ 7.81 cm"
            ],

            answer: "The space diagonal is approximately 7.81 cm."
        },

        {
            title: "Example 2: Finding an Angle in a Box",

            question:
                "A rectangular box has a base length of 8 cm and width of 6 cm. A vertical height of 10 cm is given. Calculate the angle between the space diagonal and the base diagonal.",

            steps: [
                "Step 1: Calculate the base diagonal.",
                "Base diagonal² = 8² + 6²",
                "Base diagonal² = 64 + 36",
                "Base diagonal = √100 = 10 cm",
                "Step 2: Identify the triangle.",
                "Opposite = 10 cm",
                "Adjacent = 10 cm",
                "Step 3: Use tangent.",
                "tan θ = 10 / 10",
                "tan θ = 1",
                "θ = tan⁻¹(1)",
                "θ = 45°"
            ],

            answer: "The angle is 45°."
        },

        {
            title: "Example 3: Finding a Space Distance",

            question:
                "A room is 9 m long, 12 m wide and 8 m high. Calculate the distance from one bottom corner to the opposite top corner.",

            steps: [
                "Step 1: Use the three-dimensional Pythagorean theorem.",
                "d² = 9² + 12² + 8²",
                "Step 2: Square the values.",
                "d² = 81 + 144 + 64",
                "Step 3: Add.",
                "d² = 289",
                "Step 4: Calculate the square root.",
                "d = √289",
                "d = 17 m"
            ],

            answer: "The distance is 17 m."
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

    workedExamples[unit].forEach((example, index) => {

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
            const p = document.createElement("p");
            p.textContent = step;
            solution.appendChild(p);
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
            question: "A pole is 10 m high. A person stands 10 m away from its base. Find the angle of elevation.",
            answer: "45",
            explanation: "tan θ = 10 / 10. Therefore θ = 45°."
        },

        {
            question: "A ladder is 5 m long and makes an angle of 30° with the ground. Calculate its vertical height.",
            answer: "2.5",
            explanation: "Height = 5 × sin 30° = 2.5 m."
        },

        {
            question: "A building is 25 m high. The angle of elevation from a point on the ground is 45°. Calculate the horizontal distance.",
            answer: "25",
            explanation: "tan 45° = 25 / x. Therefore x = 25 m."
        },

        {
            question: "A person looks down from a 20 m high platform at an object. The horizontal distance is 20 m. Calculate the angle of depression.",
            answer: "45",
            explanation: "tan θ = 20 / 20. Therefore θ = 45°."
        },

        {
            question: "A ramp is 13 m long and its horizontal distance is 12 m. Calculate the vertical height.",
            answer: "5",
            explanation: "Using Pythagoras: h² = 13² − 12² = 25. Therefore h = 5 m."
        }

    ],

    unit2: [

        {
            question: "A box has length 3 cm, width 4 cm and height 12 cm. Calculate its space diagonal.",
            answer: "13",
            explanation: "d = √(3² + 4² + 12²) = √169 = 13 cm."
        },

        {
            question: "A rectangular base measures 6 m by 8 m. Calculate its diagonal.",
            answer: "10",
            explanation: "d = √(6² + 8²) = √100 = 10 m."
        },

        {
            question: "A box has a base diagonal of 5 cm and a height of 12 cm. Calculate the space diagonal.",
            answer: "13",
            explanation: "d = √(5² + 12²) = √169 = 13 cm."
        },

        {
            question: "A box has length 2 cm, width 3 cm and height 6 cm. Calculate its space diagonal to two decimal places.",
            answer: "7",
            explanation: "d = √(2² + 3² + 6²) = √49 = 7 cm."
        },

        {
            question: "A rectangular box has a base diagonal of 12 cm and a height of 5 cm. Find the angle between the space diagonal and the base diagonal.",
            answer: "22.62",
            explanation: "tan θ = 5 / 12. Therefore θ = tan⁻¹(5 / 12) ≈ 22.62°."
        }

    ]

};


/* =====================================================
   8. NORMALISE ANSWERS
===================================================== */

function normaliseAnswer(value) {

    return String(value)
        .toLowerCase()
        .replace(/,/g, ".")
        .replace(/°/g, "")
        .replace(/\s+/g, "")
        .replace(/m/g, "")
        .replace(/cm/g, "");
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

        const title = document.createElement("h4");
        title.textContent = "Question " + (index + 1);

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
            const correctAnswer = normaliseAnswer(item.answer);

            if (userAnswer === "") {

                feedback.textContent = "Please enter an answer.";
                feedback.style.color = "#dc2626";

            } else if (userAnswer === correctAnswer) {

                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#15803d";

            } else {

                feedback.textContent =
                    "Not quite. Hint: " + item.explanation;

                feedback.style.color = "#dc2626";

            }

        });

        card.appendChild(title);
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
        question: "Which trigonometric ratio uses opposite and adjacent sides?",
        options: ["Sine", "Cosine", "Tangent", "Pythagoras"],
        answer: 2
    },

    {
        question: "A learner stands 10 m from a pole. The angle of elevation is 45°. What is the height of the pole?",
        options: ["5 m", "10 m", "15 m", "20 m"],
        answer: 1
    },

    {
        question: "What is an angle of depression?",
        options: [
            "An angle measured upwards from the horizontal",
            "An angle measured downwards from the horizontal",
            "An angle inside a square",
            "An angle of 90°"
        ],
        answer: 1
    },

    {
        question: "A ladder is 10 m long and makes an angle of 30° with the ground. Find its vertical height.",
        options: ["5 m", "8 m", "10 m", "15 m"],
        answer: 0
    },

    {
        question: "Which formula gives the diagonal of a rectangular base?",
        options: [
            "d = length + width",
            "d² = length² + width²",
            "d = length × width",
            "d² = length² − width²"
        ],
        answer: 1
    },

    {
        question: "A box has dimensions 3 cm, 4 cm and 12 cm. What is its space diagonal?",
        options: ["12 cm", "13 cm", "15 cm", "19 cm"],
        answer: 1
    },

    {
        question: "A rectangular base has sides 5 m and 12 m. Find its diagonal.",
        options: ["10 m", "12 m", "13 m", "17 m"],
        answer: 2
    },

    {
        question: "A box has a base diagonal of 8 cm and a height of 6 cm. Find its space diagonal.",
        options: ["8 cm", "9 cm", "10 cm", "14 cm"],
        answer: 2
    },

    {
        question: "Which calculator setting should you use when working with angles given in degrees?",
        options: ["Radians", "Degrees", "Gradians only", "None"],
        answer: 1
    },

    {
        question: "A rectangular box has length 6 cm, width 8 cm and height 24 cm. Find its space diagonal.",
        options: ["24 cm", "25 cm", "26 cm", "30 cm"],
        answer: 1
    }

];


/* =====================================================
   11. QUIZ VARIABLES
===================================================== */

let currentQuestion = 0;
let quizScore = 0;
let selectedAnswers = [];


/* =====================================================
   12. START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = [];

    document.getElementById("startQuiz").hidden = true;
    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizResults").hidden = true;

    showQuestion();

}


/* =====================================================
   13. SHOW QUESTION
===================================================== */

function showQuestion() {

    const container = document.getElementById("quizQuestions");

    const question = quizData[currentQuestion];

    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "quiz-question";

    const heading = document.createElement("h4");
    heading.textContent =
        "Question " + (currentQuestion + 1) + ": " + question.question;

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
        "Question " + (currentQuestion + 1) + " of " + quizData.length;

    document.getElementById("quizScore").textContent =
        "Score: " + quizScore;

    document.getElementById("progressBar").style.width =
        ((currentQuestion) / quizData.length * 100) + "%";

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =====================================================
   14. SUBMIT ANSWER
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

    selectedAnswers[currentQuestion] = selectedAnswer;

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

        feedback = "Excellent work! You understand the topic very well.";

    } else if (quizScore >= 6) {

        feedback = "Good job! Revise a few areas to improve your score.";

    } else if (quizScore >= 4) {

        feedback = "You are making progress. Go through the notes and examples again.";

    } else {

        feedback = "Keep practising. Review both units and try the quiz again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

}


/* =====================================================
   16. RETRY QUIZ
===================================================== */

function retryQuiz() {

    document.getElementById("quizResults").hidden = true;
    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";
    document.getElementById("questionProgress").textContent =
        "Question 1 of 10";

    document.getElementById("progressBar").style.width = "0%";

    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = [];

}
