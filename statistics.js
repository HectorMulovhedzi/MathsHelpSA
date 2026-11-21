// ============================================
// MATHSHELP SA - GRADE 11 STATISTICS
// ============================================


// ============================================
// 1. OPEN AND CLOSE SECTIONS
// ============================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = isHidden ? "−" : "＋";
    }

    // Redraw graphs when their hidden section is opened
    if (isHidden) {
        setTimeout(drawAllGraphs, 50);
    }
}


// ============================================
// 2. WORKED EXAMPLES
// ============================================

const statisticsExamples = {

    unit1: [
        {
            question: "A histogram represents grouped data. What should happen to the bars?",
            solution: "The bars must touch each other because the class intervals represent continuous numerical data."
        },
        {
            question: "A class interval has boundaries 9.5 and 19.5. Calculate its width.",
            solution: "Class width = 19.5 − 9.5\nClass width = 10"
        },
        {
            question: "A class has a frequency of 12. What does this tell us?",
            solution: "It tells us that 12 observations belong to that class interval."
        },
        {
            question: "The frequencies of five classes are 3, 5, 8, 6 and 4. Find the total frequency.",
            solution: "Total frequency = 3 + 5 + 8 + 6 + 4\nTotal frequency = 26"
        },
        {
            question: "Why must a histogram have labelled axes?",
            solution: "The horizontal axis identifies the class intervals, while the vertical axis shows the frequency or frequency density. Labels help readers interpret the data correctly."
        }
    ],

    unit2: [
        {
            question: "Find the midpoint of the class interval 10 – 19.",
            solution: "Class boundaries are 9.5 and 19.5.\nMidpoint = (9.5 + 19.5) ÷ 2\nMidpoint = 14.5"
        },
        {
            question: "Find the midpoint of the class interval 20 – 29.",
            solution: "Midpoint = (19.5 + 29.5) ÷ 2\nMidpoint = 24.5"
        },
        {
            question: "A class has midpoint 15 and frequency 8. What point will be plotted?",
            solution: "Plot the point (15 ; 8).\nThe midpoint is on the horizontal axis and the frequency is on the vertical axis."
        },
        {
            question: "What do you do after plotting all the points of a frequency polygon?",
            solution: "Join consecutive points with straight lines. The graph can be closed to the horizontal axis using zero-frequency points at the ends when appropriate."
        },
        {
            question: "A frequency polygon uses the same frequency distribution as a histogram. What is one difference between the graphs?",
            solution: "A histogram uses touching bars. A frequency polygon uses points at class midpoints joined by straight lines."
        }
    ],

    unit3: [
        {
            question: "The frequencies are 3, 5, 8 and 4. Calculate the cumulative frequencies.",
            solution: "First cumulative frequency = 3\nSecond = 3 + 5 = 8\nThird = 8 + 8 = 16\nFourth = 16 + 4 = 20\nAnswer: 3, 8, 16, 20"
        },
        {
            question: "The cumulative frequency of a class is 18 and the previous cumulative frequency is 11. Find the class frequency.",
            solution: "Frequency = 18 − 11\nFrequency = 7"
        },
        {
            question: "A data set has 40 observations. What is the final cumulative frequency?",
            solution: "The final cumulative frequency must equal the total number of observations.\nAnswer: 40"
        },
        {
            question: "What is plotted on the vertical axis of an ogive?",
            solution: "Cumulative frequency."
        },
        {
            question: "Why does an ogive never decrease?",
            solution: "Because each cumulative frequency is the previous total plus the next class frequency. Frequencies cannot be negative, so the running total cannot decrease."
        }
    ],

    unit4: [
        {
            question: "Calculate the mean of 2, 4, 6, 8 and 10.",
            solution: "Mean = (2 + 4 + 6 + 8 + 10) ÷ 5\nMean = 30 ÷ 5\nMean = 6"
        },
        {
            question: "Calculate the population variance of 2, 4, 6, 8 and 10.",
            solution: "Mean = 6\nSquared deviations: 16, 4, 0, 4, 16\nSum = 40\nVariance = 40 ÷ 5\nVariance = 8"
        },
        {
            question: "Calculate the population standard deviation if the variance is 25.",
            solution: "Standard deviation = √Variance\n= √25\n= 5"
        },
        {
            question: "Find the variance of 4, 4, 4 and 4, treating the data as a population.",
            solution: "Mean = 4\nEvery value has a deviation of zero.\nVariance = 0 ÷ 4 = 0"
        },
        {
            question: "The variance of a data set is 16. Find its standard deviation.",
            solution: "Standard deviation = √16\nAnswer: 4"
        }
    ],

    unit5: [
        {
            question: "A distribution has a longer tail on the right. Identify the skewness.",
            solution: "It is positively skewed, also called right-skewed."
        },
        {
            question: "A distribution has a longer tail on the left. Identify the skewness.",
            solution: "It is negatively skewed, also called left-skewed."
        },
        {
            question: "In a roughly symmetrical distribution, how are the mean and median usually related?",
            solution: "The mean and median are approximately equal."
        },
        {
            question: "In a positively skewed distribution, which is usually greater: the mean or the median?",
            solution: "The mean is usually greater than the median because the long right tail pulls the mean to the right."
        },
        {
            question: "What does a symmetrical distribution look like?",
            solution: "Its left and right sides are approximately mirror images around the centre."
        }
    ],

    unit6: [
        {
            question: "Given Q1 = 10 and Q3 = 20, calculate the interquartile range.",
            solution: "IQR = Q3 − Q1\n= 20 − 10\n= 10"
        },
        {
            question: "Given Q1 = 10 and IQR = 10, calculate the lower outlier boundary.",
            solution: "Lower boundary = Q1 − 1.5(IQR)\n= 10 − 1.5(10)\n= 10 − 15\n= −5"
        },
        {
            question: "Given Q3 = 20 and IQR = 10, calculate the upper outlier boundary.",
            solution: "Upper boundary = Q3 + 1.5(IQR)\n= 20 + 1.5(10)\n= 20 + 15\n= 35"
        },
        {
            question: "Using boundaries −5 and 35, is 40 an outlier?",
            solution: "Yes. Since 40 is greater than the upper boundary of 35, it is an outlier."
        },
        {
            question: "Using boundaries −5 and 35, is 30 an outlier?",
            solution: "No. Since 30 lies between −5 and 35, it is not an outlier according to the 1.5 × IQR rule."
        }
    ]

};


// ============================================
// 3. DISPLAY WORKED EXAMPLES
// ============================================

function displayWorkedExamples(examples, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const answerId = containerId + "Answer" + index;

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
                ${example.solution.replace(/\n/g, "<br>")}
            </div>
        `;

        container.appendChild(card);

    });

}


// ============================================
// 4. PRACTICE QUESTIONS
// ============================================

const statisticsPractice = {

    unit1: [
        {
            question: "What type of data is normally represented by a histogram?",
            answer: "Grouped continuous numerical data."
        },
        {
            question: "Should histogram bars touch each other?",
            answer: "Yes. Histogram bars touch each other."
        },
        {
            question: "What is usually shown on the horizontal axis?",
            answer: "Class intervals or class boundaries."
        },
        {
            question: "What is shown on the vertical axis in a basic histogram with equal class widths?",
            answer: "Frequency."
        },
        {
            question: "Calculate the total frequency: 4, 6, 7, 3.",
            answer: "4 + 6 + 7 + 3 = 20."
        },
        {
            question: "Find the class width between boundaries 19.5 and 29.5.",
            answer: "29.5 − 19.5 = 10."
        },
        {
            question: "A class has frequency 9. How many observations belong to that class?",
            answer: "9 observations."
        },
        {
            question: "Why are histogram bars not separated?",
            answer: "Because the intervals represent continuous numerical data."
        },
        {
            question: "What should be included when drawing a histogram?",
            answer: "A suitable title, labelled axes, an appropriate scale and correctly drawn bars."
        },
        {
            question: "If the class widths are unequal, what should be considered when drawing a histogram?",
            answer: "Use frequency density for the vertical axis. Frequency density = frequency ÷ class width."
        }
    ],

    unit2: [
        {
            question: "Find the midpoint of the class boundaries 9.5 and 19.5.",
            answer: "(9.5 + 19.5) ÷ 2 = 14.5."
        },
        {
            question: "Find the midpoint of the class boundaries 19.5 and 29.5.",
            answer: "(19.5 + 29.5) ÷ 2 = 24.5."
        },
        {
            question: "A class midpoint is 25 and its frequency is 7. Give the plotted coordinate.",
            answer: "(25 ; 7)."
        },
        {
            question: "Which values are plotted on the horizontal axis?",
            answer: "Class midpoints."
        },
        {
            question: "Which values are plotted on the vertical axis?",
            answer: "Frequencies."
        },
        {
            question: "What is used to join the plotted points?",
            answer: "Straight line segments."
        },
        {
            question: "Find the midpoint of the class boundaries 29.5 and 39.5.",
            answer: "(29.5 + 39.5) ÷ 2 = 34.5."
        },
        {
            question: "A class has midpoint 34.5 and frequency 12. Give its coordinate.",
            answer: "(34.5 ; 12)."
        },
        {
            question: "Does a frequency polygon use class midpoints or upper class boundaries?",
            answer: "Class midpoints."
        },
        {
            question: "State one difference between a histogram and a frequency polygon.",
            answer: "A histogram uses touching bars, while a frequency polygon uses plotted points joined by straight lines."
        }
    ],

    unit3: [
        {
            question: "Find the cumulative frequencies for frequencies 2, 4, 6.",
            answer: "2, 6, 12."
        },
        {
            question: "Find the cumulative frequencies for 5, 3, 7, 2.",
            answer: "5, 8, 15, 17."
        },
        {
            question: "What does an ogive represent?",
            answer: "Cumulative frequency."
        },
        {
            question: "What is plotted on the vertical axis of an ogive?",
            answer: "Cumulative frequency."
        },
        {
            question: "What is plotted on the horizontal axis of a less-than ogive?",
            answer: "Upper class boundaries."
        },
        {
            question: "The previous cumulative frequency is 12 and the new cumulative frequency is 19. Find the class frequency.",
            answer: "19 − 12 = 7."
        },
        {
            question: "A data set contains 35 values. What should its final cumulative frequency be?",
            answer: "35."
        },
        {
            question: "Can an ogive decrease?",
            answer: "No. Cumulative frequency cannot decrease."
        },
        {
            question: "What can an ogive help us estimate?",
            answer: "The median, quartiles and the number of observations below or above a given value."
        },
        {
            question: "Find the cumulative frequencies for 4, 8, 5, 3.",
            answer: "4, 12, 17, 20."
        }
    ],

    unit4: [
        {
            question: "Find the mean of 3, 5 and 7.",
            answer: "(3 + 5 + 7) ÷ 3 = 5."
        },
        {
            question: "Find the mean of 2, 4, 6 and 8.",
            answer: "(2 + 4 + 6 + 8) ÷ 4 = 5."
        },
        {
            question: "Find the population variance of 2, 4, 6.",
            answer: "Mean = 4. Squared deviations = 4, 0, 4. Variance = 8 ÷ 3."
        },
        {
            question: "Find the population standard deviation if the variance is 9.",
            answer: "√9 = 3."
        },
        {
            question: "Find the population variance of 5, 5, 5.",
            answer: "Variance = 0 because all values are equal to the mean."
        },
        {
            question: "What does variance measure?",
            answer: "It measures the spread of data values around the mean."
        },
        {
            question: "What does standard deviation measure?",
            answer: "It measures the spread of values around the mean, in the same units as the data."
        },
        {
            question: "If the variance is 36, calculate the standard deviation.",
            answer: "√36 = 6."
        },
        {
            question: "For sample variance, what do we divide the sum of squared deviations by?",
            answer: "n − 1."
        },
        {
            question: "For population variance, what do we divide the sum of squared deviations by?",
            answer: "n."
        }
    ],

    unit5: [
        {
            question: "A graph has a long tail to the right. Identify the distribution.",
            answer: "Positively skewed."
        },
        {
            question: "A graph has a long tail to the left. Identify the distribution.",
            answer: "Negatively skewed."
        },
        {
            question: "What does a symmetrical distribution look like?",
            answer: "Its two sides are approximately mirror images."
        },
        {
            question: "In a roughly symmetrical distribution, what is the relationship between mean and median?",
            answer: "They are approximately equal."
        },
        {
            question: "In a positively skewed distribution, is the mean usually greater or smaller than the median?",
            answer: "The mean is usually greater than the median."
        },
        {
            question: "In a negatively skewed distribution, is the mean usually greater or smaller than the median?",
            answer: "The mean is usually smaller than the median."
        },
        {
            question: "Which direction does the tail point in a right-skewed distribution?",
            answer: "To the right."
        },
        {
            question: "Which direction does the tail point in a left-skewed distribution?",
            answer: "To the left."
        },
        {
            question: "Does a symmetrical distribution have two similar sides?",
            answer: "Yes."
        },
        {
            question: "Which measure is usually pulled furthest towards the long tail?",
            answer: "The mean."
        }
    ],

    unit6: [
        {
            question: "What is an outlier?",
            answer: "A value unusually far from the other values in a data set."
        },
        {
            question: "Calculate the IQR if Q1 = 8 and Q3 = 18.",
            answer: "IQR = 18 − 8 = 10."
        },
        {
            question: "Calculate the lower boundary if Q1 = 8 and IQR = 10.",
            answer: "8 − 1.5(10) = −7."
        },
        {
            question: "Calculate the upper boundary if Q3 = 18 and IQR = 10.",
            answer: "18 + 1.5(10) = 33."
        },
        {
            question: "Using boundaries −7 and 33, is 40 an outlier?",
            answer: "Yes. 40 is above 33."
        },
        {
            question: "Using boundaries −7 and 33, is 20 an outlier?",
            answer: "No. 20 is between the boundaries."
        },
        {
            question: "What does IQR stand for?",
            answer: "Interquartile range."
        },
        {
            question: "Which quartile is the median?",
            answer: "Q2."
        },
        {
            question: "What is the formula for IQR?",
            answer: "IQR = Q3 − Q1."
        },
        {
            question: "What graph can be used to display quartiles and outliers?",
            answer: "A box-and-whisker plot."
        }
    ]

};


// ============================================
// 5. DISPLAY PRACTICE QUESTIONS
// ============================================

function displayPracticeQuestions(questions, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const answerId = containerId + "Answer" + index;

        card.innerHTML = `
            <p class="practice-question">
                Question ${index + 1}: ${question.question}
            </p>

            <button class="answer-button"
                onclick="toggleAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer" id="${answerId}" hidden>
                ${question.answer}
            </div>
        `;

        container.appendChild(card);

    });

}


// ============================================
// 6. SHOW AND HIDE ANSWERS
// ============================================

function toggleAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isHidden = answer.hidden;

    answer.hidden = !isHidden;

    if (button.classList.contains("solution-button")) {
        button.textContent = isHidden ? "Hide Solution" : "Show Solution";
    } else {
        button.textContent = isHidden ? "Hide Answer" : "Show Answer";
    }

}


// ============================================
// 7. GRAPH DRAWING HELPERS
// ============================================

function prepareCanvas(canvasId) {

    const canvas = document.getElementById(canvasId);

    if (!canvas) return null;

    const rect = canvas.getBoundingClientRect();

    if (rect.width === 0) return null;

    const ratio = window.devicePixelRatio || 1;

    canvas.width = rect.width * ratio;
    canvas.height = 350 * ratio;

    const ctx = canvas.getContext("2d");

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    return {
        canvas,
        ctx,
        width: rect.width,
        height: 350
    };
}


function drawAxes(ctx, width, height, xLabel, yLabel) {

    const left = 55;
    const right = width - 20;
    const top = 20;
    const bottom = height - 50;

    ctx.strokeStyle = "#172554";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(left, top);
    ctx.lineTo(left, bottom);
    ctx.lineTo(right, bottom);
    ctx.stroke();

    ctx.fillStyle = "#172554";
    ctx.font = "12px Arial";

    ctx.textAlign = "center";
    ctx.fillText(xLabel, (left + right) / 2, height - 8);

    ctx.save();
    ctx.translate(15, (top + bottom) / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText(yLabel, 0, 0);
    ctx.restore();

    return {
        left,
        right,
        top,
        bottom
    };
}


// ============================================
// 8. HISTOGRAM
// ============================================

function drawHistogram() {

    const graph = prepareCanvas("histogramGraph");

    if (!graph) return;

    const { ctx, width, height } = graph;

    const axes = drawAxes(
        ctx,
        width,
        height,
        "Marks",
        "Frequency"
    );

    const frequencies = [3, 5, 8, 6, 4];

    const labels = [
        "0–9",
        "10–19",
        "20–29",
        "30–39",
        "40–49"
    ];

    const maxFrequency = 10;

    const graphWidth = axes.right - axes.left;
    const graphHeight = axes.bottom - axes.top;

    // Grid and frequency labels

    ctx.font = "11px Arial";
    ctx.textAlign = "right";
    ctx.fillStyle = "#172554";

    for (let i = 0; i <= maxFrequency; i += 2) {

        const y = axes.bottom -
            (i / maxFrequency) * graphHeight;

        ctx.strokeStyle = "#dbeafe";
        ctx.beginPath();
        ctx.moveTo(axes.left, y);
        ctx.lineTo(axes.right, y);
        ctx.stroke();

        ctx.fillText(i, axes.left - 8, y + 4);
    }

    const barWidth = graphWidth / frequencies.length;

    frequencies.forEach((frequency, index) => {

        const barHeight =
            (frequency / maxFrequency) * graphHeight;

        const x = axes.left + index * barWidth;
        const y = axes.bottom - barHeight;

        ctx.fillStyle = "#60a5fa";
        ctx.fillRect(x, y, barWidth, barHeight);

        ctx.strokeStyle = "#1e40af";
        ctx.strokeRect(x, y, barWidth, barHeight);

        ctx.fillStyle = "#172554";
        ctx.textAlign = "center";
        ctx.fillText(
            frequency,
            x + barWidth / 2,
            y - 7
        );

        ctx.fillText(
            labels[index],
            x + barWidth / 2,
            axes.bottom + 20
        );

    });

}


// ============================================
// 9. FREQUENCY POLYGON
// ============================================

function drawFrequencyPolygon() {

    const graph = prepareCanvas("frequencyPolygonGraph");

    if (!graph) return;

    const { ctx, width, height } = graph;

    const axes = drawAxes(
        ctx,
        width,
        height,
        "Class midpoint",
        "Frequency"
    );

    const midpoints = [4.5, 14.5, 24.5, 34.5, 44.5];
    const frequencies = [3, 5, 8, 6, 4];

    const maxFrequency = 10;
    const graphHeight = axes.bottom - axes.top;
    const graphWidth = axes.right - axes.left;

    const minX = 0;
    const maxX = 50;

    function xPosition(value) {
        return axes.left +
            ((value - minX) / (maxX - minX)) * graphWidth;
    }

    function yPosition(value) {
        return axes.bottom -
            (value / maxFrequency) * graphHeight;
    }

    // Grid

    ctx.strokeStyle = "#dbeafe";
    ctx.fillStyle = "#172554";
    ctx.font = "11px Arial";
    ctx.textAlign = "right";

    for (let i = 0; i <= maxFrequency; i += 2) {

        const y = yPosition(i);

        ctx.beginPath();
        ctx.moveTo(axes.left, y);
        ctx.lineTo(axes.right, y);
        ctx.stroke();

        ctx.fillText(i, axes.left - 8, y + 4);
    }

    // Plot line

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;
    ctx.beginPath();

    midpoints.forEach((midpoint, index) => {

        const x = xPosition(midpoint);
        const y = yPosition(frequencies[index]);

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

    });

    ctx.stroke();

    // Points and labels

    midpoints.forEach((midpoint, index) => {

        const x = xPosition(midpoint);
        const y = yPosition(frequencies[index]);

        ctx.fillStyle = "#1e40af";
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#172554";
        ctx.textAlign = "center";

        ctx.fillText(
            `(${midpoint}, ${frequencies[index]})`,
            x,
            y - 12
        );

        ctx.fillText(
            midpoint,
            x,
            axes.bottom + 20
        );

    });

}


// ============================================
// 10. OGIVE
// ============================================

function drawOgive() {

    const graph = prepareCanvas("ogiveGraph");

    if (!graph) return;

    const { ctx, width, height } = graph;

    const axes = drawAxes(
        ctx,
        width,
        height,
        "Upper class boundary",
        "Cumulative frequency"
    );

    const boundaries = [ -0.5, 9.5, 19.5, 29.5, 39.5, 49.5 ];
    const cumulative = [ 0, 3, 8, 16, 22, 26 ];

    const maxFrequency = 30;
    const minX = -0.5;
    const maxX = 49.5;

    const graphWidth = axes.right - axes.left;
    const graphHeight = axes.bottom - axes.top;

    function xPosition(value) {
        return axes.left +
            ((value - minX) / (maxX - minX)) * graphWidth;
    }

    function yPosition(value) {
        return axes.bottom -
            (value / maxFrequency) * graphHeight;
    }

    // Grid

    ctx.strokeStyle = "#dbeafe";
    ctx.fillStyle = "#172554";
    ctx.font = "11px Arial";
    ctx.textAlign = "right";

    for (let i = 0; i <= maxFrequency; i += 5) {

        const y = yPosition(i);

        ctx.beginPath();
        ctx.moveTo(axes.left, y);
        ctx.lineTo(axes.right, y);
        ctx.stroke();

        ctx.fillText(i, axes.left - 8, y + 4);
    }

    // Ogive line

    ctx.strokeStyle = "#16a34a";
    ctx.lineWidth = 3;
    ctx.beginPath();

    boundaries.forEach((boundary, index) => {

        const x = xPosition(boundary);
        const y = yPosition(cumulative[index]);

        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }

    });

    ctx.stroke();

    // Points

    boundaries.forEach((boundary, index) => {

        const x = xPosition(boundary);
        const y = yPosition(cumulative[index]);

        ctx.fillStyle = "#15803d";
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();

    });

}


// ============================================
// 11. SYMMETRICAL AND SKEWED DISTRIBUTIONS
// ============================================

function drawDistributionGraph() {

    const graph = prepareCanvas("distributionGraph");

    if (!graph) return;

    const { ctx, width, height } = graph;

    const left = 45;
    const right = width - 15;

    const rowHeight = 85;

    const distributions = [
        {
            name: "Symmetrical",
            type: "normal"
        },
        {
            name: "Positively skewed",
            type: "right"
        },
        {
            name: "Negatively skewed",
            type: "left"
        }
    ];

    ctx.font = "12px Arial";

    distributions.forEach((distribution, index) => {

        const baseY = 65 + index * rowHeight;

        ctx.fillStyle = "#172554";
        ctx.textAlign = "left";
        ctx.fillText(distribution.name, left, baseY - 35);

        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 1;

        ctx.beginPath();
        ctx.moveTo(left, baseY);
        ctx.lineTo(right, baseY);
        ctx.stroke();

        ctx.strokeStyle = "#2563eb";
        ctx.lineWidth = 3;
        ctx.beginPath();

        const points = 100;

        for (let i = 0; i <= points; i++) {

            const t = i / points;
            let x = left + t * (right - left);
            let value;

            if (distribution.type === "normal") {

                value = Math.exp(-Math.pow((t - 0.5) / 0.16, 2) / 2);

            } else if (distribution.type === "right") {

                value = Math.pow(t + 0.02, 1.5) *
                    Math.exp(-t * 5);

            } else {

                const reversed = 1 - t;

                value = Math.pow(reversed + 0.02, 1.5) *
                    Math.exp(-reversed * 5);

            }

            const scale = distribution.type === "normal" ? 35 : 55;
            const y = baseY - value * scale;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

        }

        ctx.stroke();

    });

}


// ============================================
// 12. BOX-AND-WHISKER PLOT
// ============================================

function drawBoxPlot() {

    const graph = prepareCanvas("boxPlotGraph");

    if (!graph) return;

    const { ctx, width, height } = graph;

    const left = 45;
    const right = width - 25;
    const middleY = 165;

    // Example five-number summary:
    // Minimum 5, Q1 10, Median 15, Q3 20, Maximum 25
    // Outlier 35

    const min = 5;
    const q1 = 10;
    const median = 15;
    const q3 = 20;
    const max = 25;
    const outlier = 35;

    const scaleMin = 0;
    const scaleMax = 40;

    function xPosition(value) {
        return left +
            ((value - scaleMin) / (scaleMax - scaleMin)) *
            (right - left);
    }

    // Horizontal number line

    ctx.strokeStyle = "#172554";
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    ctx.moveTo(left, middleY);
    ctx.lineTo(right, middleY);
    ctx.stroke();

    // Scale numbers

    ctx.fillStyle = "#172554";
    ctx.font = "12px Arial";
    ctx.textAlign = "center";

    for (let i = 0; i <= 40; i += 5) {

        const x = xPosition(i);

        ctx.beginPath();
        ctx.moveTo(x, middleY - 5);
        ctx.lineTo(x, middleY + 5);
        ctx.stroke();

        ctx.fillText(i, x, middleY + 25);
    }

    // Whiskers

    ctx.strokeStyle = "#2563eb";
    ctx.lineWidth = 3;

    ctx.beginPath();

    ctx.moveTo(xPosition(min), middleY);
    ctx.lineTo(xPosition(q1), middleY);

    ctx.moveTo(xPosition(q3), middleY);
    ctx.lineTo(xPosition(max), middleY);

    ctx.stroke();

    // End caps

    [min, max].forEach(value => {

        const x = xPosition(value);

        ctx.beginPath();
        ctx.moveTo(x, middleY - 15);
        ctx.lineTo(x, middleY + 15);
        ctx.stroke();

    });

    // Box

    ctx.fillStyle = "#bfdbfe";
    ctx.strokeStyle = "#1e40af";
    ctx.lineWidth = 2;

    ctx.fillRect(
        xPosition(q1),
        middleY - 30,
        xPosition(q3) - xPosition(q1),
        60
    );

    ctx.strokeRect(
        xPosition(q1),
        middleY - 30,
        xPosition(q3) - xPosition(q1),
        60
    );

    // Median

    ctx.strokeStyle = "#dc2626";
    ctx.lineWidth = 3;

    ctx.beginPath();
    ctx.moveTo(xPosition(median), middleY - 30);
    ctx.lineTo(xPosition(median), middleY + 30);
    ctx.stroke();

    // Outlier

    ctx.fillStyle = "#dc2626";

    ctx.beginPath();
    ctx.arc(xPosition(outlier), middleY, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = "#172554";
    ctx.fillText("Outlier", xPosition(outlier), middleY - 18);

    ctx.textAlign = "center";
    ctx.fillText("Box-and-whisker plot", width / 2, 45);

}


// ============================================
// 13. DRAW ALL GRAPHS
// ============================================

function drawAllGraphs() {

    drawHistogram();
    drawFrequencyPolygon();
    drawOgive();
    drawDistributionGraph();
    drawBoxPlot();

}


// ============================================
// 14. LOAD ALL CONTENT
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // Unit 1
    displayWorkedExamples(
        statisticsExamples.unit1,
        "unit1WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit1,
        "unit1Questions"
    );


    // Unit 2
    displayWorkedExamples(
        statisticsExamples.unit2,
        "unit2WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit2,
        "unit2Questions"
    );


    // Unit 3
    displayWorkedExamples(
        statisticsExamples.unit3,
        "unit3WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit3,
        "unit3Questions"
    );


    // Unit 4
    displayWorkedExamples(
        statisticsExamples.unit4,
        "unit4WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit4,
        "unit4Questions"
    );


    // Unit 5
    displayWorkedExamples(
        statisticsExamples.unit5,
        "unit5WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit5,
        "unit5Questions"
    );


    // Unit 6
    displayWorkedExamples(
        statisticsExamples.unit6,
        "unit6WorkedExamples"
    );

    displayPracticeQuestions(
        statisticsPractice.unit6,
        "unit6Questions"
    );


    // Draw graphs
    drawAllGraphs();

    console.log("Statistics page loaded successfully.");

});


// Redraw graphs when the browser window changes size

window.addEventListener("resize", function () {
    drawAllGraphs();
});