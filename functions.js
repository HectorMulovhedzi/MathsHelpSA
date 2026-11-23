
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
   8. GRADE 11 FUNCTIONS AND GRAPHS QUIZ
===================================== */

const quizData = [

    // =================================
    // EASY QUESTIONS (1–15)
    // =================================

    {
        level: "Easy",
        question: "What is a function?",
        options: [
            "A relationship where every input has exactly one output",
            "A relationship where one input has many outputs",
            "A mathematical shape",
            "A number pattern"
        ],
        answer: 0,
        explanation: "A function assigns exactly one output to every input."
    },

    {
        level: "Easy",
        question: "If f(x) = 2x + 3, calculate f(2).",
        options: ["5", "7", "8", "9"],
        answer: 1,
        explanation: "Substitute x = 2: f(2) = 2(2) + 3 = 7."
    },

    {
        level: "Easy",
        question: "What is the gradient of y = 4x + 5?",
        options: ["5", "4", "-4", "9"],
        answer: 1,
        explanation: "In y = mx + c, the coefficient of x is the gradient. Therefore m = 4."
    },

    {
        level: "Easy",
        question: "What is the y-intercept of y = 3x - 6?",
        options: ["3", "-6", "6", "-3"],
        answer: 1,
        explanation: "The y-intercept is c in y = mx + c. Therefore it is -6."
    },

    {
        level: "Easy",
        question: "Which equation represents a straight-line function?",
        options: ["y = x²", "y = 1/x", "y = 2x + 1", "y = 2ˣ"],
        answer: 2,
        explanation: "A straight-line function has the form y = mx + c."
    },

    {
        level: "Easy",
        question: "Which graph is U-shaped?",
        options: ["Hyperbola", "Parabola", "Straight line", "Exponential graph"],
        answer: 1,
        explanation: "A parabola is the graph of a quadratic function."
    },

    {
        level: "Easy",
        question: "If a is positive in y = ax² + bx + c, which way does the parabola open?",
        options: ["Downwards", "Sideways", "Upwards", "It does not open"],
        answer: 2,
        explanation: "A positive coefficient of x² means the parabola opens upwards."
    },

    {
        level: "Easy",
        question: "At which point does a graph cross the y-axis?",
        options: ["x = 0", "y = 0", "x = 1", "y = 1"],
        answer: 0,
        explanation: "Every point on the y-axis has an x-coordinate of zero."
    },

    {
        level: "Easy",
        question: "At an x-intercept, what is the value of y?",
        options: ["1", "-1", "0", "It is undefined"],
        answer: 2,
        explanation: "The x-intercept occurs where the graph crosses the x-axis, so y = 0."
    },

    {
        level: "Easy",
        question: "What is the domain of a function?",
        options: [
            "All possible output values",
            "All possible input values",
            "Only positive values",
            "The turning point"
        ],
        answer: 1,
        explanation: "The domain is the set of all allowed input values (x-values)."
    },

    {
        level: "Easy",
        question: "What is the range of a function?",
        options: [
            "All possible output values",
            "All possible input values",
            "The gradient",
            "The x-intercept"
        ],
        answer: 0,
        explanation: "The range is the set of all possible output values (y-values)."
    },

    {
        level: "Easy",
        question: "What is the turning point of a parabola also called?",
        options: ["Intercept", "Asymptote", "Vertex", "Gradient"],
        answer: 2,
        explanation: "The turning point of a parabola is called its vertex."
    },

    {
        level: "Easy",
        question: "Which function has two separate branches?",
        options: ["Linear", "Hyperbola", "Parabola", "Constant"],
        answer: 1,
        explanation: "A hyperbola generally has two separate branches."
    },

    {
        level: "Easy",
        question: "Which function has the variable in the exponent?",
        options: ["Linear", "Quadratic", "Exponential", "Logarithmic"],
        answer: 2,
        explanation: "An exponential function contains the variable in its exponent."
    },

    {
        level: "Easy",
        question: "Calculate 2³.",
        options: ["6", "8", "9", "12"],
        answer: 1,
        explanation: "2³ = 2 × 2 × 2 = 8."
    },


    // =================================
    // MEDIUM QUESTIONS (16–35)
    // =================================

    {
        level: "Medium",
        question: "If f(x) = 3x - 4, calculate f(5).",
        options: ["11", "15", "19", "7"],
        answer: 0,
        explanation: "f(5) = 3(5) - 4 = 15 - 4 = 11."
    },

    {
        level: "Medium",
        question: "Find the gradient of the line passing through (1, 3) and (3, 7).",
        options: ["1", "2", "3", "4"],
        answer: 1,
        explanation: "Gradient = (7 - 3)/(3 - 1) = 4/2 = 2."
    },

    {
        level: "Medium",
        question: "Find the equation of a line with gradient 2 and y-intercept 5.",
        options: ["y = 5x + 2", "y = 2x + 5", "y = 2x - 5", "y = -2x + 5"],
        answer: 1,
        explanation: "Use y = mx + c. Substitute m = 2 and c = 5."
    },

    {
        level: "Medium",
        question: "Find the x-intercept of y = 2x - 8.",
        options: ["(0, -8)", "(4, 0)", "(-4, 0)", "(0, 4)"],
        answer: 1,
        explanation: "Set y = 0: 0 = 2x - 8, so x = 4."
    },

    {
        level: "Medium",
        question: "Find the y-intercept of y = -3x + 9.",
        options: ["(-3, 0)", "(3, 0)", "(0, 9)", "(0, -3)"],
        answer: 2,
        explanation: "Set x = 0. Then y = 9, giving (0, 9)."
    },

    {
        level: "Medium",
        question: "Find the roots of y = x² - 16.",
        options: ["x = 4 only", "x = -4 only", "x = ±4", "x = ±16"],
        answer: 2,
        explanation: "Set y = 0: x² - 16 = 0. Therefore x = ±4."
    },

    {
        level: "Medium",
        question: "What is the axis of symmetry of y = (x - 3)² + 2?",
        options: ["x = 2", "x = 3", "y = 3", "y = 2"],
        answer: 1,
        explanation: "The vertex is (3, 2), so the axis of symmetry is x = 3."
    },

    {
        level: "Medium",
        question: "What is the turning point of y = (x + 2)² - 5?",
        options: ["(2, -5)", "(-2, -5)", "(-2, 5)", "(2, 5)"],
        answer: 1,
        explanation: "The turning point form is y = (x - p)² + q. Here p = -2 and q = -5."
    },

    {
        level: "Medium",
        question: "What is the range of y = x² + 4?",
        options: ["y ≥ 4", "y ≤ 4", "y ≥ 0", "All real numbers"],
        answer: 0,
        explanation: "The minimum value is 4 because x² cannot be negative."
    },

    {
        level: "Medium",
        question: "What is the domain of y = 1/x?",
        options: ["All real numbers", "x ≥ 0", "x ≠ 0", "x ≤ 0"],
        answer: 2,
        explanation: "Division by zero is undefined, so x cannot equal zero."
    },

    {
        level: "Medium",
        question: "What is the vertical asymptote of y = 1/(x - 2)?",
        options: ["x = 0", "x = 2", "y = 2", "y = 0"],
        answer: 1,
        explanation: "The denominator is zero when x - 2 = 0, so x = 2."
    },

    {
        level: "Medium",
        question: "What is the horizontal asymptote of y = 1/x + 3?",
        options: ["x = 3", "y = 0", "y = 3", "x = 0"],
        answer: 2,
        explanation: "The graph y = 1/x is shifted upwards by 3, so its horizontal asymptote is y = 3."
    },

    {
        level: "Medium",
        question: "If y = 2ˣ, calculate y when x = 3.",
        options: ["6", "8", "9", "16"],
        answer: 1,
        explanation: "2³ = 8."
    },

    {
        level: "Medium",
        question: "What is the y-intercept of y = 3(2ˣ)?",
        options: ["(0, 2)", "(0, 3)", "(3, 0)", "(0, 6)"],
        answer: 1,
        explanation: "Set x = 0: y = 3(2⁰) = 3."
    },

    {
        level: "Medium",
        question: "Calculate log₂(8).",
        options: ["2", "3", "4", "8"],
        answer: 1,
        explanation: "2³ = 8, so log₂(8) = 3."
    },

    {
        level: "Medium",
        question: "What is the domain of y = log₃(x)?",
        options: ["x ≥ 0", "x < 0", "x > 0", "All real numbers"],
        answer: 2,
        explanation: "The input of a logarithmic function must be strictly positive."
    },

    {
        level: "Medium",
        question: "What happens to y = x² when it changes to y = x² + 4?",
        options: [
            "It moves 4 units down",
            "It moves 4 units up",
            "It moves 4 units right",
            "It reflects across the x-axis"
        ],
        answer: 1,
        explanation: "Adding 4 outside the function shifts the graph upwards by 4 units."
    },

    {
        level: "Medium",
        question: "What transformation changes y = f(x) to y = f(x - 3)?",
        options: [
            "3 units left",
            "3 units right",
            "3 units up",
            "3 units down"
        ],
        answer: 1,
        explanation: "Replacing x with x - 3 shifts the graph 3 units to the right."
    },

    {
        level: "Medium",
        question: "What does y = -f(x) do to a graph?",
        options: [
            "Reflects it across the x-axis",
            "Reflects it across the y-axis",
            "Moves it upwards",
            "Moves it to the right"
        ],
        answer: 0,
        explanation: "Multiplying all output values by -1 reflects the graph across the x-axis."
    },

    {
        level: "Medium",
        question: "Which point is the vertex of y = x² - 6x + 9?",
        options: ["(3, 0)", "(0, 9)", "(-3, 0)", "(6, 9)"],
        answer: 0,
        explanation: "Complete the square: y = (x - 3)². The vertex is (3, 0)."
    },


    // =================================
    // DIFFICULT QUESTIONS (36–50)
    // =================================

    {
        level: "Difficult",
        question: "Find the turning point of y = 2x² - 8x + 3.",
        options: ["(2, -5)", "(-2, -5)", "(2, 3)", "(4, -5)"],
        answer: 0,
        explanation: "x = -b/(2a) = 8/4 = 2. Substituting gives y = 8 - 16 + 3 = -5."
    },

    {
        level: "Difficult",
        question: "Find the roots of x² - 5x + 6 = 0.",
        options: ["1 and 6", "2 and 3", "-2 and -3", "3 and 5"],
        answer: 1,
        explanation: "Factorise: (x - 2)(x - 3) = 0. Thus x = 2 or x = 3."
    },

    {
        level: "Difficult",
        question: "Find the equation of a parabola with turning point (2, -3) and a = 1.",
        options: [
            "y = (x + 2)² - 3",
            "y = (x - 2)² - 3",
            "y = (x - 2)² + 3",
            "y = x² + 2"
        ],
        answer: 1,
        explanation: "Use y = a(x - p)² + q. Substitute a = 1, p = 2 and q = -3."
    },

    {
        level: "Difficult",
        question: "Find the axis of symmetry of y = -2(x + 4)² + 7.",
        options: ["x = 4", "x = -4", "y = 7", "y = -4"],
        answer: 1,
        explanation: "The vertex is (-4, 7), so the axis of symmetry is x = -4."
    },

    {
        level: "Difficult",
        question: "For y = 3/(x + 1) - 2, identify the asymptotes.",
        options: [
            "x = 1 and y = 2",
            "x = -1 and y = -2",
            "x = 1 and y = -2",
            "x = -2 and y = -1"
        ],
        answer: 1,
        explanation: "The denominator is zero at x = -1, and the vertical shift gives y = -2."
    },

    {
        level: "Difficult",
        question: "Find the x-intercept of y = 2/(x - 1) + 1.",
        options: ["(-1, 0)", "(1, 0)", "(3, 0)", "(0, -1)"],
        answer: 0,
        explanation: "Set y = 0: 2/(x - 1) = -1. Therefore x - 1 = -2, so x = -1."
    },

    {
        level: "Difficult",
        question: "Solve 2ˣ = 16.",
        options: ["2", "3", "4", "8"],
        answer: 2,
        explanation: "Since 16 = 2⁴, x = 4."
    },

    {
        level: "Difficult",
        question: "Solve log₂(x) = 5.",
        options: ["10", "16", "25", "32"],
        answer: 3,
        explanation: "Rewrite in exponential form: x = 2⁵ = 32."
    },

    {
        level: "Difficult",
        question: "What is the inverse of f(x) = 2x + 6?",
        options: [
            "f⁻¹(x) = (x - 6)/2",
            "f⁻¹(x) = (x + 6)/2",
            "f⁻¹(x) = 2x - 6",
            "f⁻¹(x) = 6x + 2"
        ],
        answer: 0,
        explanation: "Write y = 2x + 6, swap x and y, then solve: x = 2y + 6, so y = (x - 6)/2."
    },

    {
        level: "Difficult",
        question: "If f(x) = x² and the domain is x ≥ 0, what is the inverse?",
        options: [
            "f⁻¹(x) = -√x",
            "f⁻¹(x) = √x",
            "f⁻¹(x) = x²",
            "f⁻¹(x) = 1/x"
        ],
        answer: 1,
        explanation: "With x restricted to non-negative values, the inverse of y = x² is y = √x."
    },

    {
        level: "Difficult",
        question: "What is the range of y = -2(x - 1)² + 5?",
        options: ["y ≥ 5", "y ≤ 5", "y ≥ -2", "All real numbers"],
        answer: 1,
        explanation: "The parabola opens downwards and has a maximum value of 5."
    },

    {
        level: "Difficult",
        question: "Find the intersection of y = 2x + 1 and y = x + 4.",
        options: ["(2, 5)", "(3, 7)", "(4, 9)", "(1, 3)"],
        answer: 1,
        explanation: "Set 2x + 1 = x + 4. Thus x = 3 and y = 7."
    },

    {
        level: "Difficult",
        question: "For which value of k does y = x² + k have a turning point at (0, 5)?",
        options: ["0", "2", "5", "-5"],
        answer: 2,
        explanation: "The turning point of y = x² + k is (0, k). Therefore k = 5."
    },

    {
        level: "Difficult",
        question: "What is the horizontal asymptote of y = -4/(x + 2) + 6?",
        options: ["x = -2", "y = 6", "y = -4", "x = 6"],
        answer: 1,
        explanation: "The vertical shift is 6, so the horizontal asymptote is y = 6."
    },

    {
        level: "Difficult",
        question: "If f(x) = 2ˣ + 3, what is f(2)?",
        options: ["4", "5", "7", "8"],
        answer: 2,
        explanation: "f(2) = 2² + 3 = 4 + 3 = 7."
    }

];

/* =====================================
   9. QUIZ VARIABLES
===================================== */

let currentQuestion = 0;
let userAnswers = [];
let quizSubmitted = false;


/* =====================================
   10. START QUIZ
===================================== */

function startQuiz() {

    currentQuestion = 0;

    userAnswers = [];

    quizSubmitted = false;

    document.getElementById("quizIntro").hidden = false;

    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizResults").hidden = true;

    showQuestion();

}


/* =====================================
   11. DISPLAY QUESTION
===================================== */

function showQuestion() {

    const question = quizData[currentQuestion];

    const container = document.getElementById("quizQuestions");

    document.getElementById("questionProgress").textContent =
        `Question ${currentQuestion + 1} of ${quizData.length} | ${question.level}`;

    document.getElementById("progressBar").style.width =
        ((currentQuestion + 1) / quizData.length) * 100 + "%";

    container.innerHTML = `

        <div class="quiz-question-card">

            <span class="question-level ${question.level.toLowerCase()}">
                ${question.level}
            </span>

            <h3>${question.question}</h3>

            <div class="quiz-options">

                ${question.options.map(function(option, index) {

                    return `

                        <label class="quiz-option">

                            <input
                                type="radio"
                                name="quizAnswer"
                                value="${index}"
                            >

                            <span>${option}</span>

                        </label>

                    `;

                }).join("")}

            </div>

        </div>

    `;

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =====================================
   12. SUBMIT ANSWER
===================================== */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;

    }

    userAnswers[currentQuestion] = Number(selected.value);

    if (currentQuestion < quizData.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =====================================
   13. FINISH QUIZ
===================================== */

function finishQuiz() {

    let score = 0;

    quizData.forEach(function(question, index) {

        if (userAnswers[index] === question.answer) {

            score++;

        }

    });

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("quizIntro").hidden = true;

    document.getElementById("finalScore").textContent =
        `${score} / ${quizData.length}`;

    let feedback = "";

    const percentage = (score / quizData.length) * 100;

    if (percentage >= 80) {

        feedback = "Excellent! You have a strong understanding of Functions and Graphs.";

    } else if (percentage >= 60) {

        feedback = "Good work! Keep practising to improve your understanding.";

    } else if (percentage >= 40) {

        feedback = "You are making progress. Revise your notes and try again.";

    } else {

        feedback = "Keep learning! Study the worked examples and practise more questions.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

    displayCorrections();

}


/* =====================================
   14. DISPLAY CORRECTIONS
===================================== */

function displayCorrections() {

    const container = document.getElementById("correctionsContainer");

    container.innerHTML = "<h3>Quiz Corrections and Explanations</h3>";

    quizData.forEach(function(question, index) {

        const correct = userAnswers[index] === question.answer;

        const card = document.createElement("div");

        card.className = correct
            ? "correction-card correct-answer"
            : "correction-card incorrect-answer";

        card.innerHTML = `

            <h4>
                Question ${index + 1}
                ${correct ? "✓ Correct" : "✗ Incorrect"}
            </h4>

            <p>${question.question}</p>

            <p>
                <strong>Your answer:</strong>
                ${userAnswers[index] === undefined
                    ? "Not answered"
                    : question.options[userAnswers[index]]}
            </p>

            <p>
                <strong>Correct answer:</strong>
                ${question.options[question.answer]}
            </p>

            <p>
                <strong>Explanation:</strong>
                ${question.explanation}
            </p>

        `;

        container.appendChild(card);

    });

}


/* =====================================
   15. RETRY QUIZ
===================================== */

function retryQuiz() {

    startQuiz();

}


/* =====================================
   16. CONNECT QUIZ BUTTONS
===================================== */

document.addEventListener("DOMContentLoaded", function() {

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

});


/* =====================================
   7. INITIALISE THE PAGE
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    displayGraphs();

    displayWorkedExamples();

    createPractice();

    // Quiz will be built in the next step.

});
