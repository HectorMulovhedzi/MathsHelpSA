
// =============================================
// MATHSHELP SA - GRADE 11
// EUCLIDEAN GEOMETRY
// =============================================


// =============================================
// 1. OPEN AND CLOSE SECTIONS
// =============================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    const isHidden = section.hidden;

    section.hidden = !isHidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = isHidden ? "−" : "＋";
    }

}


// =============================================
// 2. SHOW AND HIDE ANSWERS
// =============================================

function toggleAnswer(answerId, button) {

    const answer = document.getElementById(answerId);

    if (!answer) return;

    const isHidden = answer.hidden;

    answer.hidden = !isHidden;

    button.textContent = isHidden
        ? "Hide Answer"
        : "Show Answer";

}


// =============================================
// 3. UNIT 1: CIRCLES
// WORKED EXAMPLES
// =============================================

const unit1Examples = [

    {
        question: "The angle at the centre of a circle is 100°. Calculate the angle at the circumference standing on the same arc.",

        steps: [
            "Angle at the centre = 2 × angle at the circumference.",
            "100° = 2 × angle at the circumference.",
            "Angle at the circumference = 100° ÷ 2.",
            "Answer = 50°."
        ],

        answer: "50°"
    },

    {
        question: "The angle at the circumference is 35°. Calculate the angle at the centre standing on the same arc.",

        steps: [
            "Angle at the centre = 2 × angle at the circumference.",
            "= 2 × 35°.",
            "Answer = 70°."
        ],

        answer: "70°"
    },

    {
        question: "AB is a diameter of a circle. Calculate angle ACB.",

        steps: [
            "AB is a diameter.",
            "The angle subtended by a diameter at the circumference is 90°.",
            "Therefore angle ACB = 90°."
        ],

        answer: "90°"
    },

    {
        question: "Two angles at the circumference stand on the same chord. One angle is 48°. Calculate the other angle.",

        steps: [
            "Angles in the same segment are equal.",
            "The first angle = 48°.",
            "Therefore the second angle = 48°."
        ],

        answer: "48°"
    },

    {
        question: "A perpendicular is drawn from the centre of a circle to chord AB. If AB = 18 cm, calculate the length of each half of the chord.",

        steps: [
            "A perpendicular from the centre to a chord bisects the chord.",
            "Each half = 18 ÷ 2.",
            "Each half = 9 cm."
        ],

        answer: "9 cm"
    },

    {
        question: "The angle at the circumference is 62°. Calculate the angle at the centre standing on the same arc.",

        steps: [
            "Angle at the centre = 2 × angle at the circumference.",
            "= 2 × 62°.",
            "= 124°."
        ],

        answer: "124°"
    },

    {
        question: "The angle at the centre is 150°. Calculate the angle at the circumference standing on the same arc.",

        steps: [
            "Angle at the circumference = angle at the centre ÷ 2.",
            "= 150° ÷ 2.",
            "= 75°."
        ],

        answer: "75°"
    },

    {
        question: "A chord is 24 cm long. A perpendicular from the centre meets the chord at its midpoint. Calculate each half.",

        steps: [
            "The perpendicular from the centre bisects the chord.",
            "Each half = 24 ÷ 2.",
            "= 12 cm."
        ],

        answer: "12 cm"
    },

    {
        question: "The angle at the circumference is 42°. Calculate the reflex angle at the centre standing on the major arc.",

        steps: [
            "The angle at the centre standing on the same major arc is twice the angle at the circumference.",
            "Reflex angle = 2 × 42°.",
            "= 84°."
        ],

        answer: "84°"
    },

    {
        question: "A circle has radius 7 cm. Calculate its diameter.",

        steps: [
            "Diameter = 2 × radius.",
            "= 2 × 7.",
            "= 14 cm."
        ],

        answer: "14 cm"
    }

];


// =============================================
// 4. UNIT 1: CIRCLES
// PRACTICE QUESTIONS
// =============================================

const unit1Questions = [

    {
        question: "The angle at the centre is 80°. Calculate the angle at the circumference on the same arc.",
        answer: "40°"
    },

    {
        question: "The angle at the circumference is 25°. Calculate the angle at the centre on the same arc.",
        answer: "50°"
    },

    {
        question: "AB is a diameter. What is the angle subtended by AB at the circumference?",
        answer: "90°"
    },

    {
        question: "Two angles stand on the same chord in the same segment. One is 65°. Find the other.",
        answer: "65°"
    },

    {
        question: "A chord is 20 cm long. A perpendicular from the centre bisects it. Find each half.",
        answer: "10 cm"
    },

    {
        question: "The angle at the centre is 120°. Find the angle at the circumference on the same arc.",
        answer: "60°"
    },

    {
        question: "The angle at the circumference is 38°. Find the angle at the centre on the same arc.",
        answer: "76°"
    },

    {
        question: "A circle has a radius of 9 cm. Find its diameter.",
        answer: "18 cm"
    },

    {
        question: "A circle has a diameter of 26 cm. Find its radius.",
        answer: "13 cm"
    },

    {
        question: "A chord is 30 cm long. Find each half if a perpendicular from the centre bisects it.",
        answer: "15 cm"
    },

    {
        question: "The angle at the centre is 94°. Find the angle at the circumference on the same arc.",
        answer: "47°"
    },

    {
        question: "The angle at the circumference is 55°. Find the angle at the centre on the same arc.",
        answer: "110°"
    },

    {
        question: "Two angles in the same segment are x and 72°. Find x.",
        answer: "72°"
    },

    {
        question: "A diameter subtends angle x at the circumference. Find x.",
        answer: "90°"
    },

    {
        question: "The angle at the circumference is 40°. Find the angle at the centre on the same minor arc.",
        answer: "80°"
    },

    {
        question: "A chord is 16 cm long. Find half its length.",
        answer: "8 cm"
    },

    {
        question: "The angle at the centre is 146°. Find the angle at the circumference on the same arc.",
        answer: "73°"
    },

    {
        question: "The angle at the circumference is 32°. Find the angle at the centre on the same arc.",
        answer: "64°"
    },

    {
        question: "A circle has a radius of 12 cm. Find its diameter.",
        answer: "24 cm"
    },

    {
        question: "Two angles in the same segment are (2x)° and 60°. Find x.",
        answer: "30°"
    }

];


// =============================================
// 5. UNIT 2: CYCLIC QUADRILATERALS
// WORKED EXAMPLES
// =============================================

const unit2Examples = [

    {
        question: "ABCD is a cyclic quadrilateral. Angle A = 110°. Calculate angle C.",

        steps: [
            "Opposite angles of a cyclic quadrilateral add up to 180°.",
            "A + C = 180°.",
            "110° + C = 180°.",
            "C = 180° − 110°.",
            "C = 70°."
        ],

        answer: "70°"
    },

    {
        question: "In cyclic quadrilateral ABCD, angle B = 85°. Find angle D.",

        steps: [
            "Opposite angles of a cyclic quadrilateral are supplementary.",
            "B + D = 180°.",
            "85° + D = 180°.",
            "D = 95°."
        ],

        answer: "95°"
    },

    {
        question: "Opposite angles of a cyclic quadrilateral are (3x)° and (2x)°. Find x.",

        steps: [
            "Opposite angles add up to 180°.",
            "3x + 2x = 180°.",
            "5x = 180°.",
            "x = 36°."
        ],

        answer: "36°"
    },

    {
        question: "One angle of a cyclic quadrilateral is 4x° and its opposite angle is 2x°. Find both angles.",

        steps: [
            "Opposite angles add up to 180°.",
            "4x + 2x = 180°.",
            "6x = 180°.",
            "x = 30°.",
            "First angle = 4(30) = 120°.",
            "Opposite angle = 2(30) = 60°."
        ],

        answer: "120° and 60°"
    },

    {
        question: "A cyclic quadrilateral has an interior angle of 105°. Find its opposite interior angle.",

        steps: [
            "Opposite angles are supplementary.",
            "105° + x = 180°.",
            "x = 75°."
        ],

        answer: "75°"
    },

    {
        question: "The exterior angle of a cyclic quadrilateral is 72°. Find the opposite interior angle.",

        steps: [
            "The exterior angle of a cyclic quadrilateral equals the opposite interior angle.",
            "Therefore the opposite interior angle = 72°."
        ],

        answer: "72°"
    },

    {
        question: "A cyclic quadrilateral has opposite angles (x + 20)° and (2x + 10)°. Find x.",

        steps: [
            "Opposite angles add up to 180°.",
            "(x + 20) + (2x + 10) = 180°.",
            "3x + 30 = 180°.",
            "3x = 150°.",
            "x = 50°."
        ],

        answer: "50°"
    },

    {
        question: "In a cyclic quadrilateral, angle A = 3x° and angle C = (x + 40)°. Find both angles.",

        steps: [
            "A + C = 180°.",
            "3x + x + 40 = 180°.",
            "4x = 140°.",
            "x = 35°.",
            "A = 3(35) = 105°.",
            "C = 35 + 40 = 75°."
        ],

        answer: "105° and 75°"
    },

    {
        question: "Opposite angles of a quadrilateral are 90° and 90°. Can the quadrilateral be cyclic?",

        steps: [
            "A quadrilateral is cyclic if a pair of opposite angles adds up to 180°.",
            "90° + 90° = 180°.",
            "Therefore the quadrilateral is cyclic."
        ],

        answer: "Yes, it is cyclic."
    },

    {
        question: "The exterior angle of a cyclic quadrilateral is (3x + 10)° and the opposite interior angle is 100°. Find x.",

        steps: [
            "Exterior angle = opposite interior angle.",
            "3x + 10 = 100.",
            "3x = 90.",
            "x = 30."
        ],

        answer: "30"
    }

];


// =============================================
// 6. UNIT 2: CYCLIC QUADRILATERALS
// PRACTICE QUESTIONS
// =============================================

const unit2Questions = [

    {
        question: "Opposite angles are 100° and x°. Find x.",
        answer: "80°"
    },

    {
        question: "Opposite angles are 75° and x°. Find x.",
        answer: "105°"
    },

    {
        question: "Opposite angles are 2x° and 4x°. Find x.",
        answer: "30°"
    },

    {
        question: "Opposite angles are (x + 20)° and 100°. Find x.",
        answer: "60°"
    },

    {
        question: "One angle is 115°. Find its opposite angle.",
        answer: "65°"
    },

    {
        question: "An exterior angle is 80°. Find the opposite interior angle.",
        answer: "80°"
    },

    {
        question: "Opposite angles are 3x° and 90°. Find x.",
        answer: "30°"
    },

    {
        question: "Opposite angles are (2x + 10)° and 90°. Find x.",
        answer: "40°"
    },

    {
        question: "Opposite angles are 4x° and 2x°. Find x.",
        answer: "30°"
    },

    {
        question: "One angle is 88°. Find its opposite angle.",
        answer: "92°"
    },

    {
        question: "Opposite angles are (x + 30)° and (2x + 30)°. Find x.",
        answer: "40°"
    },

    {
        question: "An exterior angle is 125°. Find its opposite interior angle.",
        answer: "125°"
    },

    {
        question: "Opposite angles are (3x - 10)° and (x + 50)°. Find x.",
        answer: "35°"
    },

    {
        question: "One angle is 135°. Find the opposite angle.",
        answer: "45°"
    },

    {
        question: "Opposite angles are 2x° and (x + 30)°. Find x.",
        answer: "50°"
    },

    {
        question: "A cyclic quadrilateral has opposite angles of 90° and 90°. Is it cyclic?",
        answer: "Yes, because 90° + 90° = 180°."
    },

    {
        question: "Opposite angles are (5x)° and (x)°. Find x.",
        answer: "30°"
    },

    {
        question: "One angle is 72°. Find its opposite angle.",
        answer: "108°"
    },

    {
        question: "Opposite angles are (2x + 20)° and (2x)°. Find x.",
        answer: "40°"
    },

    {
        question: "An exterior angle is 95°. Find the opposite interior angle.",
        answer: "95°"
    }

];


// =============================================
// 7. UNIT 3: TANGENTS TO A CIRCLE
// WORKED EXAMPLES
// =============================================

const unit3Examples = [

    {
        question: "A tangent touches a circle at T. Radius OT is drawn to T. Calculate angle OTP.",

        steps: [
            "A tangent is perpendicular to the radius at the point of contact.",
            "Therefore angle OTP = 90°."
        ],

        answer: "90°"
    },

    {
        question: "Two tangents PA and PB are drawn from the same external point P. If PA = 12 cm, calculate PB.",

        steps: [
            "Tangents drawn from the same external point are equal.",
            "PA = PB.",
            "PB = 12 cm."
        ],

        answer: "12 cm"
    },

    {
        question: "Two tangents from point P have lengths (3x + 2) cm and (5x - 6) cm. Find x.",

        steps: [
            "Tangents from the same external point are equal.",
            "3x + 2 = 5x - 6.",
            "8 = 2x.",
            "x = 4."
        ],

        answer: "4"
    },

    {
        question: "A tangent and radius meet at point T. If the angle between them is x°, calculate x.",

        steps: [
            "The tangent is perpendicular to the radius at the point of contact.",
            "Therefore x = 90°."
        ],

        answer: "90°"
    },

    {
        question: "PA and PB are tangents from P. PA = 3x cm and PB = 18 cm. Find x.",

        steps: [
            "Tangents from the same external point are equal.",
            "3x = 18.",
            "x = 6."
        ],

        answer: "6"
    },

    {
        question: "A radius is 5 cm and the tangent segment from the point of contact to an external point is 12 cm. Find the distance from the centre to the external point.",

        steps: [
            "The radius is perpendicular to the tangent.",
            "This forms a right-angled triangle.",
            "Using Pythagoras: OP² = 5² + 12².",
            "OP² = 25 + 144.",
            "OP² = 169.",
            "OP = 13 cm."
        ],

        answer: "13 cm"
    },

    {
        question: "Two tangents are drawn from point P. Their lengths are (2x + 5) cm and (3x - 1) cm. Find x.",

        steps: [
            "Equal tangents theorem.",
            "2x + 5 = 3x - 1.",
            "x = 6."
        ],

        answer: "6"
    },

    {
        question: "A circle has radius 8 cm. A tangent from an external point has length 15 cm. Find the distance from the centre to the external point.",

        steps: [
            "Radius is perpendicular to tangent.",
            "OP² = 8² + 15².",
            "OP² = 64 + 225.",
            "OP² = 289.",
            "OP = 17 cm."
        ],

        answer: "17 cm"
    },

    {
        question: "PA and PB are equal tangents. If PB = 2x + 4 and PA = 16 cm, find x.",

        steps: [
            "PA = PB.",
            "16 = 2x + 4.",
            "12 = 2x.",
            "x = 6."
        ],

        answer: "6"
    },

    {
        question: "A tangent is perpendicular to the radius at the point of contact. What type of angle is formed?",

        steps: [
            "Perpendicular lines form a right angle.",
            "A right angle measures 90°."
        ],

        answer: "90°"
    }

];


// =============================================
// 8. UNIT 3: TANGENTS TO A CIRCLE
// PRACTICE QUESTIONS
// =============================================

const unit3Questions = [

    {
        question: "What angle is formed between a tangent and the radius at the point of contact?",
        answer: "90°"
    },

    {
        question: "PA and PB are tangents from P. If PA = 10 cm, find PB.",
        answer: "10 cm"
    },

    {
        question: "Two tangent lengths are 3x and 18 cm. Find x.",
        answer: "6"
    },

    {
        question: "Two tangent lengths are (x + 4) cm and 15 cm. Find x.",
        answer: "11"
    },

    {
        question: "A radius is 6 cm and a tangent is 8 cm. Find the distance from the centre to the external point.",
        answer: "10 cm"
    },

    {
        question: "Two tangents from P have lengths (2x + 3) cm and 13 cm. Find x.",
        answer: "5"
    },

    {
        question: "If PA and PB are tangents from the same external point, what is the relationship between their lengths?",
        answer: "PA = PB"
    },

    {
        question: "A tangent has length 12 cm and the radius is 5 cm. Find the distance from the centre to the external point.",
        answer: "13 cm"
    },

    {
        question: "Two tangent lengths are 4x cm and 20 cm. Find x.",
        answer: "5"
    },

    {
        question: "The angle between a radius and tangent is 90°. What do we call this relationship?",
        answer: "They are perpendicular."
    },

    {
        question: "PA = 3x + 1 and PB = 16 cm. Find x.",
        answer: "5"
    },

    {
        question: "A radius is 9 cm and the tangent is 12 cm. Find the distance from the centre to the external point.",
        answer: "15 cm"
    },

    {
        question: "Two tangent lengths are (5x - 5) cm and 20 cm. Find x.",
        answer: "5"
    },

    {
        question: "If a tangent touches a circle at T, which line must be perpendicular to the tangent?",
        answer: "The radius drawn to T."
    },

    {
        question: "PA = 2x + 6 and PB = 18 cm. Find x.",
        answer: "6"
    },

    {
        question: "A radius is 7 cm and the tangent is 24 cm. Find the distance from the centre to the external point.",
        answer: "25 cm"
    },

    {
        question: "Two tangents from P are equal. If PA = 25 cm, find PB.",
        answer: "25 cm"
    },

    {
        question: "Two tangent lengths are (4x + 2) cm and (6x - 8) cm. Find x.",
        answer: "5"
    },

    {
        question: "A radius is 20 cm and a tangent is 21 cm. Find the distance from the centre to the external point.",
        answer: "29 cm"
    },

    {
        question: "What theorem states that two tangents drawn from the same external point are equal?",
        answer: "Equal tangents theorem."
    }

];


// =============================================
// 9. DISPLAY WORKED EXAMPLES
// =============================================

function displayWorkedExamples(examples, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((example, index) => {

        const card = document.createElement("div");

        card.className = "example-card";

        const solutionId = containerId + "Solution" + index;

        card.innerHTML = `
            <h3>Example ${index + 1}</h3>

            <p>${example.question}</p>

            <button class="solution-button"
                onclick="toggleAnswer('${solutionId}', this)">
                Show Solution
            </button>

            <div class="solution" id="${solutionId}" hidden>

                <strong>Step-by-step solution:</strong>

                ${example.steps.map(step => `
                    <p>${step}</p>
                `).join("")}

                <p><strong>Final Answer: ${example.answer}</strong></p>

            </div>
        `;

        container.appendChild(card);

    });

}


// =============================================
// 10. DISPLAY PRACTICE QUESTIONS
// =============================================

function displayPracticeQuestions(questions, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((question, index) => {

        const card = document.createElement("div");

        card.className = "practice-card";

        const answerId = containerId + "Answer" + index;

        card.innerHTML = `
            <p>
                Question ${index + 1}: ${question.question}
            </p>

            <button class="answer-button"
                onclick="toggleAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer"
                id="${answerId}" hidden>

                <strong>Answer:</strong>
                ${question.answer}

            </div>
        `;

        container.appendChild(card);

    });

}


// =============================================
// 11. LOAD ALL THREE UNITS
// =============================================

document.addEventListener("DOMContentLoaded", function () {

    // UNIT 1: CIRCLES

    displayWorkedExamples(
        unit1Examples,
        "unit1WorkedExamples"
    );

    displayPracticeQuestions(
        unit1Questions,
        "unit1Questions"
    );


    // UNIT 2: CYCLIC QUADRILATERALS

    displayWorkedExamples(
        unit2Examples,
        "unit2WorkedExamples"
    );

    displayPracticeQuestions(
        unit2Questions,
        "unit2Questions"
    );


    // UNIT 3: TANGENTS TO A CIRCLE

    displayWorkedExamples(
        unit3Examples,
        "unit3WorkedExamples"
    );

    displayPracticeQuestions(
        unit3Questions,
        "unit3Questions"
    );


    console.log("Euclidean Geometry loaded successfully.");

});
