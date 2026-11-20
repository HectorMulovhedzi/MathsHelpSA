
/* =====================================
   MATHSHELP SA
   FUNCTIONS AND GRAPHS
===================================== */


/* =====================================
   1. EXPANDABLE SECTIONS
===================================== */

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


/* =====================================
   2. GRAPH INFORMATION
===================================== */

const graphData = [

    {
        title: "Straight-Line Function",
        equation: "y = 2x + 1",
        description: "A linear graph with a positive gradient.",
        fn: function(x) {
            return 2 * x + 1;
        }
    },

    {
        title: "Parabola",
        equation: "y = x² − 4",
        description: "A quadratic graph opening upwards.",
        fn: function(x) {
            return (x * x) - 4;
        }
    },

    {
        title: "Hyperbola",
        equation: "y = 1/x",
        description: "A graph with two separate branches and asymptotes.",
        fn: function(x) {
            return 1 / x;
        }
    },

    {
        title: "Exponential Function",
        equation: "y = 2ˣ",
        description: "An increasing exponential graph.",
        fn: function(x) {
            return Math.pow(2, x);
        }
    },

    {
        title: "Logarithmic Function",
        equation: "y = log₂(x)",
        description: "A logarithmic graph defined only for positive x-values.",
        fn: function(x) {
            return Math.log2(x);
        }
    }

];


/* =====================================
   3. DRAW GRAPHS
===================================== */

function drawGraph(canvas, graph) {

    const ctx = canvas.getContext("2d");

    const width = canvas.clientWidth || 600;
    const height = 360;

    const pixelRatio = window.devicePixelRatio || 1;

    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    ctx.setTransform(
        pixelRatio, 0,
        0, pixelRatio,
        0, 0
    );

    // Coordinate range
    const xMin = -5;
    const xMax = 5;
    const yMin = -5;
    const yMax = 5;

    // Convert mathematical coordinates to canvas positions
    function mapX(x) {
        return ((x - xMin) / (xMax - xMin)) * width;
    }

    function mapY(y) {
        return height -
            ((y - yMin) / (yMax - yMin)) * height;
    }

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);


    /* Draw grid */

    ctx.strokeStyle = "#e2e8f0";
    ctx.lineWidth = 1;

    for (let x = xMin; x <= xMax; x++) {

        ctx.beginPath();
        ctx.moveTo(mapX(x), 0);
        ctx.lineTo(mapX(x), height);
        ctx.stroke();

    }

    for (let y = yMin; y <= yMax; y++) {

        ctx.beginPath();
        ctx.moveTo(0, mapY(y));
        ctx.lineTo(width, mapY(y));
        ctx.stroke();

    }


    /* Draw axes */

    ctx.strokeStyle = "#172554";
    ctx.lineWidth = 2;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(0, mapY(0));
    ctx.lineTo(width, mapY(0));
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(mapX(0), 0);
    ctx.lineTo(mapX(0), height);
    ctx.stroke();


    /* Label axes */

    ctx.fillStyle = "#172554";
    ctx.font = "12px Arial";

    ctx.textAlign = "center";
    ctx.textBaseline = "top";

    for (let x = xMin; x <= xMax; x++) {

        if (x !== 0) {
            ctx.fillText(
                x,
                mapX(x),
                mapY(0) + 5
            );
        }

    }

    ctx.textAlign = "right";
    ctx.textBaseline = "middle";

    for (let y = yMin; y <= yMax; y++) {

        if (y !== 0) {
            ctx.fillText(
                y,
                mapX(0) - 7,
                mapY(y)
            );
        }

    }

    ctx.textAlign = "right";
    ctx.textBaseline = "bottom";

    ctx.fillText("x", width - 8, mapY(0) - 5);

    ctx.fillText("y", mapX(0) - 8, 12);


    /* Draw function curve */

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;
    ctx.lineJoin = "round";

    ctx.beginPath();

    let drawing = false;
    let previousY = null;

    const step = 0.02;

    for (
        let x = xMin;
        x <= xMax;
        x += step
    ) {

        const y = graph.fn(x);

        // Ignore invalid or extremely large values
        if (
            !Number.isFinite(y) ||
            Math.abs(y) > 100
        ) {
            drawing = false;
            previousY = null;
            continue;
        }

        // Avoid joining across a discontinuity
        if (
            previousY !== null &&
            Math.abs(y - previousY) > 2
        ) {
            drawing = false;
        }

        const canvasX = mapX(x);
        const canvasY = mapY(y);

        if (!drawing) {
            ctx.moveTo(canvasX, canvasY);
            drawing = true;
        } else {
            ctx.lineTo(canvasX, canvasY);
        }

        previousY = y;

    }

    ctx.stroke();

}


/* =====================================
   4. DISPLAY ALL FIVE GRAPHS
===================================== */

function displayGraphs() {

    const container = document.getElementById("functionGraphs");

    if (!container) return;

    container.innerHTML = "";

    graphData.forEach(function(graph, index) {

        const card = document.createElement("article");

        card.className = "graph-card";

        const heading = document.createElement("h4");
        heading.textContent = graph.title;

        const equation = document.createElement("p");
        equation.className = "graph-equation";
        equation.textContent = graph.equation;

        const description = document.createElement("p");
        description.className = "graph-description";
        description.textContent = graph.description;

        const canvas = document.createElement("canvas");

        canvas.className = "function-canvas";
        canvas.setAttribute("role", "img");
        canvas.setAttribute(
            "aria-label",
            graph.title + " graph: " + graph.equation
        );

        canvas.height = 360;

        card.appendChild(heading);
        card.appendChild(equation);
        card.appendChild(description);
        card.appendChild(canvas);

        container.appendChild(card);

        drawGraph(canvas, graph);

    });

}


/* =====================================
   5. WORKED EXAMPLES
===================================== */

const workedExamples = [

    {
        question: "Given f(x) = 2x + 3, calculate f(4).",

        steps: [
            "Start with f(x) = 2x + 3.",
            "Replace x with 4.",
            "f(4) = 2(4) + 3.",
            "f(4) = 8 + 3."
        ],

        answer: "f(4) = 11"
    },

    {
        question: "Find the gradient of y = 3x - 5.",

        steps: [
            "Compare the equation with y = mx + c.",
            "The gradient is represented by m.",
            "The coefficient of x is 3."
        ],

        answer: "Gradient = 3"
    },

    {
        question: "Find the y-intercept of y = 4x + 7.",

        steps: [
            "The straight-line form is y = mx + c.",
            "The y-intercept is c.",
            "Here, c = 7."
        ],

        answer: "y-intercept = (0, 7)"
    },

    {
        question: "Find the x-intercepts of y = x² - 9.",

        steps: [
            "At the x-intercepts, y = 0.",
            "Therefore, x² - 9 = 0.",
            "x² = 9.",
            "x = ±3."
        ],

        answer: "x-intercepts: (-3, 0) and (3, 0)"
    },

    {
        question: "Calculate f(3) if f(x) = 2ˣ.",

        steps: [
            "Start with f(x) = 2ˣ.",
            "Replace x with 3.",
            "f(3) = 2³.",
            "2 × 2 × 2 = 8."
        ],

        answer: "f(3) = 8"
    }

];


function displayWorkedExamples() {

    const container = document.getElementById("workedExamples");

    if (!container) return;

    container.innerHTML = "";

    workedExamples.forEach(function(example, index) {

        const card = document.createElement("article");

        card.className = "example-card";

        card.innerHTML = `
            <h4>Example ${index + 1}</h4>

            <p>${example.question}</p>

            <button class="solution-button">
                Show Worked Solution
            </button>

            <div class="solution" hidden>

                <strong>Step-by-step solution:</strong>

                <ol>
                    ${example.steps.map(step => `<li>${step}</li>`).join("")}
                </ol>

                <p><strong>Answer:</strong> ${example.answer}</p>

            </div>
        `;

        const button = card.querySelector(".solution-button");
        const solution = card.querySelector(".solution");

        button.addEventListener("click", function() {

            solution.hidden = !solution.hidden;

            button.textContent = solution.hidden
                ? "Show Worked Solution"
                : "Hide Worked Solution";

        });

        container.appendChild(card);

    });

}


/* =====================================
   6. PRACTICE QUESTIONS
===================================== */

const practiceData = [

    {
        question: "If f(x) = x + 5, calculate f(3).",
        answer: "8"
    },

    {
        question: "If f(x) = 3x, calculate f(4).",
        answer: "12"
    },

    {
        question: "Find the gradient of y = 5x + 2.",
        answer: "5"
    },

    {
        question: "Find the y-intercept of y = 2x - 6.",
        answer: "(0, -6)"
    },

    {
        question: "Find the x-intercepts of y = x² - 4.",
        answer: "(-2, 0) and (2, 0)"
    },

    {
        question: "Does y = -x² open upwards or downwards?",
        answer: "Downwards"
    },

    {
        question: "Calculate 2³.",
        answer: "8"
    },

    {
        question: "What is the domain of y = log₂(x)?",
        answer: "x > 0"
    },

    {
        question: "What is the vertical asymptote of y = 1/x?",
        answer: "x = 0"
    },

    {
        question: "What is the range of y = x²?",
        answer: "y ≥ 0"
    }

];


function createPractice() {

    const container = document.getElementById("functionsPractice");

    if (!container) return;

    container.innerHTML = "";

    practiceData.forEach(function(item, index) {

        const card = document.createElement("article");

        card.className = "practice-card";

        card.innerHTML = `
            <h4>Question ${index + 1}</h4>

            <p>${item.question}</p>

            <button class="answer-button">
                Show Answer
            </button>

            <p class="practice-answer" hidden>
                <strong>Answer:</strong> ${item.answer}
            </p>
        `;

        const button = card.querySelector(".answer-button");
        const answer = card.querySelector(".practice-answer");

        button.addEventListener("click", function() {

            answer.hidden = !answer.hidden;

            button.textContent = answer.hidden
                ? "Show Answer"
                : "Hide Answer";

        });

        container.appendChild(card);

    });

}


/* =====================================
   7. INITIALISE THE PAGE
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    displayGraphs();

    displayWorkedExamples();

    createPractice();

    // Quiz will be built in the next step.

});
