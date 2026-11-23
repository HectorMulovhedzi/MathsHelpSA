
/* =====================================================
   MATHSHELPSA - GRADE 12
   TOPIC: DIFFERENTIAL CALCULUS
===================================================== */


/* =====================================================
   1. OPEN AND CLOSE UNITS
===================================================== */

function toggleSection(sectionId, button) {

    const section = document.getElementById(sectionId);
    const icon = button.querySelector(".toggle-icon");

    if (!section) return;

    section.hidden = !section.hidden;

    if (icon) {
        icon.textContent = section.hidden ? "+" : "−";
    }
}


/* =====================================================
   2. UNIT NOTES
===================================================== */

const unitNotes = {

    unit1: `
    <div class="unit-notes">

        <h4>1. What is a Limit?</h4>

        <p>
            A limit describes the value that a function approaches
            as x approaches a particular number.
        </p>

        <div class="formula-box">
            lim f(x) = L
            <br>
            x → a
        </div>

        <p>
            This means that as x gets closer to a, the value of
            f(x) gets closer to L.
        </p>

        <h4>2. Evaluating Limits by Direct Substitution</h4>

        <p>
            If a function is continuous at the given value,
            we can substitute that value directly into the function.
        </p>

        <p>Example:</p>

        <div class="formula-box">
            lim (x² + 3x + 2)
            <br>
            x → 2
        </div>

        <p>Substitute x = 2:</p>

        <div class="formula-box">
            = 2² + 3(2) + 2
            <br><br>
            = 4 + 6 + 2
            <br><br>
            = 12
        </div>

        <h4>3. Limits That Give 0/0</h4>

        <p>
            Sometimes direct substitution gives an expression
            of the form 0/0. This is called an indeterminate form.
        </p>

        <p>
            We may need to factorise and simplify before
            substituting again.
        </p>

        <p>Example:</p>

        <div class="formula-box">
            lim (x² - 4)/(x - 2)
            <br>
            x → 2
        </div>

        <p>Step 1: Factorise the numerator.</p>

        <div class="formula-box">
            x² - 4 = (x - 2)(x + 2)
        </div>

        <p>Step 2: Simplify.</p>

        <div class="formula-box">
            (x - 2)(x + 2)/(x - 2)
            <br><br>
            = x + 2
        </div>

        <p>Step 3: Substitute x = 2.</p>

        <div class="formula-box">
            = 2 + 2 = 4
        </div>

        <div class="factor-box">
            <strong>The limit is 4.</strong>
        </div>

        <h4>4. Left-Hand and Right-Hand Limits</h4>

        <p>
            A left-hand limit describes the value approached
            from values smaller than a.
        </p>

        <p>
            A right-hand limit describes the value approached
            from values greater than a.
        </p>

        <div class="formula-box">
            Left: lim f(x), x → a⁻
            <br><br>
            Right: lim f(x), x → a⁺
        </div>

        <p>
            A two-sided limit exists when both one-sided limits
            exist and are equal.
        </p>

        <h4>5. Important Rules</h4>

        <ul>
            <li>Try direct substitution first.</li>
            <li>If you get 0/0, factorise or simplify.</li>
            <li>Cancel common factors only where the algebra allows it.</li>
            <li>Check whether the left and right limits agree.</li>
        </ul>

    </div>
    `,


    unit2: `
    <div class="unit-notes">

        <h4>1. What is a Derivative?</h4>

        <p>
            A derivative measures the instantaneous rate of change
            of a function. It also represents the gradient of a
            tangent to the graph at a particular point.
        </p>

        <h4>2. Defining the Derivative Using Limits</h4>

        <div class="formula-box">
            f'(x) = lim [f(x + h) - f(x)] / h
            <br>
            h → 0
        </div>

        <p>
            This is called the limit definition of the derivative.
        </p>

        <p>Where:</p>

        <ul>
            <li>f(x) is the original function.</li>
            <li>h is a small change in x.</li>
            <li>f(x + h) is the function after x changes by h.</li>
            <li>f'(x) is the derivative.</li>
        </ul>

        <h4>3. Alternative Notation</h4>

        <div class="formula-box">
            f'(x) = y' = dy/dx
        </div>

        <p>
            These symbols all represent the derivative of a function.
        </p>

        <h4>4. Understanding the Formula</h4>

        <p>Consider:</p>

        <div class="formula-box">
            f(x) = x²
        </div>

        <p>First calculate:</p>

        <div class="formula-box">
            f(x + h) = (x + h)²
            <br><br>
            = x² + 2xh + h²
        </div>

        <p>Substitute into the definition:</p>

        <div class="formula-box">
            f'(x) = lim [(x² + 2xh + h²) - x²]/h
            <br>
            h → 0
        </div>

        <p>Simplify:</p>

        <div class="formula-box">
            = lim (2xh + h²)/h
            <br>
            h → 0
            <br><br>
            = lim (2x + h)
            <br>
            h → 0
            <br><br>
            = 2x
        </div>

        <div class="factor-box">
            <strong>Therefore f'(x) = 2x.</strong>
        </div>

    </div>
    `,


    unit3: `
    <div class="unit-notes">

        <h4>1. Differentiation from First Principles</h4>

        <p>
            First principles means finding the derivative directly
            from the limit definition instead of using shortcut rules.
        </p>

        <div class="formula-box">
            f'(x) = lim [f(x + h) - f(x)] / h
            <br>
            h → 0
        </div>

        <h4>2. Steps to Follow</h4>

        <ol>
            <li>Write down f(x).</li>
            <li>Calculate f(x + h).</li>
            <li>Substitute into the first-principles formula.</li>
            <li>Expand the brackets.</li>
            <li>Simplify and factorise where necessary.</li>
            <li>Cancel h.</li>
            <li>Let h approach zero.</li>
        </ol>

        <h4>3. Example: Differentiate x²</h4>

        <div class="formula-box">
            f(x) = x²
        </div>

        <p>Step 1:</p>

        <div class="formula-box">
            f(x + h) = (x + h)²
            <br>
            = x² + 2xh + h²
        </div>

        <p>Step 2: Substitute.</p>

        <div class="formula-box">
            f'(x) = lim [(x² + 2xh + h²) - x²]/h
            <br>
            h → 0
        </div>

        <p>Step 3: Simplify.</p>

        <div class="formula-box">
            = lim (2xh + h²)/h
            <br>
            h → 0
            <br><br>
            = lim (2x + h)
            <br>
            h → 0
        </div>

        <p>Step 4: Let h approach zero.</p>

        <div class="factor-box">
            <strong>f'(x) = 2x</strong>
        </div>

        <h4>4. Important Reminder</h4>

        <p>
            Do not substitute h = 0 before simplifying.
            The fraction initially has h in the denominator.
            Simplify first, then evaluate the limit.
        </p>

    </div>
    `,


    unit4: `
    <div class="unit-notes">

        <h4>1. The Power Rule</h4>

        <p>
            The power rule is one of the most important
            differentiation rules.
        </p>

        <div class="formula-box">
            If y = xⁿ, then
            <br><br>
            dy/dx = nxⁿ⁻¹
        </div>

        <p>Example:</p>

        <div class="formula-box">
            y = x⁵
            <br><br>
            y' = 5x⁴
        </div>

        <h4>2. Constant Rule</h4>

        <p>
            The derivative of a constant is zero.
        </p>

        <div class="formula-box">
            If y = 8, then y' = 0
        </div>

        <h4>3. Constant Multiple Rule</h4>

        <p>
            Keep the constant and differentiate the variable part.
        </p>

        <div class="formula-box">
            y = 4x³
            <br><br>
            y' = 12x²
        </div>

        <h4>4. Sum and Difference Rules</h4>

        <p>
            Differentiate each term separately.
        </p>

        <div class="formula-box">
            y = 3x⁴ + 2x² - 5x + 7
            <br><br>
            y' = 12x³ + 4x - 5
        </div>

        <h4>5. Negative and Fractional Powers</h4>

        <p>
            Rewrite roots and fractions using powers before
            applying the power rule.
        </p>

        <div class="formula-box">
            √x = x¹ᐟ²
            <br><br>
            1/x² = x⁻²
        </div>

        <p>Examples:</p>

        <div class="formula-box">
            y = √x
            <br>
            y' = 1/(2√x)
        </div>

        <div class="formula-box">
            y = 1/x²
            <br>
            y' = -2/x³
        </div>

        <h4>6. Important Tips</h4>

        <ul>
            <li>Multiply by the original exponent.</li>
            <li>Subtract one from the exponent.</li>
            <li>The derivative of a constant is zero.</li>
            <li>Differentiate every term.</li>
            <li>Keep negative signs and coefficients correct.</li>
        </ul>

    </div>
    `,


    unit5: `
    <div class="unit-notes">

        <h4>1. What is a Tangent?</h4>

        <p>
            A tangent is a straight line that touches a curve
            at a particular point. Its gradient is equal to
            the derivative of the function at that point.
        </p>

        <h4>2. Equation of a Straight Line</h4>

        <div class="formula-box">
            y - y₁ = m(x - x₁)
        </div>

        <p>Where:</p>

        <ul>
            <li>m is the gradient.</li>
            <li>(x₁, y₁) is the point of contact.</li>
        </ul>

        <h4>3. Finding the Gradient of a Tangent</h4>

        <p>
            Differentiate the function, then substitute the
            x-coordinate of the point into the derivative.
        </p>

        <div class="formula-box">
            m = f'(a)
        </div>

        <h4>4. Worked Explanation</h4>

        <p>Find the tangent to:</p>

        <div class="formula-box">
            f(x) = x² + 1
        </div>

        <p>at x = 2.</p>

        <p>Step 1: Differentiate.</p>

        <div class="formula-box">
            f'(x) = 2x
        </div>

        <p>Step 2: Find the gradient.</p>

        <div class="formula-box">
            m = f'(2) = 4
        </div>

        <p>Step 3: Find the y-coordinate.</p>

        <div class="formula-box">
            f(2) = 2² + 1 = 5
        </div>

        <p>The point is (2, 5).</p>

        <p>Step 4: Use the straight-line equation.</p>

        <div class="formula-box">
            y - 5 = 4(x - 2)
            <br><br>
            y - 5 = 4x - 8
            <br><br>
            y = 4x - 3
        </div>

        <div class="factor-box">
            <strong>The tangent is y = 4x - 3.</strong>
        </div>

        <h4>5. Important Steps</h4>

        <ol>
            <li>Differentiate the function.</li>
            <li>Substitute the given x-value into the derivative.</li>
            <li>Find the corresponding y-value using the original function.</li>
            <li>Use y - y₁ = m(x - x₁).</li>
            <li>Simplify the equation.</li>
        </ol>

    </div>
    `,


    unit6: `
    <div class="unit-notes">

        <h4>1. What is the Second Derivative?</h4>

        <p>
            The second derivative is found by differentiating
            the first derivative again.
        </p>

        <div class="formula-box">
            First derivative: f'(x)
            <br><br>
            Second derivative: f''(x)
        </div>

        <h4>2. Example</h4>

        <div class="formula-box">
            f(x) = x³ - 3x² + 2x
        </div>

        <p>First differentiate:</p>

        <div class="formula-box">
            f'(x) = 3x² - 6x + 2
        </div>

        <p>Differentiate again:</p>

        <div class="formula-box">
            f''(x) = 6x - 6
        </div>

        <h4>3. Stationary Points</h4>

        <p>
            A stationary point occurs where the gradient of
            the curve is zero.
        </p>

        <div class="formula-box">
            f'(x) = 0
        </div>

        <p>
            The second derivative can help us classify a
            stationary point.
        </p>

        <h4>4. Second Derivative Test</h4>

        <div class="remainder-box">
            <strong>If f''(x) is positive:</strong>
            <p>The stationary point is a local minimum.</p>
        </div>

        <div class="factor-box">
            <strong>If f''(x) is negative:</strong>
            <p>The stationary point is a local maximum.</p>
        </div>

        <p>
            If f''(x) = 0, the test is inconclusive.
            Further investigation is needed.
        </p>

        <h4>5. Example: Classifying a Stationary Point</h4>

        <div class="formula-box">
            f(x) = x² - 4x + 3
        </div>

        <p>First derivative:</p>

        <div class="formula-box">
            f'(x) = 2x - 4
        </div>

        <p>Set the derivative equal to zero:</p>

        <div class="formula-box">
            2x - 4 = 0
            <br>
            x = 2
        </div>

        <p>Second derivative:</p>

        <div class="formula-box">
            f''(x) = 2
        </div>

        <p>Since 2 is positive, the stationary point is a minimum.</p>

        <p>Find its y-coordinate:</p>

        <div class="formula-box">
            f(2) = 4 - 8 + 3 = -1
        </div>

        <div class="factor-box">
            <strong>Minimum point: (2, -1).</strong>
        </div>

    </div>
    `,


    unit7: `
    <div class="unit-notes">

        <h4>1. What is a Cubic Graph?</h4>

        <p>
            A cubic function is a polynomial function whose
            highest power is three.
        </p>

        <div class="formula-box">
            f(x) = ax³ + bx² + cx + d
        </div>

        <p>
            Its graph may have two turning points, one
            stationary point of inflection, or no stationary points.
        </p>

        <h4>2. Finding the y-intercept</h4>

        <p>
            Substitute x = 0 into the original function.
        </p>

        <div class="formula-box">
            y-intercept = f(0)
        </div>

        <h4>3. Finding the x-intercepts</h4>

        <p>
            Set the original function equal to zero and solve.
        </p>

        <div class="formula-box">
            f(x) = 0
        </div>

        <h4>4. Finding Turning Points</h4>

        <p>
            Differentiate the function and solve:
        </p>

        <div class="formula-box">
            f'(x) = 0
        </div>

        <p>
            Substitute the resulting x-values into the original
            function to find the turning points.
        </p>

        <h4>5. Concavity</h4>

        <p>
            The second derivative helps us understand the shape
            of the graph.
        </p>

        <ul>
            <li>f''(x) greater than zero: concave upwards.</li>
            <li>f''(x) less than zero: concave downwards.</li>
        </ul>

        <h4>6. Point of Inflection</h4>

        <p>
            A point of inflection is where the concavity changes.
            For a cubic graph, investigate where:
        </p>

        <div class="formula-box">
            f''(x) = 0
        </div>

        <p>
            Confirm that the concavity changes on either side.
        </p>

        <h4>7. End Behaviour</h4>

        <p>
            The leading coefficient determines the direction
            of the ends of the cubic graph.
        </p>

        <div class="formula-box">
            a greater than 0:
            <br>
            Left end down, right end up.
            <br><br>
            a less than 0:
            <br>
            Left end up, right end down.
        </div>

        <h4>8. Steps for Sketching a Cubic Graph</h4>

        <ol>
            <li>Find the y-intercept.</li>
            <li>Find the x-intercepts.</li>
            <li>Calculate the first derivative.</li>
            <li>Find the stationary points.</li>
            <li>Use the second derivative to classify them.</li>
            <li>Find the point of inflection if needed.</li>
            <li>Determine the end behaviour.</li>
            <li>Draw a smooth curve through the important points.</li>
        </ol>

    </div>
    `,


    unit8: `
    <div class="unit-notes">

        <h4>1. What is Optimisation?</h4>

        <p>
            Optimisation involves finding the maximum or minimum
            value of a quantity.
        </p>

        <p>Examples include:</p>

        <ul>
            <li>Finding the maximum area of a shape.</li>
            <li>Finding the minimum cost of production.</li>
            <li>Finding the maximum profit.</li>
            <li>Finding the shortest distance.</li>
        </ul>

        <h4>2. Steps for Solving Optimisation Problems</h4>

        <ol>
            <li>Identify the quantity that must be maximised or minimised.</li>
            <li>Write an equation for that quantity.</li>
            <li>Express it in terms of one variable.</li>
            <li>Differentiate the equation.</li>
            <li>Set the first derivative equal to zero.</li>
            <li>Use the second derivative to classify the stationary point.</li>
            <li>Answer the original question with correct units.</li>
        </ol>

        <h4>3. Example: Maximum Area</h4>

        <p>
            A rectangle has a fixed perimeter of 20 units.
            Find its maximum possible area.
        </p>

        <p>Let the length be x and width be y.</p>

        <div class="formula-box">
            2x + 2y = 20
            <br><br>
            y = 10 - x
        </div>

        <p>Area:</p>

        <div class="formula-box">
            A = xy
            <br><br>
            A = x(10 - x)
            <br><br>
            A = 10x - x²
        </div>

        <p>Differentiate:</p>

        <div class="formula-box">
            A' = 10 - 2x
        </div>

        <p>Set the derivative equal to zero:</p>

        <div class="formula-box">
            10 - 2x = 0
            <br>
            x = 5
        </div>

        <p>Then:</p>

        <div class="formula-box">
            y = 10 - 5 = 5
        </div>

        <p>Second derivative:</p>

        <div class="formula-box">
            A'' = -2
        </div>

        <p>
            Since the second derivative is negative,
            the area is a maximum.
        </p>

        <div class="factor-box">
            <strong>
                Maximum area = 5 × 5 = 25 square units.
            </strong>
        </div>

        <h4>4. Rate of Change</h4>

        <p>
            The derivative measures how quickly one quantity
            changes with respect to another.
        </p>

        <div class="formula-box">
            Rate of change = dy/dx
        </div>

        <p>
            For example, if distance is measured in metres
            and time in seconds, then:
        </p>

        <div class="formula-box">
            Velocity = ds/dt
        </div>

        <p>
            The second derivative of distance with respect
            to time represents acceleration:
        </p>

        <div class="formula-box">
            Acceleration = d²s/dt²
        </div>

        <h4>5. Example: Rate of Change</h4>

        <p>Given:</p>

        <div class="formula-box">
            s(t) = t² + 3t
        </div>

        <p>Find the velocity function.</p>

        <p>Differentiate with respect to time:</p>

        <div class="formula-box">
            v(t) = 2t + 3
        </div>

        <p>At t = 4:</p>

        <div class="formula-box">
            v(4) = 2(4) + 3
            <br><br>
            = 11 m/s
        </div>

        <h4>6. Important Reminder</h4>

        <ul>
            <li>Always identify what must be maximised or minimised.</li>
            <li>Use the correct equation for the situation.</li>
            <li>Check whether the stationary point is a maximum or minimum.</li>
            <li>Include units in your final answer.</li>
        </ul>

    </div>
    `

};


/* =====================================================
   3. DISPLAY ALL UNIT NOTES
===================================================== */

for (let i = 1; i <= 8; i++) {

    const notesContainer = document.getElementById("unit" + i + "Notes");

    if (notesContainer) {
        notesContainer.innerHTML = unitNotes["unit" + i];
    }

}


/* =====================================================
   4. WORKED EXAMPLES
===================================================== */

const workedExamples = {

    unit1: [

        {
            title: "Example 1: Direct Substitution",

            question: "Evaluate lim (x² + 4x + 1), as x approaches 2.",

            steps: [
                "Step 1: Substitute x = 2.",
                "= 2² + 4(2) + 1",
                "Step 2: Calculate.",
                "= 4 + 8 + 1",
                "= 13"
            ],

            answer: "13"
        },

        {
            title: "Example 2: Factorising Before Substitution",

            question: "Evaluate lim (x² - 9)/(x - 3), as x approaches 3.",

            steps: [
                "Step 1: Direct substitution gives 0/0.",
                "Step 2: Factorise the numerator.",
                "x² - 9 = (x - 3)(x + 3)",
                "Step 3: Cancel the common factor.",
                "= x + 3",
                "Step 4: Substitute x = 3.",
                "= 3 + 3 = 6"
            ],

            answer: "6"
        },

        {
            title: "Example 3: Simplifying a Limit",

            question: "Evaluate lim (x² - 4)/(x + 2), as x approaches -2.",

            steps: [
                "Step 1: Factorise the numerator.",
                "x² - 4 = (x - 2)(x + 2)",
                "Step 2: Cancel the common factor.",
                "= x - 2",
                "Step 3: Substitute x = -2.",
                "= -2 - 2",
                "= -4"
            ],

            answer: "-4"
        }

    ],


    unit2: [

        {
            title: "Example 1: Understanding the Derivative Definition",

            question: "Write the limit definition of f'(x).",

            steps: [
                "Step 1: Start with the change in the function.",
                "f(x + h) - f(x)",
                "Step 2: Divide by the change in x.",
                "[f(x + h) - f(x)] / h",
                "Step 3: Let h approach zero."
            ],

            answer: "f'(x) = lim [f(x+h)-f(x)]/h as h approaches 0."
        },

        {
            title: "Example 2: Derivative of x² Using the Definition",

            question: "Use the limit definition to find the derivative of f(x) = x².",

            steps: [
                "Step 1: Calculate f(x + h).",
                "f(x + h) = (x + h)²",
                "= x² + 2xh + h²",
                "Step 2: Substitute into the formula.",
                "f'(x) = lim [(x² + 2xh + h²) - x²]/h",
                "Step 3: Simplify.",
                "= lim (2xh + h²)/h",
                "= lim (2x + h)",
                "Step 4: Let h approach zero.",
                "f'(x) = 2x"
            ],

            answer: "2x"
        },

        {
            title: "Example 3: Gradient at a Point",

            question: "For f(x) = x², find the gradient at x = 3.",

            steps: [
                "Step 1: The derivative is f'(x) = 2x.",
                "Step 2: Substitute x = 3.",
                "f'(3) = 2(3)",
                "= 6"
            ],

            answer: "6"
        }

    ],


    unit3: [

        {
            title: "Example 1: Differentiate x² from First Principles",

            question: "Find the derivative of f(x) = x² using first principles.",

            steps: [
                "Step 1: f(x + h) = (x + h)².",
                "= x² + 2xh + h²",
                "Step 2: Substitute.",
                "f'(x) = lim [(x + h)² - x²]/h",
                "Step 3: Expand and simplify.",
                "= lim (2xh + h²)/h",
                "= lim (2x + h)",
                "Step 4: Let h approach zero.",
                "f'(x) = 2x"
            ],

            answer: "2x"
        },

        {
            title: "Example 2: Differentiate 3x²",

            question: "Use first principles to differentiate f(x) = 3x².",

            steps: [
                "Step 1: Calculate f(x + h).",
                "f(x + h) = 3(x + h)²",
                "= 3x² + 6xh + 3h²",
                "Step 2: Substitute into the definition.",
                "f'(x) = lim [3x² + 6xh + 3h² - 3x²]/h",
                "Step 3: Simplify.",
                "= lim (6xh + 3h²)/h",
                "= lim (6x + 3h)",
                "Step 4: Let h approach zero.",
                "f'(x) = 6x"
            ],

            answer: "6x"
        },

        {
            title: "Example 3: Differentiate x² + 2x",

            question: "Use first principles to differentiate f(x) = x² + 2x.",

            steps: [
                "Step 1: Calculate f(x + h).",
                "(x + h)² + 2(x + h)",
                "= x² + 2xh + h² + 2x + 2h",
                "Step 2: Subtract f(x) = x² + 2x.",
                "The numerator becomes 2xh + h² + 2h.",
                "Step 3: Divide by h.",
                "= 2x + h + 2",
                "Step 4: Let h approach zero.",
                "f'(x) = 2x + 2"
            ],

            answer: "2x + 2"
        }

    ],


    unit4: [

        {
            title: "Example 1: Basic Power Rule",

            question: "Differentiate y = 5x⁴.",

            steps: [
                "Step 1: Multiply by the exponent.",
                "5 × 4 = 20",
                "Step 2: Subtract one from the exponent.",
                "4 - 1 = 3",
                "Final derivative:",
                "y' = 20x³"
            ],

            answer: "20x³"
        },

        {
            title: "Example 2: Differentiating a Polynomial",

            question: "Differentiate y = 3x⁴ - 2x³ + 5x² - 7x + 9.",

            steps: [
                "Step 1: Differentiate each term separately.",
                "3x⁴ becomes 12x³.",
                "-2x³ becomes -6x².",
                "5x² becomes 10x.",
                "-7x becomes -7.",
                "9 becomes 0.",
                "Final answer:",
                "y' = 12x³ - 6x² + 10x - 7"
            ],

            answer: "12x³ - 6x² + 10x - 7"
        },

        {
            title: "Example 3: Negative and Fractional Powers",

            question: "Differentiate y = 2√x + 3/x.",

            steps: [
                "Step 1: Rewrite using powers.",
                "y = 2x^(1/2) + 3x^(-1)",
                "Step 2: Apply the power rule.",
                "y' = 2(1/2)x^(-1/2) - 3x^(-2)",
                "Step 3: Simplify.",
                "y' = x^(-1/2) - 3x^(-2)",
                "Final answer:",
                "y' = 1/√x - 3/x²"
            ],

            answer: "1/√x - 3/x²"
        }

    ],


    unit5: [

        {
            title: "Example 1: Finding a Tangent",

            question: "Find the tangent to y = x² + 1 at x = 2.",

            steps: [
                "Step 1: Differentiate.",
                "y' = 2x",
                "Step 2: Find the gradient.",
                "m = 2(2) = 4",
                "Step 3: Find the point.",
                "y = 2² + 1 = 5",
                "Point = (2, 5)",
                "Step 4: Use y - y₁ = m(x - x₁).",
                "y - 5 = 4(x - 2)",
                "y = 4x - 3"
            ],

            answer: "y = 4x - 3"
        },

        {
            title: "Example 2: Tangent at x = 1",

            question: "Find the tangent to y = x³ at x = 1.",

            steps: [
                "Step 1: Differentiate.",
                "y' = 3x²",
                "Step 2: Find the gradient.",
                "m = 3(1)² = 3",
                "Step 3: Find the point.",
                "y = 1³ = 1",
                "Point = (1, 1)",
                "Step 4: Use the straight-line equation.",
                "y - 1 = 3(x - 1)",
                "y = 3x - 2"
            ],

            answer: "y = 3x - 2"
        },

        {
            title: "Example 3: Tangent with a Negative Gradient",

            question: "Find the tangent to y = x² - 4x at x = 1.",

            steps: [
                "Step 1: Differentiate.",
                "y' = 2x - 4",
                "Step 2: Find the gradient.",
                "m = 2(1) - 4 = -2",
                "Step 3: Find the point.",
                "y = 1 - 4 = -3",
                "Point = (1, -3)",
                "Step 4: Substitute into the line equation.",
                "y + 3 = -2(x - 1)",
                "y = -2x - 1"
            ],

            answer: "y = -2x - 1"
        }

    ],


    unit6: [

        {
            title: "Example 1: Finding the Second Derivative",

            question: "Find the second derivative of f(x) = 4x³ - 3x² + 2x.",

            steps: [
                "Step 1: Find the first derivative.",
                "f'(x) = 12x² - 6x + 2",
                "Step 2: Differentiate again.",
                "f''(x) = 24x - 6"
            ],

            answer: "24x - 6"
        },

        {
            title: "Example 2: Finding a Stationary Point",

            question: "Find the stationary point of f(x) = x² - 6x + 5.",

            steps: [
                "Step 1: Differentiate.",
                "f'(x) = 2x - 6",
                "Step 2: Set the derivative equal to zero.",
                "2x - 6 = 0",
                "x = 3",
                "Step 3: Find the y-coordinate.",
                "f(3) = 9 - 18 + 5 = -4",
                "Stationary point = (3, -4)"
            ],

            answer: "(3, -4)"
        },

        {
            title: "Example 3: Classifying a Stationary Point",

            question: "Determine the nature of the stationary point of f(x) = x² - 6x + 5.",

            steps: [
                "Step 1: First derivative.",
                "f'(x) = 2x - 6",
                "Step 2: Stationary point occurs at x = 3.",
                "Step 3: Find the second derivative.",
                "f''(x) = 2",
                "Step 4: Since 2 is positive, the point is a minimum."
            ],

            answer: "Minimum point (3, -4)"
        }

    ],


    unit7: [

        {
            title: "Example 1: Finding Intercepts",

            question: "Find the intercepts of f(x) = x³ - 4x.",

            steps: [
                "Step 1: Find the y-intercept.",
                "f(0) = 0",
                "The y-intercept is (0, 0).",
                "Step 2: Find the x-intercepts.",
                "x³ - 4x = 0",
                "x(x² - 4) = 0",
                "x(x - 2)(x + 2) = 0",
                "x = 0, 2 or -2.",
                "The x-intercepts are (-2, 0), (0, 0) and (2, 0)."
            ],

            answer: "x = -2, 0 or 2"
        },

        {
            title: "Example 2: Finding Stationary Points",

            question: "Find the stationary points of f(x) = x³ - 3x.",

            steps: [
                "Step 1: Differentiate.",
                "f'(x) = 3x² - 3",
                "Step 2: Set equal to zero.",
                "3x² - 3 = 0",
                "x² = 1",
                "x = -1 or x = 1",
                "Step 3: Find the y-values.",
                "f(-1) = 2",
                "f(1) = -2",
                "Stationary points: (-1, 2) and (1, -2)."
            ],

            answer: "(-1, 2) and (1, -2)"
        },

        {
            title: "Example 3: Point of Inflection",

            question: "Find the point of inflection of f(x) = x³ - 6x² + 9x + 1.",

            steps: [
                "Step 1: Find the first derivative.",
                "f'(x) = 3x² - 12x + 9",
                "Step 2: Find the second derivative.",
                "f''(x) = 6x - 12",
                "Step 3: Set the second derivative equal to zero.",
                "6x - 12 = 0",
                "x = 2",
                "Step 4: Find the y-coordinate.",
                "f(2) = 8 - 24 + 18 + 1 = 3",
                "The point of inflection is (2, 3)."
            ],

            answer: "(2, 3)"
        }

    ],


    unit8: [

        {
            title: "Example 1: Maximum Area",

            question: "A rectangle has perimeter 20 units. Find its maximum area.",

            steps: [
                "Step 1: Let the length be x and width be y.",
                "2x + 2y = 20",
                "y = 10 - x",
                "Step 2: Write the area function.",
                "A = x(10 - x)",
                "A = 10x - x²",
                "Step 3: Differentiate.",
                "A' = 10 - 2x",
                "Step 4: Set A' = 0.",
                "10 - 2x = 0",
                "x = 5",
                "Then y = 5.",
                "Step 5: A'' = -2, so this is a maximum.",
                "Maximum area = 25 square units."
            ],

            answer: "25 square units"
        },

        {
            title: "Example 2: Finding Velocity",

            question: "The distance travelled is s(t) = t² + 4t. Find the velocity at t = 3.",

            steps: [
                "Step 1: Differentiate distance with respect to time.",
                "v(t) = 2t + 4",
                "Step 2: Substitute t = 3.",
                "v(3) = 2(3) + 4",
                "v(3) = 10",
                "Velocity = 10 m/s."
            ],

            answer: "10 m/s"
        },

        {
            title: "Example 3: Minimum Value",

            question: "Find the minimum value of f(x) = x² - 8x + 12.",

            steps: [
                "Step 1: Differentiate.",
                "f'(x) = 2x - 8",
                "Step 2: Set the derivative equal to zero.",
                "2x - 8 = 0",
                "x = 4",
                "Step 3: Find the second derivative.",
                "f''(x) = 2",
                "Since it is positive, there is a minimum.",
                "Step 4: Find the minimum value.",
                "f(4) = 16 - 32 + 12",
                "f(4) = -4"
            ],

            answer: "Minimum value = -4"
        }

    ]

};


/* =====================================================
   5. DISPLAY WORKED EXAMPLES
===================================================== */

function displayExamples(unit, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    workedExamples[unit].forEach(example => {

        const card = document.createElement("div");
        card.className = "example-card";

        const title = document.createElement("h4");
        title.textContent = example.title;

        const question = document.createElement("div");
        question.className = "example-question";
        question.textContent = example.question;

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
        answer.textContent = "Final Answer: " + example.answer;

        solution.appendChild(answer);

        button.addEventListener("click", function () {

            solution.hidden = !solution.hidden;

            button.textContent = solution.hidden
                ? "Show Solution"
                : "Hide Solution";

        });

        card.appendChild(title);
        card.appendChild(question);
        card.appendChild(button);
        card.appendChild(solution);

        container.appendChild(card);

    });

}


for (let i = 1; i <= 8; i++) {

    displayExamples(
        "unit" + i,
        "unit" + i + "Examples"
    );

}


/* =====================================================
   6. PRACTICE QUESTIONS
===================================================== */

const practiceQuestions = {

    unit1: [

        {
            question: "Evaluate lim (x² + 2x + 1), as x approaches 2.",

            answers: ["9"],

            explanation: "Substitute 2: 4 + 4 + 1 = 9."
        },

        {
            question: "Evaluate lim (x² - 4)/(x - 2), as x approaches 2.",

            answers: ["4"],

            explanation: "Factorise to get (x - 2)(x + 2), then substitute 2."
        },

        {
            question: "Evaluate lim (x² - 25)/(x - 5), as x approaches 5.",

            answers: ["10"],

            explanation: "Factorise: (x - 5)(x + 5). The limit is 5 + 5 = 10."
        }

    ],


    unit2: [

        {
            question: "If f(x) = x², what is f(x + h)?",

            answers: [
                "x²+2xh+h²",
                "h²+2xh+x²"
            ],

            explanation: "Replace x with x + h and expand (x + h)²."
        },

        {
            question: "If f(x) = x², what is f'(x) using the limit definition?",

            answers: ["2x"],

            explanation: "The limit definition simplifies to f'(x) = 2x."
        },

        {
            question: "If f(x) = x², find the gradient at x = 4.",

            answers: ["8"],

            explanation: "f'(x) = 2x, so f'(4) = 8."
        }

    ],


    unit3: [

        {
            question: "Using first principles, find the derivative of f(x) = x².",

            answers: ["2x"],

            explanation: "Expand (x + h)², simplify and let h approach zero."
        },

        {
            question: "Using first principles, find the derivative of f(x) = 4x².",

            answers: ["8x"],

            explanation: "The first-principles calculation gives 8x."
        },

        {
            question: "Using first principles, differentiate f(x) = x² + 3x.",

            answers: ["2x+3", "3+2x"],

            explanation: "The derivative of x² is 2x and the derivative of 3x is 3."
        }

    ],


    unit4: [

        {
            question: "Differentiate y = 7x⁵.",

            answers: ["35x⁴"],

            explanation: "Multiply 7 by 5 and reduce the exponent by one."
        },

        {
            question: "Differentiate y = 3x³ - 4x² + 2x - 9.",

            answers: ["9x²-8x+2"],

            explanation: "Differentiate each term separately. The constant becomes zero."
        },

        {
            question: "Differentiate y = √x.",

            answers: ["1/(2√x)", "1/2√x"],

            explanation: "Rewrite √x as x^(1/2), then apply the power rule."
        }

    ],


    unit5: [

        {
            question: "Find the gradient of the tangent to y = x² at x = 3.",

            answers: ["6"],

            explanation: "Differentiate to get 2x, then substitute x = 3."
        },

        {
            question: "Find the tangent to y = x² at x = 1. Enter your answer in the form y = mx + c.",

            answers: ["y=2x-1"],

            explanation: "The gradient is 2 and the point is (1, 1). The tangent is y = 2x - 1."
        },

        {
            question: "Find the tangent to y = x³ at x = 2. Enter your answer in the form y = mx + c.",

            answers: ["y=12x-16"],

            explanation: "The gradient is 3(2²) = 12 and the point is (2, 8)."
        }

    ],


    unit6: [

        {
            question: "Find the second derivative of f(x) = x³.",

            answers: ["6x"],

            explanation: "First derivative is 3x². Differentiate again to get 6x."
        },

        {
            question: "Find the stationary x-coordinate of f(x) = x² - 4x + 1.",

            answers: ["2"],

            explanation: "Set 2x - 4 = 0, giving x = 2."
        },

        {
            question: "If f''(x) = -6 at a stationary point, is it a maximum or minimum?",

            answers: ["maximum", "max"],

            explanation: "A negative second derivative indicates a local maximum."
        }

    ],


    unit7: [

        {
            question: "Find the y-intercept of f(x) = x³ - 2x + 5. Enter the y-coordinate.",

            answers: ["5"],

            explanation: "Substitute x = 0. The result is 5."
        },

        {
            question: "Find the x-intercepts of f(x) = x³ - 4x. Enter the x-values separated by commas.",

            answers: [
                "-2,0,2",
                "-2,2,0",
                "0,-2,2",
                "0,2,-2",
                "2,-2,0",
                "2,0,-2"
            ],

            explanation: "Factorise x³ - 4x = x(x - 2)(x + 2)."
        },

        {
            question: "Find the x-coordinate of the point of inflection of f(x) = x³ - 6x² + 9x + 1.",

            answers: ["2"],

            explanation: "Set f''(x) = 6x - 12 equal to zero."
        }

    ],


    unit8: [

        {
            question: "A rectangle has perimeter 20 units. What is its maximum area?",

            answers: ["25", "25 square units"],

            explanation: "The maximum occurs when the rectangle is a square of side 5."
        },

        {
            question: "If s(t) = t² + 4t, find the velocity at t = 3.",

            answers: ["10", "10 m/s"],

            explanation: "Differentiate to get v(t) = 2t + 4. Then v(3) = 10."
        },

        {
            question: "Find the minimum value of f(x) = x² - 8x + 12.",

            answers: ["-4"],

            explanation: "The stationary point occurs at x = 4. Substitution gives -4."
        }

    ]

};


/* =====================================================
   7. NORMALISE PRACTICE ANSWERS
===================================================== */

function normaliseAnswer(value) {

    return String(value)
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "")
        .replace(/−/g, "-")
        .replace(/×/g, "*")
        .replace(/²/g, "^2")
        .replace(/³/g, "^3")
        .replace(/⁴/g, "^4")
        .replace(/⁵/g, "^5")
        .replace(/¹/g, "1")
        .replace(/√x/g, "sqrt(x)")
        .replace(/squareunits/g, "")
        .replace(/m\/s/g, "")
        .replace(/,/g, ",");
}


/* =====================================================
   8. DISPLAY PRACTICE QUESTIONS
===================================================== */

function displayPractice(unit, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    practiceQuestions[unit].forEach((item, index) => {

        const card = document.createElement("div");
        card.className = "practice-card";

        const heading = document.createElement("h4");
        heading.textContent = "Question " + (index + 1);

        const question = document.createElement("p");
        question.textContent = item.question;

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Enter your answer";

        const button = document.createElement("button");
        button.className = "check-button";
        button.textContent = "Check Answer";

        const feedback = document.createElement("p");
        feedback.className = "feedback";

        button.addEventListener("click", function () {

            const userAnswer = normaliseAnswer(input.value);

            const acceptedAnswers = item.answers.map(
                answer => normaliseAnswer(answer)
            );

            if (userAnswer === "") {

                feedback.textContent = "Please enter your answer.";
                feedback.style.color = "#dc2626";

            } else if (acceptedAnswers.includes(userAnswer)) {

                feedback.textContent = "Correct! Well done.";
                feedback.style.color = "#15803d";

            } else {

                feedback.textContent =
                    "Not quite. " + item.explanation;

                feedback.style.color = "#dc2626";

            }

        });

        card.appendChild(heading);
        card.appendChild(question);
        card.appendChild(input);
        card.appendChild(button);
        card.appendChild(feedback);

        container.appendChild(card);

    });

}


for (let i = 1; i <= 8; i++) {

    displayPractice(
        "unit" + i,
        "unit" + i + "Practice"
    );

}


/* =====================================================
   9. QUIZ QUESTIONS
===================================================== */

const quizData = [

    {
        question: "What does a limit describe?",

        options: [
            "The highest power of a function",
            "The value a function approaches",
            "The y-intercept only",
            "The length of a curve"
        ],

        answer: 1
    },

    {
        question: "Evaluate lim (x² + 2x), as x approaches 3.",

        options: ["9", "12", "15", "18"],

        answer: 2
    },

    {
        question: "Which expression defines the derivative from first principles?",

        options: [
            "lim [f(x+h) - f(x)]/h as h approaches 0",
            "f(x) + h",
            "f(x) × h",
            "f(x)/h²"
        ],

        answer: 0
    },

    {
        question: "Using first principles, what is the derivative of f(x) = x²?",

        options: ["x", "x²", "2x", "2"],

        answer: 2
    },

    {
        question: "Differentiate y = 4x³ - 2x.",

        options: [
            "12x² - 2",
            "4x² - 2",
            "12x³ - 2",
            "4x² - 1"
        ],

        answer: 0
    },

    {
        question: "What is the gradient of the tangent to y = x² at x = 2?",

        options: ["2", "4", "6", "8"],

        answer: 1
    },

    {
        question: "Find the second derivative of f(x) = x³ - 2x².",

        options: [
            "3x² - 4x",
            "6x - 4",
            "6x² - 4",
            "3x - 2"
        ],

        answer: 1
    },

    {
        question: "If f''(x) is positive at a stationary point, what type of point is it?",

        options: [
            "Local maximum",
            "Local minimum",
            "Point of inflection always",
            "x-intercept"
        ],

        answer: 1
    },

    {
        question: "For f(x) = x³ - 3x, what are the stationary x-values?",

        options: [
            "0 and 3",
            "-3 and 3",
            "-1 and 1",
            "1 and 3"
        ],

        answer: 2
    },

    {
        question: "A rectangle has a fixed perimeter of 20 units. What is its maximum area?",

        options: [
            "20 square units",
            "24 square units",
            "25 square units",
            "30 square units"
        ],

        answer: 2
    }

];


/* =====================================================
   10. QUIZ VARIABLES
===================================================== */

let currentQuestion = 0;
let quizScore = 0;


/* =====================================================
   11. START QUIZ
===================================================== */

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("startQuiz").hidden = true;
    document.getElementById("quizArea").hidden = false;
    document.getElementById("quizResults").hidden = true;

    showQuestion();

}


/* =====================================================
   12. DISPLAY QUIZ QUESTION
===================================================== */

function showQuestion() {

    const container = document.getElementById("quizQuestions");

    const question = quizData[currentQuestion];

    container.innerHTML = "";

    const card = document.createElement("div");
    card.className = "quiz-question";

    const heading = document.createElement("h4");

    heading.textContent =
        "Question " + (currentQuestion + 1) +
        ": " + question.question;

    card.appendChild(heading);

    question.options.forEach((option, index) => {

        const label = document.createElement("label");

        label.className = "quiz-option";

        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "quizAnswer";
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        card.appendChild(label);

    });

    container.appendChild(card);

    document.getElementById("questionProgress").textContent =
        "Question " + (currentQuestion + 1) +
        " of " + quizData.length;

    document.getElementById("quizScore").textContent =
        "Score: " + quizScore;

    document.getElementById("progressBar").style.width =
        (currentQuestion / quizData.length * 100) + "%";

    document.getElementById("submitQuiz").textContent =
        currentQuestion === quizData.length - 1
            ? "Finish Quiz"
            : "Next Question";

}


/* =====================================================
   13. SUBMIT QUIZ ANSWER
===================================================== */

function submitQuiz() {

    const selected = document.querySelector(
        'input[name="quizAnswer"]:checked'
    );

    if (!selected) {

        alert("Please select an answer before continuing.");

        return;
    }

    const selectedAnswer = Number(selected.value);

    if (selectedAnswer === quizData[currentQuestion].answer) {

        quizScore++;

    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =====================================================
   14. FINISH QUIZ
===================================================== */

function finishQuiz() {

    document.getElementById("quizArea").hidden = true;
    document.getElementById("quizResults").hidden = false;

    document.getElementById("progressBar").style.width = "100%";

    document.getElementById("finalScore").textContent =
        "Your Score: " + quizScore + " / " + quizData.length;

    let feedback = "";

    if (quizScore >= 8) {

        feedback =
            "Excellent work! You understand Differential Calculus very well.";

    } else if (quizScore >= 6) {

        feedback =
            "Good job! Revise a few areas to improve your score.";

    } else if (quizScore >= 4) {

        feedback =
            "You are making progress. Practise more differentiation questions.";

    } else {

        feedback =
            "Keep practising. Review the notes and worked examples, then try again.";

    }

    document.getElementById("finalFeedback").textContent = feedback;

}


/* =====================================================
   15. RETRY QUIZ
===================================================== */

function retryQuiz() {

    currentQuestion = 0;
    quizScore = 0;

    document.getElementById("quizResults").hidden = true;
    document.getElementById("startQuiz").hidden = false;

    document.getElementById("quizScore").textContent = "Score: 0";

    document.getElementById("questionProgress").textContent =
        "Question 1 of 10";

    document.getElementById("progressBar").style.width = "0%";

}
