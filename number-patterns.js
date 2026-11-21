
/* ==========================================
   MATHSHELP SA - GRADE 11
   NUMBER PATTERNS
   CONSTANT SECOND DIFFERENCE
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
        question: "Determine the first differences and second differences of: 3 ; 8 ; 15 ; 24 ; 35",

        steps: [
            "Step 1: Calculate the first differences.",
            "8 − 3 = 5",
            "15 − 8 = 7",
            "24 − 15 = 9",
            "35 − 24 = 11",
            "Step 2: Calculate the second differences.",
            "7 − 5 = 2",
            "9 − 7 = 2",
            "11 − 9 = 2",
            "Answer: The second differences are 2 ; 2 ; 2. Therefore, the second difference is constant."
        ]
    },

    {
        question: "Determine whether the pattern 2 ; 7 ; 14 ; 23 ; 34 has a constant second difference.",

        steps: [
            "Step 1: Find the first differences.",
            "7 − 2 = 5",
            "14 − 7 = 7",
            "23 − 14 = 9",
            "34 − 23 = 11",
            "Step 2: Find the second differences.",
            "7 − 5 = 2",
            "9 − 7 = 2",
            "11 − 9 = 2",
            "Answer: Yes. The second difference is constantly 2."
        ]
    },

    {
        question: "Find the value of a if the constant second difference is 6.",

        steps: [
            "Step 1: Use the formula.",
            "2a = second difference",
            "Step 2: Substitute 6.",
            "2a = 6",
            "Step 3: Divide both sides by 2.",
            "a = 6 ÷ 2",
            "Answer: a = 3"
        ]
    },

    {
        question: "Find the value of a if the second difference is −4.",

        steps: [
            "Step 1: Use 2a = second difference.",
            "2a = −4",
            "Step 2: Divide both sides by 2.",
            "a = −4 ÷ 2",
            "Answer: a = −2"
        ]
    },

    {
        question: "Determine the general term of 2 ; 5 ; 10 ; 17 ; 26.",

        steps: [
            "Step 1: Write the general form.",
            "Tₙ = an² + bn + c",
            "Step 2: Find the first differences: 3 ; 5 ; 7 ; 9.",
            "Step 3: The second differences are 2 ; 2 ; 2.",
            "Therefore, 2a = 2, so a = 1.",
            "Step 4: Substitute a = 1.",
            "Tₙ = n² + bn + c",
            "Step 5: Use the first term, T₁ = 2.",
            "1 + b + c = 2",
            "b + c = 1",
            "Step 6: Use the second term, T₂ = 5.",
            "4 + 2b + c = 5",
            "2b + c = 1",
            "Step 7: Subtract b + c = 1 from 2b + c = 1.",
            "b = 0, therefore c = 1.",
            "Answer: Tₙ = n² + 1"
        ]
    },

    {
        question: "Find the general term of 3 ; 8 ; 15 ; 24 ; 35.",

        steps: [
            "Step 1: Find the first differences: 5 ; 7 ; 9 ; 11.",
            "Step 2: The second difference is 2.",
            "Therefore, 2a = 2 and a = 1.",
            "Step 3: Use Tₙ = n² + bn + c.",
            "Step 4: First term: 1 + b + c = 3.",
            "Therefore, b + c = 2.",
            "Step 5: Second term: 4 + 2b + c = 8.",
            "Therefore, 2b + c = 4.",
            "Step 6: Subtract the equations.",
            "b = 2, so c = 0.",
            "Answer: Tₙ = n² + 2n"
        ]
    },

    {
        question: "Determine the general term of 5 ; 12 ; 21 ; 32 ; 45.",

        steps: [
            "Step 1: First differences: 7 ; 9 ; 11 ; 13.",
            "Step 2: Second differences: 2 ; 2 ; 2.",
            "Therefore, a = 1.",
            "Step 3: Use Tₙ = n² + bn + c.",
            "Step 4: First term: 1 + b + c = 5.",
            "b + c = 4.",
            "Step 5: Second term: 4 + 2b + c = 12.",
            "2b + c = 8.",
            "Step 6: Subtract the equations.",
            "b = 4 and c = 0.",
            "Answer: Tₙ = n² + 4n"
        ]
    },

    {
        question: "Determine the general term of 4 ; 9 ; 16 ; 25 ; 36.",

        steps: [
            "Step 1: First differences: 5 ; 7 ; 9 ; 11.",
            "Step 2: Second differences: 2 ; 2 ; 2.",
            "Therefore, a = 1.",
            "Step 3: Use Tₙ = n² + bn + c.",
            "Step 4: First term: 1 + b + c = 4.",
            "b + c = 3.",
            "Step 5: Second term: 4 + 2b + c = 9.",
            "2b + c = 5.",
            "Step 6: Subtract the equations.",
            "b = 2 and c = 1.",
            "Answer: Tₙ = n² + 2n + 1"
        ]
    },

    {
        question: "Find the 10th term of the pattern with general term Tₙ = 2n² + 3n − 1.",

        steps: [
            "Step 1: Write the formula.",
            "Tₙ = 2n² + 3n − 1",
            "Step 2: Substitute n = 10.",
            "T₁₀ = 2(10)² + 3(10) − 1",
            "Step 3: Calculate.",
            "T₁₀ = 200 + 30 − 1",
            "Answer: T₁₀ = 229"
        ]
    },

    {
        question: "A number pattern has a general term Tₙ = 3n² − 2n + 4. Determine its constant second difference.",

        steps: [
            "Step 1: Compare with Tₙ = an² + bn + c.",
            "a = 3",
            "Step 2: Use the formula.",
            "Second difference = 2a",
            "Step 3: Substitute a = 3.",
            "Second difference = 2(3)",
            "Answer: The constant second difference is 6."
        ]
    }

];


/* ==========================================
   DISPLAY WORKED EXAMPLES
========================================== */

function displayWorkedExamples() {

    const container = document.getElementById("numberPatternExamples");

    if (!container) return;

    container.innerHTML = "";

    workedExamples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const answerId = `numberExample${index}`;

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
        question: "Find the first differences of 2 ; 5 ; 10 ; 17 ; 26.",
        answer: "3 ; 5 ; 7 ; 9"
    },

    {
        question: "Find the second differences of 3 ; 8 ; 15 ; 24 ; 35.",
        answer: "2 ; 2 ; 2"
    },

    {
        question: "Determine the constant second difference of 4 ; 9 ; 16 ; 25 ; 36.",
        answer: "2"
    },

    {
        question: "Find the first differences of 1 ; 6 ; 13 ; 22 ; 33.",
        answer: "5 ; 7 ; 9 ; 11"
    },

    {
        question: "Find the constant second difference of 5 ; 12 ; 21 ; 32 ; 45.",
        answer: "2"
    },

    {
        question: "If the second difference is 8, find a.",
        answer: "2a = 8, therefore a = 4."
    },

    {
        question: "If the second difference is 10, find a.",
        answer: "2a = 10, therefore a = 5."
    },

    {
        question: "If the second difference is −6, find a.",
        answer: "2a = −6, therefore a = −3."
    },

    {
        question: "If a = 4, what is the constant second difference?",
        answer: "2a = 2(4) = 8."
    },

    {
        question: "If a = −2, what is the constant second difference?",
        answer: "2a = 2(−2) = −4."
    },

    {
        question: "Determine the general term of 2 ; 5 ; 10 ; 17 ; 26.",
        answer: "Tₙ = n² + 1"
    },

    {
        question: "Determine the general term of 3 ; 8 ; 15 ; 24 ; 35.",
        answer: "Tₙ = n² + 2n"
    },

    {
        question: "Determine the general term of 5 ; 12 ; 21 ; 32 ; 45.",
        answer: "Tₙ = n² + 4n"
    },

    {
        question: "Determine the general term of 4 ; 9 ; 16 ; 25 ; 36.",
        answer: "Tₙ = n² + 2n + 1"
    },

    {
        question: "Determine the general term of 2 ; 8 ; 18 ; 32 ; 50.",
        answer: "Tₙ = 2n²"
    },

    {
        question: "Find the 6th term if Tₙ = n² + 2n.",
        answer: "T₆ = 6² + 2(6) = 36 + 12 = 48."
    },

    {
        question: "Find the 8th term if Tₙ = 2n² + 3n − 1.",
        answer: "T₈ = 2(8)² + 3(8) − 1 = 127."
    },

    {
        question: "Find the constant second difference of Tₙ = 5n² + 2n − 3.",
        answer: "2a = 2(5) = 10."
    },

    {
        question: "Find the value of a if the second difference is 14.",
        answer: "a = 14 ÷ 2 = 7."
    },

    {
        question: "A pattern has the general term Tₙ = −3n² + 4n + 2. Find its constant second difference.",
        answer: "2a = 2(−3) = −6."
    }

];


/* ==========================================
   DISPLAY PRACTICE QUESTIONS
========================================== */

function createPractice() {

    const container = document.getElementById("numberPatternPractice");

    if (!container) return;

    container.innerHTML = "";

    practiceQuestions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const answerId = `numberPractice${index}`;

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

    console.log("MathsHelpSA Number Patterns loaded successfully.");

});
