
/* ==========================================
   MATHSHELP SA
   GRADE 11 TRIGONOMETRY RULES
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
        ? "Hide Answer"
        : "Show Answer";
}


/* ==========================================
   3. WORKED EXAMPLES
========================================== */


/* UNIT 1: AREA RULE */

const areaExamples = [

    {
        question: "Calculate the area of a triangle with sides 8 cm and 6 cm and an included angle of 30°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 8 × 6 × sin(30°)",
            "Area = 24 × 0.5",
            "Area = 12 cm²"
        ],
        answer: "12 cm²"
    },

    {
        question: "Find the area of a triangle with sides 10 cm and 12 cm and an included angle of 60°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 10 × 12 × sin(60°)",
            "Area = 60 × 0.8660",
            "Area ≈ 51.96 cm²"
        ],
        answer: "51.96 cm²"
    },

    {
        question: "A triangle has sides 7 m and 9 m with an included angle of 90°. Calculate its area.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 7 × 9 × sin(90°)",
            "Area = 31.5 × 1",
            "Area = 31.5 m²"
        ],
        answer: "31.5 m²"
    },

    {
        question: "Calculate the area when a = 14 cm, b = 8 cm and angle C = 45°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 14 × 8 × sin(45°)",
            "Area = 56 × 0.7071",
            "Area ≈ 39.60 cm²"
        ],
        answer: "39.60 cm²"
    },

    {
        question: "Find the area of a triangle with sides 15 cm and 10 cm and included angle 120°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 15 × 10 × sin(120°)",
            "Area = 75 × 0.8660",
            "Area ≈ 64.95 cm²"
        ],
        answer: "64.95 cm²"
    },

    {
        question: "The area of a triangle is 30 cm². Two sides are 10 cm and 8 cm. Find the sine of the included angle.",
        steps: [
            "Area = ½ ab sin(C)",
            "30 = ½ × 10 × 8 × sin(C)",
            "30 = 40 sin(C)",
            "sin(C) = 30 / 40",
            "sin(C) = 0.75"
        ],
        answer: "sin(C) = 0.75"
    },

    {
        question: "Find the area of a triangle with sides 11 cm and 13 cm and an included angle of 75°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 11 × 13 × sin(75°)",
            "Area = 71.5 × 0.9659",
            "Area ≈ 69.06 cm²"
        ],
        answer: "69.06 cm²"
    },

    {
        question: "Two sides of a triangle are 5 cm and 12 cm. The included angle is 150°. Calculate the area.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 5 × 12 × sin(150°)",
            "Area = 30 × 0.5",
            "Area = 15 cm²"
        ],
        answer: "15 cm²"
    },

    {
        question: "Calculate the area of a triangle with sides 9 cm and 16 cm and included angle 40°.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 9 × 16 × sin(40°)",
            "Area = 72 × 0.6428",
            "Area ≈ 46.28 cm²"
        ],
        answer: "46.28 cm²"
    },

    {
        question: "A triangular field has two sides measuring 25 m and 18 m with an included angle of 65°. Calculate its area.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 25 × 18 × sin(65°)",
            "Area = 225 × 0.9063",
            "Area ≈ 203.92 m²"
        ],
        answer: "203.92 m²"
    }

];


/* UNIT 2: SINE RULE */

const sineExamples = [

    {
        question: "In triangle ABC, angle A = 30°, angle B = 60° and side a = 5 cm. Find side b.",
        steps: [
            "Use the sine rule:",
            "a / sin(A) = b / sin(B)",
            "5 / sin(30°) = b / sin(60°)",
            "b = 5 × sin(60°) / sin(30°)",
            "b = 8.66 cm"
        ],
        answer: "8.66 cm"
    },

    {
        question: "Angle A = 40°, angle B = 70° and side a = 8 cm. Find side b.",
        steps: [
            "8 / sin(40°) = b / sin(70°)",
            "b = 8 × sin(70°) / sin(40°)",
            "b ≈ 11.70 cm"
        ],
        answer: "11.70 cm"
    },

    {
        question: "In a triangle, side a = 10 cm, angle A = 50° and angle B = 30°. Find side b.",
        steps: [
            "10 / sin(50°) = b / sin(30°)",
            "b = 10 × sin(30°) / sin(50°)",
            "b ≈ 6.53 cm"
        ],
        answer: "6.53 cm"
    },

    {
        question: "Find angle B if side a = 12 cm, side b = 8 cm and angle A = 90°.",
        steps: [
            "12 / sin(90°) = 8 / sin(B)",
            "sin(B) = 8 / 12",
            "sin(B) = 0.6667",
            "B = sin⁻¹(0.6667)",
            "B ≈ 41.81°"
        ],
        answer: "41.81°"
    },

    {
        question: "Angle A = 45°, angle B = 75° and side a = 7 cm. Find side b.",
        steps: [
            "7 / sin(45°) = b / sin(75°)",
            "b = 7 × sin(75°) / sin(45°)",
            "b ≈ 9.56 cm"
        ],
        answer: "9.56 cm"
    },

    {
        question: "Side a = 15 cm, angle A = 60° and angle B = 45°. Calculate side b.",
        steps: [
            "15 / sin(60°) = b / sin(45°)",
            "b = 15 × sin(45°) / sin(60°)",
            "b ≈ 12.25 cm"
        ],
        answer: "12.25 cm"
    },

    {
        question: "A triangle has angles A = 35° and B = 85°. Side a = 9 cm. Find side b.",
        steps: [
            "9 / sin(35°) = b / sin(85°)",
            "b = 9 × sin(85°) / sin(35°)",
            "b ≈ 15.67 cm"
        ],
        answer: "15.67 cm"
    },

    {
        question: "Find angle C if angles A = 48° and B = 67°.",
        steps: [
            "Angles in a triangle add up to 180°.",
            "C = 180° − 48° − 67°",
            "C = 65°"
        ],
        answer: "65°"
    },

    {
        question: "Side a = 20 cm, angle A = 80° and angle B = 40°. Find side b.",
        steps: [
            "20 / sin(80°) = b / sin(40°)",
            "b = 20 × sin(40°) / sin(80°)",
            "b ≈ 13.05 cm"
        ],
        answer: "13.05 cm"
    },

    {
        question: "In triangle ABC, a = 13 cm, A = 65° and B = 55°. Calculate side c.",
        steps: [
            "First find angle C.",
            "C = 180° − 65° − 55° = 60°",
            "13 / sin(65°) = c / sin(60°)",
            "c = 13 × sin(60°) / sin(65°)",
            "c ≈ 12.39 cm"
        ],
        answer: "12.39 cm"
    }

];


/* UNIT 3: COSINE RULE */

const cosineExamples = [

    {
        question: "Two sides of a triangle are 5 cm and 7 cm. The included angle is 60°. Find the third side.",
        steps: [
            "a² = b² + c² − 2bc cos(A)",
            "a² = 5² + 7² − 2(5)(7)cos(60°)",
            "a² = 25 + 49 − 70(0.5)",
            "a² = 39",
            "a = √39",
            "a ≈ 6.24 cm"
        ],
        answer: "6.24 cm"
    },

    {
        question: "Find the third side if two sides are 8 cm and 10 cm and the included angle is 90°.",
        steps: [
            "a² = 8² + 10² − 2(8)(10)cos(90°)",
            "a² = 64 + 100 − 0",
            "a² = 164",
            "a = √164",
            "a ≈ 12.81 cm"
        ],
        answer: "12.81 cm"
    },

    {
        question: "Two sides are 6 cm and 9 cm. The included angle is 120°. Find the third side.",
        steps: [
            "a² = 6² + 9² − 2(6)(9)cos(120°)",
            "a² = 36 + 81 − 108(-0.5)",
            "a² = 117 + 54",
            "a² = 171",
            "a = √171",
            "a ≈ 13.08 cm"
        ],
        answer: "13.08 cm"
    },

    {
        question: "A triangle has sides 5 cm, 6 cm and 7 cm. Find the angle opposite the 7 cm side.",
        steps: [
            "cos(C) = (a² + b² − c²) / 2ab",
            "cos(C) = (5² + 6² − 7²) / (2 × 5 × 6)",
            "cos(C) = (25 + 36 − 49) / 60",
            "cos(C) = 12 / 60",
            "C = cos⁻¹(0.2)",
            "C ≈ 78.46°"
        ],
        answer: "78.46°"
    },

    {
        question: "Find the third side of a triangle with sides 12 cm and 15 cm and included angle 40°.",
        steps: [
            "a² = 12² + 15² − 2(12)(15)cos(40°)",
            "a² = 144 + 225 − 360(0.7660)",
            "a² ≈ 93.23",
            "a ≈ √93.23",
            "a ≈ 9.66 cm"
        ],
        answer: "9.66 cm"
    },

    {
        question: "Find angle A if the sides opposite the angles are a = 8 cm, b = 6 cm and c = 10 cm.",
        steps: [
            "cos(A) = (b² + c² − a²) / 2bc",
            "cos(A) = (6² + 10² − 8²) / (2 × 6 × 10)",
            "cos(A) = (36 + 100 − 64) / 120",
            "cos(A) = 72 / 120",
            "A = cos⁻¹(0.6)",
            "A ≈ 53.13°"
        ],
        answer: "53.13°"
    },

    {
        question: "Two sides measure 11 cm and 13 cm. Their included angle is 75°. Find the third side.",
        steps: [
            "a² = 11² + 13² − 2(11)(13)cos(75°)",
            "a² = 121 + 169 − 286(0.2588)",
            "a² ≈ 215.99",
            "a ≈ √215.99",
            "a ≈ 14.70 cm"
        ],
        answer: "14.70 cm"
    },

    {
        question: "A triangle has sides 7 cm, 8 cm and 9 cm. Find the angle opposite the 9 cm side.",
        steps: [
            "cos(C) = (7² + 8² − 9²) / (2 × 7 × 8)",
            "cos(C) = (49 + 64 − 81) / 112",
            "cos(C) = 32 / 112",
            "C = cos⁻¹(0.2857)",
            "C ≈ 73.40°"
        ],
        answer: "73.40°"
    },

    {
        question: "Two sides of a triangle are 14 cm and 10 cm. The included angle is 30°. Find the third side.",
        steps: [
            "a² = 14² + 10² − 2(14)(10)cos(30°)",
            "a² = 196 + 100 − 280(0.8660)",
            "a² ≈ 53.52",
            "a ≈ √53.52",
            "a ≈ 7.32 cm"
        ],
        answer: "7.32 cm"
    },

    {
        question: "A triangle has sides 9 cm, 12 cm and 15 cm. Find the largest angle.",
        steps: [
            "The largest angle is opposite the longest side, 15 cm.",
            "cos(C) = (9² + 12² − 15²) / (2 × 9 × 12)",
            "cos(C) = (81 + 144 − 225) / 216",
            "cos(C) = 0",
            "C = cos⁻¹(0)",
            "C = 90°"
        ],
        answer: "90°"
    }

];


/* UNIT 4: TWO-DIMENSIONAL PROBLEMS */

const twoDExamples = [

    {
        question: "Two points A and B are 10 km apart. From point A, point C is 8 km away. The included angle BAC is 60°. Calculate BC.",
        steps: [
            "Use the cosine rule.",
            "BC² = 10² + 8² − 2(10)(8)cos(60°)",
            "BC² = 100 + 64 − 160(0.5)",
            "BC² = 84",
            "BC = √84",
            "BC ≈ 9.17 km"
        ],
        answer: "9.17 km"
    },

    {
        question: "Two roads leave a town at an angle of 70°. One road is 12 km long and the other is 15 km long. Find the distance between their endpoints.",
        steps: [
            "Use the cosine rule.",
            "d² = 12² + 15² − 2(12)(15)cos(70°)",
            "d² = 144 + 225 − 360(0.3420)",
            "d² ≈ 245.88",
            "d ≈ √245.88",
            "d ≈ 15.68 km"
        ],
        answer: "15.68 km"
    },

    {
        question: "A triangular garden has two sides of 20 m and 15 m with an included angle of 40°. Calculate its area.",
        steps: [
            "Use the area rule.",
            "Area = ½ ab sin(C)",
            "Area = ½ × 20 × 15 × sin(40°)",
            "Area = 150 × 0.6428",
            "Area ≈ 96.42 m²"
        ],
        answer: "96.42 m²"
    },

    {
        question: "A ship travels 12 km from A to B and then 9 km from B to C. The angle ABC is 110°. Find the direct distance AC.",
        steps: [
            "Use the cosine rule.",
            "AC² = 12² + 9² − 2(12)(9)cos(110°)",
            "AC² = 144 + 81 − 216(-0.3420)",
            "AC² ≈ 298.87",
            "AC ≈ √298.87",
            "AC ≈ 17.29 km"
        ],
        answer: "17.29 km"
    },

    {
        question: "A triangular plot has a side of 25 m opposite an angle of 50°. Another angle is 65°. Calculate the side opposite 65°.",
        steps: [
            "Use the sine rule.",
            "25 / sin(50°) = b / sin(65°)",
            "b = 25 × sin(65°) / sin(50°)",
            "b ≈ 29.50 m"
        ],
        answer: "29.50 m"
    },

    {
        question: "Two landmarks are 18 km and 22 km from a viewing point. The angle between the directions is 80°. Find the distance between the landmarks.",
        steps: [
            "Use the cosine rule.",
            "d² = 18² + 22² − 2(18)(22)cos(80°)",
            "d² = 324 + 484 − 792(0.1736)",
            "d² ≈ 670.55",
            "d ≈ √670.55",
            "d ≈ 25.89 km"
        ],
        answer: "25.89 km"
    },

    {
        question: "A triangular field has sides 30 m and 40 m with an included angle of 35°. Calculate its area.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 30 × 40 × sin(35°)",
            "Area = 600 × 0.5736",
            "Area ≈ 344.15 m²"
        ],
        answer: "344.15 m²"
    },

    {
        question: "A hiker walks 5 km east and then 7 km north. Calculate the straight-line distance from the starting point.",
        steps: [
            "The paths form a right-angled triangle.",
            "Use Pythagoras' theorem.",
            "d² = 5² + 7²",
            "d² = 25 + 49",
            "d = √74",
            "d ≈ 8.60 km"
        ],
        answer: "8.60 km"
    },

    {
        question: "Two points are 16 km and 20 km from a tower. The angle between their directions from the tower is 55°. Find the distance between the points.",
        steps: [
            "Use the cosine rule.",
            "d² = 16² + 20² − 2(16)(20)cos(55°)",
            "d² = 256 + 400 − 640(0.5736)",
            "d² ≈ 289.70",
            "d ≈ √289.70",
            "d ≈ 17.02 km"
        ],
        answer: "17.02 km"
    },

    {
        question: "A triangular park has two sides of 35 m and 28 m with an included angle of 75°. Find its area.",
        steps: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 35 × 28 × sin(75°)",
            "Area = 490 × 0.9659",
            "Area ≈ 473.29 m²"
        ],
        answer: "473.29 m²"
    }

];


/* ==========================================
   4. DISPLAY WORKED EXAMPLES
========================================== */

function displayWorkedExamples(data, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    data.forEach((example, index) => {

        const answerId = `${containerId}Answer${index}`;

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

                ${example.steps.map(step => `
                    <p class="solution-step">${step}</p>
                `).join("")}

                <div class="final-answer">
                    Final Answer: ${example.answer}
                </div>

            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   5. PRACTICE QUESTIONS
========================================== */

const areaPractice = [
    {
        question: "Find the area of a triangle with sides 6 cm and 8 cm and included angle 30°.",
        answer: "12 cm²",
        explanation: "Area = ½ × 6 × 8 × sin(30°) = 12 cm²."
    },
    {
        question: "Calculate the area when a = 10 cm, b = 14 cm and C = 90°.",
        answer: "70 cm²",
        explanation: "Area = ½ × 10 × 14 × sin(90°) = 70 cm²."
    },
    {
        question: "Find the area when the sides are 9 cm and 12 cm and the included angle is 60°.",
        answer: "46.77 cm²",
        explanation: "Area = ½ × 9 × 12 × sin(60°) ≈ 46.77 cm²."
    },
    {
        question: "Find the area when a = 5 cm, b = 11 cm and C = 45°.",
        answer: "19.45 cm²",
        explanation: "Area = ½ × 5 × 11 × sin(45°) ≈ 19.45 cm²."
    },
    {
        question: "Find the area of a triangle with sides 13 m and 8 m and included angle 120°.",
        answer: "45.03 m²",
        explanation: "Area = ½ × 13 × 8 × sin(120°) ≈ 45.03 m²."
    },
    {
        question: "Two sides are 16 cm and 10 cm. The included angle is 35°. Find the area.",
        answer: "45.89 cm²",
        explanation: "Area = ½ × 16 × 10 × sin(35°) ≈ 45.89 cm²."
    },
    {
        question: "Find the area when the sides are 20 cm and 15 cm and the included angle is 80°.",
        answer: "147.72 cm²",
        explanation: "Area = ½ × 20 × 15 × sin(80°) ≈ 147.72 cm²."
    },
    {
        question: "The area is 24 cm². Two sides are 8 cm and 12 cm. Find sin(C).",
        answer: "0.5",
        explanation: "24 = ½ × 8 × 12 × sin(C). Therefore sin(C) = 24 / 48 = 0.5."
    },
    {
        question: "Calculate the area of a triangle with sides 18 cm and 9 cm and included angle 150°.",
        answer: "40.5 cm²",
        explanation: "Area = ½ × 18 × 9 × sin(150°) = 40.5 cm²."
    },
    {
        question: "A field has sides 40 m and 25 m with an included angle of 65°. Find its area.",
        answer: "453.15 m²",
        explanation: "Area = ½ × 40 × 25 × sin(65°) ≈ 453.15 m²."
    }
];


const sinePractice = [
    {
        question: "A = 30°, B = 60° and a = 6 cm. Find b.",
        answer: "10.39 cm",
        explanation: "b = 6 × sin(60°) / sin(30°) ≈ 10.39 cm."
    },
    {
        question: "A = 45°, B = 45° and a = 8 cm. Find b.",
        answer: "8 cm",
        explanation: "b = 8 × sin(45°) / sin(45°) = 8 cm."
    },
    {
        question: "a = 12 cm, A = 60° and B = 30°. Find b.",
        answer: "6.93 cm",
        explanation: "b = 12 × sin(30°) / sin(60°) ≈ 6.93 cm."
    },
    {
        question: "a = 10 cm, A = 90° and b = 5 cm. Find B.",
        answer: "30°",
        explanation: "sin(B) = 5 / 10 = 0.5, so B = 30°."
    },
    {
        question: "A = 40°, B = 80° and a = 9 cm. Find b.",
        answer: "13.80 cm",
        explanation: "b = 9 × sin(80°) / sin(40°) ≈ 13.80 cm."
    },
    {
        question: "A = 50°, B = 70° and a = 15 cm. Find b.",
        answer: "18.36 cm",
        explanation: "b = 15 × sin(70°) / sin(50°) ≈ 18.36 cm."
    },
    {
        question: "a = 14 cm, A = 70° and B = 40°. Find b.",
        answer: "9.58 cm",
        explanation: "b = 14 × sin(40°) / sin(70°) ≈ 9.58 cm."
    },
    {
        question: "Find C if A = 35° and B = 85°.",
        answer: "60°",
        explanation: "C = 180° − 35° − 85° = 60°."
    },
    {
        question: "A = 55°, B = 65° and a = 11 cm. Find b.",
        answer: "12.05 cm",
        explanation: "b = 11 × sin(65°) / sin(55°) ≈ 12.05 cm."
    },
    {
        question: "a = 20 cm, A = 80° and B = 50°. Find b.",
        answer: "15.56 cm",
        explanation: "b = 20 × sin(50°) / sin(80°) ≈ 15.56 cm."
    }
];


const cosinePractice = [
    {
        question: "Find the third side when two sides are 3 cm and 4 cm and the included angle is 90°.",
        answer: "5 cm",
        explanation: "a² = 3² + 4² − 2(3)(4)cos(90°) = 25. Therefore a = 5 cm."
    },
    {
        question: "Two sides are 5 cm and 6 cm. The included angle is 60°. Find the third side.",
        answer: "5.57 cm",
        explanation: "a² = 25 + 36 − 60(0.5) = 31. Therefore a = √31 ≈ 5.57 cm."
    },
    {
        question: "Find the third side when the sides are 8 cm and 9 cm and the included angle is 120°.",
        answer: "14.73 cm",
        explanation: "a² = 64 + 81 − 144cos(120°) = 217. Therefore a = √217 ≈ 14.73 cm."
    },
    {
        question: "Find the angle opposite the 5 cm side in a triangle with sides 3 cm, 4 cm and 5 cm.",
        answer: "90°",
        explanation: "cos(C) = (3² + 4² − 5²) / (2 × 3 × 4) = 0. Therefore C = 90°."
    },
    {
        question: "Two sides are 10 cm and 12 cm. The included angle is 60°. Find the third side.",
        answer: "11.14 cm",
        explanation: "a² = 100 + 144 − 240(0.5) = 124. Therefore a = √124 ≈ 11.14 cm."
    },
    {
        question: "Find the angle opposite the 8 cm side in a triangle with sides 6 cm, 7 cm and 8 cm.",
        answer: "73.40°",
        explanation: "cos(C) = (6² + 7² − 8²) / (2 × 6 × 7) = 0.25. C ≈ 75.52°. "
    },
    {
        question: "Find the third side when two sides are 12 cm and 15 cm and the included angle is 90°.",
        answer: "19.21 cm",
        explanation: "a² = 144 + 225 = 369. Therefore a = √369 ≈ 19.21 cm."
    },
    {
        question: "A triangle has sides 7 cm, 8 cm and 10 cm. Find the angle opposite 10 cm.",
        answer: "82.82°",
        explanation: "cos(C) = (49 + 64 − 100) / 112 = 13/112. C ≈ 83.33°."
    },
    {
        question: "Two sides are 9 cm and 11 cm with an included angle of 45°. Find the third side.",
        answer: "7.78 cm",
        explanation: "a² = 81 + 121 − 198cos(45°) ≈ 62.00. Therefore a ≈ 7.87 cm."
    },
    {
        question: "A triangle has sides 5 cm, 8 cm and 9 cm. Find the angle opposite the 9 cm side.",
        answer: "88.21°",
        explanation: "cos(C) = (25 + 64 − 81) / 80 = 0.1. Therefore C ≈ 84.26°."
    }
];


const twoDPractice = [
    {
        question: "Two roads are 5 km and 7 km long and meet at an angle of 60°. Find the distance between their endpoints.",
        answer: "6.24 km",
        explanation: "d² = 25 + 49 − 70cos(60°) = 39. Therefore d = √39 ≈ 6.24 km."
    },
    {
        question: "A triangular field has sides 12 m and 15 m with an included angle of 45°. Find its area.",
        answer: "63.64 m²",
        explanation: "Area = ½ × 12 × 15 × sin(45°) ≈ 63.64 m²."
    },
    {
        question: "Two points are 10 km and 14 km from a tower. The angle between the directions is 90°. Find the distance between the points.",
        answer: "17.20 km",
        explanation: "d² = 10² + 14² = 296. Therefore d = √296 ≈ 17.20 km."
    },
    {
        question: "A ship travels 8 km from A to B and 10 km from B to C. Angle ABC is 120°. Find AC.",
        answer: "15.62 km",
        explanation: "AC² = 64 + 100 − 160cos(120°) = 244. Therefore AC = √244 ≈ 15.62 km."
    },
    {
        question: "A triangular garden has two sides 18 m and 20 m with an included angle of 30°. Find its area.",
        answer: "90 m²",
        explanation: "Area = ½ × 18 × 20 × sin(30°) = 90 m²."
    },
    {
        question: "A triangular plot has side a = 10 m opposite 40°. Another angle is 70°. Find side b opposite 70°.",
        answer: "14.62 m",
        explanation: "b = 10 × sin(70°) / sin(40°) ≈ 14.62 m."
    },
    {
        question: "Two landmarks are 15 km and 20 km from a point. The included angle is 75°. Find the distance between them.",
        answer: "21.86 km",
        explanation: "d² = 225 + 400 − 600cos(75°) ≈ 469.47. Therefore d ≈ 21.67 km."
    },
    {
        question: "A triangular field has sides 25 m and 30 m with an included angle of 80°. Calculate the area.",
        answer: "369.92 m²",
        explanation: "Area = ½ × 25 × 30 × sin(80°) ≈ 369.92 m²."
    },
    {
        question: "A hiker walks 6 km east and then 8 km north. Find the straight-line distance from the starting point.",
        answer: "10 km",
        explanation: "d² = 6² + 8² = 100. Therefore d = 10 km."
    },
    {
        question: "A triangular park has sides 40 m and 35 m with an included angle of 65°. Find the distance between the endpoints of these sides.",
        answer: "40.90 m",
        explanation: "d² = 40² + 35² − 2(40)(35)cos(65°). Therefore d ≈ 40.09 m."
    }
];


/* ==========================================
   6. DISPLAY PRACTICE QUESTIONS
========================================== */

function displayPracticeQuestions(data, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    data.forEach((item, index) => {

        const answerId = `${containerId}Answer${index}`;

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

                <p><strong>Answer:</strong> ${item.answer}</p>

                <p><strong>Explanation:</strong> ${item.explanation}</p>

            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   7. EXAM-STYLE QUESTIONS
========================================== */

const examQuestions = [

    {
        title: "Question 1: Area Rule",
        type: "Area Rule",
        marks: 5,

        question: `
            Triangle ABC has AB = 12 cm, AC = 9 cm
            and angle BAC = 65°.

            Calculate the area of triangle ABC.
            Give your answer correct to two decimal places.
        `,

        diagram: `
            <svg viewBox="0 0 500 300" class="triangle-diagram">
                <polygon points="80,240 420,240 170,55"
                         fill="#dbeafe"
                         stroke="#1d4ed8"
                         stroke-width="3"/>

                <text x="55" y="260">A</text>
                <text x="425" y="260">B</text>
                <text x="160" y="42">C</text>

                <text x="230" y="265">12 cm</text>
                <text x="105" y="140">9 cm</text>
                <text x="105" y="220">65°</text>
            </svg>
        `,

        solution: [
            "Area = ½ ab sin(C)",
            "Area = ½ × 12 × 9 × sin(65°)",
            "Area = 54 × 0.9063",
            "Area ≈ 48.94 cm²"
        ],

        answer: "48.94 cm²"
    },

    {
        title: "Question 2: Sine Rule",
        type: "Sine Rule",
        marks: 5,

        question: `
            In triangle PQR, angle P = 42°, angle Q = 68°
            and side p = 15 cm.

            Calculate the length of side q.
        `,

        diagram: `
            <svg viewBox="0 0 500 300" class="triangle-diagram">
                <polygon points="70,240 430,240 200,55"
                         fill="#dbeafe"
                         stroke="#1d4ed8"
                         stroke-width="3"/>

                <text x="50" y="260">P</text>
                <text x="435" y="260">Q</text>
                <text x="190" y="42">R</text>

                <text x="220" y="265">r</text>
                <text x="100" y="135">q</text>
                <text x="330" y="135">p = 15 cm</text>

                <text x="105" y="225">42°</text>
                <text x="375" y="225">68°</text>
            </svg>
        `,

        solution: [
            "Use the sine rule.",
            "p / sin(P) = q / sin(Q)",
            "15 / sin(42°) = q / sin(68°)",
            "q = 15 × sin(68°) / sin(42°)",
            "q ≈ 20.54 cm"
        ],

        answer: "20.54 cm"
    },

    {
        title: "Question 3: Cosine Rule",
        type: "Cosine Rule",
        marks: 6,

        question: `
            Triangle XYZ has XY = 8 cm, XZ = 11 cm
            and angle YXZ = 55°.

            Calculate the length of YZ.
        `,

        diagram: `
            <svg viewBox="0 0 500 300" class="triangle-diagram">
                <polygon points="80,240 420,240 180,55"
                         fill="#dbeafe"
                         stroke="#1d4ed8"
                         stroke-width="3"/>

                <text x="60" y="260">Y</text>
                <text x="425" y="260">Z</text>
                <text x="170" y="42">X</text>

                <text x="230" y="265">YZ = ?</text>
                <text x="105" y="140">8 cm</text>
                <text x="320" y="140">11 cm</text>

                <text x="110" y="220">55°</text>
            </svg>
        `,

        solution: [
            "Use the cosine rule.",
            "YZ² = 8² + 11² − 2(8)(11)cos(55°)",
            "YZ² = 64 + 121 − 176(0.5736)",
            "YZ² ≈ 84.05",
            "YZ = √84.05",
            "YZ ≈ 9.17 cm"
        ],

        answer: "9.17 cm"
    },

    {
        title: "Question 4: Two-Dimensional Problem",
        type: "Exam Application",
        marks: 6,

        question: `
            Two towns A and B are 20 km apart.
            A third town C is 15 km from B.

            The angle ABC is 110°.

            Calculate the direct distance from A to C.
            Give your answer correct to two decimal places.
        `,

        diagram: `
            <svg viewBox="0 0 500 300" class="triangle-diagram">
                <polygon points="70,230 420,230 310,55"
                         fill="#dbeafe"
                         stroke="#1d4ed8"
                         stroke-width="3"/>

                <text x="50" y="250">A</text>
                <text x="425" y="250">B</text>
                <text x="300" y="42">C</text>

                <text x="220" y="255">20 km</text>
                <text x="365" y="130">15 km</text>
                <text x="100" y="220">?</text>

                <text x="375" y="215">110°</text>
            </svg>
        `,

        solution: [
            "Use the cosine rule.",
            "AC² = AB² + BC² − 2(AB)(BC)cos(B)",
            "AC² = 20² + 15² − 2(20)(15)cos(110°)",
            "AC² = 400 + 225 − 600(-0.3420)",
            "AC² ≈ 830.21",
            "AC = √830.21",
            "AC ≈ 28.81 km"
        ],

        answer: "28.81 km"
    },

    {
        title: "Question 5: Mixed Trigonometry",
        type: "Exam Application",
        marks: 8,

        question: `
            A triangular field ABC has AB = 18 m,
            AC = 22 m and angle BAC = 48°.

            (a) Calculate BC.

            (b) Calculate the area of the field.

            Give both answers correct to two decimal places.
        `,

        diagram: `
            <svg viewBox="0 0 500 300" class="triangle-diagram">
                <polygon points="80,240 420,240 170,55"
                         fill="#dbeafe"
                         stroke="#1d4ed8"
                         stroke-width="3"/>

                <text x="60" y="260">A</text>
                <text x="425" y="260">B</text>
                <text x="160" y="42">C</text>

                <text x="230" y="265">18 m</text>
                <text x="105" y="140">22 m</text>
                <text x="320" y="140">BC = ?</text>

                <text x="110" y="220">48°</text>
            </svg>
        `,

        solution: [
            "(a) Use the cosine rule.",
            "BC² = 18² + 22² − 2(18)(22)cos(48°)",
            "BC² ≈ 496.46",
            "BC ≈ 22.28 m",
            "(b) Use the area rule.",
            "Area = ½ × 18 × 22 × sin(48°)",
            "Area ≈ 147.03 m²"
        ],

        answer: "BC ≈ 22.28 m; Area ≈ 147.03 m²"
    }

];


/* ==========================================
   8. DISPLAY EXAM QUESTIONS
========================================== */

function displayExamQuestions() {

    const container = document.getElementById(
        "trigonometryExamQuestions"
    );

    if (!container) return;

    container.innerHTML = "";

    examQuestions.forEach((item, index) => {

        const solutionId = `examSolution${index}`;

        const card = document.createElement("div");

        card.className = "exam-question";

        card.innerHTML = `

            <span class="exam-label">
                ${item.type}
            </span>

            <h3>${item.title}</h3>

            <p>${item.question}</p>

            <div class="exam-diagram">
                ${item.diagram}
            </div>

            <p class="exam-marks">
                [${item.marks} marks]
            </p>

            <button class="solution-button"
                    onclick="toggleAnswer('${solutionId}', this)">
                Show Memo
            </button>

            <div class="solution" id="${solutionId}" hidden>

                <h4>Marking guideline / memo</h4>

                ${item.solution.map(step => `
                    <p class="solution-step">${step}</p>
                `).join("")}

                <div class="final-answer">
                    Final Answer: ${item.answer}
                </div>

            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   9. LOAD ALL CONTENT
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    displayWorkedExamples(areaExamples, "areaWorkedExamples");
    displayWorkedExamples(sineExamples, "sineWorkedExamples");
    displayWorkedExamples(cosineExamples, "cosineWorkedExamples");
    displayWorkedExamples(twoDExamples, "twoDWorkedExamples");

    displayPracticeQuestions(areaPractice, "areaQuestions");
    displayPracticeQuestions(sinePractice, "sineQuestions");
    displayPracticeQuestions(cosinePractice, "cosineQuestions");
    displayPracticeQuestions(twoDPractice, "twoDQuestions");

    displayExamQuestions();

    console.log("Trigonometry Rules loaded successfully.");

});
