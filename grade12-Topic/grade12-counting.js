
// =============================================
// MATHSHELPSA - GRADE 12
// COUNTING PRINCIPLES AND PROBABILITY
// =============================================


// =============================================
// 1. VENN DIAGRAMS
// =============================================

function vennDiagram() {
    return `
    <div class="diagram-box">
        <h4>Venn Diagram: Overlapping Events</h4>

        <svg viewBox="0 0 420 250" role="img"
             aria-label="Venn diagram showing two overlapping events A and B">

            <rect x="15" y="15" width="390" height="220"
                  rx="10" fill="#eff6ff" stroke="#1e40af"
                  stroke-width="2"/>

            <text x="28" y="38" font-size="13">S</text>

            <circle cx="165" cy="125" r="75"
                    fill="#60a5fa" fill-opacity="0.55"
                    stroke="#1d4ed8" stroke-width="2"/>

            <circle cx="255" cy="125" r="75"
                    fill="#facc15" fill-opacity="0.55"
                    stroke="#ca8a04" stroke-width="2"/>

            <text x="125" y="65" font-size="18"
                  font-weight="bold" fill="#1e40af">A</text>

            <text x="290" y="65" font-size="18"
                  font-weight="bold" fill="#92400e">B</text>

            <text x="125" y="130" font-size="14"
                  text-anchor="middle">A only</text>

            <text x="210" y="130" font-size="14"
                  text-anchor="middle">A ∩ B</text>

            <text x="295" y="130" font-size="14"
                  text-anchor="middle">B only</text>

            <text x="355" y="205" font-size="12">Outside</text>
        </svg>

        <p>
            The overlapping section represents outcomes
            that belong to both A and B.
        </p>
    </div>`;
}


function mutuallyExclusiveDiagram() {
    return `
    <div class="diagram-box">
        <h4>Mutually Exclusive Events</h4>

        <svg viewBox="0 0 400 220" role="img"
             aria-label="Two separate circles representing mutually exclusive events">

            <rect x="10" y="10" width="380" height="195"
                  rx="10" fill="#eff6ff" stroke="#1e40af"
                  stroke-width="2"/>

            <circle cx="125" cy="105" r="55"
                    fill="#60a5fa" fill-opacity="0.6"
                    stroke="#1d4ed8" stroke-width="2"/>

            <circle cx="275" cy="105" r="55"
                    fill="#facc15" fill-opacity="0.6"
                    stroke="#ca8a04" stroke-width="2"/>

            <text x="125" y="110" text-anchor="middle"
                  font-size="18" font-weight="bold">A</text>

            <text x="275" y="110" text-anchor="middle"
                  font-size="18" font-weight="bold">B</text>
        </svg>

        <p>
            The circles do not overlap. Therefore,
            P(A ∩ B) = 0.
        </p>
    </div>`;
}


function threeSetVennDiagram() {
    return `
    <div class="diagram-box">
        <h4>Three-Event Venn Diagram</h4>

        <svg viewBox="0 0 420 280" role="img"
             aria-label="Three overlapping circles representing events A, B and C">

            <rect x="10" y="10" width="400" height="255"
                  rx="10" fill="#eff6ff" stroke="#1e40af"
                  stroke-width="2"/>

            <circle cx="165" cy="105" r="75"
                    fill="#60a5fa" fill-opacity="0.45"
                    stroke="#1d4ed8" stroke-width="2"/>

            <circle cx="255" cy="105" r="75"
                    fill="#facc15" fill-opacity="0.45"
                    stroke="#ca8a04" stroke-width="2"/>

            <circle cx="210" cy="175" r="75"
                    fill="#4ade80" fill-opacity="0.4"
                    stroke="#15803d" stroke-width="2"/>

            <text x="125" y="65" font-size="17"
                  font-weight="bold">A</text>

            <text x="295" y="65" font-size="17"
                  font-weight="bold">B</text>

            <text x="210" y="245" font-size="17"
                  font-weight="bold">C</text>

            <text x="210" y="130" text-anchor="middle"
                  font-size="13" font-weight="bold">A ∩ B ∩ C</text>
        </svg>

        <p>
            The centre represents outcomes that belong
            to all three events.
        </p>
    </div>`;
}


// =============================================
// 2. TREE DIAGRAM
// =============================================

function treeDiagram() {
    return `
    <div class="diagram-box">
        <h4>Tree Diagram: Tossing a Coin Twice</h4>

        <svg viewBox="0 0 420 270" role="img"
             aria-label="Tree diagram for two coin tosses">

            <text x="25" y="130" font-size="14"
                  font-weight="bold">Start</text>

            <g stroke="#2563eb" stroke-width="2" fill="none">
                <path d="M65 125 L145 65"/>
                <path d="M65 125 L145 195"/>

                <path d="M145 65 L260 35"/>
                <path d="M145 65 L260 95"/>

                <path d="M145 195 L260 165"/>
                <path d="M145 195 L260 225"/>
            </g>

            <g fill="#1e40af" font-size="14">
                <text x="85" y="75">H (1/2)</text>
                <text x="85" y="190">T (1/2)</text>

                <text x="180" y="35">H (1/2)</text>
                <text x="180" y="95">T (1/2)</text>

                <text x="180" y="165">H (1/2)</text>
                <text x="180" y="235">T (1/2)</text>
            </g>

            <g fill="#166534" font-size="15"
               font-weight="bold">
                <text x="280" y="40">HH</text>
                <text x="280" y="100">HT</text>
                <text x="280" y="170">TH</text>
                <text x="280" y="230">TT</text>
            </g>
        </svg>

        <p>
            Multiply the probabilities along each path.
            For example, P(HH) = 1/2 × 1/2 = 1/4.
        </p>
    </div>`;
}


// =============================================
// 3. CONTINGENCY TABLE
// =============================================

function contingencyTable() {
    return `
    <div class="diagram-box">
        <h4>Contingency Table Example</h4>

        <p>40 learners were asked whether they study Maths and Science.</p>

        <div style="overflow-x:auto;">
            <table class="contingency-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Science: Yes</th>
                        <th>Science: No</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <th>Maths: Yes</th>
                        <td>12</td>
                        <td>8</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <th>Maths: No</th>
                        <td>10</td>
                        <td>10</td>
                        <td>20</td>
                    </tr>

                    <tr>
                        <th>Total</th>
                        <td>22</td>
                        <td>18</td>
                        <td>40</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <p>
            P(Maths and Science) = 12/40 = 3/10.
        </p>
    </div>`;
}


// =============================================
// 4. UNIT NOTES
// =============================================

const unitNotes = {

    1: `
        <h3>Rules of Probability</h3>

        <h4>1. Independent Events</h4>

        <p>
            Two events are independent when the occurrence
            of one does not affect the probability of the other.
        </p>

        <div class="formula-box">
            P(A ∩ B) = P(A) × P(B)
        </div>

        <p>
            Example: Tossing a coin twice. The first toss
            does not affect the second toss.
        </p>

        <h4>2. Mutually Exclusive Events</h4>

        <p>
            Two events are mutually exclusive when they
            cannot happen at the same time.
        </p>

        <div class="formula-box">
            P(A ∩ B) = 0
        </div>

        <p>
            Example: Getting a 2 and a 5 on one roll
            of a single die.
        </p>

        ${mutuallyExclusiveDiagram()}

        <h4>3. Complementary Events</h4>

        <p>
            An event and its complement cover all possible
            outcomes. If A happens, A' does not happen.
        </p>

        <div class="formula-box">
            P(A') = 1 - P(A)
        </div>

        <h4>4. General Addition Rule</h4>

        <div class="formula-box">
            P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
        </div>

        ${vennDiagram()}

        <h4>Important Difference</h4>

        <p>
            Mutually exclusive events cannot happen together.
            Independent events do not affect each other's
            probabilities. These are different ideas.
        </p>
    `,

    2: `
        <h3>Venn Diagrams, Tree Diagrams and Contingency Tables</h3>

        <h4>1. Venn Diagrams</h4>

        <p>
            A Venn diagram uses circles to show relationships
            between events.
        </p>

        <ul>
            <li>A ∪ B: A or B or both.</li>
            <li>A ∩ B: A and B together.</li>
            <li>A': Outcomes outside A.</li>
        </ul>

        ${vennDiagram()}

        ${threeSetVennDiagram()}

        <h4>2. Tree Diagrams</h4>

        <p>
            Tree diagrams show possible outcomes of events
            that happen in stages.
        </p>

        <p>
            Multiply probabilities along a path.
            Add probabilities of different paths when
            calculating the probability of either path.
        </p>

        ${treeDiagram()}

        <h4>3. Contingency Tables</h4>

        <p>
            These tables organise information about two
            categories and show their totals.
        </p>

        ${contingencyTable()}

        <div class="formula-box">
            P(A | B) = P(A ∩ B) / P(B)
        </div>

        <p>
            This is conditional probability: the probability
            of A happening, given that B has happened.
        </p>
    `,

    3: `
        <h3>The Fundamental Counting Principle</h3>

        <p>
            The Fundamental Counting Principle helps us
            count the total number of possible outcomes
            without listing every possibility.
        </p>

        <div class="formula-box">
            Total outcomes = Number of choices in stage 1
            × Number of choices in stage 2
            × ...
        </div>

        <h4>Example 1: Choosing an Outfit</h4>

        <p>
            You have 3 shirts and 2 pairs of trousers.
        </p>

        <p>
            Number of outfits = 3 × 2 = 6.
        </p>

        <h4>Factorials</h4>

        <p>
            A factorial is the product of all positive
            integers up to a given number.
        </p>

        <div class="formula-box">
            4! = 4 × 3 × 2 × 1 = 24
        </div>

        <p>
            Remember: 0! = 1.
        </p>

        <h4>Arrangements: Order Matters</h4>

        <div class="formula-box">
            nPr = n! / (n-r)!
        </div>

        <h4>Combinations: Order Does Not Matter</h4>

        <div class="formula-box">
            nCr = n! / [r!(n-r)!]
        </div>

        <p>
            Use arrangements when the order changes the
            outcome. Use combinations when only the group
            selected matters.
        </p>
    `,

    4: `
        <h3>Probability Using Counting Principles</h3>

        <p>
            Counting principles can help us calculate
            probabilities when all outcomes are equally likely.
        </p>

        <div class="formula-box">
            P(E) = Favourable outcomes / Total outcomes
        </div>

        <h4>Example 1: Tossing Three Coins</h4>

        <p>
            There are 2 possible outcomes for each coin.
        </p>

        <p>
            Total outcomes = 2 × 2 × 2 = 8.
        </p>

        <p>
            The outcomes with exactly two heads are:
            HHT, HTH and THH.
        </p>

        <p>
            Favourable outcomes = 3.
        </p>

        <div class="formula-box">
            P(exactly 2 heads) = 3/8
        </div>

        <h4>Example 2: Two-Digit Numbers</h4>

        <p>
            Use digits 1, 2, 3 and 4 without repeating
            a digit.
        </p>

        <p>
            Total numbers = 4 × 3 = 12.
        </p>

        <p>
            An even number must end in 2 or 4.
            There are 2 choices for the last digit and
            3 choices for the first digit.
        </p>

        <p>
            Favourable outcomes = 2 × 3 = 6.
        </p>

        <div class="formula-box">
            P(even number) = 6/12 = 1/2
        </div>
    `
};


// =============================================
// 5. WORKED EXAMPLES
// =============================================

const workedExamples = {

    1: [
        {
            question: "A and B are independent. P(A) = 0.4 and P(B) = 0.5. Find P(A ∩ B).",
            steps: [
                "Write the formula: P(A ∩ B) = P(A) × P(B).",
                "Substitute: 0.4 × 0.5.",
                "Calculate: 0.20.",
                "Answer: P(A ∩ B) = 0.2."
            ]
        },
        {
            question: "P(A) = 0.7. Find P(A').",
            steps: [
                "Use the complement rule.",
                "P(A') = 1 - P(A).",
                "P(A') = 1 - 0.7.",
                "Answer: 0.3."
            ]
        },
        {
            question: "P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.2. Find P(A ∪ B).",
            steps: [
                "Use P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
                "Substitute: 0.6 + 0.5 - 0.2.",
                "Answer: 0.9."
            ]
        }
    ],

    2: [
        {
            question: "In a group of 30 learners, 18 study Maths, 12 study Science and 5 study both. Find the probability that a learner studies Maths or Science.",
            steps: [
                "Use the addition rule.",
                "Number in Maths or Science = 18 + 12 - 5.",
                "Favourable learners = 25.",
                "Probability = 25/30 = 5/6."
            ]
        },
        {
            question: "A coin is tossed twice. Find the probability of getting two heads.",
            steps: [
                "First toss: P(H) = 1/2.",
                "Second toss: P(H) = 1/2.",
                "Multiply along the tree path.",
                "P(HH) = 1/2 × 1/2 = 1/4."
            ]
        },
        {
            question: "Using the contingency table, find the probability that a learner studies Maths, given that the learner studies Science.",
            steps: [
                "Maths and Science = 12 learners.",
                "Science total = 22 learners.",
                "P(Maths | Science) = 12/22.",
                "Answer: 6/11."
            ]
        }
    ],

    3: [
        {
            question: "A restaurant offers 4 meals and 3 drinks. How many meal-and-drink combinations are possible?",
            steps: [
                "There are 4 meal choices.",
                "There are 3 drink choices.",
                "Multiply: 4 × 3.",
                "Answer: 12 combinations."
            ]
        },
        {
            question: "Calculate 5!.",
            steps: [
                "5! = 5 × 4 × 3 × 2 × 1.",
                "5! = 120."
            ]
        },
        {
            question: "How many ways can 2 learners be selected from 5 learners if order does not matter?",
            steps: [
                "Order does not matter, so use combinations.",
                "5C2 = 5! / [2!(5-2)!].",
                "5C2 = 120 / (2 × 6).",
                "Answer: 10 ways."
            ]
        }
    ],

    4: [
        {
            question: "Three coins are tossed. Find the probability of getting exactly two heads.",
            steps: [
                "Total outcomes = 2 × 2 × 2 = 8.",
                "Favourable outcomes: HHT, HTH, THH.",
                "There are 3 favourable outcomes.",
                "Probability = 3/8."
            ]
        },
        {
            question: "Digits 1, 2, 3 and 4 are used to form two-digit numbers without repetition. Find the probability of selecting an even number.",
            steps: [
                "Total numbers = 4 × 3 = 12.",
                "The last digit must be 2 or 4.",
                "Favourable numbers = 2 × 3 = 6.",
                "Probability = 6/12 = 1/2."
            ]
        },
        {
            question: "A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement. Find the probability that both are red.",
            steps: [
                "First red probability = 3/5.",
                "After drawing a red ball, 2 red balls remain out of 4.",
                "Second red probability = 2/4.",
                "Multiply: 3/5 × 2/4 = 6/20.",
                "Answer: 3/10."
            ]
        }
    ]
};


// =============================================
// 6. PRACTICE QUESTIONS
// =============================================

const practiceQuestions = {

    1: [
        {
            question: "If P(A) = 0.3, find P(A').",
            answer: "0.7",
            solution: "1 - 0.3 = 0.7."
        },
        {
            question: "If A and B are independent, P(A) = 0.2 and P(B) = 0.4. Find P(A ∩ B).",
            answer: "0.08",
            solution: "0.2 × 0.4 = 0.08."
        },
        {
            question: "If A and B are mutually exclusive, find P(A ∩ B).",
            answer: "0",
            solution: "Mutually exclusive events cannot happen together."
        },
        {
            question: "P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.1. Find P(A ∪ B).",
            answer: "0.8",
            solution: "0.5 + 0.4 - 0.1 = 0.8."
        },
        {
            question: "A die is rolled. Find the probability of not getting a 6.",
            answer: "5/6",
            solution: "There are five outcomes that are not 6, out of six."
        }
    ],

    2: [
        {
            question: "If 10 learners study Maths, 8 study Science and 3 study both, how many study Maths or Science?",
            answer: "15",
            solution: "10 + 8 - 3 = 15."
        },
        {
            question: "A coin is tossed twice. Find P(HH).",
            answer: "1/4",
            solution: "1/2 × 1/2 = 1/4."
        },
        {
            question: "A coin is tossed twice. Find the probability of getting exactly one head.",
            answer: "1/2",
            solution: "HT and TH are favourable: 2/4 = 1/2."
        },
        {
            question: "A contingency table has 8 learners in both groups and 20 learners in the second group. Find the conditional probability of the first group given the second group.",
            answer: "0.4",
            solution: "8/20 = 0.4."
        },
        {
            question: "If P(A) = 0.6, find P(A').",
            answer: "0.4",
            solution: "1 - 0.6 = 0.4."
        }
    ],

    3: [
        {
            question: "There are 5 shirts and 2 trousers. How many outfits are possible?",
            answer: "10",
            solution: "5 × 2 = 10."
        },
        {
            question: "Calculate 4!.",
            answer: "24",
            solution: "4 × 3 × 2 × 1 = 24."
        },
        {
            question: "There are 3 choices for a starter, 4 choices for a main meal and 2 choices for dessert. How many meals are possible?",
            answer: "24",
            solution: "3 × 4 × 2 = 24."
        },
        {
            question: "How many ways can 2 learners be selected from 4 learners if order does not matter?",
            answer: "6",
            solution: "4C2 = 4!/(2!2!) = 6."
        },
        {
            question: "How many ways can 2 different positions be filled from 5 learners?",
            answer: "20",
            solution: "5P2 = 5 × 4 = 20."
        }
    ],

    4: [
        {
            question: "Three coins are tossed. Find the probability of getting three heads.",
            answer: "1/8",
            solution: "There is 1 favourable outcome out of 8."
        },
        {
            question: "A die is rolled. Find the probability of getting an even number.",
            answer: "1/2",
            solution: "Even outcomes are 2, 4 and 6: 3/6 = 1/2."
        },
        {
            question: "A bag has 3 red and 2 blue balls. Find the probability of drawing a red ball.",
            answer: "3/5",
            solution: "There are 3 red balls out of 5."
        },
        {
            question: "Two dice are rolled. Find the probability of getting a total of 7.",
            answer: "1/6",
            solution: "There are 6 favourable pairs out of 36: 6/36 = 1/6."
        },
        {
            question: "Digits 1, 2 and 3 form two-digit numbers without repetition. Find the probability that a randomly selected number is even.",
            answer: "1/3",
            solution: "Possible numbers: 12, 13, 21, 23, 31, 32. Two are even: 2/6 = 1/3."
        }
    ]
};


// =============================================
// 7. QUIZ QUESTIONS
// =============================================

const quizQuestions = [

    {
        question: "If P(A) = 0.4, what is P(A')?",
        options: ["0.4", "0.6", "1.4", "0.2"],
        answer: 1
    },

    {
        question: "If A and B are independent, which formula is correct?",
        options: [
            "P(A) + P(B)",
            "P(A) - P(B)",
            "P(A) × P(B)",
            "P(A) / P(B)"
        ],
        answer: 2
    },

    {
        question: "For mutually exclusive events, P(A ∩ B) equals:",
        options: ["1", "0", "0.5", "P(A)"],
        answer: 1
    },

    {
        question: "Which symbol represents the intersection of A and B?",
        options: ["A ∪ B", "A'", "A ∩ B", "A + B"],
        answer: 2
    },

    {
        question: "A tree diagram has 3 branches at the first stage and 2 at the second stage. How many outcomes are possible?",
        options: ["5", "6", "9", "8"],
        answer: 1
    },

    {
        question: "Calculate 4!.",
        options: ["12", "16", "24", "20"],
        answer: 2
    },

    {
        question: "There are 4 shirts and 3 trousers. How many outfits are possible?",
        options: ["7", "12", "10", "24"],
        answer: 1
    },

    {
        question: "Which formula is used when order does not matter?",
        options: ["Permutation", "Factorial only", "Combination", "Addition rule"],
        answer: 2
    },

    {
        question: "Three coins are tossed. What is the probability of getting exactly two heads?",
        options: ["1/8", "1/2", "3/8", "1/4"],
        answer: 2
    },

    {
        question: "Two dice are rolled. What is the probability of getting a total of 7?",
        options: ["1/12", "1/6", "1/3", "1/2"],
        answer: 1
    }
];


// =============================================
// 8. DISPLAY NOTES
// =============================================

function displayNotes() {

    for (let i = 1; i <= 4; i++) {

        const element = document.getElementById(`unit${i}Notes`);

        if (element) {
            element.innerHTML = unitNotes[i];
        }
    }
}


// =============================================
// 9. DISPLAY WORKED EXAMPLES
// =============================================

function displayExamples() {

    for (let i = 1; i <= 4; i++) {

        const element = document.getElementById(`unit${i}Examples`);

        if (!element) continue;

        element.innerHTML = workedExamples[i].map((example, index) => `

            <div class="example-card">

                <h4>Example ${index + 1}</h4>

                <p><strong>${example.question}</strong></p>

                <ol>
                    ${example.steps.map(step => `<li>${step}</li>`).join("")}
                </ol>

            </div>

        `).join("");
    }
}


// =============================================
// 10. DISPLAY PRACTICE QUESTIONS
// =============================================

function displayPractice() {

    for (let i = 1; i <= 4; i++) {

        const element = document.getElementById(`unit${i}Practice`);

        if (!element) continue;

        element.innerHTML = practiceQuestions[i].map((item, index) => `

            <div class="practice-card">

                <h4>Question ${index + 1}</h4>

                <p>${item.question}</p>

                <input
                    type="text"
                    id="answer-${i}-${index}"
                    placeholder="Enter your answer"
                >

                <button
                    class="action-button"
                    onclick="checkPracticeAnswer(${i}, ${index})">
                    Check Answer
                </button>

                <p id="feedback-${i}-${index}"></p>

            </div>

        `).join("");
    }
}


// =============================================
// 11. CHECK PRACTICE ANSWERS
// =============================================

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/,/g, ".")
        .replace(/−/g, "-");
}


function checkPracticeAnswer(unit, index) {

    const input = document.getElementById(`answer-${unit}-${index}`);

    const feedback = document.getElementById(`feedback-${unit}-${index}`);

    if (!input || !feedback) return;

    const userAnswer = normaliseAnswer(input.value);

    const correctAnswer = normaliseAnswer(
        practiceQuestions[unit][index].answer
    );

    if (userAnswer === correctAnswer) {

        feedback.innerHTML = `
            <span style="color:green;">
                Correct! Well done.
            </span>
        `;

    } else {

        feedback.innerHTML = `
            <span style="color:#dc2626;">
                Not quite. Try again.
            </span>

            <p>
                <strong>Hint:</strong>
                ${practiceQuestions[unit][index].solution}
            </p>
        `;
    }
}


// =============================================
// 12. OPEN AND CLOSE UNITS
// =============================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    if (button) {
        button.textContent = isHidden
            ? "Close Unit ▲"
            : "Start Learning ▼";
    }
}


// =============================================
// 13. QUIZ VARIABLES
// =============================================

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];


// =============================================
// 14. START QUIZ
// =============================================

function startQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];

    const quizArea = document.getElementById("quizArea");
    const quizResults = document.getElementById("quizResults");

    if (quizArea) quizArea.hidden = false;
    if (quizResults) quizResults.hidden = true;

    showQuestion();
}


// =============================================
// 15. SHOW QUIZ QUESTION
// =============================================

function showQuestion() {

    const question = quizQuestions[currentQuestion];

    const questionProgress = document.getElementById("questionProgress");
    const quizScore = document.getElementById("quizScore");
    const progressBar = document.getElementById("progressBar");
    const quizQuestionsElement = document.getElementById("quizQuestions");
    const submitButton = document.getElementById("submitQuiz");

    if (!questionProgress || !quizQuestionsElement) return;

    questionProgress.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    if (quizScore) {
        quizScore.textContent = `Score: ${score}`;
    }

    if (progressBar) {
        progressBar.style.width =
            `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
    }

    quizQuestionsElement.innerHTML = `

        <div class="quiz-question">

            <h3>${question.question}</h3>

            <div class="quiz-options">

                ${question.options.map((option, index) => `

                    <label class="quiz-option">

                        <input
                            type="radio"
                            name="quizAnswer"
                            value="${index}"
                        >

                        ${option}

                    </label>

                `).join("")}

            </div>

        </div>
    `;

    if (submitButton) {
        submitButton.textContent =
            currentQuestion === quizQuestions.length - 1
                ? "Finish Quiz"
                : "Next Question";
    }
}


// =============================================
// 16. SUBMIT QUIZ ANSWER
// =============================================

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer first.");
        return;
    }

    const selectedAnswer = Number(selected.value);

    selectedAnswers[currentQuestion] = selectedAnswer;

    if (selectedAnswer === quizQuestions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        showQuestion();

    } else {

        finishQuiz();
    }
}


// =============================================
// 17. FINISH QUIZ
// =============================================

function finishQuiz() {

    const quizArea = document.getElementById("quizArea");
    const quizResults = document.getElementById("quizResults");
    const finalScore = document.getElementById("finalScore");
    const finalFeedback = document.getElementById("finalFeedback");

    if (quizArea) quizArea.hidden = true;
    if (quizResults) quizResults.hidden = false;

    if (finalScore) {
        finalScore.textContent =
            `You scored ${score} out of ${quizQuestions.length}.`;
    }

    let message = "";

    if (score >= 8) {
        message = "Excellent work! You understand these concepts very well.";
    } else if (score >= 5) {
        message = "Good effort! Revise the questions you found difficult.";
    } else {
        message = "Keep practising. Read the notes and try the quiz again.";
    }

    if (finalFeedback) {
        finalFeedback.textContent = message;
    }
}


// =============================================
// 18. RETRY QUIZ
// =============================================

function retryQuiz() {
    startQuiz();
}


// =============================================
// 19. LOAD EVERYTHING
// =============================================

document.addEventListener("DOMContentLoaded", function () {

    displayNotes();
    displayExamples();
    displayPractice();

});
