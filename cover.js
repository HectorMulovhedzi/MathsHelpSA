
// =====================================
// MATHSHELPSA - COVER PAGE JAVASCRIPT
// =====================================


// Get the two canvas elements from HTML

const parabolaCanvas =
    document.getElementById("parabolaCanvas");

const expCanvas =
    document.getElementById("expCanvas");


// Get the drawing tools

const pctx = parabolaCanvas.getContext("2d");

const ectx = expCanvas.getContext("2d");


// Animation variables

let parabolaProgress = 0;
let exponentialProgress = 0;

let parabolaAnimation;
let exponentialAnimation;


// =====================================
// LEFT GRAPH: PARABOLA
// =====================================

function drawParabola() {

    pctx.clearRect(
        0,
        0,
        parabolaCanvas.width,
        parabolaCanvas.height
    );

    const centerX = parabolaCanvas.width / 2;
    const centerY = 105;


    // Draw the axes

    pctx.strokeStyle = "rgba(255,255,255,0.3)";
    pctx.lineWidth = 1;

    pctx.beginPath();

    pctx.moveTo(0, centerY);
    pctx.lineTo(parabolaCanvas.width, centerY);

    pctx.moveTo(centerX, 0);
    pctx.lineTo(centerX, parabolaCanvas.height);

    pctx.stroke();


    // Draw the parabola

    pctx.strokeStyle = "#ffcc00";
    pctx.lineWidth = 3;

    pctx.beginPath();

    const totalPoints = 80;

    const pointsToDraw =
        Math.floor(parabolaProgress * totalPoints);


    for (let i = 0; i <= pointsToDraw; i++) {

        const t = (i / totalPoints) * 2 - 1;

        const x = centerX + t * 85;

        const y = centerY - t * t * 65;


        if (i === 0) {

            pctx.moveTo(x, y);

        } else {

            pctx.lineTo(x, y);

        }

    }

    pctx.stroke();


    // Increase animation progress

    parabolaProgress += 0.015;


    if (parabolaProgress <= 1.05) {

        parabolaAnimation =
            requestAnimationFrame(drawParabola);

    }

}


// =====================================
// RIGHT GRAPH: EXPONENTIAL FUNCTION
// =====================================

function drawExponential() {

    ectx.clearRect(
        0,
        0,
        expCanvas.width,
        expCanvas.height
    );

    const centerX = 30;
    const centerY = 110;


    // Draw the axes

    ectx.strokeStyle = "rgba(255,255,255,0.3)";
    ectx.lineWidth = 1;

    ectx.beginPath();

    ectx.moveTo(0, centerY);
    ectx.lineTo(expCanvas.width, centerY);

    ectx.moveTo(centerX, 0);
    ectx.lineTo(centerX, expCanvas.height);

    ectx.stroke();


    // Draw exponential curve

    ectx.strokeStyle = "#00ffaa";
    ectx.lineWidth = 3;

    ectx.beginPath();

    const totalPoints = 80;

    const pointsToDraw =
        Math.floor(exponentialProgress * totalPoints);


    for (let i = 0; i <= pointsToDraw; i++) {

        const t = i / totalPoints;

        const x = centerX + t * 160;

        const xValue = -2 + t * 4;

        const yValue = Math.pow(2, xValue);

        const y = centerY - (yValue - 0.25) * 22;


        if (i === 0) {

            ectx.moveTo(x, y);

        } else {

            ectx.lineTo(x, y);

        }

    }

    ectx.stroke();


    // Increase animation progress

    exponentialProgress += 0.015;


    if (exponentialProgress <= 1.05) {

        exponentialAnimation =
            requestAnimationFrame(drawExponential);

    }

}


// =====================================
// REPLAY BOTH GRAPHS
// =====================================

function startGraphs() {

    cancelAnimationFrame(parabolaAnimation);

    cancelAnimationFrame(exponentialAnimation);


    // Reset both animations

    parabolaProgress = 0;

    exponentialProgress = 0;


    // Start drawing again

    drawParabola();

    drawExponential();

}


// Connect replay button to function

document.getElementById("replayButton")
    .addEventListener("click", startGraphs);


// Start animations when page loads

startGraphs();
