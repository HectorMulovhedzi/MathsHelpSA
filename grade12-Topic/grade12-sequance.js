
/* =====================================================
   MATHSHELP SA - GRADE 12
   TOPIC 1: PATTERNS, SEQUENCES AND SERIES
===================================================== */


/* =====================================================
   1. OPEN AND CLOSE UNITS
===================================================== */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.hidden = !section.hidden;

    const icon = button.querySelector(".toggle-icon");

    if (icon) {
        icon.textContent = section.hidden ? "+" : "−";
    }
}


/* =====================================================
   2. UNIT NOTES
===================================================== */

const unitNotes = {

    unit1: `
        <div class="unit-notes">
            <h4>What is an Arithmetic Sequence?</h4>

            <p>
                An arithmetic sequence is a sequence of numbers
                in which the difference between consecutive terms
                is constant.
            </p>

            <p><strong>Example:</strong></p>
            <div class="formula-box">
                3 ; 7 ; 11 ; 15 ; 19 ; ...
            </div>

            <p>
                The common difference is 4 because we add 4
                to each term.
            </p>

            <h4>Common Difference (d)</h4>

            <p>
                The common difference is calculated by subtracting
                one term from the next term.
            </p>

            <div class="formula-box">
                d = T₂ − T₁
            </div>

            <h4>General Term of an Arithmetic Sequence</h4>

            <div class="formula-box">
                Tₙ = a + (n − 1)d
            </div>

            <ul>
                <li><strong>Tₙ:</strong> The nth term.</li>
                <li><strong>a:</strong> The first term.</li>
                <li><strong>n:</strong> The position of the term.</li>
                <li><strong>d:</strong> The common difference.</li>
            </ul>

            <h4>Important</h4>

            <p>
                If d is positive, the sequence increases.
                If d is negative, the sequence decreases.
            </p>
        </div>
    `,


    unit2: `
        <div class="unit-notes">
            <h4>What is a Geometric Sequence?</h4>

            <p>
                A geometric sequence is a sequence in which
                each term is obtained by multiplying the
                previous term by a constant number.
            </p>

            <p><strong>Example:</strong></p>

            <div class="formula-box">
                2 ; 6 ; 18 ; 54 ; 162 ; ...
            </div>

            <p>
                Each term is multiplied by 3.
                Therefore, the common ratio is 3.
            </p>

            <h4>Common Ratio (r)</h4>

            <div class="formula-box">
                r = T₂ ÷ T₁
            </div>

            <h4>General Term of a Geometric Sequence</h4>

            <div class="formula-box">
                Tₙ = arⁿ⁻¹
            </div>

            <ul>
                <li><strong>Tₙ:</strong> The nth term.</li>
                <li><strong>a:</strong> The first term.</li>
                <li><strong>r:</strong> The common ratio.</li>
                <li><strong>n:</strong> The position of the term.</li>
            </ul>

            <h4>Important</h4>

            <p>
                A common ratio greater than 1 can produce
                increasing terms when the first term is positive.
            </p>

            <p>
                A ratio between 0 and 1 produces terms that
                decrease in magnitude when the first term is positive.
            </p>
        </div>
    `,


    unit3: `
        <div class="unit-notes">
            <h4>What is an Arithmetic Series?</h4>

            <p>
                An arithmetic series is the sum of the terms
                of an arithmetic sequence.
            </p>

            <p><strong>Example:</strong></p>

            <div class="formula-box">
                2 + 5 + 8 + 11 + 14
            </div>

            <h4>Formula for the Sum</h4>

            <div class="formula-box">
                Sₙ = n/2 [2a + (n − 1)d]
            </div>

            <p>Another formula is:</p>

            <div class="formula-box">
                Sₙ = n/2 (a + Tₙ)
            </div>

            <ul>
                <li><strong>Sₙ:</strong> Sum of the first n terms.</li>
                <li><strong>n:</strong> Number of terms.</li>
                <li><strong>a:</strong> First term.</li>
                <li><strong>d:</strong> Common difference.</li>
                <li><strong>Tₙ:</strong> Last term.</li>
            </ul>

            <h4>Remember</h4>

            <p>
                Before using the formula, identify the first term,
                common difference and number of terms.
            </p>
        </div>
    `,


    unit4: `
        <div class="unit-notes">
            <h4>What is a Geometric Series?</h4>

            <p>
                A geometric series is the sum of the terms
                of a geometric sequence.
            </p>

            <p><strong>Example:</strong></p>

            <div class="formula-box">
                2 + 6 + 18 + 54
            </div>

            <h4>Sum of a Finite Geometric Series</h4>

            <div class="formula-box">
                Sₙ = a(1 − rⁿ)/(1 − r)
            </div>

            <p>This formula is used when r is not equal to 1.</p>

            <p>Alternatively, when r is not equal to 1:</p>

            <div class="formula-box">
                Sₙ = a(rⁿ − 1)/(r − 1)
            </div>

            <ul>
                <li><strong>Sₙ:</strong> Sum of the first n terms.</li>
                <li><strong>a:</strong> First term.</li>
                <li><strong>r:</strong> Common ratio.</li>
                <li><strong>n:</strong> Number of terms.</li>
            </ul>

            <h4>Special Case</h4>

            <p>
                If r = 1, all terms are equal to a.
            </p>

            <div class="formula-box">
                Sₙ = na
            </div>
        </div>
    `,


    unit5: `
        <div class="unit-notes">
            <h4>What is Sigma Notation?</h4>

            <p>
                Sigma notation is a short way of writing
                the sum of several terms.
            </p>

            <p>
                The Greek letter sigma (Σ) means addition.
            </p>

            <div class="formula-box">
                Σ (from k = 1 to n) Tₖ
            </div>

            <p>
                This means add the terms of Tₖ starting
                at k = 1 and ending at k = n.
            </p>

            <h4>Parts of Sigma Notation</h4>

            <ul>
                <li><strong>Σ:</strong> The summation symbol.</li>
                <li><strong>k = 1:</strong> Starting value.</li>
                <li><strong>n:</strong> Ending value.</li>
                <li><strong>Tₖ:</strong> The expression being added.</li>
            </ul>

            <h4>Example</h4>

            <div class="formula-box">
                Σ (k = 1 to 4) k
            </div>

            <p>Expand the expression:</p>

            <div class="formula-box">
                1 + 2 + 3 + 4 = 10
            </div>

            <h4>Useful Formulae</h4>

            <div class="formula-box">
                Σk = n(n + 1)/2
            </div>

            <div class="formula-box">
                Σk² = n(n + 1)(2n + 1)/6
            </div>
        </div>
    `,


    unit6: `
        <div class="unit-notes">
            <h4>Practical Applications</h4>

            <p>
                Sequences and series can be used to solve
                real-life problems involving repeated increases,
                decreases and patterns.
            </p>

            <h4>Arithmetic Applications</h4>

            <p>
                Arithmetic sequences are useful when a quantity
                increases or decreases by the same amount each time.
            </p>

            <p><strong>Examples:</strong></p>

            <ul>
                <li>Monthly savings that increase by a fixed amount.</li>
                <li>Rows of seats with a constant increase.</li>
                <li>Regular yearly increases in an amount.</li>
            </ul>

            <h4>Geometric Applications</h4>

            <p>
                Geometric sequences are useful when a quantity
                changes by the same percentage or ratio.
            </p>

            <p><strong>Examples:</strong></p>

            <ul>
                <li>Population growth.</li>
                <li>Depreciation in value.</li>
                <li>Repeated percentage increases.</li>
            </ul>

            <h4>Problem-Solving Steps</h4>

            <ol>
                <li>Read the question carefully.</li>
                <li>Identify whether the pattern is arithmetic or geometric.</li>
                <li>Identify the first term and the difference or ratio.</li>
                <li>Choose the correct formula.</li>
                <li>Substitute the values.</li>
                <li>Calculate and write the final answer with units.</li>
            </ol>
        </div>
    `,


    unit7: `
        <div class="unit-notes">
            <h4>Quadratic Patterns</h4>

            <p>
                A quadratic sequence is a sequence in which
                the second differences are constant.
            </p>

            <p><strong>Example:</strong></p>

            <div class="formula-box">
                2 ; 6 ; 12 ; 20 ; 30 ; ...
            </div>

            <h4>First Differences</h4>

            <div class="formula-box">
                4 ; 6 ; 8 ; 10
            </div>

            <h4>Second Differences</h4>

            <div class="formula-box">
                2 ; 2 ; 2
            </div>

            <p>
                Since the second differences are constant,
                the sequence is quadratic.
            </p>

            <h4>General Form</h4>

            <div class="formula-box">
                Tₙ = an² + bn + c
            </div>

            <p>
                The coefficient a can be found using:
            </p>

            <div class="formula-box">
                2a = Constant second difference
            </div>

            <h4>Combinations of Sequences</h4>

            <p>
                Some questions combine arithmetic and geometric
                patterns. Identify each pattern separately before
                finding the required terms or expressions.
            </p>

            <h4>Important</h4>

            <p>
                Do not confuse first differences with second
                differences. Always calculate both when testing
                for a quadratic sequence.
            </p>
        </div>
    `

};


/* =====================================================
   3. WORKED EXAMPLES
===================================================== */

const workedExamples = {

    unit1: [
        {
            question: "Find the 10th term of the sequence: 3 ; 7 ; 11 ; 15 ; ...",

            steps: [
                "Step 1: Identify the first term. a = 3",
                "Step 2: Find the common difference. d = 7 − 3 = 4",
                "Step 3: Write the formula. Tₙ = a + (n − 1)d",
                "Step 4: Substitute n = 10. T₁₀ = 3 + (10 − 1)(4)",
                "Step 5: Calculate. T₁₀ = 3 + 36 = 39"
            ],

            answer: "The 10th term is 39."
        },

        {
            question: "Find the common difference of: 20 ; 15 ; 10 ; 5 ; ...",

            steps: [
                "Step 1: Subtract the first term from the second term.",
                "d = 15 − 20",
                "Step 2: Calculate.",
                "d = −5"
            ],

            answer: "The common difference is −5."
        },

        {
            question: "Determine the nth term of: 5 ; 9 ; 13 ; 17 ; ...",

            steps: [
                "Step 1: a = 5",
                "Step 2: d = 9 − 5 = 4",
                "Step 3: Use Tₙ = a + (n − 1)d",
                "Step 4: Tₙ = 5 + (n − 1)(4)",
                "Step 5: Tₙ = 5 + 4n − 4",
                "Step 6: Simplify."
            ],

            answer: "Tₙ = 4n + 1."
        }
    ],


    unit2: [
        {
            question: "Find the 6th term of: 2 ; 6 ; 18 ; 54 ; ...",

            steps: [
                "Step 1: First term a = 2",
                "Step 2: Find the common ratio. r = 6 ÷ 2 = 3",
                "Step 3: Use Tₙ = arⁿ⁻¹",
                "Step 4: T₆ = 2(3)⁶⁻¹",
                "Step 5: T₆ = 2(3⁵)",
                "Step 6: T₆ = 2 × 243"
            ],

            answer: "The 6th term is 486."
        },

        {
            question: "Find the common ratio of: 80 ; 40 ; 20 ; 10 ; ...",

            steps: [
                "Step 1: Divide the second term by the first term.",
                "r = 40 ÷ 80",
                "Step 2: Simplify.",
                "r = 0.5"
            ],

            answer: "The common ratio is 0.5."
        },

        {
            question: "Find the nth term of: 3 ; 12 ; 48 ; 192 ; ...",

            steps: [
                "Step 1: a = 3",
                "Step 2: r = 12 ÷ 3 = 4",
                "Step 3: Use Tₙ = arⁿ⁻¹",
                "Step 4: Substitute the values."
            ],

            answer: "Tₙ = 3(4ⁿ⁻¹)."
        }
    ],


    unit3: [
        {
            question: "Calculate the sum of the first 10 terms of: 2 ; 5 ; 8 ; 11 ; ...",

            steps: [
                "Step 1: Identify a = 2, d = 3 and n = 10.",
                "Step 2: Use Sₙ = n/2 [2a + (n − 1)d].",
                "Step 3: S₁₀ = 10/2 [2(2) + (10 − 1)(3)].",
                "Step 4: S₁₀ = 5 [4 + 27].",
                "Step 5: S₁₀ = 5 × 31."
            ],

            answer: "The sum is 155."
        },

        {
            question: "Find the sum of the first 8 positive even numbers.",

            steps: [
                "Step 1: Write the sequence: 2 ; 4 ; 6 ; 8 ; ...",
                "Step 2: a = 2, d = 2 and n = 8.",
                "Step 3: S₈ = 8/2 [2(2) + (8 − 1)(2)].",
                "Step 4: S₈ = 4 [4 + 14].",
                "Step 5: S₈ = 4 × 18."
            ],

            answer: "The sum is 72."
        }
    ],


    unit4: [
        {
            question: "Find the sum of the first 5 terms of: 2 ; 6 ; 18 ; 54 ; ...",

            steps: [
                "Step 1: a = 2, r = 3 and n = 5.",
                "Step 2: Use Sₙ = a(1 − rⁿ)/(1 − r).",
                "Step 3: S₅ = 2(1 − 3⁵)/(1 − 3).",
                "Step 4: S₅ = 2(1 − 243)/(−2).",
                "Step 5: S₅ = 2(−242)/(−2)."
            ],

            answer: "The sum is 242."
        },

        {
            question: "Calculate the sum: 5 + 10 + 20 + 40.",

            steps: [
                "Step 1: a = 5",
                "Step 2: r = 10 ÷ 5 = 2",
                "Step 3: n = 4",
                "Step 4: S₄ = 5(1 − 2⁴)/(1 − 2)",
                "Step 5: S₄ = 5(−15)/(−1)"
            ],

            answer: "The sum is 75."
        }
    ],


    unit5: [
        {
            question: "Evaluate: Σ (k = 1 to 5) k",

            steps: [
                "Step 1: Start at k = 1.",
                "Step 2: Substitute k = 1, 2, 3, 4 and 5.",
                "Step 3: Write the sum: 1 + 2 + 3 + 4 + 5.",
                "Step 4: Add the terms."
            ],

            answer: "The answer is 15."
        },

        {
            question: "Evaluate: Σ (k = 1 to 4) 2k",

            steps: [
                "Step 1: Substitute k = 1, 2, 3 and 4.",
                "Step 2: 2(1) + 2(2) + 2(3) + 2(4).",
                "Step 3: 2 + 4 + 6 + 8.",
                "Step 4: Add the terms."
            ],

            answer: "The answer is 20."
        }
    ],


    unit6: [
        {
            question: "A learner saves R100 in the first month and increases the amount by R20 every month. How much will the learner save in the 6th month?",

            steps: [
                "Step 1: This is an arithmetic sequence because the increase is constant.",
                "Step 2: a = 100, d = 20 and n = 6.",
                "Step 3: Tₙ = a + (n − 1)d.",
                "Step 4: T₆ = 100 + (6 − 1)(20).",
                "Step 5: T₆ = 100 + 100."
            ],

            answer: "The learner saves R200 in the 6th month."
        },

        {
            question: "A machine loses 10% of its value each year. Its initial value is R10 000. Find its value after one year.",

            steps: [
                "Step 1: A 10% decrease means 90% remains.",
                "Step 2: 90% = 0.90.",
                "Step 3: New value = 10 000 × 0.90."
            ],

            answer: "The value after one year is R9 000."
        }
    ],


    unit7: [
        {
            question: "Determine whether the sequence 2 ; 6 ; 12 ; 20 ; 30 is quadratic.",

            steps: [
                "Step 1: Calculate the first differences.",
                "6 − 2 = 4, 12 − 6 = 6, 20 − 12 = 8, 30 − 20 = 10.",
                "Step 2: First differences: 4 ; 6 ; 8 ; 10.",
                "Step 3: Calculate the second differences.",
                "6 − 4 = 2, 8 − 6 = 2, 10 − 8 = 2.",
                "Step 4: The second differences are constant."
            ],

            answer: "Yes, the sequence is quadratic."
        },

        {
            question: "Find the coefficient a in Tₙ = an² + bn + c if the constant second difference is 6.",

            steps: [
                "Step 1: For a quadratic sequence, the second difference is 2a.",
                "Step 2: Set 2a = 6.",
                "Step 3: Divide both sides by 2."
            ],

            answer: "a = 3."
        }
    ]

};


/* =====================================================
   4. PRACTICE QUESTIONS
===================================================== */

const practiceQuestions = {

    unit1: [
        {
            question: "Find the common difference: 4 ; 9 ; 14 ; 19 ; ...",
            answer: "5"
        },
        {
            question: "Find the 8th term of: 2 ; 5 ; 8 ; 11 ; ...",
            answer: "23"
        },
        {
            question: "Find the first term if T₅ = 22 and d = 4.",
            answer: "6"
        }
    ],

    unit2: [
        {
            question: "Find the common ratio: 5 ; 15 ; 45 ; 135 ; ...",
            answer: "3"
        },
        {
            question: "Find the 5th term of: 2 ; 4 ; 8 ; 16 ; ...",
            answer: "32"
        },
        {
            question: "Find the 4th term of: 81 ; 27 ; 9 ; ...",
            answer: "3"
        }
    ],

    unit3: [
        {
            question: "Find the sum of the first 5 terms: 1 ; 3 ; 5 ; 7 ; ...",
            answer: "25"
        },
        {
            question: "Calculate the sum of the first 10 natural numbers.",
            answer: "55"
        },
        {
            question: "Find the sum of the first 6 terms if a = 4 and d = 2.",
            answer: "54"
        }
    ],

    unit4: [
        {
            question: "Find the sum of the first 4 terms: 1 ; 2 ; 4 ; 8 ; ...",
            answer: "15"
        },
        {
            question: "Calculate the sum: 3 + 9 + 27 + 81.",
            answer: "120"
        },
        {
            question: "Find the sum of the first 5 terms if a = 2 and r = 2.",
            answer: "62"
        }
    ],

    unit5: [
        {
            question: "Evaluate: Σ (k = 1 to 4) k.",
            answer: "10"
        },
        {
            question: "Evaluate: Σ (k = 1 to 3) 2k.",
            answer: "12"
        },
        {
            question: "Evaluate: Σ (k = 1 to 4) k².",
            answer: "30"
        }
    ],

    unit6: [
        {
            question: "A learner saves R50 in the first week and increases the amount by R10 every week. How much is saved in week 5?",
            answer: "90"
        },
        {
            question: "An item worth R200 loses 10% of its value. What is its new value?",
            answer: "180"
        },
        {
            question: "A population of 100 grows by a factor of 2. What is the population after one growth period?",
            answer: "200"
        }
    ],

    unit7: [
        {
            question: "Find the first difference between 3 and 8.",
            answer: "5"
        },
        {
            question: "Find the second difference of 2 ; 6 ; 12 ; 20.",
            answer: "2"
        },
        {
            question: "Find a if the second difference is 10.",
            answer: "5"
        }
    ]

};


/* =====================================================
   5. DISPLAY NOTES
===================================================== */

function loadNotes() {

    Object.keys(unitNotes).forEach(unit => {

        const container = document.getElementById(unit + "Notes");

        if (container) {
            container.innerHTML = unitNotes[unit];
        }

    });

}


/* =====================================================
   6. DISPLAY WORKED EXAMPLES
===================================================== */

function loadWorkedExamples() {

    Object.keys(workedExamples).forEach(unit => {

        const container = document.getElementById(unit + "Examples");

        if (!container) return;

        container.innerHTML = "";

        workedExamples[unit].forEach((example, index) => {

            const exampleId = `${unit}ExampleSteps${index}`;

            const card = document.createElement("div");

            card.className = "example-card";

            const heading = document.createElement("h4");
            heading.textContent = `Worked Example ${index + 1}`;

            const question = document.createElement("p");
            question.className = "example-question";
            question.textContent = example.question;

            const button = document.createElement("button");
            button.className = "step-button";
            button.textContent = "Show Solution Steps";
            button.type = "button";
            button.setAttribute("aria-expanded", "false");
            button.setAttribute("aria-controls", exampleId);

            const steps = document.createElement("div");
            steps.className = "solution-steps";
            steps.id = exampleId;
            steps.hidden = true;

            example.steps.forEach(step => {

                const paragraph = document.createElement("p");
                paragraph.textContent = step;

                steps.appendChild(paragraph);

            });

            const answer = document.createElement("p");
            answer.className = "answer";
            answer.textContent = "Final Answer: " + example.answer;

            steps.appendChild(answer);

            button.addEventListener("click", () => {

                steps.hidden = !steps.hidden;

                button.textContent = steps.hidden
                    ? "Show Solution Steps"
                    : "Hide Solution Steps";

                button.setAttribute(
                    "aria-expanded",
                    String(!steps.hidden)
                );

            });

            card.appendChild(heading);
            card.appendChild(question);
            card.appendChild(button);
            card.appendChild(steps);

            container.appendChild(card);

        });

    });

}


/* =====================================================
   7. DISPLAY PRACTICE QUESTIONS
===================================================== */

function loadPracticeQuestions() {

    Object.keys(practiceQuestions).forEach(unit => {

        const container = document.getElementById(unit + "Practice");

        if (!container) return;

        container.innerHTML = "";

        practiceQuestions[unit].forEach((item, index) => {

            const card = document.createElement("div");

            card.className = "practice-card";

            const heading = document.createElement("h4");
            heading.textContent = `Practice Question ${index + 1}`;

            const question = document.createElement("p");
            question.textContent = item.question;

            const input = document.createElement("input");
            input.type = "text";
            input.placeholder = "Enter your answer";
            input.setAttribute("aria-label", `Answer to practice question ${index + 1}`);

            const button = document.createElement("button");
            button.className = "check-button";
            button.type = "button";
            button.textContent = "Check Answer";

            const feedback = document.createElement("p");
            feedback.className = "feedback";
            feedback.setAttribute("aria-live", "polite");

            button.addEventListener("click", () => {

                const learnerAnswer = input.value.trim();

                if (learnerAnswer === "") {

                    feedback.textContent = "Please enter your answer first.";
                    feedback.style.color = "#b45309";

                    return;
                }

                if (normaliseAnswer(learnerAnswer) === normaliseAnswer(item.answer)) {

                    feedback.textContent = "Correct! Well done.";
                    feedback.style.color = "#15803d";

                } else {

                    feedback.textContent = "Not quite. Try again.";
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

    });

}


/* =====================================================
   8. NORMALISE ANSWERS
===================================================== */

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/,/g, "")
        .replace(/^r/, "")
        .replace(/\.00$/, "");

}


/* =====================================================
   9. FINAL QUIZ - 10 QUESTIONS
   TOTAL: 10 MARKS
===================================================== */

const quizQuestions = [

    {
        question: "1. Find the common difference of the sequence: 4 ; 8 ; 12 ; 16 ; ...",

        options: ["2", "4", "6", "8"],

        answer: 1
    },

    {
        question: "2. Find the 6th term of the arithmetic sequence: 3 ; 7 ; 11 ; 15 ; ...",

        options: ["19", "21", "23", "25"],

        answer: 2
    },

    {
        question: "3. What is the common ratio of the sequence: 2 ; 6 ; 18 ; 54 ; ...?",

        options: ["2", "3", "4", "6"],

        answer: 1
    },

    {
        question: "4. Find the 5th term of the geometric sequence: 2 ; 4 ; 8 ; 16 ; ...",

        options: ["24", "30", "32", "36"],

        answer: 2
    },

    {
        question: "5. Find the sum of the first 5 terms: 2 ; 4 ; 6 ; 8 ; 10.",

        options: ["20", "25", "30", "35"],

        answer: 2
    },

    {
        question: "6. Find the sum of the first 4 terms: 1 ; 2 ; 4 ; 8 ; ...",

        options: ["12", "14", "15", "16"],

        answer: 2
    },

    {
        question: "7. Evaluate: Σ (k = 1 to 4) k.",

        options: ["6", "8", "10", "12"],

        answer: 2
    },

    {
        question: "8. A learner saves R100 in the first month and increases the amount by R20 each month. How much is saved in the third month?",

        options: ["R120", "R140", "R160", "R180"],

        answer: 1
    },

    {
        question: "9. What is the second difference of the sequence: 2 ; 6 ; 12 ; 20 ; 30?",

        options: ["1", "2", "3", "4"],

        answer: 1
    },

    {
        question: "10. If the constant second difference of a quadratic sequence is 8, find the coefficient a in Tₙ = an² + bn + c.",

        options: ["2", "4", "6", "8"],

        answer: 1
    }

];


/* =====================================================
   10. QUIZ VARIABLES
===================================================== */

let currentQuizScore = 0;
let quizSubmitted = false;


/* =====================================================
   11. START QUIZ
===================================================== */

function startQuiz() {

    const quizArea = document.getElementById("quizArea");
    const quizResults = document.getElementById("quizResults");
    const quizIntro = document.querySelector(".quiz-intro");

    if (!quizArea || !quizResults || !quizIntro) return;

    quizSubmitted = false;
    currentQuizScore = 0;

    quizIntro.hidden = true;
    quizResults.hidden = true;
    quizArea.hidden = false;

    displayQuizQuestions();
    updateQuizProgress();

}


/* =====================================================
   12. DISPLAY QUIZ QUESTIONS
===================================================== */

function displayQuizQuestions() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    container.innerHTML = "";

    quizQuestions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "quiz-question";

        const heading = document.createElement("h4");
        heading.textContent = question.question;

        card.appendChild(heading);

        question.options.forEach((option, optionIndex) => {

            const label = document.createElement("label");

            label.className = "quiz-option";

            const radio = document.createElement("input");

            radio.type = "radio";
            radio.name = `question${index}`;
            radio.value = optionIndex;

            radio.addEventListener("change", updateQuizProgress);

            label.appendChild(radio);
            label.appendChild(document.createTextNode(option));

            card.appendChild(label);

        });

        container.appendChild(card);

    });

}


/* =====================================================
   13. UPDATE QUIZ PROGRESS
===================================================== */

function updateQuizProgress() {

    const progressText = document.getElementById("questionProgress");
    const scoreText = document.getElementById("quizScore");
    const progressBar = document.getElementById("progressBar");

    if (!progressText || !scoreText || !progressBar) return;

    let answered = 0;

    quizQuestions.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (selected) {
            answered++;
        }

    });

    progressText.textContent =
        `Questions Answered: ${answered} / 10`;

    scoreText.textContent =
        `Marks: ${answered} / 10`;

    progressBar.style.width = `${answered * 10}%`;

}


/* =====================================================
   14. SUBMIT QUIZ
===================================================== */

function submitQuiz() {

    if (quizSubmitted) return;

    let score = 0;

    let unanswered = 0;

    quizQuestions.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="question${index}"]:checked`
        );

        if (!selected) {

            unanswered++;

            return;
        }

        if (Number(selected.value) === question.answer) {

            score++;

        }

    });


    if (unanswered > 0) {

        alert(
            `You still have ${unanswered} unanswered question(s). Please answer all 10 questions.`
        );

        return;
    }


    currentQuizScore = score;
    quizSubmitted = true;

    showQuizResults();

}


/* =====================================================
   15. DISPLAY QUIZ RESULTS
===================================================== */

function showQuizResults() {

    const quizArea = document.getElementById("quizArea");
    const quizResults = document.getElementById("quizResults");

    const finalScore = document.getElementById("finalScore");
    const finalFeedback = document.getElementById("finalFeedback");

    if (!quizArea || !quizResults) return;

    quizArea.hidden = true;
    quizResults.hidden = false;

    finalScore.textContent = `Your Score: ${currentQuizScore} / 10`;

    if (currentQuizScore === 10) {

        finalFeedback.textContent =
            "Excellent work! You achieved full marks. Keep it up!";

    } else if (currentQuizScore >= 8) {

        finalFeedback.textContent =
            "Very good! You understand most of the topic.";

    } else if (currentQuizScore >= 6) {

        finalFeedback.textContent =
            "Good effort! Revise the units where you need more practice.";

    } else if (currentQuizScore >= 4) {

        finalFeedback.textContent =
            "You are making progress. Go through the notes and worked examples again.";

    } else {

        finalFeedback.textContent =
            "Keep practising. Review all seven units and try the quiz again.";

    }

}


/* =====================================================
   16. RETRY QUIZ
===================================================== */

function retryQuiz() {

    const quizResults = document.getElementById("quizResults");
    const quizIntro = document.querySelector(".quiz-intro");

    if (!quizResults || !quizIntro) return;

    quizResults.hidden = true;
    quizIntro.hidden = false;

    currentQuizScore = 0;
    quizSubmitted = false;

    const container = document.getElementById("quizQuestions");

    if (container) {
        container.innerHTML = "";
    }

    const progressText = document.getElementById("questionProgress");
    const scoreText = document.getElementById("quizScore");
    const progressBar = document.getElementById("progressBar");

    if (progressText) {
        progressText.textContent = "Questions Answered: 0 / 10";
    }

    if (scoreText) {
        scoreText.textContent = "Marks: 0 / 10";
    }

    if (progressBar) {
        progressBar.style.width = "0%";
    }

}


/* =====================================================
   17. CONNECT QUIZ BUTTONS
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    loadNotes();

    loadWorkedExamples();

    loadPracticeQuestions();


    const startButton = document.getElementById("startQuiz");

    const submitButton = document.getElementById("submitQuiz");

    const retryButton = document.getElementById("retryQuiz");


    if (startButton) {
        startButton.addEventListener("click", startQuiz);
    }

    if (submitButton) {
        submitButton.addEventListener("click", submitQuiz);
    }

    if (retryButton) {
        retryButton.addEventListener("click", retryQuiz);
    }

});
