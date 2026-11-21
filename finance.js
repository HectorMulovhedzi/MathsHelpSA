
/* ==========================================
   MATHSHELP SA
   GRADE 11
   FINANCE, GROWTH AND DECAY
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

    // Redraw graphs when their hidden sections are opened.
    if (isHidden) {
        requestAnimationFrame(drawAllFinanceGraphs);
    }
}


/* ==========================================
   2. SHOW AND HIDE ANSWERS
========================================== */

function toggleAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isHidden = answer.hidden;

    answer.hidden = !isHidden;

    button.textContent = isHidden
        ? "Hide Solution"
        : "Show Solution";
}


/* ==========================================
   3. NUMBER FORMATTING
========================================== */

function formatMoney(amount) {

    return "R" + amount.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}

function formatNumber(number) {

    return number.toLocaleString("en-ZA", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

}


/* ==========================================
   4. COMPOUND GROWTH WORKED EXAMPLES
========================================== */

const growthExamples = [

    {
        question: "An investment of R1 000 earns compound interest at 10% per year for 3 years. Calculate the final amount.",
        principal: 1000,
        rate: 10,
        years: 3
    },

    {
        question: "R5 000 is invested at 8% compound interest per year for 4 years. Calculate the final amount.",
        principal: 5000,
        rate: 8,
        years: 4
    },

    {
        question: "A business has a value of R20 000. Its value increases by 5% each year. Calculate its value after 3 years.",
        principal: 20000,
        rate: 5,
        years: 3
    },

    {
        question: "An investment of R12 000 grows at 12% compound interest per year for 2 years. Calculate the final amount.",
        principal: 12000,
        rate: 12,
        years: 2
    },

    {
        question: "A population of 2 000 increases by 4% each year. Calculate the population after 5 years.",
        principal: 2000,
        rate: 4,
        years: 5,
        money: false
    },

    {
        question: "R8 500 is invested at 6% compound interest per year for 6 years. Calculate the final amount.",
        principal: 8500,
        rate: 6,
        years: 6
    },

    {
        question: "A machine is worth R30 000. Its value increases by 7% per year. Find its value after 4 years.",
        principal: 30000,
        rate: 7,
        years: 4
    },

    {
        question: "An investment of R15 000 earns 9% compound interest per year for 5 years. Calculate the final amount.",
        principal: 15000,
        rate: 9,
        years: 5
    },

    {
        question: "A town has 10 000 people. Its population grows by 3% each year. Find the population after 6 years.",
        principal: 10000,
        rate: 3,
        years: 6,
        money: false
    },

    {
        question: "R25 000 is invested at 11% compound interest per year for 3 years. Calculate the final amount.",
        principal: 25000,
        rate: 11,
        years: 3
    }

];


/* ==========================================
   5. COMPOUND DECAY WORKED EXAMPLES
========================================== */

const decayExamples = [

    {
        question: "A car is bought for R200 000 and depreciates by 10% per year. Calculate its value after 2 years.",
        principal: 200000,
        rate: 10,
        years: 2
    },

    {
        question: "A machine costs R50 000 and loses 8% of its value each year. Find its value after 3 years.",
        principal: 50000,
        rate: 8,
        years: 3
    },

    {
        question: "A computer is worth R15 000. It depreciates by 15% per year. Calculate its value after 2 years.",
        principal: 15000,
        rate: 15,
        years: 2
    },

    {
        question: "A vehicle is worth R350 000. Its value decreases by 12% each year. Find its value after 4 years.",
        principal: 350000,
        rate: 12,
        years: 4
    },

    {
        question: "A piece of equipment is worth R80 000 and depreciates by 5% per year. Calculate its value after 5 years.",
        principal: 80000,
        rate: 5,
        years: 5
    },

    {
        question: "A phone costs R12 000 and loses 20% of its value each year. Find its value after 3 years.",
        principal: 12000,
        rate: 20,
        years: 3
    },

    {
        question: "A machine is worth R100 000. It depreciates by 7% per year. Calculate its value after 6 years.",
        principal: 100000,
        rate: 7,
        years: 6
    },

    {
        question: "A vehicle worth R250 000 decreases in value by 9% each year. Find its value after 3 years.",
        principal: 250000,
        rate: 9,
        years: 3
    },

    {
        question: "A town has a population of 20 000. Its population decreases by 2% each year. Find the population after 4 years.",
        principal: 20000,
        rate: 2,
        years: 4,
        money: false
    },

    {
        question: "A piece of equipment costs R60 000 and depreciates by 10% each year. Calculate its value after 5 years.",
        principal: 60000,
        rate: 10,
        years: 5
    }

];


/* ==========================================
   6. DISPLAY WORKED EXAMPLES
========================================== */

function displayFinanceExamples(data, containerId, type) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    data.forEach((example, index) => {

        const answerId = `${containerId}Answer${index}`;

        const isGrowth = type === "growth";

        const factor = isGrowth
            ? 1 + example.rate / 100
            : 1 - example.rate / 100;

        const amount = example.principal * Math.pow(
            factor,
            example.years
        );

        const principalText = example.money === false
            ? example.principal.toLocaleString("en-ZA")
            : formatMoney(example.principal);

        const amountText = example.money === false
            ? Math.round(amount).toLocaleString("en-ZA")
            : formatMoney(amount);

        const finalAmount = example.money === false
            ? formatNumber(amount)
            : formatMoney(amount);

        const formula = isGrowth
            ? "A = P(1 + i)<sup>n</sup>"
            : "A = P(1 − i)<sup>n</sup>";

        const factorText = isGrowth
            ? `1 + ${example.rate / 100}`
            : `1 − ${example.rate / 100}`;

        const card = document.createElement("div");

        card.className = "example-card";

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

                <h4>Step-by-step solution:</h4>

                <p><strong>Step 1: Write down the formula.</strong></p>

                <p>${formula}</p>

                <p><strong>Step 2: Identify the values.</strong></p>

                <p>P = ${principalText}</p>
                <p>i = ${example.rate}% = ${example.rate / 100}</p>
                <p>n = ${example.years}</p>

                <p><strong>Step 3: Substitute into the formula.</strong></p>

                <p>
                    A = ${principalText} × (${factorText})<sup>${example.years}</sup>
                </p>

                <p><strong>Step 4: Calculate.</strong></p>

                <p>
                    A = ${amountText}
                </p>

                <div class="final-answer">
                    Final Answer: ${finalAmount}
                    ${example.money === false ? "people" : ""}
                </div>

            </div>

        `;

        container.appendChild(card);

    });

}


/* ==========================================
   7. GROWTH PRACTICE QUESTIONS
========================================== */

const growthPractice = [

    {
        question: "R2 000 is invested at 5% compound interest per year for 2 years. Calculate the final amount.",
        principal: 2000,
        rate: 5,
        years: 2
    },

    {
        question: "R4 000 is invested at 10% compound interest per year for 3 years. Calculate the final amount.",
        principal: 4000,
        rate: 10,
        years: 3
    },

    {
        question: "A population of 5 000 grows by 2% per year. Find the population after 4 years.",
        principal: 5000,
        rate: 2,
        years: 4,
        money: false
    },

    {
        question: "R10 000 is invested at 7% compound interest per year for 5 years. Find the final amount.",
        principal: 10000,
        rate: 7,
        years: 5
    },

    {
        question: "A business worth R50 000 increases in value by 6% per year. Find its value after 3 years.",
        principal: 50000,
        rate: 6,
        years: 3
    },

    {
        question: "R8 000 is invested at 12% compound interest per year for 2 years. Calculate the final amount.",
        principal: 8000,
        rate: 12,
        years: 2
    },

    {
        question: "A town has 12 000 people. Its population grows by 3% per year. Find the population after 5 years.",
        principal: 12000,
        rate: 3,
        years: 5,
        money: false
    },

    {
        question: "R15 000 is invested at 8% compound interest per year for 4 years. Calculate the final amount.",
        principal: 15000,
        rate: 8,
        years: 4
    },

    {
        question: "A company's value is R75 000 and grows by 4% per year. Calculate its value after 6 years.",
        principal: 75000,
        rate: 4,
        years: 6
    },

    {
        question: "R30 000 is invested at 9% compound interest per year for 5 years. Find the final amount.",
        principal: 30000,
        rate: 9,
        years: 5
    }

];


/* ==========================================
   8. DECAY PRACTICE QUESTIONS
========================================== */

const decayPractice = [

    {
        question: "A car worth R100 000 depreciates by 10% per year. Find its value after 2 years.",
        principal: 100000,
        rate: 10,
        years: 2
    },

    {
        question: "A machine worth R40 000 loses 5% of its value each year. Calculate its value after 3 years.",
        principal: 40000,
        rate: 5,
        years: 3
    },

    {
        question: "A phone worth R10 000 depreciates by 20% per year. Find its value after 2 years.",
        principal: 10000,
        rate: 20,
        years: 2
    },

    {
        question: "A vehicle worth R250 000 depreciates by 8% per year. Find its value after 4 years.",
        principal: 250000,
        rate: 8,
        years: 4
    },

    {
        question: "A machine costs R60 000 and loses 10% of its value each year. Calculate its value after 3 years.",
        principal: 60000,
        rate: 10,
        years: 3
    },

    {
        question: "A population of 10 000 decreases by 3% each year. Find the population after 5 years.",
        principal: 10000,
        rate: 3,
        years: 5,
        money: false
    },

    {
        question: "A computer worth R20 000 depreciates by 15% per year. Find its value after 2 years.",
        principal: 20000,
        rate: 15,
        years: 2
    },

    {
        question: "A vehicle worth R180 000 decreases in value by 6% per year. Find its value after 5 years.",
        principal: 180000,
        rate: 6,
        years: 5
    },

    {
        question: "A piece of equipment worth R90 000 depreciates by 12% per year. Calculate its value after 3 years.",
        principal: 90000,
        rate: 12,
        years: 3
    },

    {
        question: "A town has 25 000 people. Its population decreases by 2% per year. Find the population after 6 years.",
        principal: 25000,
        rate: 2,
        years: 6,
        money: false
    }

];


/* ==========================================
   9. DISPLAY PRACTICE QUESTIONS
========================================== */

function displayFinancePractice(data, containerId, type) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    const isGrowth = type === "growth";

    data.forEach((item, index) => {

        const answerId = `${containerId}Answer${index}`;

        const factor = isGrowth
            ? 1 + item.rate / 100
            : 1 - item.rate / 100;

        const amount = item.principal * Math.pow(
            factor,
            item.years
        );

        const principalText = item.money === false
            ? item.principal.toLocaleString("en-ZA")
            : formatMoney(item.principal);

        const amountText = item.money === false
            ? formatNumber(amount)
            : formatMoney(amount);

        const formula = isGrowth
            ? "A = P(1 + i)<sup>n</sup>"
            : "A = P(1 − i)<sup>n</sup>";

        const factorText = isGrowth
            ? `1 + ${item.rate / 100}`
            : `1 − ${item.rate / 100}`;

        const card = document.createElement("div");

        card.className = "practice-card";

        card.innerHTML = `

            <span class="question-number">
                Question ${index + 1}
            </span>

            <p>${item.question}</p>

            <button class="answer-button"
                    onclick="toggleAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer" id="${answerId}" hidden>

                <p><strong>Formula:</strong></p>

                <p>${formula}</p>

                <p><strong>Substitution:</strong></p>

                <p>
                    A = ${principalText} × (${factorText})<sup>${item.years}</sup>
                </p>

                <p><strong>Calculation:</strong></p>

                <p>A = ${amountText}</p>

                <p>
                    <strong>Final Answer:</strong>
                    ${amountText}
                    ${item.money === false ? "people" : ""}
                </p>

            </div>

        `;

        container.appendChild(card);

    });

}


/* ==========================================
   10. DRAW GRAPHS
========================================== */

function drawFinanceGraph(canvasId, principal, rate, type, title) {

    const canvas = document.getElementById(canvasId);

    if (!canvas) return;

    const context = canvas.getContext("2d");

    if (!context) return;

    const width = 800;
    const height = 400;

    canvas.width = width;
    canvas.height = height;

    const paddingLeft = 85;
    const paddingRight = 35;
    const paddingTop = 45;
    const paddingBottom = 65;

    const graphWidth = width - paddingLeft - paddingRight;
    const graphHeight = height - paddingTop - paddingBottom;

    const periods = 10;

    let values = [];

    for (let year = 0; year <= periods; year++) {

        const factor = type === "growth"
            ? 1 + rate / 100
            : 1 - rate / 100;

        values.push(
            principal * Math.pow(factor, year)
        );

    }

    const maxValue = Math.max(...values) * 1.12;
    const minValue = 0;

    function xPosition(year) {

        return paddingLeft +
            (year / periods) * graphWidth;

    }

    function yPosition(value) {

        return paddingTop +
            graphHeight -
            ((value - minValue) / (maxValue - minValue)) * graphHeight;

    }

    // Background

    context.clearRect(0, 0, width, height);

    context.fillStyle = "#ffffff";

    context.fillRect(0, 0, width, height);


    // Graph title

    context.fillStyle = "#1e40af";

    context.font = "bold 20px Arial";

    context.textAlign = "center";

    context.fillText(title, width / 2, 25);


    // Grid lines

    context.strokeStyle = "#dbeafe";

    context.lineWidth = 1;

    for (let i = 0; i <= 5; i++) {

        const y = paddingTop + (graphHeight / 5) * i;

        context.beginPath();

        context.moveTo(paddingLeft, y);

        context.lineTo(width - paddingRight, y);

        context.stroke();

    }

    for (let year = 0; year <= periods; year++) {

        const x = xPosition(year);

        context.beginPath();

        context.moveTo(x, paddingTop);

        context.lineTo(x, height - paddingBottom);

        context.stroke();

    }


    // Axes

    context.strokeStyle = "#172554";

    context.lineWidth = 2;

    context.beginPath();

    context.moveTo(paddingLeft, paddingTop);

    context.lineTo(paddingLeft, height - paddingBottom);

    context.lineTo(width - paddingRight, height - paddingBottom);

    context.stroke();


    // X-axis labels

    context.fillStyle = "#172554";

    context.font = "12px Arial";

    context.textAlign = "center";

    for (let year = 0; year <= periods; year++) {

        context.fillText(
            year,
            xPosition(year),
            height - paddingBottom + 22
        );

    }


    // Y-axis labels

    context.textAlign = "right";

    for (let i = 0; i <= 5; i++) {

        const value = maxValue - (maxValue / 5) * i;

        const y = paddingTop + (graphHeight / 5) * i;

        context.fillText(
            Math.round(value).toLocaleString("en-ZA"),
            paddingLeft - 10,
            y + 4
        );

    }


    // Axis titles

    context.fillStyle = "#172554";

    context.font = "bold 14px Arial";

    context.textAlign = "center";

    context.fillText(
        "Time (years)",
        paddingLeft + graphWidth / 2,
        height - 12
    );

    context.save();

    context.translate(20, paddingTop + graphHeight / 2);

    context.rotate(-Math.PI / 2);

    context.fillText("Amount / Value (R)", 0, 0);

    context.restore();


    // Draw curve

    context.beginPath();

    context.strokeStyle = type === "growth"
        ? "#16a34a"
        : "#dc2626";

    context.lineWidth = 4;

    values.forEach((value, index) => {

        const x = xPosition(index);

        const y = yPosition(value);

        if (index === 0) {
            context.moveTo(x, y);
        } else {
            context.lineTo(x, y);
        }

    });

    context.stroke();


    // Draw points

    values.forEach((value, index) => {

        const x = xPosition(index);

        const y = yPosition(value);

        context.beginPath();

        context.arc(x, y, 4, 0, Math.PI * 2);

        context.fillStyle = type === "growth"
            ? "#16a34a"
            : "#dc2626";

        context.fill();

    });

}


/* ==========================================
   11. DRAW BOTH GRAPHS
========================================== */

function drawAllFinanceGraphs() {

    drawFinanceGraph(
        "growthGraph",
        1000,
        10,
        "growth",
        "Compound Growth: 10% per year"
    );

    drawFinanceGraph(
        "decayGraph",
        200000,
        10,
        "decay",
        "Compound Decay: 10% per year"
    );

}


/* ==========================================
   12. QUIZ QUESTIONS
========================================== */

const growthQuizQuestions = [

    {
        question: "Which formula is used for compound growth?",
        options: [
            "A = P(1 + i)ⁿ",
            "A = P(1 − i)ⁿ",
            "A = P × i × n",
            "A = P + i"
        ],
        answer: 0,
        explanation: "Compound growth uses A = P(1 + i)ⁿ."
    },

    {
        question: "Convert 8% into a decimal.",
        options: [
            "0.8",
            "0.08",
            "8.0",
            "0.008"
        ],
        answer: 1,
        explanation: "8 ÷ 100 = 0.08."
    },

    {
        question: "R1 000 is invested at 10% compound interest for 2 years. What is the final amount?",
        options: [
            "R1 100",
            "R1 200",
            "R1 210",
            "R1 220"
        ],
        answer: 2,
        explanation: "A = 1 000(1.10)² = R1 210."
    },

    {
        question: "What does n represent in the compound growth formula?",
        options: [
            "The interest rate",
            "The original amount",
            "The final amount",
            "The number of periods"
        ],
        answer: 3,
        explanation: "n represents the number of growth periods."
    },

    {
        question: "A population of 5 000 grows by 10% per year. What is the population after one year?",
        options: [
            "5 100",
            "5 500",
            "6 000",
            "4 500"
        ],
        answer: 1,
        explanation: "5 000 × 1.10 = 5 500."
    }

];


const decayQuizQuestions = [

    {
        question: "Which formula is used for compound decay?",
        options: [
            "A = P(1 + i)ⁿ",
            "A = P(1 − i)ⁿ",
            "A = P × i × n",
            "A = P + i"
        ],
        answer: 1,
        explanation: "Compound decay uses A = P(1 − i)ⁿ."
    },

    {
        question: "Convert a 15% decay rate into a decay factor.",
        options: [
            "1.15",
            "0.15",
            "0.85",
            "0.95"
        ],
        answer: 2,
        explanation: "1 − 0.15 = 0.85."
    },

    {
        question: "A car worth R100 000 depreciates by 10% in one year. What is its value after one year?",
        options: [
            "R90 000",
            "R95 000",
            "R110 000",
            "R80 000"
        ],
        answer: 0,
        explanation: "100 000 × 0.90 = R90 000."
    },

    {
        question: "What does depreciation mean?",
        options: [
            "An increase in value",
            "A decrease in value",
            "No change in value",
            "An increase in interest"
        ],
        answer: 1,
        explanation: "Depreciation is the decrease in the value of an asset."
    },

    {
        question: "A machine worth R20 000 loses 20% of its value in one year. What is its value after one year?",
        options: [
            "R18 000",
            "R16 000",
            "R14 000",
            "R24 000"
        ],
        answer: 1,
        explanation: "20 000 × 0.80 = R16 000."
    }

];


/* ==========================================
   13. CREATE QUIZ
========================================== */

function createFinanceQuiz(questions, areaId, prefix) {

    const area = document.getElementById(areaId);

    if (!area) return;

    area.innerHTML = "";

    questions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "quiz-question-card";

        card.innerHTML = `

            <h3>Question ${index + 1}</h3>

            <p>${question.question}</p>

            ${question.options.map((option, optionIndex) => `

                <label class="quiz-option">

                    <input
                        type="radio"
                        name="${prefix}Question${index}"
                        value="${optionIndex}"
                    >

                    ${option}

                </label>

            `).join("")}

        `;

        area.appendChild(card);

    });

}


/* ==========================================
   14. MARK QUIZ AND SHOW CORRECTIONS
========================================== */

function submitFinanceQuiz(questions, prefix, scoreId, correctionsId, resultsId, buttonId) {

    const scoreElement = document.getElementById(scoreId);

    const correctionsElement = document.getElementById(correctionsId);

    const resultsElement = document.getElementById(resultsId);

    const submitButton = document.getElementById(buttonId);

    if (!scoreElement || !correctionsElement || !resultsElement) {
        return;
    }

    let score = 0;

    correctionsElement.innerHTML = "";

    questions.forEach((question, index) => {

        const selected = document.querySelector(
            `input[name="${prefix}Question${index}"]:checked`
        );

        const selectedAnswer = selected
            ? Number(selected.value)
            : -1;

        const isCorrect = selectedAnswer === question.answer;

        if (isCorrect) {
            score++;
        }

        const learnerAnswer = selectedAnswer === -1
            ? "Not answered"
            : question.options[selectedAnswer];

        const correctAnswer = question.options[question.answer];

        const correction = document.createElement("div");

        correction.className = isCorrect
            ? "quiz-correction correct"
            : "quiz-correction incorrect";

        correction.innerHTML = `

            <h4>Question ${index + 1}</h4>

            <p>
                <strong>Your answer:</strong>
                ${learnerAnswer}
            </p>

            <p>
                <strong>Correct answer:</strong>
                ${correctAnswer}
            </p>

            <p>
                <strong>Explanation:</strong>
                ${question.explanation}
            </p>

            <p>
                <strong>Result:</strong>
                ${isCorrect ? "Correct" : "Incorrect"}
            </p>

        `;

        correctionsElement.appendChild(correction);

    });

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    let feedback = "";

    if (percentage >= 80) {
        feedback = "Excellent work! You understand this topic very well.";
    } else if (percentage >= 60) {
        feedback = "Good effort! Review the questions you got wrong.";
    } else if (percentage >= 40) {
        feedback = "Keep practising. Go through the notes and worked examples again.";
    } else {
        feedback = "Revise the notes and worked examples, then try the quiz again.";
    }

    scoreElement.innerHTML = `
        You scored ${score} out of ${questions.length}
        (${percentage}%).<br>
        ${feedback}
    `;

    resultsElement.hidden = false;

    if (submitButton) {
        submitButton.disabled = true;
    }

    resultsElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   15. RETRY QUIZ
========================================== */

function retryFinanceQuiz(questions, areaId, prefix, resultsId, submitButtonId) {

    const results = document.getElementById(resultsId);

    const submitButton = document.getElementById(submitButtonId);

    if (results) {
        results.hidden = true;
    }

    if (submitButton) {
        submitButton.disabled = false;
    }

    createFinanceQuiz(questions, areaId, prefix);

}


/* ==========================================
   16. CONNECT GROWTH QUIZ
========================================== */

function setupGrowthQuiz() {

    createFinanceQuiz(
        growthQuizQuestions,
        "growthQuizArea",
        "growth"
    );

    const submitButton = document.getElementById("submitGrowthQuiz");

    const retryButton = document.getElementById("retryGrowthQuiz");

    if (submitButton) {

        submitButton.addEventListener("click", function () {

            submitFinanceQuiz(
                growthQuizQuestions,
                "growth",
                "growthQuizScore",
                "growthQuizCorrections",
                "growthQuizResults",
                "submitGrowthQuiz"
            );

        });

    }

    if (retryButton) {

        retryButton.addEventListener("click", function () {

            retryFinanceQuiz(
                growthQuizQuestions,
                "growthQuizArea",
                "growth",
                "growthQuizResults",
                "submitGrowthQuiz"
            );

        });

    }

}


/* ==========================================
   17. CONNECT DECAY QUIZ
========================================== */

function setupDecayQuiz() {

    createFinanceQuiz(
        decayQuizQuestions,
        "decayQuizArea",
        "decay"
    );

    const submitButton = document.getElementById("submitDecayQuiz");

    const retryButton = document.getElementById("retryDecayQuiz");

    if (submitButton) {

        submitButton.addEventListener("click", function () {

            submitFinanceQuiz(
                decayQuizQuestions,
                "decay",
                "decayQuizScore",
                "decayQuizCorrections",
                "decayQuizResults",
                "submitDecayQuiz"
            );

        });

    }

    if (retryButton) {

        retryButton.addEventListener("click", function () {

            retryFinanceQuiz(
                decayQuizQuestions,
                "decayQuizArea",
                "decay",
                "decayQuizResults",
                "submitDecayQuiz"
            );

        });

    }

}


/* ==========================================
   18. LOAD EVERYTHING
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    // Growth examples and practice

    displayFinanceExamples(
        growthExamples,
        "growthWorkedExamples",
        "growth"
    );

    displayFinancePractice(
        growthPractice,
        "growthPracticeQuestions",
        "growth"
    );


    // Decay examples and practice

    displayFinanceExamples(
        decayExamples,
        "decayWorkedExamples",
        "decay"
    );

    displayFinancePractice(
        decayPractice,
        "decayPracticeQuestions",
        "decay"
    );


    // Graphs

    drawAllFinanceGraphs();


    // Quizzes

    setupGrowthQuiz();

    setupDecayQuiz();


    console.log("Finance, Growth and Decay loaded successfully.");

});


/* Redraw graphs when the browser window changes size. */

window.addEventListener("resize", function () {

    drawAllFinanceGraphs();

});
