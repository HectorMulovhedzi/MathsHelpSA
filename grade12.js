
/* =====================================
   GRADE 12 MATHEMATICS
   MathsHelpSA
===================================== */

// Show or hide lessons
function showLesson(lessonId) {
    const lesson = document.getElementById(lessonId);

    lesson.style.display =
        lesson.style.display === "block" ? "none" : "block";
}

// Show or hide worked examples
function showSteps(stepsId) {
    const steps = document.getElementById(stepsId);

    steps.style.display =
        steps.style.display === "block" ? "none" : "block";
}


/* =====================================
   PRACTICE QUESTIONS
   5 EASY + 5 MEDIUM + 10 HARD
===================================== */

const practiceData = {

    // 1. EXPONENTS
    exponents: [

        // EASY: Questions 1-5
        { level: "Easy", q: "Simplify: 2³ × 2²", a: "2³⁺² = 2⁵ = 32." },
        { level: "Easy", q: "Simplify: 5⁶ ÷ 5⁴", a: "5⁶⁻⁴ = 5² = 25." },
        { level: "Easy", q: "Calculate: 7⁰", a: "Any non-zero number raised to the power 0 equals 1." },
        { level: "Easy", q: "Calculate: 3⁻²", a: "3⁻² = 1/3² = 1/9." },
        { level: "Easy", q: "Simplify: (x²)³", a: "Multiply the exponents: x²ˣ³ = x⁶." },

        // MEDIUM: Questions 6-10
        { level: "Medium", q: "Simplify: (2x³)²", a: "2² × x⁶ = 4x⁶." },
        { level: "Medium", q: "Simplify: (a⁵b²)/(a²b)", a: "a⁵⁻²b²⁻¹ = a³b." },
        { level: "Medium", q: "Solve: 2ˣ = 64", a: "64 = 2⁶, therefore x = 6." },
        { level: "Medium", q: "Simplify: (x⁻²y³)/(xy)", a: "x⁻³y² = y²/x³." },
        { level: "Medium", q: "Solve: 3ˣ⁺¹ = 81", a: "81 = 3⁴. Therefore x + 1 = 4 and x = 3." },

        // HARD: Questions 11-20
        { level: "Hard", q: "Simplify: (2x⁻²y³)² ÷ 4xy", a: "First square: 4x⁻⁴y⁶. Divide by 4xy: x⁻⁵y⁵ = y⁵/x⁵." },
        { level: "Hard", q: "Solve: 4ˣ = 1/64", a: "1/64 = 4⁻³, therefore x = -3." },
        { level: "Hard", q: "Solve: 9ˣ = 27", a: "Write both sides in base 3: 3²ˣ = 3³. Therefore x = 3/2." },
        { level: "Hard", q: "Simplify: (a³b⁻²)²/(a⁻¹b)", a: "Numerator = a⁶b⁻⁴. Divide: a⁷b⁻⁵ = a⁷/b⁵." },
        { level: "Hard", q: "Solve: 2²ˣ⁻¹ = 32", a: "32 = 2⁵. Therefore 2x - 1 = 5, so x = 3." },
        { level: "Hard", q: "Solve: 5ˣ × 25 = 3125", a: "Write as powers of 5: 5ˣ × 5² = 5⁵. Therefore x = 3." },
        { level: "Hard", q: "Simplify: (x² - 9)/(x - 3)", a: "Factorise: (x - 3)(x + 3)/(x - 3) = x + 3, where x ≠ 3." },
        { level: "Hard", q: "Solve: 8ˣ = 4ˣ⁺¹", a: "Write in base 2: 2³ˣ = 2²ˣ⁺². Thus 3x = 2x + 2, so x = 2." },
        { level: "Hard", q: "Simplify: (16x⁴)^(1/2)", a: "√16 × √x⁴ = 4x² for real x." },
        { level: "Hard", q: "Solve: 2ˣ⁺² + 2ˣ = 20", a: "4(2ˣ) + 2ˣ = 20. Thus 5(2ˣ) = 20, 2ˣ = 4, so x = 2." }
    ],


    // 2. EQUATIONS
    equations: [

        // EASY
        { level: "Easy", q: "Solve: 3x + 5 = 20", a: "3x = 15. Therefore x = 5." },
        { level: "Easy", q: "Solve: 7x - 4 = 24", a: "7x = 28. Therefore x = 4." },
        { level: "Easy", q: "Solve: x² = 25", a: "x = ±5." },
        { level: "Easy", q: "Solve: x² - 9 = 0", a: "(x - 3)(x + 3) = 0. Therefore x = 3 or -3." },
        { level: "Easy", q: "Solve: 2(x + 3) = 14", a: "2x + 6 = 14. Therefore x = 4." },

        // MEDIUM
        { level: "Medium", q: "Solve: x² - 7x + 12 = 0", a: "(x - 3)(x - 4) = 0. Therefore x = 3 or 4." },
        { level: "Medium", q: "Solve: 2x² - 8x = 0", a: "2x(x - 4) = 0. Therefore x = 0 or 4." },
        { level: "Medium", q: "Solve: x² + 4x - 12 = 0", a: "(x + 6)(x - 2) = 0. Therefore x = -6 or 2." },
        { level: "Medium", q: "Solve: 3x² = 27", a: "x² = 9. Therefore x = ±3." },
        { level: "Medium", q: "Solve: 1/x + 1/2 = 1, where x ≠ 0", a: "1/x = 1/2. Therefore x = 2." },

        // HARD
        { level: "Hard", q: "Solve: 2x² - 5x - 3 = 0", a: "(2x + 1)(x - 3) = 0. Therefore x = -1/2 or 3." },
        { level: "Hard", q: "Solve: x² - 6x + 5 = 0", a: "(x - 1)(x - 5) = 0. Therefore x = 1 or 5." },
        { level: "Hard", q: "Solve: x² - 4x - 1 = 0", a: "Using the quadratic formula: x = [4 ± √(16 + 4)]/2 = 2 ± √5." },
        { level: "Hard", q: "Solve: (x + 1)/(x - 2) = 3, where x ≠ 2", a: "x + 1 = 3x - 6. Thus 7 = 2x and x = 7/2." },
        { level: "Hard", q: "Solve: x² - 5x = 0", a: "x(x - 5) = 0. Therefore x = 0 or 5." },
        { level: "Hard", q: "Solve: 2/(x - 1) = 1, where x ≠ 1", a: "2 = x - 1. Therefore x = 3." },
        { level: "Hard", q: "Solve: x⁴ - 5x² + 4 = 0", a: "Let y = x². Then y² - 5y + 4 = 0. Thus y = 1 or 4. Therefore x = ±1 or ±2." },
        { level: "Hard", q: "Solve: x² + 2x - 8 = 0", a: "(x + 4)(x - 2) = 0. Therefore x = -4 or 2." },
        { level: "Hard", q: "Solve: 3x² + 2x - 1 = 0", a: "(3x - 1)(x + 1) = 0. Therefore x = 1/3 or -1." },
        { level: "Hard", q: "A rectangle has length x + 3 and width x. Its area is 40. Find x.", a: "x(x + 3) = 40. x² + 3x - 40 = 0. (x + 8)(x - 5) = 0. Since length must be positive, x = 5." }
    ],


    // 3. SIMULTANEOUS EQUATIONS
    simultaneous: [

        // EASY
        { level: "Easy", q: "Solve: x + y = 10 and x - y = 2.", a: "Add the equations: 2x = 12, so x = 6. Substitute: y = 4." },
        { level: "Easy", q: "Solve: x + y = 8 and x = 3.", a: "Substitute x = 3: 3 + y = 8. Therefore y = 5." },
        { level: "Easy", q: "Solve: 2x + y = 9 and y = 3.", a: "2x + 3 = 9. Therefore x = 3 and y = 3." },
        { level: "Easy", q: "Solve: x + 2y = 9 and x = 5.", a: "5 + 2y = 9. Therefore y = 2 and x = 5." },
        { level: "Easy", q: "Solve: 2x + 2y = 12 and x + y = 6.", a: "Both equations represent the same line. There are infinitely many solutions." },

        // MEDIUM
        { level: "Medium", q: "Solve: 2x + 3y = 13 and x + y = 5.", a: "From the second equation x = 5 - y. Substitute: 10 - 2y + 3y = 13. Thus y = 3 and x = 2." },
        { level: "Medium", q: "Solve: 3x + 2y = 16 and x - y = 2.", a: "From x - y = 2, x = y + 2. Substitute: 3y + 6 + 2y = 16. Thus y = 2 and x = 4." },
        { level: "Medium", q: "Solve: 2x - y = 4 and 3x + y = 11.", a: "Add: 5x = 15, so x = 3. Substitute: y = 2." },
        { level: "Medium", q: "Solve: 4x + y = 14 and 2x - y = 4.", a: "Add: 6x = 18, so x = 3. Then y = 2." },
        { level: "Medium", q: "Solve: 5x + 2y = 16 and x + y = 5.", a: "x = 5 - y. Substitute: 25 - 5y + 2y = 16. Thus y = 3 and x = 2." },

        // HARD
        { level: "Hard", q: "Solve: 2x + 3y = 12 and 4x - y = 5.", a: "From the second equation y = 4x - 5. Substitute: 2x + 12x - 15 = 12. Thus x = 27/14 and y = 19/7." },
        { level: "Hard", q: "Solve: 3x + 4y = 18 and 5x - 2y = 4.", a: "Multiply the second equation by 2: 10x - 4y = 8. Add: 13x = 26, so x = 2 and y = 3." },
        { level: "Hard", q: "Solve: x + y = 7 and xy = 12.", a: "Let the numbers be roots of t² - 7t + 12 = 0. Factor: (t - 3)(t - 4) = 0. The pair is (3,4) or (4,3)." },
        { level: "Hard", q: "Solve: y = x + 1 and x² + y² = 25.", a: "Substitute: x² + (x + 1)² = 25. Thus 2x² + 2x - 24 = 0. x = 3 or -4. Pairs: (3,4) and (-4,-3)." },
        { level: "Hard", q: "Solve: 2x + y = 8 and x² + y = 10.", a: "From the first equation y = 8 - 2x. Substitute: x² - 2x - 2 = 0. x = 1 ± √3. Use y = 8 - 2x." },
        { level: "Hard", q: "The sum of two numbers is 20 and their difference is 6. Find both numbers.", a: "x + y = 20 and x - y = 6. Add: 2x = 26, so x = 13 and y = 7." },
        { level: "Hard", q: "Two adult tickets and three child tickets cost R180. One adult and two child tickets cost R100. Find each ticket price.", a: "Let adult = a and child = c. 2a + 3c = 180; a + 2c = 100. Solve: c = 20 and a = 60." },
        { level: "Hard", q: "Solve: x + y = 6 and x² - y² = 12.", a: "Use x² - y² = (x - y)(x + y). Thus 6(x - y) = 12, so x - y = 2. Solve with x + y = 6: x = 4, y = 2." },
        { level: "Hard", q: "Solve: y = 2x - 1 and x² + y² = 25.", a: "Substitute: x² + (2x - 1)² = 25. Thus 5x² - 4x - 24 = 0. x = (2 ± 2√31)/5. Then y = 2x - 1." },
        { level: "Hard", q: "Solve: x + y = 5 and xy = 6.", a: "Let t be either number. t² - 5t + 6 = 0. (t - 2)(t - 3) = 0. The solutions are (2,3) or (3,2)." }
    ],


    // 4. TRIGONOMETRY
    trigonometry: [

        // EASY
        { level: "Easy", q: "Calculate sin 30°.", a: "sin 30° = 1/2." },
        { level: "Easy", q: "Calculate cos 60°.", a: "cos 60° = 1/2." },
        { level: "Easy", q: "Calculate tan 45°.", a: "tan 45° = 1." },
        { level: "Easy", q: "Simplify: sin²x + cos²x.", a: "Using the identity, sin²x + cos²x = 1." },
        { level: "Easy", q: "Calculate sin 90°.", a: "sin 90° = 1." },

        // MEDIUM
        { level: "Medium", q: "Solve sin x = 1/2 for 0° ≤ x ≤ 360°.", a: "Reference angle = 30°. Sine is positive in quadrants 1 and 2. x = 30° or 150°." },
        { level: "Medium", q: "Solve cos x = -1/2 for 0° ≤ x ≤ 360°.", a: "Reference angle = 60°. Cosine is negative in quadrants 2 and 3. x = 120° or 240°." },
        { level: "Medium", q: "Solve tan x = 1 for 0° ≤ x ≤ 360°.", a: "Reference angle = 45°. Tangent is positive in quadrants 1 and 3. x = 45° or 225°." },
        { level: "Medium", q: "Simplify: (1 - cos²x)/sin x, where sin x ≠ 0.", a: "Since 1 - cos²x = sin²x, the expression becomes sin x." },
        { level: "Medium", q: "If sin x = 3/5 and x is acute, find cos x.", a: "Using sin²x + cos²x = 1: cos x = 4/5 because x is acute." },

        // HARD
        { level: "Hard", q: "Solve 2sin x - 1 = 0 for 0° ≤ x ≤ 360°.", a: "sin x = 1/2. Therefore x = 30° or 150°." },
        { level: "Hard", q: "Solve 2cos²x - 1 = 0 for 0° ≤ x ≤ 360°.", a: "cos²x = 1/2. Thus cos x = ±√2/2. x = 45°, 135°, 225° or 315°." },
        { level: "Hard", q: "Solve sin 2x = 0 for 0° ≤ x ≤ 360°.", a: "2x = 0°, 180°, 360°, 540°, 720°. Therefore x = 0°, 90°, 180°, 270°, 360°." },
        { level: "Hard", q: "Prove: (1 - cos²x)/sin x = sin x, where sin x ≠ 0.", a: "Use 1 - cos²x = sin²x. Then sin²x/sin x = sin x." },
        { level: "Hard", q: "Solve 2sin²x - 1 = 0 for 0° ≤ x ≤ 360°.", a: "sin²x = 1/2. Thus sin x = ±√2/2. x = 45°, 135°, 225° or 315°." },
        { level: "Hard", q: "Solve cos 2x = 0 for 0° ≤ x ≤ 360°.", a: "2x = 90°, 270°, 450°, 630°. Therefore x = 45°, 135°, 225° or 315°." },
        { level: "Hard", q: "Simplify: (1 - cos x)(1 + cos x).", a: "Difference of two squares: 1 - cos²x = sin²x." },
        { level: "Hard", q: "Solve sin x = cos x for 0° ≤ x ≤ 360°.", a: "Divide by cos x: tan x = 1. Therefore x = 45° or 225°." },
        { level: "Hard", q: "If tan x = 3/4 and x is acute, find sin x and cos x.", a: "Opposite = 3, adjacent = 4, hypotenuse = 5. sin x = 3/5 and cos x = 4/5." },
        { level: "Hard", q: "Solve 2cos x + √3 = 0 for 0° ≤ x ≤ 360°.", a: "cos x = -√3/2. Reference angle = 30°. x = 150° or 210°." }
    ],


    // 5. PROBABILITY
    probability: [

        // EASY
        { level: "Easy", q: "A fair coin is tossed. Find P(heads).", a: "There is 1 head out of 2 outcomes. P(H) = 1/2." },
        { level: "Easy", q: "A die is rolled. Find P(rolling a 6).", a: "P(6) = 1/6." },
        { level: "Easy", q: "If P(A) = 0.4, find P(not A).", a: "P(not A) = 1 - 0.4 = 0.6." },
        { level: "Easy", q: "A bag contains 3 red and 2 blue balls. Find P(red).", a: "P(red) = 3/5." },
        { level: "Easy", q: "A die is rolled. Find P(even number).", a: "Even outcomes are 2, 4 and 6. P(even) = 3/6 = 1/2." },

        // MEDIUM
        { level: "Medium", q: "If P(A) = 0.5, P(B) = 0.4 and the events are mutually exclusive, find P(A or B).", a: "P(A ∪ B) = P(A) + P(B) = 0.9." },
        { level: "Medium", q: "If P(A) = 0.6, P(B) = 0.5 and P(A ∩ B) = 0.3, find P(A ∪ B).", a: "P(A ∪ B) = 0.6 + 0.5 - 0.3 = 0.8." },
        { level: "Medium", q: "Two independent events have probabilities 0.2 and 0.5. Find the probability that both happen.", a: "0.2 × 0.5 = 0.1." },
        { level: "Medium", q: "A card is selected from a standard deck. Find P(an ace).", a: "There are 4 aces in 52 cards. P(ace) = 4/52 = 1/13." },
        { level: "Medium", q: "If P(A) = 0.7 and P(B) = 0.4 and the events are independent, find P(A and B).", a: "0.7 × 0.4 = 0.28." },

        // HARD
        { level: "Hard", q: "If P(A) = 0.6 and P(B) = 0.5 and P(A ∪ B) = 0.8, find P(A ∩ B).", a: "P(A ∩ B) = 0.6 + 0.5 - 0.8 = 0.3." },
        { level: "Hard", q: "A bag contains 4 red and 6 blue balls. Two balls are selected without replacement. Find P(both red).", a: "P(both red) = 4/10 × 3/9 = 12/90 = 2/15." },
        { level: "Hard", q: "A bag contains 3 red and 5 blue balls. Two balls are selected with replacement. Find P(one red followed by one blue).", a: "P(R then B) = 3/8 × 5/8 = 15/64." },
        { level: "Hard", q: "Events A and B are independent. P(A) = 0.4 and P(A ∩ B) = 0.2. Find P(B).", a: "P(A ∩ B) = P(A)P(B). Thus 0.2 = 0.4P(B), so P(B) = 0.5." },
        { level: "Hard", q: "If P(A) = 0.7, find P(not A).", a: "P(not A) = 1 - 0.7 = 0.3." },
        { level: "Hard", q: "A class has 20 boys and 30 girls. One learner is selected. Find the probability that the learner is a girl.", a: "P(girl) = 30/50 = 3/5." },
        { level: "Hard", q: "If P(A) = 0.5, P(B) = 0.6 and P(A ∩ B) = 0.3, determine whether A and B are independent.", a: "P(A)P(B) = 0.5 × 0.6 = 0.3 = P(A ∩ B). Therefore they are independent." },
        { level: "Hard", q: "Two fair dice are rolled. Find the probability that the total is greater than 9.", a: "Totals 10, 11 and 12 have 3 + 2 + 1 = 6 outcomes. Probability = 6/36 = 1/6." },
        { level: "Hard", q: "If P(A) = 0.4, P(B) = 0.5 and the events are mutually exclusive, find P(A or B).", a: "P(A ∪ B) = 0.4 + 0.5 = 0.9." }
    ],

        // 6. ANALYTICAL GEOMETRY
    analyticalGeometry: [

        // EASY - 5 QUESTIONS
        { level: "Easy", q: "Find the gradient between (1, 2) and (3, 6).", a: "Gradient = (6 - 2) / (3 - 1) = 4 / 2 = 2." },
        { level: "Easy", q: "Find the midpoint of (2, 4) and (6, 8).", a: "Midpoint = ((2 + 6)/2, (4 + 8)/2) = (4, 6)." },
        { level: "Easy", q: "Find the distance between (0, 0) and (3, 4).", a: "Distance = √[(3 - 0)² + (4 - 0)²] = √25 = 5 units." },
        { level: "Easy", q: "What is the gradient of a horizontal line?", a: "The gradient of a horizontal line is 0." },
        { level: "Easy", q: "Find the gradient of a line passing through (2, 3) and (4, 7).", a: "Gradient = (7 - 3) / (4 - 2) = 4 / 2 = 2." },

        // MEDIUM - 5 QUESTIONS
        { level: "Medium", q: "Find the equation of a line with gradient 3 passing through (1, 4).", a: "Use y = mx + c. Substitute: 4 = 3(1) + c. Therefore c = 1. Equation: y = 3x + 1." },
        { level: "Medium", q: "Find the midpoint of A(-2, 5) and B(4, -1).", a: "Midpoint = ((-2 + 4)/2, (5 - 1)/2) = (1, 2)." },
        { level: "Medium", q: "Find the distance between (2, 1) and (5, 5).", a: "Distance = √[(5 - 2)² + (5 - 1)²] = √25 = 5 units." },
        { level: "Medium", q: "Find the gradient of a line perpendicular to a line with gradient 2.", a: "Perpendicular gradients are negative reciprocals. Therefore the gradient is -1/2." },
        { level: "Medium", q: "Find the equation of a line through (0, 3) with gradient -2.", a: "Since the line passes through the y-intercept, c = 3. Equation: y = -2x + 3." },

        // HARD - 10 QUESTIONS
        { level: "Hard", q: "Find the equation of the perpendicular bisector of the line joining A(2, 4) and B(6, 8).", a: "Midpoint = (4, 6). AB gradient = 1. Perpendicular gradient = -1. Equation: y - 6 = -1(x - 4). Therefore y = -x + 10." },
        { level: "Hard", q: "Find the equation of a circle with centre (2, -3) and radius 5.", a: "Use (x - a)² + (y - b)² = r². Equation: (x - 2)² + (y + 3)² = 25." },
        { level: "Hard", q: "Find the radius of the circle x² + y² - 6x + 4y - 12 = 0.", a: "Complete the square: (x - 3)² + (y + 2)² = 25. Therefore the radius is 5." },
        { level: "Hard", q: "Find where y = 2x + 1 intersects y = -x + 7.", a: "2x + 1 = -x + 7. Therefore 3x = 6 and x = 2. Substitute to get y = 5. Point: (2, 5)." },
        { level: "Hard", q: "A line passes through (3, 2) and is parallel to y = 4x - 1. Find its equation.", a: "Parallel lines have equal gradients. y = 4x + c. Substitute (3, 2): 2 = 12 + c. Therefore c = -10. Equation: y = 4x - 10." },
        { level: "Hard", q: "Find the distance between the parallel lines y = 3x + 2 and y = 3x - 4.", a: "Write them as 3x - y + 2 = 0 and 3x - y - 4 = 0. Distance = |2 - (-4)| / √(3² + (-1)²) = 6/√10 units." },
        { level: "Hard", q: "Find the equation of the line passing through (2, 5) and perpendicular to y = 2x + 3.", a: "The perpendicular gradient is -1/2. Use y - 5 = -1/2(x - 2). Therefore y = -1/2x + 6." },
        { level: "Hard", q: "Find the centre and radius of x² + y² + 8x - 10y + 16 = 0.", a: "Complete the square: (x + 4)² + (y - 5)² = 25. Centre = (-4, 5), radius = 5." },
        { level: "Hard", q: "Find the equation of a circle whose diameter has endpoints (0, 0) and (6, 8).", a: "Centre = (3, 4). Radius = 5. Equation: (x - 3)² + (y - 4)² = 25." },
        { level: "Hard", q: "Find the gradient of the tangent to the circle x² + y² = 25 at (3, 4).", a: "Radius gradient = 4/3. The tangent is perpendicular to the radius, so its gradient = -3/4." }
    ],


    // 7. EUCLIDEAN GEOMETRY
    euclideanGeometry: [

        // EASY - 5 QUESTIONS
        { level: "Easy", q: "What is the sum of the interior angles of a triangle?", a: "The sum of the interior angles of a triangle is 180°." },
        { level: "Easy", q: "What is the angle in a semicircle?", a: "The angle in a semicircle is 90°." },
        { level: "Easy", q: "What is the sum of opposite angles in a cyclic quadrilateral?", a: "Opposite angles in a cyclic quadrilateral add up to 180°." },
        { level: "Easy", q: "What is the angle between a tangent and the radius at the point of contact?", a: "The angle is 90°. A tangent is perpendicular to the radius." },
        { level: "Easy", q: "If an angle at the centre of a circle is 100°, find the angle at the circumference subtended by the same arc.", a: "Angle at circumference = 100° ÷ 2 = 50°." },

        // MEDIUM - 5 QUESTIONS
        { level: "Medium", q: "A cyclic quadrilateral has one angle of 75°. Find its opposite angle.", a: "Opposite angles add up to 180°. Therefore 180° - 75° = 105°." },
        { level: "Medium", q: "Two angles in a triangle are 45° and 65°. Find the third angle.", a: "180° - 45° - 65° = 70°." },
        { level: "Medium", q: "An angle at the centre is 120°. Find the angle at the circumference subtended by the same arc.", a: "Angle at circumference = 120° ÷ 2 = 60°." },
        { level: "Medium", q: "A tangent and chord form an angle of 40°. What is the angle in the alternate segment?", a: "The angle in the alternate segment is 40°." },
        { level: "Medium", q: "Two tangents are drawn from the same external point to a circle. One tangent is 8 cm. Find the other.", a: "Tangents from the same external point are equal. Therefore the other tangent is 8 cm." },

        // HARD - 10 QUESTIONS
        { level: "Hard", q: "A cyclic quadrilateral has opposite angles (2x + 10)° and (3x - 5)°. Find x.", a: "2x + 10 + 3x - 5 = 180. Therefore 5x + 5 = 180, 5x = 175 and x = 35." },
        { level: "Hard", q: "A tangent touches a circle at T. The radius OT is drawn. Explain why angle OTP is 90°.", a: "A tangent is perpendicular to the radius at the point of contact. Therefore angle OTP = 90°." },
        { level: "Hard", q: "An angle at the circumference is 35°. Find the angle at the centre subtended by the same arc.", a: "Angle at the centre = 2 × 35° = 70°." },
        { level: "Hard", q: "In a cyclic quadrilateral ABCD, angle A = 3x and angle C = 2x. Find x.", a: "3x + 2x = 180°. Therefore 5x = 180° and x = 36°." },
        { level: "Hard", q: "A tangent-chord angle is 62°. Find the angle in the alternate segment.", a: "The angle in the alternate segment is equal to the tangent-chord angle. Answer = 62°." },
        { level: "Hard", q: "Two chords intersect inside a circle. One angle formed is 110°. Find the adjacent angle.", a: "Adjacent angles on a straight line add up to 180°. Therefore 180° - 110° = 70°." },
        { level: "Hard", q: "In a cyclic quadrilateral, angle B = (4x - 10)° and angle D = (2x + 10)°. Find x.", a: "4x - 10 + 2x + 10 = 180. Therefore 6x = 180 and x = 30." },
        { level: "Hard", q: "An angle at the circumference subtends an arc of 140°. Find the angle at the centre subtended by the same arc.", a: "Angle at the centre = 2 × 140° = 280°." },
        { level: "Hard", q: "Two tangents from point P touch a circle at A and B. If PA = 3x + 2 and PB = 5x - 6, find x.", a: "Tangents from the same external point are equal. 3x + 2 = 5x - 6. Therefore 8 = 2x and x = 4." },
        { level: "Hard", q: "A cyclic quadrilateral has opposite angles (x + 20)° and (2x + 10)°. Find both angles.", a: "x + 20 + 2x + 10 = 180. Therefore 3x = 150 and x = 50. The angles are 70° and 110°." }
    ],


    // 8. CALCULUS
    calculus: [

        // EASY - 5 QUESTIONS
        { level: "Easy", q: "Differentiate f(x) = x².", a: "Using the power rule, f′(x) = 2x." },
        { level: "Easy", q: "Differentiate f(x) = 3x.", a: "The derivative of ax is a. Therefore f′(x) = 3." },
        { level: "Easy", q: "Differentiate f(x) = x³.", a: "Using the power rule, f′(x) = 3x²." },
        { level: "Easy", q: "Differentiate f(x) = 5x².", a: "f′(x) = 5(2x) = 10x." },
        { level: "Easy", q: "Differentiate f(x) = 7.", a: "The derivative of a constant is 0. Therefore f′(x) = 0." },

        // MEDIUM - 5 QUESTIONS
        { level: "Medium", q: "Differentiate f(x) = 2x³ + 4x².", a: "Differentiate each term: f′(x) = 6x² + 8x." },
        { level: "Medium", q: "Differentiate f(x) = 4x⁴ - 3x² + 5.", a: "f′(x) = 16x³ - 6x. The constant 5 differentiates to 0." },
        { level: "Medium", q: "Find the gradient of f(x) = x² + 3x at x = 2.", a: "f′(x) = 2x + 3. At x = 2: 2(2) + 3 = 7." },
        { level: "Medium", q: "Find the stationary point of f(x) = x² - 4x + 3.", a: "f′(x) = 2x - 4. Set it equal to 0: x = 2. f(2) = -1. Stationary point: (2, -1)." },
        { level: "Medium", q: "Find the equation of the tangent to f(x) = x² at x = 2.", a: "f′(x) = 2x, so the gradient is 4. The point is (2, 4). Using y - 4 = 4(x - 2): y = 4x - 4." },

        // HARD - 10 QUESTIONS
        { level: "Hard", q: "Differentiate f(x) = 3x⁴ - 5x³ + 2x - 7.", a: "f′(x) = 12x³ - 15x² + 2." },
        { level: "Hard", q: "Find the stationary points of f(x) = x³ - 3x² - 9x + 5.", a: "f′(x) = 3x² - 6x - 9 = 3(x - 3)(x + 1). Thus x = -1 or 3. f(-1) = 10 and f(3) = -22. Points: (-1, 10) and (3, -22)." },
        { level: "Hard", q: "Find the equation of the tangent to f(x) = x² + 2x at x = 1.", a: "f′(x) = 2x + 2. At x = 1, gradient = 4 and f(1) = 3. Thus y - 3 = 4(x - 1), so y = 4x - 1." },
        { level: "Hard", q: "Determine whether the stationary point of f(x) = x² - 6x + 8 is a maximum or minimum.", a: "f′(x) = 2x - 6 = 0 gives x = 3. f(3) = -1. Since the coefficient of x² is positive, the graph opens upward, so (3, -1) is a minimum." },
        { level: "Hard", q: "A rectangle has perimeter 40 units. If its width is x, write its area A in terms of x.", a: "2l + 2x = 40, so l = 20 - x. Therefore A = x(20 - x) = 20x - x²." },
        { level: "Hard", q: "Find the maximum area of a rectangle with perimeter 40 units.", a: "A = 20x - x². A′ = 20 - 2x = 0 gives x = 10. Then A = 20(10) - 10² = 100 square units." },
        { level: "Hard", q: "Find the stationary points of f(x) = 2x³ - 9x² + 12x.", a: "f′(x) = 6x² - 18x + 12 = 6(x - 1)(x - 2). Thus x = 1 or 2. f(1) = 5 and f(2) = 4. Points: (1, 5) and (2, 4)." },
        { level: "Hard", q: "Find the gradient of f(x) = x³ - 4x at x = -2.", a: "f′(x) = 3x² - 4. At x = -2: 3(4) - 4 = 8." },
        { level: "Hard", q: "Find the x-intercepts of f(x) = x² - 5x + 6.", a: "Set f(x) = 0: (x - 2)(x - 3) = 0. Therefore x = 2 or x = 3. Intercepts: (2, 0) and (3, 0)." },
        { level: "Hard", q: "Find the minimum value of f(x) = 2x² - 8x + 11.", a: "f′(x) = 4x - 8 = 0 gives x = 2. f(2) = 8 - 16 + 11 = 3. The minimum value is 3." }
    ],
};

// CREATE PRACTICE QUESTIONS
function createPractice(topic, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
        console.warn("Practice container not found:", containerId);
        return;
    }

    const questions = practiceData[topic];

    if (!Array.isArray(questions) || questions.length === 0) {
        console.warn("No questions found for:", topic);
        return;
    }

    if (container.dataset.loaded === "true") return;

    container.dataset.loaded = "true";

    const heading = document.createElement("h4");
    heading.textContent = "Practice: 20 Questions";
    container.appendChild(heading);

    const intro = document.createElement("p");
    intro.className = "practice-intro";
    intro.textContent =
        "Try each question yourself before revealing the answer. Questions become more challenging as you progress.";
    container.appendChild(intro);

    const levels = ["Easy", "Medium", "Hard"];

    levels.forEach(level => {
        const groupTitle = document.createElement("h5");
        groupTitle.className = "practice-group-title";

        if (level === "Easy") {
            groupTitle.textContent = "Level 1: Easy (Questions 1–5)";
        } else if (level === "Medium") {
            groupTitle.textContent = "Level 2: Medium (Questions 6–10)";
        } else {
            groupTitle.textContent = "Level 3: Hard (Questions 11–20)";
        }

        container.appendChild(groupTitle);

        questions.forEach((item, index) => {
            if (item.level !== level) return;

            const card = document.createElement("div");
            card.className = "practice-question";

            const number = document.createElement("h5");
            number.textContent = "Question " + (index + 1);

            const tag = document.createElement("span");
            tag.className = "question-tag " + level.toLowerCase() + "-tag";
            tag.textContent = level.toUpperCase();

            const question = document.createElement("p");
            question.textContent = item.q;

            const button = document.createElement("button");
            button.className = "answer-button";
            button.textContent = "Show Answer";

            const answer = document.createElement("div");
            answer.className = "answer-box";
            answer.textContent = item.a;
            answer.hidden = true;

            button.addEventListener("click", function () {
                answer.hidden = !answer.hidden;
                button.textContent = answer.hidden
                    ? "Show Answer"
                    : "Hide Answer";
            });

            card.appendChild(number);
            card.appendChild(tag);
            card.appendChild(question);
            card.appendChild(button);
            card.appendChild(answer);

            container.appendChild(card);
        });
    });
}


// LOAD ALL EIGHT TOPICS
function loadAllPracticeQuestions() {
    createPractice("exponents", "exponentsPractice");
    createPractice("equations", "equationsPractice");
    createPractice("simultaneous", "simultaneousPractice");
    createPractice("trigonometry", "trigonometryPractice");
    createPractice("probability", "probabilityPractice");
    createPractice("analyticalGeometry", "analyticalGeometryPractice");
    createPractice("euclideanGeometry", "euclideanGeometryPractice");
    createPractice("calculus", "calculusPractice");

    console.log("Grade 12 Mathematics loaded successfully!");
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", loadAllPracticeQuestions);
} else {
    loadAllPracticeQuestions();
}
