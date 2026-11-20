
/* =================================
   EXPANDABLE SECTIONS
================================= */

function toggleSection(sectionId, button) {
    const section = document.getElementById(sectionId);
    const symbol = button.querySelector("span");

    if (section.hidden) {
        section.hidden = false;
        symbol.textContent = "−";
    } else {
        section.hidden = true;
        symbol.textContent = "＋";
    }
}


/* =================================
   WORKED EXAMPLES
================================= */

const workedExamples = [

    {
        question: "Given f(x) = x² - 4x + 3, identify a, b and c.",

        steps: [
            "Compare f(x) = x² - 4x + 3 with f(x) = ax² + bx + c.",
            "The coefficient of x² is 1, therefore a = 1.",
            "The coefficient of x is -4, therefore b = -4.",
            "The constant term is 3, therefore c = 3."
        ],

        answer: "a = 1, b = -4, c = 3."
    },

    {
        question: "Determine whether f(x) = 2x² + 3x - 5 opens upwards or downwards.",

        steps: [
            "Identify the value of a.",
            "Here, a = 2.",
            "Since a is positive, the parabola opens upwards."
        ],

        answer: "The parabola opens upwards."
    },

    {
        question: "Find the y-intercept of f(x) = x² - 5x + 6.",

        steps: [
            "The y-intercept is found by letting x = 0.",
            "f(0) = (0)² - 5(0) + 6.",
            "f(0) = 6."
        ],

        answer: "The y-intercept is (0 ; 6)."
    },

    {
        question: "Find the axis of symmetry of f(x) = x² - 6x + 5.",

        steps: [
            "Use the formula x = -b / 2a.",
            "Here, a = 1 and b = -6.",
            "x = -(-6) / (2 × 1).",
            "x = 6 / 2.",
            "x = 3."
        ],

        answer: "The axis of symmetry is x = 3."
    },

    {
        question: "Find the turning point of f(x) = x² - 4x + 3.",

        steps: [
            "First find the x-coordinate using x = -b / 2a.",
            "a = 1 and b = -4.",
            "x = -(-4) / (2 × 1) = 2.",
            "Substitute x = 2 into the original function.",
            "f(2) = (2)² - 4(2) + 3.",
            "f(2) = 4 - 8 + 3 = -1."
        ],

        answer: "The turning point is (2 ; -1)."
    },

    {
        question: "Find the x-intercepts of f(x) = x² - 5x + 6.",

        steps: [
            "Let f(x) = 0.",
            "x² - 5x + 6 = 0.",
            "Factorise: (x - 2)(x - 3) = 0.",
            "Therefore, x = 2 or x = 3."
        ],

        answer: "The x-intercepts are (2 ; 0) and (3 ; 0)."
    }

];


/* DISPLAY WORKED EXAMPLES */

function displayWorkedExamples() {

    const container = document.getElementById("workedExamples");

    if (!container) return;

    container.innerHTML = "";

    workedExamples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        card.innerHTML = `
            <h3>Example ${index + 1}</h3>

            <p>${example.question}</p>

            <button class="solution-button"
                onclick="toggleAnswer('solution${index}', this)">
                Show Worked Solution
            </button>

            <div id="solution${index}" class="solution">

                <h4>Step-by-step solution:</h4>

                ${example.steps.map(step => `
                    <p>${step}</p>
                `).join("")}

                <p><strong>Answer: ${example.answer}</strong></p>

            </div>
        `;

        container.appendChild(card);

    });
}


/* =================================
   PRACTICE QUESTIONS
================================= */

const practiceData = [

    {
        question: "1. Identify a, b and c in f(x) = 3x² + 2x - 7.",
        answer: "a = 3, b = 2, c = -7."
    },

    {
        question: "2. Does f(x) = -2x² + 5x + 1 open upwards or downwards?",
        answer: "Downwards, because a = -2 is negative."
    },

    {
        question: "3. Find the y-intercept of f(x) = 2x² - 3x + 8.",
        answer: "Let x = 0. The y-intercept is (0 ; 8)."
    },

    {
        question: "4. Find the axis of symmetry of f(x) = x² - 8x + 7.",
        answer: "x = -(-8) / (2 × 1) = 4. The axis is x = 4."
    },

    {
        question: "5. Find the turning point of f(x) = x² - 6x + 8.",
        answer: "x = 3. f(3) = 9 - 18 + 8 = -1. Turning point: (3 ; -1)."
    },

    {
        question: "6. Find the x-intercepts of f(x) = x² - 7x + 12.",
        answer: "x² - 7x + 12 = 0. (x - 3)(x - 4) = 0. x = 3 or x = 4."
    },

    {
        question: "7. Determine the turning point type of f(x) = -x² + 4x + 1.",
        answer: "Maximum turning point because a = -1 is negative."
    },

    {
        question: "8. Find the axis of symmetry of f(x) = 2x² + 8x + 3.",
        answer: "x = -8 / (2 × 2) = -2. The axis is x = -2."
    },

    {
        question: "9. Find the y-intercept of f(x) = -3x² + 2x - 9.",
        answer: "The y-intercept is (0 ; -9)."
    },

    {
        question: "10. Find the turning point of f(x) = -x² + 6x - 5.",
        answer: "x = 3. f(3) = -9 + 18 - 5 = 4. Turning point: (3 ; 4)."
    }

];


/* DISPLAY PRACTICE QUESTIONS */

function createPractice() {

    const container = document.getElementById("quadraticPractice");

    if (!container) return;

    container.innerHTML = "";

    practiceData.forEach((item, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        card.innerHTML = `
            <h3>Question ${index + 1}</h3>

            <p>${item.question}</p>

            <button class="answer-button"
                onclick="toggleAnswer('answer${index}', this)">
                Show Answer
            </button>

            <div id="answer${index}" class="practice-answer">
                <strong>${item.answer}</strong>
            </div>
        `;

        container.appendChild(card);

    });
}


/* =================================
   SHOW OR HIDE ANSWERS
================================= */

function toggleAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (answer.style.display === "block") {

        answer.style.display = "none";

        button.textContent =
            button.classList.contains("solution-button")
            ? "Show Worked Solution"
            : "Show Answer";

    } else {

        answer.style.display = "block";

        button.textContent =
            button.classList.contains("solution-button")
            ? "Hide Worked Solution"
            : "Hide Answer";
    }
}


/* =================================
   QUADRATIC GRAPHS
================================= */

const quadraticGraphs = [

    {
        container: "upwardGraph",
        title: "y = x²",
        description: "Opens upwards. Turning point: (0 ; 0)",
        fn: x => x * x
    },

    {
        container: "downwardGraph",
        title: "y = -x²",
        description: "Opens downwards. Turning point: (0 ; 0)",
        fn: x => -x * x
    },

    {
        container: "shiftedGraph",
        title: "y = (x - 2)² - 1",
        description: "Turning point: (2 ; -1)",
        fn: x => (x - 2) ** 2 - 1
    }

];


/* DRAW EACH GRAPH */

function drawQuadraticGraph(canvas, graph) {

    const ctx = canvas.getContext("2d");

    const width = 600;
    const height = 360;

    canvas.width = width;
    canvas.height = height;

    const xMin = -5;
    const xMax = 5;
    const yMin = -5;
    const yMax = 5;

    const px = x => (x - xMin) * width / (xMax - xMin);

    const py = y => height - (y - yMin) * height / (yMax - yMin);

    // White background
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // Draw grid
    ctx.strokeStyle = "#dbeafe";
    ctx.lineWidth = 1;

    for (let x = xMin; x <= xMax; x++) {
        ctx.beginPath();
        ctx.moveTo(px(x), 0);
        ctx.lineTo(px(x), height);
        ctx.stroke();
    }

    for (let y = yMin; y <= yMax; y++) {
        ctx.beginPath();
        ctx.moveTo(0, py(y));
        ctx.lineTo(width, py(y));
        ctx.stroke();
    }

    // Draw x-axis and y-axis
    ctx.strokeStyle = "#172554";
    ctx.lineWidth = 2;

    ctx.beginPath();
    ctx.moveTo(0, py(0));
    ctx.lineTo(width, py(0));
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(px(0), 0);
    ctx.lineTo(px(0), height);
    ctx.stroke();

    // Axis labels
    ctx.fillStyle = "#172554";
    ctx.font = "14px Arial";
    ctx.fillText("x", width - 20, py(0) - 10);
    ctx.fillText("y", px(0) + 10, 15);

    // Draw number labels
    for (let x = xMin; x <= xMax; x++) {
        if (x !== 0) {
            ctx.fillText(x, px(x) - 5, py(0) + 18);
        }
    }

    for (let y = yMin; y <= yMax; y++) {
        if (y !== 0) {
            ctx.fillText(y, px(0) + 8, py(y) - 5);
        }
    }

    // Draw parabola
    ctx.beginPath();
    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;

    let started = false;

    for (let x = xMin; x <= xMax; x += 0.02) {

        const y = graph.fn(x);

        if (y < yMin || y > yMax) {
            started = false;
            continue;
        }

        if (!started) {
            ctx.moveTo(px(x), py(y));
            started = true;
        } else {
            ctx.lineTo(px(x), py(y));
        }
    }

    ctx.stroke();

    // Mark the turning point
    let turningX = 0;

    if (graph.container === "shiftedGraph") {
        turningX = 2;
    }

    const turningY = graph.fn(turningX);

    ctx.fillStyle = "#dc2626";
    ctx.beginPath();
    ctx.arc(px(turningX), py(turningY), 6, 0, Math.PI * 2);
    ctx.fill();

}


/* DISPLAY ALL THREE GRAPHS */

function displayQuadraticGraphs() {

    quadraticGraphs.forEach(graph => {

        const container = document.getElementById(graph.container);

        if (!container) {
            console.log("Graph container not found:", graph.container);
            return;
        }

        container.innerHTML = `
            <div class="graph-card">

                <h3 class="graph-equation">${graph.title}</h3>

                <p class="graph-description">
                    ${graph.description}
                </p>

                <canvas class="function-canvas"
                    aria-label="Graph of ${graph.title}">
                </canvas>

            </div>
        `;

        const canvas = container.querySelector("canvas");

        drawQuadraticGraph(canvas, graph);

    });

}


/* =================================
   LOAD PAGE CONTENT
================================= */

document.addEventListener("DOMContentLoaded", function () {

    displayQuadraticGraphs();

    displayWorkedExamples();

    createPractice();

});