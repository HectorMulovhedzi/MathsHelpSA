
/* ==========================================
   MATHSHELP SA - GRADE 11
   MEASUREMENT: COMBINED OBJECTS
========================================== */


/* ==========================================
   1. OPEN AND CLOSE SECTIONS
========================================== */

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


/* ==========================================
   2. WORKED EXAMPLES
========================================== */

const workedExamples = [

    {
        question: "A solid consists of a cylinder with radius 3 cm and height 7 cm. Calculate its volume.",

        steps: [
            "Step 1: Identify the shape.",
            "The object is a cylinder.",
            "Step 2: Write the formula.",
            "V = πr²h",
            "Step 3: Substitute the values.",
            "V = π(3)²(7)",
            "V = 63π",
            "Step 4: Calculate.",
            "V = 197.92 cm³",
            "Answer: 197.92 cm³"
        ]
    },

    {
        question: "A cone has radius 3 cm and vertical height 4 cm. Calculate its volume.",

        steps: [
            "Step 1: Formula for a cone.",
            "V = ⅓πr²h",
            "Step 2: Substitute.",
            "V = ⅓π(3)²(4)",
            "V = ⅓π(9)(4)",
            "V = 12π",
            "Answer: 37.70 cm³"
        ]
    },

    {
        question: "A cylinder of radius 3 cm and height 5 cm is joined to a cone of the same radius and height 4 cm. Calculate the total volume.",

        steps: [
            "Step 1: Calculate the cylinder volume.",
            "V = πr²h",
            "V = π(3)²(5)",
            "V = 45π cm³",
            "Step 2: Calculate the cone volume.",
            "V = ⅓πr²h",
            "V = ⅓π(3)²(4)",
            "V = 12π cm³",
            "Step 3: Add the volumes.",
            "Total V = 45π + 12π",
            "Total V = 57π",
            "Answer: 179.07 cm³"
        ]
    },

    {
        question: "A cylinder with radius 3 cm and height 8 cm has a hemisphere of radius 3 cm attached to its top. Calculate the total volume.",

        steps: [
            "Step 1: Calculate the cylinder volume.",
            "V = πr²h",
            "V = π(3)²(8) = 72π",
            "Step 2: Calculate the hemisphere volume.",
            "V = ⅔πr³",
            "V = ⅔π(3)³ = 18π",
            "Step 3: Add the volumes.",
            "Total V = 72π + 18π",
            "Total V = 90π",
            "Answer: 282.74 cm³"
        ]
    },

    {
        question: "A solid is made from a cylinder with radius 2 cm and height 10 cm, joined to a cone with radius 2 cm and height 3 cm. Calculate its total volume.",

        steps: [
            "Step 1: Cylinder volume.",
            "V = πr²h",
            "V = π(2)²(10) = 40π",
            "Step 2: Cone volume.",
            "V = ⅓πr²h",
            "V = ⅓π(2)²(3) = 4π",
            "Step 3: Add the volumes.",
            "Total V = 40π + 4π",
            "Total V = 44π",
            "Answer: 138.23 cm³"
        ]
    },

    {
        question: "A cylinder has radius 3 cm and height 8 cm. Calculate its curved surface area.",

        steps: [
            "Step 1: Write the formula.",
            "CSA = 2πrh",
            "Step 2: Substitute.",
            "CSA = 2π(3)(8)",
            "CSA = 48π",
            "Answer: 150.80 cm²"
        ]
    },

    {
        question: "A cone has radius 3 cm and slant height 5 cm. Calculate its curved surface area.",

        steps: [
            "Step 1: Write the formula.",
            "CSA = πrl",
            "Step 2: Substitute.",
            "CSA = π(3)(5)",
            "CSA = 15π",
            "Answer: 47.12 cm²"
        ]
    },

    {
        question: "A cylinder of radius 3 cm and height 8 cm has a hemisphere of radius 3 cm on top. Calculate the external surface area. The bottom of the cylinder is exposed.",

        steps: [
            "Step 1: Identify the exposed surfaces.",
            "The curved cylinder surface, the curved hemisphere surface and the bottom circular base are exposed.",
            "The circle where the two solids join is not exposed.",
            "Step 2: Cylinder curved surface area.",
            "2πrh = 2π(3)(8) = 48π",
            "Step 3: Hemisphere curved surface area.",
            "2πr² = 2π(3)² = 18π",
            "Step 4: Bottom circular base.",
            "πr² = π(3)² = 9π",
            "Step 5: Add the exposed surfaces.",
            "SA = 48π + 18π + 9π",
            "SA = 75π",
            "Answer: 235.62 cm²"
        ]
    },

    {
        question: "A cylinder of radius 3 cm and height 8 cm is joined to a cone of radius 3 cm. The cone has a slant height of 5 cm. Calculate the external surface area, including the bottom of the cylinder.",

        steps: [
            "Step 1: Identify the exposed surfaces.",
            "Curved cylinder, curved cone and bottom circular base.",
            "Do not include the joined circular surfaces.",
            "Step 2: Cylinder curved surface area.",
            "2πrh = 2π(3)(8) = 48π",
            "Step 3: Cone curved surface area.",
            "πrl = π(3)(5) = 15π",
            "Step 4: Bottom base area.",
            "πr² = π(3)² = 9π",
            "Step 5: Add.",
            "SA = 48π + 15π + 9π",
            "SA = 72π",
            "Answer: 226.19 cm²"
        ]
    },

    {
        question: "A solid consists of a cube with side length 4 cm and a smaller cube with side length 2 cm placed on top. Calculate the total volume.",

        steps: [
            "Step 1: Volume of the large cube.",
            "V = side³",
            "V = 4³ = 64 cm³",
            "Step 2: Volume of the small cube.",
            "V = 2³ = 8 cm³",
            "Step 3: Add the volumes.",
            "Total V = 64 + 8",
            "Answer: 72 cm³"
        ]
    }

];


/* ==========================================
   DISPLAY WORKED EXAMPLES
========================================== */

function displayWorkedExamples() {

    const container = document.getElementById("combinedWorkedExamples");

    if (!container) return;

    container.innerHTML = "";

    workedExamples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const answerId = `combinedExample${index}`;

        card.innerHTML = `
            <h3>Example ${index + 1}</h3>

            <p class="example-question">
                ${example.question}
            </p>

            <button class="solution-button"
                onclick="toggleAnswer('${answerId}', this)">
                Show Solution
            </button>

            <div class="solution" id="${answerId}" hidden>
                ${example.steps.map(step => `<p>${step}</p>`).join("")}
            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   3. PRACTICE QUESTIONS
========================================== */

const practiceQuestions = [

    {
        question: "A cylinder has radius 2 cm and height 5 cm. Calculate its volume.",
        answer: "V = π(2)²(5) = 20π = 62.83 cm³."
    },

    {
        question: "A cylinder has radius 4 cm and height 6 cm. Calculate its volume.",
        answer: "V = π(4)²(6) = 96π = 301.59 cm³."
    },

    {
        question: "A cone has radius 3 cm and height 6 cm. Calculate its volume.",
        answer: "V = ⅓π(3)²(6) = 18π = 56.55 cm³."
    },

    {
        question: "A cone has radius 2 cm and height 9 cm. Calculate its volume.",
        answer: "V = ⅓π(2)²(9) = 12π = 37.70 cm³."
    },

    {
        question: "A hemisphere has radius 3 cm. Calculate its volume.",
        answer: "V = ⅔π(3)³ = 18π = 56.55 cm³."
    },

    {
        question: "A cylinder has radius 3 cm and height 4 cm. Calculate its curved surface area.",
        answer: "CSA = 2π(3)(4) = 24π = 75.40 cm²."
    },

    {
        question: "A cone has radius 4 cm and slant height 5 cm. Calculate its curved surface area.",
        answer: "CSA = π(4)(5) = 20π = 62.83 cm²."
    },

    {
        question: "A cylinder has radius 2 cm and height 7 cm. Calculate its total surface area, including both circular ends.",
        answer: "TSA = 2πrh + 2πr² = 28π + 8π = 36π = 113.10 cm²."
    },

    {
        question: "A cylinder has radius 3 cm and height 5 cm. A cone with the same radius and height 4 cm is attached on top. Find the total volume.",
        answer: "Cylinder = 45π cm³. Cone = 12π cm³. Total = 57π = 179.07 cm³."
    },

    {
        question: "A cylinder has radius 2 cm and height 6 cm. A hemisphere of radius 2 cm is attached on top. Find the total volume.",
        answer: "Cylinder = 24π cm³. Hemisphere = 16π/3 cm³. Total = 88π/3 = 92.15 cm³."
    },

    {
        question: "A cylinder has radius 4 cm and height 5 cm. A hemisphere of radius 4 cm is attached on top. Find the total volume.",
        answer: "Cylinder = 80π cm³. Hemisphere = 128π/3 cm³. Total = 368π/3 = 385.37 cm³."
    },

    {
        question: "A cylinder has radius 3 cm and height 6 cm. A cone with radius 3 cm and height 4 cm is attached on top. Calculate the total volume.",
        answer: "Cylinder = 54π cm³. Cone = 12π cm³. Total = 66π = 207.35 cm³."
    },

    {
        question: "A cylinder has radius 2 cm and height 8 cm. A cone with the same radius and height 3 cm is attached on top. Find the total volume.",
        answer: "Cylinder = 32π cm³. Cone = 4π cm³. Total = 36π = 113.10 cm³."
    },

    {
        question: "A cylinder has radius 3 cm and height 5 cm. A hemisphere of radius 3 cm is attached on top. Calculate the external surface area, including the bottom.",
        answer: "Cylinder curved area = 30π. Hemisphere curved area = 18π. Bottom = 9π. Total = 57π = 179.07 cm²."
    },

    {
        question: "A cylinder has radius 2 cm and height 6 cm. A cone of radius 2 cm and slant height 4 cm is attached on top. Calculate the external surface area, including the bottom.",
        answer: "Cylinder curved area = 24π. Cone curved area = 8π. Bottom = 4π. Total = 36π = 113.10 cm²."
    },

    {
        question: "A cube has side length 5 cm. Calculate its volume.",
        answer: "V = 5³ = 125 cm³."
    },

    {
        question: "A rectangular prism has length 6 cm, width 4 cm and height 3 cm. Calculate its volume.",
        answer: "V = 6 × 4 × 3 = 72 cm³."
    },

    {
        question: "A solid is made from two cubes. The first has side length 3 cm and the second has side length 4 cm. Calculate the total volume.",
        answer: "First cube = 27 cm³. Second cube = 64 cm³. Total = 91 cm³."
    },

    {
        question: "A cylinder has radius 5 cm and height 10 cm. A cone with the same radius and height 6 cm is attached on top. Calculate the total volume.",
        answer: "Cylinder = 250π cm³. Cone = 50π cm³. Total = 300π = 942.48 cm³."
    },

    {
        question: "A solid consists of a cylinder with radius 4 cm and height 7 cm, with a hemisphere of radius 4 cm on top. Calculate the external surface area, including the bottom.",
        answer: "Cylinder curved area = 56π. Hemisphere curved area = 32π. Bottom = 16π. Total = 104π = 326.73 cm²."
    }

];


/* ==========================================
   DISPLAY PRACTICE QUESTIONS
========================================== */

function createPractice() {

    const container = document.getElementById("combinedPractice");

    if (!container) return;

    container.innerHTML = "";

    practiceQuestions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const answerId = `combinedPractice${index}`;

        card.innerHTML = `
            <p>
                <span class="question-number">
                    Question ${index + 1}:
                </span>
                ${question.question}
            </p>

            <button class="answer-button"
                onclick="toggleAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer" id="${answerId}" hidden>
                <strong>Answer:</strong>
                <p>${question.answer}</p>
            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   4. SHOW AND HIDE ANSWERS
========================================== */

function toggleAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isHidden = answer.hidden;

    answer.hidden = !isHidden;

    if (button.classList.contains("solution-button")) {

        button.textContent = isHidden
            ? "Hide Solution"
            : "Show Solution";

    } else {

        button.textContent = isHidden
            ? "Hide Answer"
            : "Show Answer";

    }

}


/* ==========================================
   5. LOAD PAGE CONTENT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    displayWorkedExamples();

    createPractice();

    console.log("MathsHelpSA Combined Objects loaded successfully.");

});
