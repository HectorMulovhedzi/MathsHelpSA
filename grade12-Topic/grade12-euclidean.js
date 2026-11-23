
// ======================================================
// MATHSHELPSA - GRADE 12
// EUCLIDEAN GEOMETRY
// ======================================================


// ======================================================
// 1. GEOMETRY DIAGRAMS
// ======================================================

function circleDiagram() {
    return `
    <div class="diagram-box">
        <h4>Circle Geometry</h4>

        <svg viewBox="0 0 400 260" role="img"
             aria-label="Circle showing centre O, radius and diameter">

            <circle cx="190" cy="125" r="85"
                fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>

            <line x1="105" y1="125" x2="275" y2="125"
                stroke="#dc2626" stroke-width="2.5"/>

            <line x1="190" y1="125" x2="250" y2="65"
                stroke="#16a34a" stroke-width="3"/>

            <circle cx="190" cy="125" r="4" fill="#1e40af"/>
            <circle cx="105" cy="125" r="4" fill="#dc2626"/>
            <circle cx="275" cy="125" r="4" fill="#dc2626"/>
            <circle cx="250" cy="65" r="4" fill="#16a34a"/>

            <text x="178" y="145" font-size="14" fill="#1e40af">O</text>
            <text x="92" y="115" font-size="13">A</text>
            <text x="282" y="115" font-size="13">B</text>
            <text x="258" y="60" font-size="13">C</text>

            <text x="180" y="112" font-size="12" fill="#dc2626">Diameter</text>
            <text x="205" y="83" font-size="13" fill="#15803d">Radius</text>

        </svg>

        <p>AB is the diameter and OC is a radius.</p>
    </div>`;
}


function similarTrianglesDiagram() {
    return `
    <div class="diagram-box">
        <h4>Similar Triangles</h4>

        <svg viewBox="0 0 420 260" role="img"
             aria-label="Two similar triangles">

            <polygon points="55,200 155,200 105,65"
                fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>

            <polygon points="235,200 385,200 310,65"
                fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>

            <text x="45" y="218" font-size="14">A</text>
            <text x="155" y="218" font-size="14">B</text>
            <text x="101" y="53" font-size="14">C</text>

            <text x="222" y="218" font-size="14">D</text>
            <text x="388" y="218" font-size="14">E</text>
            <text x="306" y="53" font-size="14">F</text>

            <text x="80" y="185" font-size="12">5</text>
            <text x="300" y="185" font-size="12">10</text>

        </svg>

        <p>Corresponding angles are equal and corresponding sides are proportional.</p>
    </div>`;
}


function parallelLinesDiagram() {
    return `
    <div class="diagram-box">
        <h4>Parallel Lines and Proportionality</h4>

        <svg viewBox="0 0 420 290" role="img"
             aria-label="Triangle with a line parallel to its base">

            <polygon points="210,35 65,250 355,250"
                fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>

            <line x1="137.5" y1="142.5" x2="282.5" y2="142.5"
                stroke="#dc2626" stroke-width="3"/>

            <text x="205" y="25" font-size="15">A</text>
            <text x="48" y="265" font-size="15">B</text>
            <text x="360" y="265" font-size="15">C</text>

            <text x="120" y="135" font-size="14">D</text>
            <text x="287" y="135" font-size="14">E</text>

            <text x="190" y="160" font-size="14" fill="#dc2626">DE</text>
            <text x="190" y="270" font-size="14">BC</text>

            <text x="300" y="95" font-size="13" fill="#dc2626">DE ∥ BC</text>

        </svg>

        <p>When DE is parallel to BC, the sides are divided proportionally.</p>
    </div>`;
}


function rightTriangleDiagram() {
    return `
    <div class="diagram-box">
        <h4>Pythagoras' Theorem</h4>

        <svg viewBox="0 0 400 260" role="img"
             aria-label="Right angled triangle with sides 3, 4 and 5">

            <polygon points="80,210 300,210 80,45"
                fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>

            <path d="M80 190 L100 190 L100 210"
                fill="none" stroke="#dc2626" stroke-width="2"/>

            <text x="175" y="235" font-size="16">4</text>
            <text x="45" y="130" font-size="16">3</text>
            <text x="205" y="115" font-size="16">5</text>

            <text x="65" y="228" font-size="14">B</text>
            <text x="305" y="228" font-size="14">C</text>
            <text x="65" y="35" font-size="14">A</text>

        </svg>

        <p>The hypotenuse is opposite the right angle.</p>
    </div>`;
}


function proportionalTriangleDiagram() {
    return `
    <div class="diagram-box">
        <h4>Triangles with Proportional Sides</h4>

        <svg viewBox="0 0 420 260" role="img"
             aria-label="Two triangles with proportional side lengths">

            <polygon points="55,205 155,205 105,65"
                fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>

            <polygon points="235,205 385,205 310,65"
                fill="#fef3c7" stroke="#d97706" stroke-width="3"/>

            <text x="88" y="225" font-size="13">4</text>
            <text x="295" y="225" font-size="13">8</text>

            <text x="160" y="130" font-size="13">3</text>
            <text x="385" y="130" font-size="13">6</text>

        </svg>

        <p>Corresponding sides have the same ratio: 1 : 2.</p>
    </div>`;
}


function equiangularDiagram() {
    return `
    <div class="diagram-box">
        <h4>Equiangular Triangles</h4>

        <svg viewBox="0 0 420 260" role="img"
             aria-label="Two equiangular triangles">

            <polygon points="60,205 160,205 110,65"
                fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>

            <polygon points="235,205 385,205 310,65"
                fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>

            <path d="M105 190 L115 190 L110 178"
                fill="none" stroke="#dc2626" stroke-width="2"/>

            <path d="M300 190 L320 190 L310 165"
                fill="none" stroke="#dc2626" stroke-width="2"/>

            <text x="100" y="50" font-size="13">60°</text>
            <text x="300" y="50" font-size="13">60°</text>

            <text x="105" y="240" font-size="13">60°</text>
            <text x="300" y="240" font-size="13">60°</text>

        </svg>

        <p>Equiangular triangles have equal corresponding angles and are similar.</p>
    </div>`;
}


// ======================================================
// 2. LESSON NOTES
// ======================================================

const lessonNotes = {

    unit1: `
        <h3>Revision: Grade 11 Geometry</h3>

        <p>Before studying Grade 12 Euclidean Geometry, revise the important geometry rules and theorems from Grade 11.</p>

        <div class="theorem-box">
            <h4>1. Angles on a straight line</h4>
            <p>Angles on a straight line add up to 180°.</p>
            <div class="formula-box">a + b = 180°</div>
        </div>

        <div class="theorem-box">
            <h4>2. Angles around a point</h4>
            <p>Angles around a point add up to 360°.</p>
            <div class="formula-box">Angles = 360°</div>
        </div>

        <div class="theorem-box">
            <h4>3. Vertically opposite angles</h4>
            <p>Vertically opposite angles are equal.</p>
        </div>

        <div class="theorem-box">
            <h4>4. Parallel lines</h4>
            <ul>
                <li>Corresponding angles are equal.</li>
                <li>Alternate angles are equal.</li>
                <li>Co-interior angles add up to 180°.</li>
            </ul>
        </div>

        <div class="theorem-box">
            <h4>5. Triangle properties</h4>
            <ul>
                <li>Angles inside a triangle add up to 180°.</li>
                <li>An exterior angle equals the sum of the two opposite interior angles.</li>
                <li>Equal sides have equal opposite angles.</li>
            </ul>
        </div>

        <div class="theorem-box">
            <h4>6. Circle theorems revision</h4>
            <ul>
                <li>The angle at the centre is twice the angle at the circumference standing on the same arc.</li>
                <li>Angles in the same segment are equal.</li>
                <li>The angle in a semicircle is 90°.</li>
                <li>Opposite angles of a cyclic quadrilateral add up to 180°.</li>
                <li>A tangent is perpendicular to the radius at the point of contact.</li>
            </ul>
        </div>

        ${circleDiagram()}
    `,

    unit2: `
        <h3>Similar Polygons</h3>

        <p>Similar polygons have the same shape, but they do not necessarily have the same size.</p>

        <div class="theorem-box">
            <h4>Conditions for similar polygons</h4>
            <ul>
                <li>Corresponding angles must be equal.</li>
                <li>Corresponding sides must be proportional.</li>
            </ul>
        </div>

        <div class="formula-box">
            Scale factor = Corresponding side ÷ Original side
        </div>

        <p>If the scale factor is 2, every corresponding side of the larger polygon is twice the smaller polygon.</p>

        <h4>Important facts</h4>
        <ul>
            <li>Perimeters have the same ratio as corresponding sides.</li>
            <li>Areas have the square of the side ratio.</li>
        </ul>

        <div class="formula-box">
            Area ratio = (Scale factor)²
        </div>

        ${similarTrianglesDiagram()}
    `,

    unit3: `
        <h3>Parallel Lines and Proportionality Theorem</h3>

        <p>When a line is drawn parallel to one side of a triangle, it divides the other two sides proportionally.</p>

        <div class="theorem-box">
            <h4>Proportionality theorem</h4>
            <p>In triangle ABC, if DE is parallel to BC:</p>
            <div class="formula-box">
                AD / DB = AE / EC
            </div>
        </div>

        <p>The smaller triangle ADE is also similar to the larger triangle ABC.</p>

        <h4>Remember</h4>
        <ul>
            <li>Look for the parallel line symbol.</li>
            <li>Identify the matching sides.</li>
            <li>Set up a proportion using corresponding lengths.</li>
            <li>Cross multiply to find the unknown.</li>
        </ul>

        ${parallelLinesDiagram()}
    `,

    unit4: `
        <h3>Equiangular Triangles and Similarity</h3>

        <p>Equiangular triangles are triangles in which all corresponding angles are equal.</p>

        <div class="theorem-box">
            <h4>Equiangular triangle theorem</h4>
            <p>If two triangles have equal corresponding angles, the triangles are similar.</p>
        </div>

        <h4>AA similarity</h4>
        <p>If two angles of one triangle are equal to two angles of another triangle, the third angles are also equal. Therefore, the triangles are similar.</p>

        <div class="formula-box">
            Corresponding angles: equal<br>
            Corresponding sides: proportional
        </div>

        <h4>How to prove similarity</h4>
        <ol>
            <li>Identify two equal pairs of angles.</li>
            <li>State the angle reasons.</li>
            <li>Conclude that the triangles are similar by AA.</li>
            <li>Use corresponding sides to calculate unknown lengths.</li>
        </ol>

        ${equiangularDiagram()}
    `,

    unit5: `
        <h3>Triangles with Proportional Sides and Similarity</h3>

        <p>Two triangles can be proved similar when their corresponding sides are proportional.</p>

        <div class="theorem-box">
            <h4>SSS Similarity</h4>
            <p>If all three pairs of corresponding sides are in the same ratio, the triangles are similar.</p>
        </div>

        <div class="formula-box">
            AB / DE = BC / EF = AC / DF
        </div>

        <h4>Example of a side ratio</h4>
        <p>Triangle 1 has sides 3, 4 and 5.</p>
        <p>Triangle 2 has sides 6, 8 and 10.</p>

        <p>Compare the sides:</p>

        <div class="formula-box">
            3/6 = 4/8 = 5/10 = 1/2
        </div>

        <p>All three ratios are equal. Therefore, the triangles are similar by SSS.</p>

        ${proportionalTriangleDiagram()}
    `,

    unit6: `
        <h3>Pythagoras' Theorem and Similarity</h3>

        <p>Pythagoras' Theorem applies to right-angled triangles.</p>

        <div class="theorem-box">
            <h4>Pythagoras' Theorem</h4>
            <div class="formula-box">
                a² + b² = c²
            </div>
            <p>a and b are the shorter sides, while c is the hypotenuse.</p>
        </div>

        <h4>Finding the hypotenuse</h4>
        <p>Square both shorter sides, add the answers and find the square root.</p>

        <h4>Finding a shorter side</h4>
        <p>Square the hypotenuse, subtract the square of the known shorter side and find the square root.</p>

        <div class="formula-box">
            a = √(c² - b²)
        </div>

        <h4>Connection to similarity</h4>
        <p>Similar right-angled triangles have equal corresponding angles and proportional corresponding sides.</p>

        ${rightTriangleDiagram()}
    `
};


// ======================================================
// 3. WORKED EXAMPLES
// ======================================================

const workedExamples = {

    unit1: [

        {
            question: "Two angles on a straight line are 3x and 60°. Calculate x.",
            diagram: `
            <div class="diagram-box">
                <h4>Angles on a Straight Line</h4>
                <svg viewBox="0 0 400 170">
                    <line x1="40" y1="110" x2="360" y2="110"
                        stroke="#2563eb" stroke-width="3"/>
                    <line x1="200" y1="110" x2="130" y2="30"
                        stroke="#dc2626" stroke-width="3"/>
                    <text x="100" y="95" font-size="16">3x</text>
                    <text x="245" y="95" font-size="16">60°</text>
                </svg>
            </div>`,
            steps: [
                "Angles on a straight line add up to 180°.",
                "3x + 60° = 180°",
                "3x = 180° - 60°",
                "3x = 120°",
                "x = 120° ÷ 3",
                "x = 40°"
            ],
            answer: "40"
        },

        {
            question: "The angle at the centre of a circle is 100°. Find the angle at the circumference standing on the same arc.",
            diagram: `
            <div class="diagram-box">
                <h4>Angle at Centre and Circumference</h4>
                <svg viewBox="0 0 400 240">
                    <circle cx="190" cy="120" r="85"
                        fill="#eff6ff" stroke="#2563eb" stroke-width="3"/>
                    <circle cx="190" cy="120" r="3" fill="#1e40af"/>
                    <line x1="190" y1="120" x2="120" y2="70"
                        stroke="#16a34a" stroke-width="2"/>
                    <line x1="190" y1="120" x2="260" y2="70"
                        stroke="#16a34a" stroke-width="2"/>
                    <line x1="120" y1="70" x2="260" y2="70"
                        stroke="#dc2626" stroke-width="2"/>
                    <text x="175" y="140" font-size="14">O</text>
                    <text x="180" y="105" font-size="13">100°</text>
                    <text x="185" y="55" font-size="13">?</text>
                </svg>
            </div>`,
            steps: [
                "The angle at the centre is twice the angle at the circumference.",
                "Angle at circumference = 100° ÷ 2",
                "Angle at circumference = 50°"
            ],
            answer: "50"
        },

        {
            question: "Two angles in a triangle are 50° and 60°. Calculate the third angle.",
            diagram: `
            <div class="diagram-box">
                <h4>Angles in a Triangle</h4>
                <svg viewBox="0 0 350 220">
                    <polygon points="50,180 300,180 180,30"
                        fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
                    <text x="75" y="165" font-size="14">50°</text>
                    <text x="240" y="165" font-size="14">60°</text>
                    <text x="175" y="65" font-size="14">?</text>
                </svg>
            </div>`,
            steps: [
                "Angles in a triangle add up to 180°.",
                "Third angle = 180° - 50° - 60°",
                "Third angle = 70°"
            ],
            answer: "70"
        }
    ],

    unit2: [

        {
            question: "Two similar triangles have corresponding sides of 4 cm and 8 cm. Find the scale factor from the smaller triangle to the larger triangle.",
            diagram: similarTrianglesDiagram(),
            steps: [
                "Scale factor = Larger corresponding side ÷ Smaller corresponding side.",
                "Scale factor = 8 ÷ 4",
                "Scale factor = 2"
            ],
            answer: "2"
        },

        {
            question: "Two similar polygons have a scale factor of 3. The smaller polygon has a perimeter of 12 cm. Find the larger perimeter.",
            diagram: `
            <div class="diagram-box">
                <h4>Similar Polygons</h4>
                <svg viewBox="0 0 400 200">
                    <polygon points="50,150 110,150 110,90 50,90"
                        fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
                    <polygon points="210,150 360,150 360,0 210,0"
                        fill="#dcfce7" stroke="#16a34a" stroke-width="3"/>
                    <text x="65" y="175" font-size="13">Small</text>
                    <text x="260" y="175" font-size="13">Large</text>
                </svg>
            </div>`,
            steps: [
                "Perimeters have the same ratio as corresponding sides.",
                "Larger perimeter = 12 × 3",
                "Larger perimeter = 36 cm"
            ],
            answer: "36"
        },

        {
            question: "The side ratio of two similar triangles is 2 : 5. Find the area ratio.",
            diagram: similarTrianglesDiagram(),
            steps: [
                "Area ratio is the square of the side ratio.",
                "Area ratio = 2² : 5²",
                "Area ratio = 4 : 25"
            ],
            answer: "4:25"
        }
    ],

    unit3: [

        {
            question: "In triangle ABC, DE is parallel to BC. AD = 4 cm, DB = 2 cm and AE = 6 cm. Find EC.",
            diagram: parallelLinesDiagram(),
            steps: [
                "By the proportionality theorem: AD / DB = AE / EC.",
                "4 / 2 = 6 / EC",
                "2 = 6 / EC",
                "2 × EC = 6",
                "EC = 3 cm"
            ],
            answer: "3"
        },

        {
            question: "DE is parallel to BC. AD = 3 cm, AB = 9 cm and AC = 12 cm. Find AE.",
            diagram: parallelLinesDiagram(),
            steps: [
                "Since DE is parallel to BC, triangle ADE is similar to triangle ABC.",
                "AD / AB = AE / AC",
                "3 / 9 = AE / 12",
                "AE = (3 × 12) / 9",
                "AE = 4 cm"
            ],
            answer: "4"
        },

        {
            question: "AD = 5 cm, DB = 5 cm and AE = 7 cm. DE is parallel to BC. Find EC.",
            diagram: parallelLinesDiagram(),
            steps: [
                "AD / DB = AE / EC",
                "5 / 5 = 7 / EC",
                "1 = 7 / EC",
                "EC = 7 cm"
            ],
            answer: "7"
        }
    ],

    unit4: [

        {
            question: "Triangle ABC has angles 50° and 60°. Triangle DEF has corresponding angles 50° and 60°. Are the triangles similar?",
            diagram: equiangularDiagram(),
            steps: [
                "The first pair of corresponding angles are equal.",
                "The second pair of corresponding angles are equal.",
                "Therefore, the third pair of angles must also be equal.",
                "The triangles are similar by AA."
            ],
            answer: "yes"
        },

        {
            question: "Two equiangular triangles have corresponding sides 6 cm and 9 cm. Find the scale factor from the first triangle to the second.",
            diagram: equiangularDiagram(),
            steps: [
                "Scale factor = Second side ÷ First side.",
                "Scale factor = 9 ÷ 6",
                "Scale factor = 1.5"
            ],
            answer: "1.5"
        },

        {
            question: "Two similar triangles have a corresponding side ratio of 3 : 4. If the smaller triangle has a side of 9 cm, find the corresponding side of the larger triangle.",
            diagram: equiangularDiagram(),
            steps: [
                "The side ratio is 3 : 4.",
                "3 / 4 = 9 / x",
                "3x = 36",
                "x = 12 cm"
            ],
            answer: "12"
        }
    ],

    unit5: [

        {
            question: "Triangle ABC has sides 3, 4 and 5. Triangle DEF has sides 6, 8 and 10. Are the triangles similar?",
            diagram: proportionalTriangleDiagram(),
            steps: [
                "Compare corresponding sides.",
                "3 / 6 = 1 / 2",
                "4 / 8 = 1 / 2",
                "5 / 10 = 1 / 2",
                "All three ratios are equal.",
                "Therefore, the triangles are similar by SSS."
            ],
            answer: "yes"
        },

        {
            question: "Two similar triangles have corresponding sides in the ratio 2 : 3. A side of the smaller triangle is 8 cm. Find the corresponding larger side.",
            diagram: proportionalTriangleDiagram(),
            steps: [
                "2 / 3 = 8 / x",
                "2x = 24",
                "x = 12 cm"
            ],
            answer: "12"
        },

        {
            question: "Triangle A has sides 5, 7 and 9. Triangle B has sides 10, 14 and 18. State the scale factor from A to B.",
            diagram: proportionalTriangleDiagram(),
            steps: [
                "10 / 5 = 2",
                "14 / 7 = 2",
                "18 / 9 = 2",
                "The scale factor is 2."
            ],
            answer: "2"
        }
    ],

    unit6: [

        {
            question: "A right-angled triangle has shorter sides of 3 cm and 4 cm. Find the hypotenuse.",
            diagram: rightTriangleDiagram(),
            steps: [
                "Use Pythagoras' Theorem: a² + b² = c².",
                "c² = 3² + 4²",
                "c² = 9 + 16",
                "c² = 25",
                "c = √25",
                "c = 5 cm"
            ],
            answer: "5"
        },

        {
            question: "A right-angled triangle has a hypotenuse of 13 cm and one shorter side of 5 cm. Find the other shorter side.",
            diagram: rightTriangleDiagram(),
            steps: [
                "Use a² + b² = c².",
                "a² + 5² = 13²",
                "a² + 25 = 169",
                "a² = 144",
                "a = √144",
                "a = 12 cm"
            ],
            answer: "12"
        },

        {
            question: "Two similar right-angled triangles have a corresponding side ratio of 2 : 3. The smaller triangle has a hypotenuse of 10 cm. Find the larger hypotenuse.",
            diagram: similarTrianglesDiagram(),
            steps: [
                "Scale factor = 3 / 2.",
                "Larger hypotenuse = 10 × 3 / 2",
                "Larger hypotenuse = 15 cm"
            ],
            answer: "15"
        }
    ]
};


// ======================================================
// 4. PRACTICE QUESTIONS
// ======================================================

const practiceQuestions = {

    unit1: [
        { question: "Angles on a straight line are 110° and x. Find x.", answer: "70" },
        { question: "Angles in a triangle are 40° and 80°. Find the third angle.", answer: "60" },
        { question: "Find the angle at the circumference if the angle at the centre is 120° on the same arc.", answer: "60" },
        { question: "What is the angle in a semicircle?", answer: "90" },
        { question: "What is the sum of opposite angles in a cyclic quadrilateral?", answer: "180" }
    ],

    unit2: [
        { question: "A side of 5 cm is enlarged by scale factor 3. Find the new side.", answer: "15" },
        { question: "The side ratio is 2 : 3. Find the area ratio.", answer: "4:9" },
        { question: "A smaller perimeter is 20 cm and the scale factor is 2. Find the larger perimeter.", answer: "40" },
        { question: "Two corresponding sides are 6 cm and 18 cm. Find the scale factor.", answer: "3" },
        { question: "The side ratio is 1 : 4. Find the area ratio.", answer: "1:16" }
    ],

    unit3: [
        { question: "If AD = 3, DB = 6 and AE = 4, find EC when DE is parallel to BC.", answer: "8" },
        { question: "If AD / AB = 2 / 5 and AC = 20, find AE.", answer: "8" },
        { question: "If AD = 4, DB = 4 and AE = 9, find EC.", answer: "9" },
        { question: "If AD = 6, AB = 10 and AC = 15, find AE.", answer: "9" },
        { question: "If AD = 2, DB = 3 and AE = 4, find EC.", answer: "6" }
    ],

    unit4: [
        { question: "Which similarity test uses two equal corresponding angles?", answer: "aa" },
        { question: "If two angles are 45° and 65°, find the third angle.", answer: "70" },
        { question: "A corresponding side is 4 cm and its enlarged side is 12 cm. Find the scale factor.", answer: "3" },
        { question: "If two triangles are equiangular, are they similar? (yes/no)", answer: "yes" },
        { question: "A side ratio is 2 : 5. A smaller side is 6 cm. Find the corresponding larger side.", answer: "15" }
    ],

    unit5: [
        { question: "Which test uses three pairs of proportional sides?", answer: "sss" },
        { question: "Sides 2, 3, 4 are enlarged by scale factor 2. Find the largest new side.", answer: "8" },
        { question: "The ratio is 3 : 5. A smaller side is 12 cm. Find the larger side.", answer: "20" },
        { question: "Are triangles with sides 3, 4, 5 and 6, 8, 10 similar? (yes/no)", answer: "yes" },
        { question: "Find the scale factor from sides 8 cm to 24 cm.", answer: "3" }
    ],

    unit6: [
        { question: "A right triangle has shorter sides 6 and 8. Find its hypotenuse.", answer: "10" },
        { question: "A right triangle has hypotenuse 10 and one side 6. Find the other side.", answer: "8" },
        { question: "What is the name of the longest side of a right-angled triangle?", answer: "hypotenuse" },
        { question: "A 5 cm side is enlarged by scale factor 3. Find the new length.", answer: "15" },
        { question: "A right triangle has sides 5 and 12. Find its hypotenuse.", answer: "13" }
    ]
};


// ======================================================
// 5. DISPLAY LESSON NOTES
// ======================================================

function displayNotes() {

    for (let i = 1; i <= 6; i++) {

        const element = document.getElementById(`unit${i}Notes`);

        if (element) {
            element.innerHTML = lessonNotes[`unit${i}`];
        }
    }
}


// ======================================================
// 6. DISPLAY WORKED EXAMPLES
// ======================================================

function displayExamples() {

    for (let i = 1; i <= 6; i++) {

        const element = document.getElementById(`unit${i}Examples`);

        if (!element) continue;

        const examples = workedExamples[`unit${i}`];

        element.innerHTML = examples.map((example, index) => `

            <div class="example-card">

                <h4>Example ${index + 1}</h4>

                <p><strong>Question:</strong> ${example.question}</p>

                ${example.diagram || ""}

                <div class="solution">

                    <strong>Solution:</strong>

                    ${example.steps.map(step => `
                        <p>${step}</p>
                    `).join("")}

                </div>

            </div>

        `).join("");
    }
}


// ======================================================
// 7. DISPLAY PRACTICE QUESTIONS
// ======================================================

function displayPractice() {

    for (let i = 1; i <= 6; i++) {

        const element = document.getElementById(`unit${i}Practice`);

        if (!element) continue;

        const questions = practiceQuestions[`unit${i}`];

        element.innerHTML = questions.map((question, index) => `

            <div class="practice-question">

                <p>
                    <strong>Question ${index + 1}:</strong>
                    ${question.question}
                </p>

                <input
                    type="text"
                    id="answer-unit${i}-${index}"
                    placeholder="Enter your answer"
                >

                <button class="check-button"
                    onclick="checkPracticeAnswer(${i}, ${index})">
                    Check Answer
                </button>

                <p class="feedback"
                    id="feedback-unit${i}-${index}"></p>

            </div>

        `).join("");
    }
}


// ======================================================
// 8. CHECK PRACTICE ANSWERS
// ======================================================

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .replace(/\s+/g, "")
        .replace(/°/g, "")
        .replace(/cm/g, "")
        .replace(/,/g, ":");
}


function checkPracticeAnswer(unit, index) {

    const input = document.getElementById(
        `answer-unit${unit}-${index}`
    );

    const feedback = document.getElementById(
        `feedback-unit${unit}-${index}`
    );

    const correctAnswer =
        practiceQuestions[`unit${unit}`][index].answer;

    if (!input.value.trim()) {
        feedback.textContent = "Please enter an answer first.";
        feedback.className = "feedback incorrect";
        return;
    }

    const userAnswer = normaliseAnswer(input.value);
    const expectedAnswer = normaliseAnswer(correctAnswer);

    if (userAnswer === expectedAnswer) {

        feedback.textContent = "Correct! Well done.";
        feedback.className = "feedback correct";

    } else {

        feedback.textContent = "Not quite. Try again.";
        feedback.className = "feedback incorrect";
    }
}


// ======================================================
// 9. OPEN AND CLOSE UNITS
// ======================================================

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);

    if (!section) return;

    section.hidden = !section.hidden;

    const symbol = button.querySelector("span");

    if (symbol) {
        symbol.textContent = section.hidden ? "+" : "−";
    }
}


// ======================================================
// 10. QUIZ QUESTIONS
// ======================================================

const quizQuestions = [

    {
        question: "What is the sum of angles inside a triangle?",
        options: ["90°", "180°", "270°", "360°"],
        answer: 1
    },

    {
        question: "The angle at the centre is 100°. Find the angle at the circumference on the same arc.",
        options: ["25°", "50°", "100°", "200°"],
        answer: 1
    },

    {
        question: "What is the area ratio if the side ratio is 2 : 3?",
        options: ["2 : 3", "4 : 9", "8 : 27", "3 : 2"],
        answer: 1
    },

    {
        question: "If DE is parallel to BC in triangle ABC, what can be said about triangles ADE and ABC?",
        options: [
            "They are congruent",
            "They are similar",
            "They are rectangles",
            "They are not related"
        ],
        answer: 1
    },

    {
        question: "Which similarity test uses three pairs of proportional sides?",
        options: ["AA", "SAS", "SSS", "RHS"],
        answer: 2
    },

    {
        question: "What is the hypotenuse of a right triangle with shorter sides 3 cm and 4 cm?",
        options: ["5 cm", "6 cm", "7 cm", "8 cm"],
        answer: 0
    },

    {
        question: "What is the angle in a semicircle?",
        options: ["45°", "60°", "90°", "180°"],
        answer: 2
    },

    {
        question: "Two similar triangles have side ratio 1 : 3. What is their perimeter ratio?",
        options: ["1 : 9", "1 : 3", "1 : 6", "3 : 1"],
        answer: 1
    },

    {
        question: "If the hypotenuse is 13 cm and one shorter side is 5 cm, find the other shorter side.",
        options: ["8 cm", "10 cm", "12 cm", "15 cm"],
        answer: 2
    },

    {
        question: "If two triangles have two pairs of equal corresponding angles, which test proves similarity?",
        options: ["SSS", "RHS", "AA", "SAS"],
        answer: 2
    }

];


// ======================================================
// 11. QUIZ VARIABLES
// ======================================================

let currentQuestion = 0;
let quizScore = 0;
let selectedAnswers = [];


// ======================================================
// 12. START QUIZ
// ======================================================

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;
    selectedAnswers = [];

    document.getElementById("startQuiz").hidden = true;
    document.getElementById("quizResults").hidden = true;
    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";

    showQuestion();
}


// ======================================================
// 13. SHOW QUIZ QUESTION
// ======================================================

function showQuestion() {

    const question = quizQuestions[currentQuestion];

    document.getElementById("questionProgress").textContent =
        `Question ${currentQuestion + 1} of ${quizQuestions.length}`;

    document.getElementById("quizScore").textContent =
        `Score: ${quizScore}`;

    document.getElementById("progressBar").style.width =
        `${(currentQuestion / quizQuestions.length) * 100}%`;

    document.getElementById("quizQuestions").innerHTML = `

        <div class="quiz-question">

            <h4>${question.question}</h4>

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

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz"
            : "Next Question";
}


// ======================================================
// 14. SUBMIT QUIZ ANSWER
// ======================================================

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer before continuing.");
        return;
    }

    const answer = Number(selected.value);

    selectedAnswers[currentQuestion] = answer;

    if (answer === quizQuestions[currentQuestion].answer) {
        quizScore++;
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}


// ======================================================
// 15. FINISH QUIZ
// ======================================================

function finishQuiz() {

    document.getElementById("quizArea").hidden = true;
    document.getElementById("quizResults").hidden = false;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").textContent =
        `Your score: ${quizScore} / ${quizQuestions.length}`;

    let feedback = "";

    if (quizScore >= 8) {
        feedback = "Excellent work! You understand Euclidean Geometry very well.";
    } else if (quizScore >= 5) {
        feedback = "Good effort! Revise the units where you made mistakes.";
    } else {
        feedback = "Keep practising. Go through the lesson notes and examples again.";
    }

    document.getElementById("finalFeedback").textContent = feedback;
}


// ======================================================
// 16. RETRY QUIZ
// ======================================================

function retryQuiz() {

    document.getElementById("quizResults").hidden = true;

    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";

    document.getElementById("progressBar").style.width = "0%";
}


// ======================================================
// 17. LOAD EVERYTHING
// ======================================================

document.addEventListener("DOMContentLoaded", function () {

    displayNotes();

    displayExamples();

    displayPractice();

});
