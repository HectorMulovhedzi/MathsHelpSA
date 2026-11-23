
/* =========================================
   MATHSHELP SA
   GRADE 12 MATHEMATICS
   TRIGONOMETRY
   COMPOUND AND DOUBLE ANGLE IDENTITIES
========================================= */


/* =========================================
   1. OPEN AND CLOSE UNITS
========================================= */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.hidden = !section.hidden;

    const icon = button.querySelector(".toggle-icon");

    if (icon) {
        icon.textContent = section.hidden ? "+" : "−";
    }

}


/* =========================================
   2. UNIT 1 NOTES
   REVISION: GRADE 11 TRIGONOMETRY
========================================= */

const unit1Notes = `

<div class="unit-notes">

<h4>1. Trigonometric Ratios</h4>

<p>In a right-angled triangle, the three main trigonometric ratios are sine, cosine and tangent.</p>

<div class="formula-box">
sin θ = Opposite / Hypotenuse
<br><br>
cos θ = Adjacent / Hypotenuse
<br><br>
tan θ = Opposite / Adjacent
</div>

<p>Remember: SOH CAH TOA.</p>

<ul>
<li>SOH: Sine = Opposite / Hypotenuse</li>
<li>CAH: Cosine = Adjacent / Hypotenuse</li>
<li>TOA: Tangent = Opposite / Adjacent</li>
</ul>

</div>


<div class="unit-notes">

<h4>2. Important Trigonometric Identities</h4>

<p>An identity is an equation that is true for every value in its domain.</p>

<div class="formula-box">
sin² θ + cos² θ = 1
<br><br>
tan θ = sin θ / cos θ
<br><br>
1 + tan² θ = 1 / cos² θ
</div>

<p>These identities are useful when simplifying and proving trigonometric expressions.</p>

</div>


<div class="unit-notes">

<h4>3. Special Angles</h4>

<p>You must know the exact values of the following angles.</p>

<div class="formula-box">
sin 30° = 1/2
<br>
cos 30° = √3/2
<br>
tan 30° = 1/√3
<br><br>
sin 45° = √2/2
<br>
cos 45° = √2/2
<br>
tan 45° = 1
<br><br>
sin 60° = √3/2
<br>
cos 60° = 1/2
<br>
tan 60° = √3
</div>

</div>


<div class="unit-notes">

<h4>4. Signs in the Four Quadrants</h4>

<p>The signs of trigonometric ratios depend on the quadrant.</p>

<ul>
<li>Quadrant I: All ratios are positive.</li>
<li>Quadrant II: Sine is positive.</li>
<li>Quadrant III: Tangent is positive.</li>
<li>Quadrant IV: Cosine is positive.</li>
</ul>

<div class="formula-box">
ASTC
<br>
All - Sine - Tangent - Cosine
</div>

<p>Use the CAST or ASTC rule to determine the signs of trigonometric ratios.</p>

</div>


<div class="unit-notes">

<h4>5. Reference Angles</h4>

<p>A reference angle is the acute angle between the terminal arm and the x-axis.</p>

<p>For example, if θ = 150°:</p>

<div class="formula-box">
Reference angle = 180° − 150°
<br>
= 30°
</div>

<p>The reference angle helps us determine trigonometric values in different quadrants.</p>

</div>


<div class="unit-notes">

<h4>6. Periods of Trigonometric Functions</h4>

<div class="formula-box">
sin θ: 360°
<br><br>
cos θ: 360°
<br><br>
tan θ: 180°
</div>

<p>Sine and cosine repeat every 360°, while tangent repeats every 180°.</p>

</div>

`;


/* =========================================
   3. UNIT 2 NOTES
   COMPOUND AND DOUBLE ANGLE IDENTITIES
========================================= */

const unit2Notes = `

<div class="unit-notes">

<h4>1. What is a Compound Angle?</h4>

<p>A compound angle is an angle written as the sum or difference of two angles.</p>

<p>Examples:</p>

<ul>
<li>75° = 45° + 30°</li>
<li>15° = 45° − 30°</li>
<li>120° = 60° + 60°</li>
</ul>

<p>Compound-angle identities allow us to calculate trigonometric values of angles that may not be special angles.</p>

</div>


<div class="unit-notes">

<h4>2. Sine Compound-Angle Identity</h4>

<p>The sine addition identity is:</p>

<div class="formula-box">
sin(A + B) = sin A cos B + cos A sin B
</div>

<p>The sine subtraction identity is:</p>

<div class="formula-box">
sin(A − B) = sin A cos B − cos A sin B
</div>

<p>Notice that the sign between the two terms follows the sign in the compound angle.</p>

</div>


<div class="unit-notes">

<h4>3. Cosine Compound-Angle Identity</h4>

<p>The cosine addition identity is:</p>

<div class="formula-box">
cos(A + B) = cos A cos B − sin A sin B
</div>

<p>The cosine subtraction identity is:</p>

<div class="formula-box">
cos(A − B) = cos A cos B + sin A sin B
</div>

<p>Remember that the signs are different from the sine identities.</p>

</div>


<div class="unit-notes">

<h4>4. Tangent Compound-Angle Identity</h4>

<div class="formula-box">
tan(A + B) =
(tan A + tan B) /
(1 − tan A tan B)
</div>

<div class="formula-box">
tan(A − B) =
(tan A − tan B) /
(1 + tan A tan B)
</div>

<p>These identities are valid where the expressions involved are defined.</p>

</div>


<div class="unit-notes">

<h4>5. Deriving the Double-Angle Sine Identity</h4>

<p>Start with the compound-angle identity:</p>

<div class="formula-box">
sin(A + B) = sin A cos B + cos A sin B
</div>

<p>Let B = A.</p>

<div class="formula-box">
sin(A + A) =
sin A cos A + cos A sin A
</div>

<p>Combine like terms:</p>

<div class="formula-box">
sin 2A = 2 sin A cos A
</div>

</div>


<div class="unit-notes">

<h4>6. Deriving the Double-Angle Cosine Identity</h4>

<p>Start with:</p>

<div class="formula-box">
cos(A + B) =
cos A cos B − sin A sin B
</div>

<p>Let B = A.</p>

<div class="formula-box">
cos 2A = cos A cos A − sin A sin A
</div>

<p>Therefore:</p>

<div class="formula-box">
cos 2A = cos² A − sin² A
</div>

<p>Using sin² A + cos² A = 1, we can obtain two more forms.</p>

<div class="formula-box">
cos 2A = 1 − 2 sin² A
<br><br>
cos 2A = 2 cos² A − 1
</div>

</div>


<div class="unit-notes">

<h4>7. Deriving the Double-Angle Tangent Identity</h4>

<p>Start with the tangent addition identity:</p>

<div class="formula-box">
tan(A + B) =
(tan A + tan B) /
(1 − tan A tan B)
</div>

<p>Let B = A.</p>

<div class="formula-box">
tan 2A =
(tan A + tan A) /
(1 − tan² A)
</div>

<p>Therefore:</p>

<div class="formula-box">
tan 2A = 2 tan A / (1 − tan² A)
</div>

<p>This identity is used where the original tangent expressions are defined.</p>

</div>

`;


/* =========================================
   4. UNIT 3 NOTES
   PROVING TRIGONOMETRIC IDENTITIES
========================================= */

const unit3Notes = `

<div class="unit-notes">

<h4>1. What is Proving an Identity?</h4>

<p>To prove a trigonometric identity, we show that the left-hand side and right-hand side are equal for all values where both sides are defined.</p>

<p>We normally start with one side and simplify it until we obtain the other side.</p>

</div>


<div class="unit-notes">

<h4>2. Important Rules When Proving Identities</h4>

<ol>
<li>Start with the more complicated side.</li>
<li>Do not change both sides at the same time.</li>
<li>Use the fundamental identities.</li>
<li>Use compound-angle identities when necessary.</li>
<li>Use double-angle identities when necessary.</li>
<li>Factorise or simplify carefully.</li>
<li>Show every important step.</li>
</ol>

</div>


<div class="unit-notes">

<h4>3. Useful Identities for Proofs</h4>

<div class="formula-box">
sin² A + cos² A = 1
<br><br>
sin 2A = 2 sin A cos A
<br><br>
cos 2A = cos² A − sin² A
<br><br>
cos 2A = 1 − 2 sin² A
<br><br>
cos 2A = 2 cos² A − 1
</div>

</div>


<div class="unit-notes">

<h4>4. Proving an Identity Using a Double Angle</h4>

<p>Example:</p>

<div class="formula-box">
(sin A + cos A)² = 1 + sin 2A
</div>

<p>Start with the left-hand side.</p>

<div class="formula-box">
= sin² A + 2 sin A cos A + cos² A
<br><br>
= (sin² A + cos² A) + 2 sin A cos A
<br><br>
= 1 + sin 2A
</div>

<p>Therefore, LHS = RHS.</p>

</div>


<div class="unit-notes">

<h4>5. Proving an Identity Using a Compound Angle</h4>

<p>Example:</p>

<div class="formula-box">
sin(A + B) + sin(A − B)
<br>
= 2 sin A cos B
</div>

<p>Start with the left-hand side.</p>

<div class="formula-box">
= sin A cos B + cos A sin B
<br>
+ sin A cos B − cos A sin B
<br><br>
= 2 sin A cos B
</div>

<p>Therefore, LHS = RHS.</p>

</div>


<div class="unit-notes">

<h4>6. Common Mistakes</h4>

<ul>
<li>Confusing the signs in the sine and cosine compound identities.</li>
<li>Forgetting the square when using sin² A or cos² A.</li>
<li>Dividing by an expression that could equal zero without considering restrictions.</li>
<li>Changing both sides of an identity at the same time.</li>
<li>Assuming that an equation is an identity just because it works for one angle.</li>
</ul>

</div>

`;


/* =========================================
   5. UNIT 4 NOTES
   EQUATIONS AND GENERAL SOLUTIONS
========================================= */

const unit4Notes = `

<div class="unit-notes">

<h4>1. Solving Trigonometric Equations</h4>

<p>A trigonometric equation contains a trigonometric function such as sine, cosine or tangent.</p>

<p>Examples:</p>

<ul>
<li>sin x = 1/2</li>
<li>cos x = −1/2</li>
<li>tan x = 1</li>
</ul>

<p>We use reference angles, quadrants and periods to find the solutions.</p>

</div>


<div class="unit-notes">

<h4>2. General Solution for Sine</h4>

<p>If:</p>

<div class="formula-box">
sin x = sin α
</div>

<p>The general solutions are:</p>

<div class="formula-box">
x = α + 360°k
<br><br>
OR
<br><br>
x = 180° − α + 360°k
</div>

<p>Where k is any integer.</p>

<p>For example, sin x = 1/2:</p>

<div class="formula-box">
x = 30° + 360°k
<br><br>
OR
<br><br>
x = 150° + 360°k
</div>

</div>


<div class="unit-notes">

<h4>3. General Solution for Cosine</h4>

<p>If:</p>

<div class="formula-box">
cos x = cos α
</div>

<p>The general solutions are:</p>

<div class="formula-box">
x = α + 360°k
<br><br>
OR
<br><br>
x = −α + 360°k
</div>

<p>For example, cos x = 1/2:</p>

<div class="formula-box">
x = 60° + 360°k
<br><br>
OR
<br><br>
x = 300° + 360°k
</div>

</div>


<div class="unit-notes">

<h4>4. General Solution for Tangent</h4>

<p>If:</p>

<div class="formula-box">
tan x = tan α
</div>

<p>The general solution is:</p>

<div class="formula-box">
x = α + 180°k
</div>

<p>For example, tan x = 1:</p>

<div class="formula-box">
x = 45° + 180°k
</div>

</div>


<div class="unit-notes">

<h4>5. Solving Equations Using Double-Angle Identities</h4>

<p>Example:</p>

<div class="formula-box">
sin 2x = 1/2
</div>

<p>Let θ = 2x.</p>

<div class="formula-box">
2x = 30° + 360°k
<br><br>
OR
<br><br>
2x = 150° + 360°k
</div>

<p>Divide each solution by 2.</p>

<div class="formula-box">
x = 15° + 180°k
<br><br>
OR
<br><br>
x = 75° + 180°k
</div>

</div>


<div class="unit-notes">

<h4>6. Important Things to Remember</h4>

<ul>
<li>Sine and cosine have a period of 360°.</li>
<li>Tangent has a period of 180°.</li>
<li>When the angle is 2x, remember to divide the complete solutions by 2.</li>
<li>k represents any integer: 0, ±1, ±2, and so on.</li>
<li>Check whether the question asks for a general solution or solutions in a given interval.</li>
</ul>

</div>

`;


/* =========================================
   6. DISPLAY UNIT NOTES
========================================= */

const allNotes = [
    ["unit1Notes", unit1Notes],
    ["unit2Notes", unit2Notes],
    ["unit3Notes", unit3Notes],
    ["unit4Notes", unit4Notes]
];

allNotes.forEach(([id, content]) => {

    const element = document.getElementById(id);

    if (element) {
        element.innerHTML = content;
    }

});


/* =========================================
   7. WORKED EXAMPLES
========================================= */

const examplesByUnit = {

    unit1: [

        {
            question: "Calculate sin 150° without using a calculator.",

            steps: [
                "Step 1: Identify the quadrant.",
                "150° lies in Quadrant II.",
                "Step 2: Calculate the reference angle.",
                "180° − 150° = 30°",
                "Step 3: Sine is positive in Quadrant II.",
                "sin 150° = sin 30°",
                "Step 4: Use the special-angle value.",
                "sin 150° = 1/2"
            ],

            answer: "1/2"
        },

        {
            question: "Simplify (sin² x + cos² x) + tan x × cos x.",

            steps: [
                "Step 1: Use the fundamental identity.",
                "sin² x + cos² x = 1",
                "Step 2: Use tan x = sin x / cos x.",
                "tan x × cos x = sin x",
                "Step 3: Substitute.",
                "1 + sin x"
            ],

            answer: "1 + sin x"
        },

        {
            question: "Determine the value of cos 300°.",

            steps: [
                "Step 1: Find the reference angle.",
                "360° − 300° = 60°",
                "Step 2: 300° is in Quadrant IV.",
                "Cosine is positive in Quadrant IV.",
                "Step 3: Use the special angle.",
                "cos 300° = cos 60° = 1/2"
            ],

            answer: "1/2"
        }

    ],


    unit2: [

        {
            question: "Derive the identity sin 2A = 2 sin A cos A.",

            steps: [
                "Step 1: Start with the sine addition identity.",
                "sin(A+B) = sin A cos B + cos A sin B",
                "Step 2: Let B = A.",
                "sin(A+A) = sin A cos A + cos A sin A",
                "Step 3: Simplify.",
                "sin 2A = 2 sin A cos A"
            ],

            answer: "sin 2A = 2 sin A cos A"
        },

        {
            question: "Derive the three forms of the double-angle cosine identity.",

            steps: [
                "Step 1: Start with the cosine addition identity.",
                "cos(A+B) = cos A cos B − sin A sin B",
                "Step 2: Let B = A.",
                "cos 2A = cos² A − sin² A",
                "Step 3: Use sin² A = 1 − cos² A.",
                "cos 2A = cos² A − (1 − cos² A)",
                "cos 2A = 2 cos² A − 1",
                "Step 4: Use cos² A = 1 − sin² A.",
                "cos 2A = (1 − sin² A) − sin² A",
                "cos 2A = 1 − 2 sin² A"
            ],

            answer: "cos 2A = cos² A − sin² A = 2 cos² A − 1 = 1 − 2 sin² A"
        },

        {
            question: "Calculate sin 75° using a compound-angle identity.",

            steps: [
                "Step 1: Write 75° as a sum.",
                "75° = 45° + 30°",
                "Step 2: Use the sine addition identity.",
                "sin(45°+30°) = sin45°cos30° + cos45°sin30°",
                "Step 3: Substitute special-angle values.",
                "= (√2/2)(√3/2) + (√2/2)(1/2)",
                "Step 4: Simplify.",
                "= (√6 + √2)/4"
            ],

            answer: "(√6 + √2)/4"
        },

        {
            question: "Calculate cos 15° using a compound-angle identity.",

            steps: [
                "Step 1: Write 15° as a difference.",
                "15° = 45° − 30°",
                "Step 2: Use the cosine subtraction identity.",
                "cos(45°−30°) = cos45°cos30° + sin45°sin30°",
                "Step 3: Substitute.",
                "= (√2/2)(√3/2) + (√2/2)(1/2)",
                "Step 4: Simplify.",
                "= (√6 + √2)/4"
            ],

            answer: "(√6 + √2)/4"
        }

    ],


    unit3: [

        {
            question: "Prove that (sin A + cos A)² = 1 + sin 2A.",

            steps: [
                "Step 1: Start with the left-hand side.",
                "(sin A + cos A)²",
                "Step 2: Expand the brackets.",
                "= sin² A + 2 sin A cos A + cos² A",
                "Step 3: Group the first and last terms.",
                "= (sin² A + cos² A) + 2 sin A cos A",
                "Step 4: Apply the identities.",
                "= 1 + sin 2A",
                "Therefore LHS = RHS."
            ],

            answer: "LHS = RHS"
        },

        {
            question: "Prove that sin(A+B) + sin(A−B) = 2 sin A cos B.",

            steps: [
                "Step 1: Start with the left-hand side.",
                "sin(A+B) + sin(A−B)",
                "Step 2: Expand using compound-angle identities.",
                "= sin A cos B + cos A sin B",
                "+ sin A cos B − cos A sin B",
                "Step 3: Cancel opposite terms.",
                "= 2 sin A cos B",
                "Therefore LHS = RHS."
            ],

            answer: "2 sin A cos B"
        },

        {
            question: "Prove that (1 − cos 2A)/sin 2A = tan A.",

            steps: [
                "Step 1: Start with the left-hand side.",
                "(1 − cos 2A)/sin 2A",
                "Step 2: Use the double-angle identities.",
                "= [1 − (1 − 2 sin² A)]/[2 sin A cos A]",
                "Step 3: Simplify the numerator.",
                "= 2 sin² A / (2 sin A cos A)",
                "Step 4: Cancel common factors.",
                "= sin A / cos A",
                "= tan A",
                "Therefore LHS = RHS."
            ],

            answer: "tan A"
        }

    ],


    unit4: [

        {
            question: "Solve sin x = 1/2 for the general solution.",

            steps: [
                "Step 1: Find the reference angle.",
                "sin 30° = 1/2",
                "Step 2: Sine is positive in Quadrants I and II.",
                "Step 3: Write both general solutions.",
                "x = 30° + 360°k",
                "OR",
                "x = 150° + 360°k",
                "where k is any integer."
            ],

            answer: "x = 30° + 360°k or x = 150° + 360°k"
        },

        {
            question: "Solve cos x = −√3/2 for the general solution.",

            steps: [
                "Step 1: Find the reference angle.",
                "cos 30° = √3/2",
                "Step 2: Cosine is negative in Quadrants II and III.",
                "Step 3: Write the solutions.",
                "x = 150° + 360°k",
                "OR",
                "x = 210° + 360°k",
                "where k is any integer."
            ],

            answer: "x = 150° + 360°k or x = 210° + 360°k"
        },

        {
            question: "Solve tan 2x = 1 for the general solution.",

            steps: [
                "Step 1: Use the special-angle value.",
                "tan 45° = 1",
                "Step 2: Write the general solution.",
                "2x = 45° + 180°k",
                "Step 3: Divide by 2.",
                "x = 22.5° + 90°k",
                "where k is any integer."
            ],

            answer: "x = 22.5° + 90°k"
        },

        {
            question: "Solve sin 2x = 1/2 for the general solution.",

            steps: [
                "Step 1: Find the reference angle.",
                "sin 30° = 1/2",
                "Step 2: Sine is positive in Quadrants I and II.",
                "2x = 30° + 360°k",
                "OR",
                "2x = 150° + 360°k",
                "Step 3: Divide both equations by 2.",
                "x = 15° + 180°k",
                "OR",
                "x = 75° + 180°k"
            ],

            answer: "x = 15° + 180°k or x = 75° + 180°k"
        }

    ]

};


/* =========================================
   8. DISPLAY WORKED EXAMPLES
========================================= */

function displayExamples(examples, containerId, prefix) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((example, index) => {

        const card = document.createElement("div");
        card.className = "example-card";

        const question = document.createElement("div");
        question.className = "example-question";
        question.textContent =
            `Example ${index + 1}: ${example.question}`;

        const button = document.createElement("button");
        button.className = "step-button";
        button.textContent = "Show Solution";

        const solution = document.createElement("div");
        solution.className = "solution-steps";
        solution.hidden = true;

        example.steps.forEach(step => {

            const paragraph = document.createElement("p");
            paragraph.textContent = step;

            solution.appendChild(paragraph);

        });

        const answer = document.createElement("p");
        answer.className = "answer";
        answer.textContent = `Final Answer: ${example.answer}`;

        solution.appendChild(answer);

        button.addEventListener("click", function () {

            solution.hidden = !solution.hidden;

            button.textContent = solution.hidden
                ? "Show Solution"
                : "Hide Solution";

        });

        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(solution);

        container.appendChild(card);

    });

}


/* =========================================
   9. LOAD EXAMPLES INTO EACH UNIT
========================================= */

for (const unit in examplesByUnit) {

    displayExamples(
        examplesByUnit[unit],
        `${unit}Examples`,
        unit
    );

}


/* =========================================
   10. PRACTICE QUESTIONS
========================================= */

const practiceByUnit = {

    unit1: [

        {
            question: "Calculate sin 30°.",
            answer: ["1/2", "0.5"]
        },

        {
            question: "Calculate cos 60°.",
            answer: ["1/2", "0.5"]
        },

        {
            question: "Calculate tan 45°.",
            answer: ["1"]
        },

        {
            question: "In which quadrant is sine negative and cosine positive?",
            answer: ["quadrant iv", "iv", "4"]
        },

        {
            question: "What is the reference angle of 135°?",
            answer: ["45", "45°"]
        }

    ],


    unit2: [

        {
            question: "Complete: sin(A+B) = sin A cos B + ______.",
            answer: ["cos a sin b"]
        },

        {
            question: "Complete: cos(A+B) = cos A cos B − ______.",
            answer: ["sin a sin b"]
        },

        {
            question: "Write the double-angle identity for sin 2A.",
            answer: ["2 sin a cos a", "2sina cosa"]
        },

        {
            question: "Write the double-angle identity for cos 2A using sin² A.",
            answer: ["1-2sin²a", "1-2sin^2a"]
        },

        {
            question: "Write the double-angle identity for tan 2A.",
            answer: ["2tana/(1-tan²a)", "2tana/(1-tan^2a)", "2tan a/(1-tan² a)"]
        }

    ],


    unit3: [

        {
            question: "Simplify sin² A + cos² A.",
            answer: ["1"]
        },

        {
            question: "Simplify 2 sin A cos A.",
            answer: ["sin 2a", "sin2a"]
        },

        {
            question: "Simplify cos² A − sin² A.",
            answer: ["cos 2a", "cos2a"]
        },

        {
            question: "Simplify 1 − 2 sin² A.",
            answer: ["cos 2a", "cos2a"]
        },

        {
            question: "Simplify sin(A+B) + sin(A−B).",
            answer: ["2sin a cos b", "2 sin a cos b"]
        }

    ],


    unit4: [

        {
            question: "Find the reference angle for sin x = 1/2.",
            answer: ["30", "30°"]
        },

        {
            question: "Give the second solution in the interval 0° to 360° for sin x = 1/2.",
            answer: ["150", "150°"]
        },

        {
            question: "Give the second solution in the interval 0° to 360° for cos x = 1/2.",
            answer: ["300", "300°"]
        },

        {
            question: "What is the period of tan x in degrees?",
            answer: ["180", "180°"]
        },

        {
            question: "Solve tan x = 1 for the general solution.",
            answer: ["x=45+180k", "45+180k", "x = 45° + 180°k"]
        }

    ]

};


/* =========================================
   11. NORMALISE PRACTICE ANSWERS
========================================= */

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/−/g, "-")
        .replace(/°/g, "")
        .replace(/²/g, "^2")
        .replace(/√/g, "sqrt")
        .replace(/×/g, "")
        .replace(/÷/g, "/")
        .trim();

}


/* =========================================
   12. CHECK PRACTICE ANSWERS
========================================= */

function checkPractice(inputId, feedbackId, correctAnswers) {

    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);

    if (!input || !feedback) return;

    const userAnswer = normaliseAnswer(input.value);

    const acceptedAnswers = Array.isArray(correctAnswers)
        ? correctAnswers
        : [correctAnswers];

    if (userAnswer === "") {

        feedback.textContent = "Please enter your answer.";
        feedback.style.color = "#d97706";

        return;

    }

    const isCorrect = acceptedAnswers.some(answer =>
        userAnswer === normaliseAnswer(answer)
    );

    if (isCorrect) {

        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#15803d";

    } else {

        feedback.textContent = "Not quite. Try again.";
        feedback.style.color = "#dc2626";

    }

}


/* =========================================
   13. DISPLAY PRACTICE QUESTIONS
========================================= */

function displayPractice(questions, containerId, prefix) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "practice-card";

        const heading = document.createElement("h4");
        heading.textContent = `Question ${index + 1}`;

        const question = document.createElement("p");
        question.textContent = item.question;

        const input = document.createElement("input");
        input.type = "text";
        input.id = `${prefix}Answer${index}`;
        input.placeholder = "Enter your answer";

        const button = document.createElement("button");
        button.className = "check-button";
        button.textContent = "Check Answer";

        const feedback = document.createElement("p");
        feedback.className = "feedback";
        feedback.id = `${prefix}Feedback${index}`;

        button.addEventListener("click", function () {

            checkPractice(
                `${prefix}Answer${index}`,
                `${prefix}Feedback${index}`,
                item.answer
            );

        });

        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(input);
        card.appendChild(button);
        card.appendChild(feedback);

        container.appendChild(card);

    });

}


/* =========================================
   14. LOAD PRACTICE QUESTIONS
========================================= */

for (const unit in practiceByUnit) {

    displayPractice(
        practiceByUnit[unit],
        `${unit}Practice`,
        unit
    );

}


/* =========================================
   15. TOPIC QUIZ
   10 QUESTIONS = 10 MARKS
========================================= */

const quizData = [

    {
        question: "What is the value of sin 30°?",

        options: [
            "1",
            "1/2",
            "√3/2",
            "0"
        ],

        answer: "1/2"
    },

    {
        question: "Which is the correct sine addition identity?",

        options: [
            "sin(A+B) = sin A cos B + cos A sin B",
            "sin(A+B) = sin A sin B + cos A cos B",
            "sin(A+B) = sin A − sin B",
            "sin(A+B) = cos A + cos B"
        ],

        answer: "sin(A+B) = sin A cos B + cos A sin B"
    },

    {
        question: "Which is the correct cosine addition identity?",

        options: [
            "cos(A+B) = cos A cos B + sin A sin B",
            "cos(A+B) = cos A cos B − sin A sin B",
            "cos(A+B) = sin A cos B",
            "cos(A+B) = cos A − cos B"
        ],

        answer: "cos(A+B) = cos A cos B − sin A sin B"
    },

    {
        question: "What is the double-angle identity for sin 2A?",

        options: [
            "sin 2A = sin² A",
            "sin 2A = 2 sin A cos A",
            "sin 2A = cos² A − sin² A",
            "sin 2A = 2 tan A"
        ],

        answer: "sin 2A = 2 sin A cos A"
    },

    {
        question: "Which is a correct form of cos 2A?",

        options: [
            "cos 2A = 1 + 2 sin² A",
            "cos 2A = 2 sin² A − 1",
            "cos 2A = 1 − 2 sin² A",
            "cos 2A = sin A cos A"
        ],

        answer: "cos 2A = 1 − 2 sin² A"
    },

    {
        question: "What is tan 45°?",

        options: [
            "0",
            "1",
            "√3",
            "1/2"
        ],

        answer: "1"
    },

    {
        question: "Which method is useful when proving a trigonometric identity?",

        options: [
            "Change both sides randomly",
            "Start with one side and simplify",
            "Use only a calculator",
            "Ignore the identities"
        ],

        answer: "Start with one side and simplify"
    },

    {
        question: "What is the period of the tangent function in degrees?",

        options: [
            "90°",
            "180°",
            "270°",
            "360°"
        ],

        answer: "180°"
    },

    {
        question: "Solve sin x = 1/2 in the interval 0° ≤ x ≤ 360°.",

        options: [
            "30° and 150°",
            "30° and 210°",
            "60° and 120°",
            "150° and 300°"
        ],

        answer: "30° and 150°"
    },

    {
        question: "What is the general solution for tan x = 1?",

        options: [
            "x = 45° + 360°k",
            "x = 45° + 180°k",
            "x = 30° + 360°k",
            "x = 90° + 180°k"
        ],

        answer: "x = 45° + 180°k"
    }

];


/* =========================================
   16. QUIZ VARIABLES
========================================= */

let currentQuestion = 0;

let quizScore = 0;

let userAnswers = [];


/* =========================================
   17. START QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;

    quizScore = 0;

    userAnswers = [];

    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizResults").hidden = true;

    document.getElementById("startQuiz").hidden = true;

    document.getElementById("submitQuiz").hidden = false;

    document.getElementById("submitQuiz").textContent =
        "Next Question";

    showQuestion();

}


/* =========================================
   18. DISPLAY QUIZ QUESTION
========================================= */

function showQuestion() {

    const container = document.getElementById("quizQuestions");

    if (!container) return;

    container.innerHTML = "";

    const item = quizData[currentQuestion];

    const card = document.createElement("div");

    card.className = "quiz-question";

    const heading = document.createElement("h4");

    heading.textContent =
        `Question ${currentQuestion + 1}: ${item.question}`;

    card.appendChild(heading);

    item.options.forEach(option => {

        const label = document.createElement("label");

        label.className = "quiz-option";

        const radio = document.createElement("input");

        radio.type = "radio";

        radio.name = "quizAnswer";

        radio.value = option;

        if (userAnswers[currentQuestion] === option) {
            radio.checked = true;
        }

        radio.addEventListener("change", function () {

            userAnswers[currentQuestion] = option;

        });

        label.appendChild(radio);

        label.appendChild(document.createTextNode(option));

        card.appendChild(label);

    });

    container.appendChild(card);

    updateQuizProgress();

}


/* =========================================
   19. UPDATE QUIZ PROGRESS
========================================= */

function updateQuizProgress() {

    const progress = document.getElementById("questionProgress");

    const score = document.getElementById("quizScore");

    const progressBar = document.getElementById("progressBar");

    if (progress) {

        progress.textContent =
            `Question ${currentQuestion + 1} of ${quizData.length}`;

    }

    if (score) {

        score.textContent = `Marks: ${quizScore}/10`;

    }

    if (progressBar) {

        progressBar.style.width =
            `${((currentQuestion + 1) / quizData.length) * 100}%`;

    }

}


/* =========================================
   20. NEXT QUESTION
========================================= */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (selected) {

        userAnswers[currentQuestion] = selected.value;

    }

    if (!userAnswers[currentQuestion]) {

        alert("Please select an answer before continuing.");

        return;

    }

    if (currentQuestion < quizData.length - 1) {

        currentQuestion++;

        if (currentQuestion === quizData.length - 1) {

            document.getElementById("submitQuiz").textContent =
                "Finish Quiz";

        }

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================
   21. FINISH QUIZ
========================================= */

function finishQuiz() {

    quizScore = 0;

    quizData.forEach((item, index) => {

        if (userAnswers[index] === item.answer) {

            quizScore++;

        }

    });

    document.getElementById("quizArea").hidden = true;

    document.getElementById("quizResults").hidden = false;

    document.getElementById("submitQuiz").hidden = true;

    document.getElementById("finalScore").textContent =
        `${quizScore}/10`;

    const feedback = document.getElementById("finalFeedback");

    if (quizScore >= 8) {

        feedback.textContent =
            "Excellent work! You understand compound and double-angle identities very well.";

    } else if (quizScore >= 5) {

        feedback.textContent =
            "Good effort! Revise the identities and practise the equations again.";

    } else {

        feedback.textContent =
            "Keep practising. Go through the notes and worked examples before trying again.";

    }

}


/* =========================================
   22. RETRY QUIZ
========================================= */

function retryQuiz() {

    startQuiz();

}


/* =========================================
   23. CONNECT QUIZ BUTTONS
========================================= */

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

