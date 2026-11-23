
/* =========================================
   MATHSHELPSA - GRADE 12 STATISTICS
========================================= */


/* =========================================
   1. GRAPH FUNCTIONS
========================================= */

// Create a simple SVG graph with axes and labels
function createGraph(title, xLabel, yLabel, content) {

    return `
        <div class="statistics-graph">

            <h4>${title}</h4>

            <svg viewBox="0 0 600 350"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="${title}">

                <defs>
                    <marker id="arrow-stat"
                            markerWidth="8"
                            markerHeight="8"
                            refX="5"
                            refY="3"
                            orient="auto">
                        <path d="M0,0 L0,6 L6,3 Z"
                              fill="#334155"/>
                    </marker>
                </defs>

                <!-- Grid lines -->
                ${[70, 120, 170, 220, 270].map(y => `
                    <line x1="70" y1="${y}"
                          x2="550" y2="${y}"
                          stroke="#e2e8f0"
                          stroke-width="1"/>
                `).join("")}

                <!-- Axes -->
                <line x1="70" y1="290"
                      x2="560" y2="290"
                      stroke="#334155"
                      stroke-width="2"
                      marker-end="url(#arrow-stat)"/>

                <line x1="70" y1="290"
                      x2="70" y2="35"
                      stroke="#334155"
                      stroke-width="2"
                      marker-end="url(#arrow-stat)"/>

                <!-- Axis labels -->
                <text x="310" y="335"
                      text-anchor="middle"
                      font-size="14"
                      fill="#334155">
                    ${xLabel}
                </text>

                <text x="22" y="165"
                      text-anchor="middle"
                      font-size="14"
                      fill="#334155"
                      transform="rotate(-90 22 165)">
                    ${yLabel}
                </text>

                ${content}

            </svg>

        </div>
    `;
}


// Symmetric distribution
function symmetricGraph() {

    const points = [];

    for (let x = 0; x <= 480; x += 5) {

        const y = 285 - 205 * Math.exp(
            -Math.pow((x - 240) / 90, 2) / 2
        );

        points.push(`${70 + x},${y}`);
    }

    return createGraph(
        "Symmetric Distribution",
        "Values",
        "Frequency",
        `
            <polyline
                points="${points.join(" ")}"
                fill="none"
                stroke="#2563eb"
                stroke-width="4"
                stroke-linejoin="round"/>

            <line x1="310" y1="290"
                  x2="310" y2="80"
                  stroke="#16a34a"
                  stroke-width="2"
                  stroke-dasharray="6,5"/>

            <text x="310" y="65"
                  text-anchor="middle"
                  fill="#16a34a"
                  font-size="13">
                Mean = Median = Mode
            </text>
        `
    );
}


// Positively skewed distribution
function positiveSkewGraph() {

    const points = [];

    for (let x = 0; x <= 480; x += 5) {

        const value =
            270 -
            180 * Math.exp(-x / 75) * (x / 75);

        points.push(`${70 + x},${value}`);
    }

    return createGraph(
        "Positively Skewed Distribution (Right Skew)",
        "Values",
        "Frequency",
        `
            <polyline
                points="${points.join(" ")}"
                fill="none"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linejoin="round"/>

            <line x1="145" y1="290"
                  x2="145" y2="115"
                  stroke="#2563eb"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <line x1="190" y1="290"
                  x2="190" y2="115"
                  stroke="#16a34a"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <line x1="250" y1="290"
                  x2="250" y2="115"
                  stroke="#9333ea"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <text x="145" y="105"
                  fill="#2563eb"
                  font-size="12"
                  text-anchor="middle">Mode</text>

            <text x="190" y="90"
                  fill="#16a34a"
                  font-size="12"
                  text-anchor="middle">Median</text>

            <text x="250" y="75"
                  fill="#9333ea"
                  font-size="12"
                  text-anchor="middle">Mean</text>
        `
    );
}


// Negatively skewed distribution
function negativeSkewGraph() {

    const points = [];

    for (let x = 0; x <= 480; x += 5) {

        const value =
            270 -
            180 * Math.exp(-(480 - x) / 75) *
            ((480 - x) / 75);

        points.push(`${70 + x},${value}`);
    }

    return createGraph(
        "Negatively Skewed Distribution (Left Skew)",
        "Values",
        "Frequency",
        `
            <polyline
                points="${points.join(" ")}"
                fill="none"
                stroke="#dc2626"
                stroke-width="4"
                stroke-linejoin="round"/>

            <line x1="390" y1="290"
                  x2="390" y2="115"
                  stroke="#9333ea"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <line x1="450" y1="290"
                  x2="450" y2="115"
                  stroke="#16a34a"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <line x1="495" y1="290"
                  x2="495" y2="115"
                  stroke="#2563eb"
                  stroke-width="2"
                  stroke-dasharray="5,5"/>

            <text x="390" y="105"
                  fill="#9333ea"
                  font-size="12"
                  text-anchor="middle">Mean</text>

            <text x="450" y="90"
                  fill="#16a34a"
                  font-size="12"
                  text-anchor="middle">Median</text>

            <text x="495" y="75"
                  fill="#2563eb"
                  font-size="12"
                  text-anchor="middle">Mode</text>
        `
    );
}


// Scatter plot generator
function scatterGraph(title, points, line = false, direction = "positive") {

    let pointElements = points.map(point => `
        <circle cx="${point[0]}"
                cy="${point[1]}"
                r="6"
                fill="#2563eb"/>
    `).join("");

    let regression = "";

    if (line) {

        let x1 = 100;
        let x2 = 530;

        let y1;
        let y2;

        if (direction === "positive") {
            y1 = 245;
            y2 = 75;
        } else if (direction === "negative") {
            y1 = 75;
            y2 = 245;
        } else {
            y1 = 160;
            y2 = 160;
        }

        regression = `
            <line x1="${x1}" y1="${y1}"
                  x2="${x2}" y2="${y2}"
                  stroke="#dc2626"
                  stroke-width="3"
                  stroke-dasharray="8,5"/>

            <text x="320" y="45"
                  fill="#dc2626"
                  text-anchor="middle"
                  font-size="13">
                Line of best fit
            </text>
        `;
    }

    return `
        <div class="scatter-plot">

            <h4>${title}</h4>

            <svg viewBox="0 0 600 350"
                 xmlns="http://www.w3.org/2000/svg"
                 role="img"
                 aria-label="${title}">

                <!-- Grid -->
                ${[90, 140, 190, 240, 290].map(y => `
                    <line x1="75" y1="${y}"
                          x2="550" y2="${y}"
                          stroke="#e2e8f0"/>
                `).join("")}

                ${[150, 230, 310, 390, 470].map(x => `
                    <line x1="${x}" y1="50"
                          x2="${x}" y2="290"
                          stroke="#e2e8f0"/>
                `).join("")}

                <!-- Axes -->
                <line x1="75" y1="290"
                      x2="560" y2="290"
                      stroke="#334155"
                      stroke-width="2"/>

                <line x1="75" y1="290"
                      x2="75" y2="40"
                      stroke="#334155"
                      stroke-width="2"/>

                <!-- Axis labels -->
                <text x="310" y="335"
                      text-anchor="middle"
                      font-size="14"
                      fill="#334155">
                    Variable X
                </text>

                <text x="25" y="165"
                      text-anchor="middle"
                      font-size="14"
                      fill="#334155"
                      transform="rotate(-90 25 165)">
                    Variable Y
                </text>

                ${regression}

                ${pointElements}

            </svg>

        </div>
    `;
}


// Regression graph
function regressionGraph() {

    const points = [
        [110, 245],
        [155, 220],
        [205, 210],
        [250, 185],
        [300, 175],
        [350, 150],
        [400, 135],
        [455, 105],
        [510, 90]
    ];

    return scatterGraph(
        "Scatter Plot with a Regression Line",
        points,
        true,
        "positive"
    );
}


/* =========================================
   2. LESSON NOTES
========================================= */

const lessonNotes = {

    1: `

        <div class="note-box">
            <h4>What is Statistics?</h4>

            <p>
                Statistics is the study of collecting,
                organising, analysing and interpreting data.
            </p>
        </div>

        <h4>1. Symmetric Data</h4>

        <p>
            A distribution is symmetric when both sides
            of the graph are approximately mirror images
            of each other.
        </p>

        ${symmetricGraph()}

        <div class="formula-box">
            For a perfectly symmetric, unimodal distribution:
            <br><br>
            Mean = Median = Mode
        </div>

        <h4>2. Positively Skewed Data</h4>

        <p>
            A positively skewed distribution has a long tail
            extending towards the right.
        </p>

        ${positiveSkewGraph()}

        <div class="formula-box">
            Mode < Median < Mean
        </div>

        <p>
            The mean is usually pulled towards the longer
            right-hand tail.
        </p>

        <h4>3. Negatively Skewed Data</h4>

        <p>
            A negatively skewed distribution has a long tail
            extending towards the left.
        </p>

        ${negativeSkewGraph()}

        <div class="formula-box">
            Mean < Median < Mode
        </div>

        <p>
            The mean is usually pulled towards the longer
            left-hand tail.
        </p>

        <h4>4. Comparing the Three Distributions</h4>

        <div class="note-box">
            <p><strong>Symmetric:</strong> Mean = Median = Mode.</p>
            <p><strong>Positive skew:</strong> Mean is usually greatest.</p>
            <p><strong>Negative skew:</strong> Mean is usually smallest.</p>
        </div>

        <h4>5. Important Terms</h4>

        <ul>
            <li><strong>Mean:</strong> The average of the data.</li>
            <li><strong>Median:</strong> The middle value after arranging the data.</li>
            <li><strong>Mode:</strong> The value that occurs most frequently.</li>
            <li><strong>Outlier:</strong> A value that is unusually far from the other values.</li>
            <li><strong>Distribution:</strong> How the data values are spread.</li>
        </ul>

        <div class="theorem-box">
            Remember: The direction of skewness is named
            after the direction of the long tail.
        </div>

    `,


    2: `

        <div class="note-box">

            <h4>What is Bivariate Data?</h4>

            <p>
                Bivariate data involves two variables
                measured for the same person, object or event.
            </p>

            <p>
                Example: The number of hours learners study
                and the marks they obtain in a test.
            </p>

        </div>

        <h4>1. Scatter Plots</h4>

        <p>
            A scatter plot is a graph that uses points to
            show the relationship between two variables.
        </p>

        <p>
            The independent variable is normally placed on
            the horizontal (x) axis, while the dependent
            variable is placed on the vertical (y) axis.
        </p>

        <h4>2. Positive Correlation</h4>

        <p>
            Positive correlation occurs when one variable
            tends to increase as the other variable increases.
        </p>

        ${scatterGraph(
            "Positive Correlation",
            [
                [110, 250], [155, 225], [200, 210],
                [245, 190], [290, 165], [340, 150],
                [390, 125], [440, 105], [500, 80]
            ],
            true,
            "positive"
        )}

        <p class="correlation-positive">
            The points generally move upwards from left to right.
        </p>

        <h4>3. Negative Correlation</h4>

        <p>
            Negative correlation occurs when one variable
            tends to decrease as the other variable increases.
        </p>

        ${scatterGraph(
            "Negative Correlation",
            [
                [110, 75], [155, 100], [205, 120],
                [250, 145], [300, 160], [350, 190],
                [400, 205], [450, 230], [510, 255]
            ],
            true,
            "negative"
        )}

        <p class="correlation-negative">
            The points generally move downwards from left to right.
        </p>

        <h4>4. No Correlation</h4>

        <p>
            No correlation means there is no clear linear
            relationship between the two variables.
        </p>

        ${scatterGraph(
            "No Correlation",
            [
                [110, 170], [155, 80], [200, 240],
                [245, 125], [290, 205], [340, 70],
                [390, 225], [440, 145], [500, 190]
            ],
            false
        )}

        <p class="correlation-none">
            The points do not follow a clear upward or downward pattern.
        </p>

        <h4>5. Strength of Correlation</h4>

        <div class="note-box">
            <p><strong>Strong correlation:</strong>
                Points are close to a straight line.</p>

            <p><strong>Moderate correlation:</strong>
                Points show a pattern but are more spread out.</p>

            <p><strong>Weak correlation:</strong>
                Points are widely spread around a possible trend.</p>
        </div>

        <h4>6. Regression Lines</h4>

        <p>
            A regression line is a straight line that describes
            the general relationship between two variables.
            It is also called a line of best fit.
        </p>

        ${regressionGraph()}

        <div class="formula-box">
            Regression equation:
            <br><br>
            y = a + bx
            <br><br>
            a = y-intercept
            <br>
            b = gradient (slope)
        </div>

        <h4>7. Using a Regression Equation</h4>

        <p>
            A regression equation can be used to estimate
            the value of one variable when the other variable
            is known.
        </p>

        <div class="note-box">
            Example:
            <br><br>
            Suppose the regression equation is:
            <br>
            y = 5 + 3x
            <br><br>
            If x = 4:
            <br>
            y = 5 + 3(4)
            <br>
            y = 17
        </div>

        <h4>8. Important: Correlation Does Not Mean Causation</h4>

        <p>
            Two variables may be correlated, but this does
            not automatically mean that one variable causes
            the other to change.
        </p>

        <div class="theorem-box">
            Be careful when making predictions. Predictions
            outside the range of the observed data are called
            extrapolations and may be unreliable.
        </div>

    `

};


/* =========================================
   3. WORKED EXAMPLES
========================================= */

const workedExamples = {

    1: [

        {
            question:
                "A distribution has a mean of 45, a median of 40 and a mode of 35. Identify the type of distribution.",

            steps: [
                "Step 1: Write down the values.",
                "Mean = 45, Median = 40, Mode = 35.",
                "Step 2: Compare the three values.",
                "Mode < Median < Mean.",
                "Step 3: Identify the distribution.",
                "The mean is greatest, so the distribution is positively skewed."
            ],

            answer: "Positively skewed distribution."
        },

        {
            question:
                "A distribution has a mean of 20, median of 25 and mode of 30. What type of distribution is it?",

            steps: [
                "Step 1: Write down the values.",
                "Mean = 20, Median = 25, Mode = 30.",
                "Step 2: Compare the values.",
                "Mean < Median < Mode.",
                "Step 3: Identify the distribution.",
                "The mean is smallest, so the distribution is negatively skewed."
            ],

            answer: "Negatively skewed distribution."
        },

        {
            question:
                "A graph is balanced on both sides and has approximately the same shape on the left and right. Identify the distribution.",

            steps: [
                "Step 1: Observe the shape of the graph.",
                "Step 2: The left and right sides are approximately mirror images.",
                "Step 3: This is a symmetric distribution."
            ],

            answer: "Symmetric distribution."
        }

    ],


    2: [

        {
            question:
                "The number of hours studied and test marks obtained by learners increase together. Identify the correlation.",

            steps: [
                "Step 1: Identify the two variables.",
                "Hours studied and test marks.",
                "Step 2: Observe their relationship.",
                "As study hours increase, test marks also tend to increase.",
                "Step 3: Identify the correlation.",
                "Both variables increase together."
            ],

            answer: "Positive correlation."
        },

        {
            question:
                "The regression equation for two variables is y = 4 + 2x. Calculate y when x = 6.",

            steps: [
                "Step 1: Write the regression equation.",
                "y = 4 + 2x.",
                "Step 2: Substitute x = 6.",
                "y = 4 + 2(6).",
                "Step 3: Calculate.",
                "y = 4 + 12.",
                "y = 16."
            ],

            answer: "16"
        },

        {
            question:
                "A regression line is given by y = 10 - 3x. Calculate y when x = 4.",

            steps: [
                "Step 1: Write the equation.",
                "y = 10 - 3x.",
                "Step 2: Substitute x = 4.",
                "y = 10 - 3(4).",
                "Step 3: Calculate.",
                "y = 10 - 12.",
                "y = -2."
            ],

            answer: "-2"
        }

    ]

};


/* =========================================
   4. PRACTICE QUESTIONS
========================================= */

const practiceQuestions = {

    1: [

        {
            question:
                "A distribution has mean 60, median 55 and mode 50. Is it positively or negatively skewed?",

            answer: "positive",
            explanation:
                "Mean > Median > Mode, so the distribution is positively skewed."
        },

        {
            question:
                "A distribution has mean 15, median 20 and mode 25. Is it positively or negatively skewed?",

            answer: "negative",
            explanation:
                "Mean < Median < Mode, so the distribution is negatively skewed."
        },

        {
            question:
                "What is the relationship between mean, median and mode in a perfectly symmetric unimodal distribution?",

            answer: "mean=median=mode",
            explanation:
                "In a perfectly symmetric, unimodal distribution, mean, median and mode are equal."
        },

        {
            question:
                "In a positively skewed distribution, which measure is usually the greatest: mean, median or mode?",

            answer: "mean",
            explanation:
                "The mean is usually pulled towards the longer right-hand tail."
        },

        {
            question:
                "In which direction does the long tail extend in a negatively skewed distribution?",

            answer: "left",
            explanation:
                "A negatively skewed distribution has a long tail extending to the left."
        }

    ],


    2: [

        {
            question:
                "When two variables increase together, what type of correlation is present?",

            answer: "positive",
            explanation:
                "Both variables tend to increase together, indicating positive correlation."
        },

        {
            question:
                "When one variable increases while the other decreases, what type of correlation is present?",

            answer: "negative",
            explanation:
                "One variable tends to decrease as the other increases, indicating negative correlation."
        },

        {
            question:
                "Given y = 6 + 2x, calculate y when x = 5.",

            answer: "16",
            explanation:
                "y = 6 + 2(5) = 6 + 10 = 16."
        },

        {
            question:
                "Given y = 20 - 4x, calculate y when x = 3.",

            answer: "8",
            explanation:
                "y = 20 - 4(3) = 20 - 12 = 8."
        },

        {
            question:
                "What is the name of the straight line that best represents the relationship between two variables?",

            answer: "regression line",
            explanation:
                "The regression line is also called the line of best fit."
        }

    ]

};


/* =========================================
   5. DISPLAY LESSON NOTES
========================================= */

function displayNotes() {

    for (let unit = 1; unit <= 2; unit++) {

        const notesElement =
            document.getElementById(`unit${unit}Notes`);

        if (notesElement) {
            notesElement.innerHTML = lessonNotes[unit];
        }

    }

}


/* =========================================
   6. DISPLAY WORKED EXAMPLES
========================================= */

function displayExamples() {

    for (let unit = 1; unit <= 2; unit++) {

        const examplesElement =
            document.getElementById(`unit${unit}Examples`);

        if (!examplesElement) continue;

        examplesElement.innerHTML =
            workedExamples[unit].map((example, index) => `

                <div class="example-card">

                    <h4>Example ${index + 1}</h4>

                    <p class="question">
                        ${example.question}
                    </p>

                    <div class="solution">

                        <h4>Solution</h4>

                        ${example.steps.map(step => `
                            <p>${step}</p>
                        `).join("")}

                        <div class="formula-box">
                            Final Answer: ${example.answer}
                        </div>

                    </div>

                </div>

            `).join("");

    }

}


/* =========================================
   7. DISPLAY PRACTICE QUESTIONS
========================================= */

function displayPractice() {

    for (let unit = 1; unit <= 2; unit++) {

        const practiceElement =
            document.getElementById(`unit${unit}Practice`);

        if (!practiceElement) continue;

        practiceElement.innerHTML =
            practiceQuestions[unit].map((question, index) => `

                <div class="practice-card">

                    <p>
                        Question ${index + 1}: ${question.question}
                    </p>

                    <input
                        type="text"
                        id="practice-${unit}-${index}"
                        placeholder="Enter your answer"
                    >

                    <button
                        onclick="checkPracticeAnswer(${unit}, ${index})">
                        Check Answer
                    </button>

                    <p
                        class="feedback"
                        id="feedback-${unit}-${index}">
                    </p>

                </div>

            `).join("");

    }

}


/* =========================================
   8. CHECK PRACTICE ANSWERS
========================================= */

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/,/g, ".");
}


function checkPracticeAnswer(unit, index) {

    const input =
        document.getElementById(`practice-${unit}-${index}`);

    const feedback =
        document.getElementById(`feedback-${unit}-${index}`);

    const correctAnswer =
        practiceQuestions[unit][index].answer;

    const explanation =
        practiceQuestions[unit][index].explanation;

    if (!input.value.trim()) {

        feedback.textContent = "Please enter an answer first.";
        feedback.style.color = "#dc2626";

        return;
    }

    const userAnswer =
        normaliseAnswer(input.value);

    const expectedAnswer =
        normaliseAnswer(correctAnswer);

    if (userAnswer === expectedAnswer) {

        feedback.innerHTML =
            "Correct! Well done. " + explanation;

        feedback.style.color = "#15803d";

    } else {

        feedback.innerHTML =
            "Not quite. Try again. Hint: " + explanation;

        feedback.style.color = "#dc2626";

    }

}


/* =========================================
   9. OPEN AND CLOSE UNIT SECTIONS
========================================= */

function toggleSection(sectionId, button) {

    const section =
        document.getElementById(sectionId);

    if (!section) return;

    section.hidden = !section.hidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = section.hidden ? "＋" : "−";
    }

}


/* =========================================
   10. QUIZ QUESTIONS
========================================= */

const quizQuestions = [

    {
        question:
            "What is the relationship between the mean, median and mode in a perfectly symmetric unimodal distribution?",

        options: [
            "Mean > Median > Mode",
            "Mean = Median = Mode",
            "Mean < Median < Mode",
            "Mean = Mode only"
        ],

        answer: 1
    },

    {
        question:
            "A distribution with a long tail to the right is called:",

        options: [
            "Negatively skewed",
            "Symmetric",
            "Positively skewed",
            "Uniform"
        ],

        answer: 2
    },

    {
        question:
            "Which measure is usually greatest in a positively skewed distribution?",

        options: [
            "Mode",
            "Median",
            "Mean",
            "All are equal"
        ],

        answer: 2
    },

    {
        question:
            "What type of correlation occurs when two variables tend to increase together?",

        options: [
            "Negative correlation",
            "Positive correlation",
            "No correlation",
            "Zero gradient"
        ],

        answer: 1
    },

    {
        question:
            "What type of correlation occurs when one variable increases and the other decreases?",

        options: [
            "Positive correlation",
            "No correlation",
            "Negative correlation",
            "Perfect symmetry"
        ],

        answer: 2
    },

    {
        question:
            "What is another name for a regression line?",

        options: [
            "Frequency curve",
            "Line of best fit",
            "Symmetry line",
            "Bar graph"
        ],

        answer: 1
    },

    {
        question:
            "Given y = 5 + 3x, calculate y when x = 4.",

        options: [
            "12",
            "15",
            "17",
            "20"
        ],

        answer: 2
    },

    {
        question:
            "In the regression equation y = a + bx, what does b represent?",

        options: [
            "The y-intercept",
            "The gradient",
            "The mean",
            "The median"
        ],

        answer: 1
    },

    {
        question:
            "What does a scatter plot with points widely spread and no clear pattern suggest?",

        options: [
            "Strong positive correlation",
            "Strong negative correlation",
            "No clear linear correlation",
            "Perfect correlation"
        ],

        answer: 2
    },

    {
        question:
            "What is extrapolation?",

        options: [
            "Using a graph to find the mode",
            "Predicting outside the observed data range",
            "Finding the median",
            "Drawing a symmetric graph"
        ],

        answer: 1
    }

];


/* =========================================
   11. QUIZ VARIABLES
========================================= */

let currentQuestion = 0;
let score = 0;
let selectedAnswers = [];


/* =========================================
   12. START QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;
    score = 0;
    selectedAnswers = [];

    const quizArea =
        document.getElementById("quizArea");

    const quizResults =
        document.getElementById("quizResults");

    const startButton =
        document.getElementById("startQuiz");

    if (quizArea) quizArea.hidden = false;

    if (quizResults) quizResults.hidden = true;

    if (startButton) startButton.hidden = true;

    const scoreElement =
        document.getElementById("quizScore");

    if (scoreElement) {
        scoreElement.textContent = "Score: 0";
    }

    showQuestion();

}


/* =========================================
   13. SHOW QUIZ QUESTION
========================================= */

function showQuestion() {

    const question =
        quizQuestions[currentQuestion];

    const questionContainer =
        document.getElementById("quizQuestions");

    const progress =
        document.getElementById("questionProgress");

    const progressBar =
        document.getElementById("progressBar");

    const submitButton =
        document.getElementById("submitQuiz");

    if (!questionContainer) return;

    progress.textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    progressBar.style.width =
        `${(currentQuestion / quizQuestions.length) * 100}%`;

    questionContainer.innerHTML = `

        <div class="quiz-question">

            <h4>
                ${currentQuestion + 1}. ${question.question}
            </h4>

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

    `;

    submitButton.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =========================================
   14. SUBMIT QUIZ ANSWER
========================================= */

function submitQuiz() {

    const selected =
        document.querySelector(
            'input[name="quizAnswer"]:checked'
        );

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;
    }

    const answer = Number(selected.value);

    selectedAnswers[currentQuestion] = answer;

    if (answer === quizQuestions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {

        document.getElementById("quizScore").textContent =
            `Score: ${score}`;

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================
   15. FINISH QUIZ
========================================= */

function finishQuiz() {

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("startQuiz").hidden = true;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").textContent =
        `${score} / ${quizQuestions.length}`;

    let feedback = "";

    const percentage =
        (score / quizQuestions.length) * 100;

    if (percentage >= 80) {

        feedback =
            "Excellent work! You understand Statistics very well.";

    } else if (percentage >= 60) {

        feedback =
            "Good job! Keep practising to improve your understanding.";

    } else if (percentage >= 40) {

        feedback =
            "You are making progress. Revise the lesson notes and try again.";

    } else {

        feedback =
            "Keep learning! Go through the examples and practise again.";

    }

    document.getElementById("finalFeedback").textContent =
        feedback;

}


/* =========================================
   16. RETRY QUIZ
========================================= */

function retryQuiz() {

    startQuiz();

}


/* =========================================
   17. LOAD EVERYTHING
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    displayNotes();

    displayExamples();

    displayPractice();

});
