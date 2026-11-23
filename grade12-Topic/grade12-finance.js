
/* =========================================
   MATHSHELP SA
   GRADE 12
   FINANCE, GROWTH AND DECAY
========================================= */


/* =========================================
   1. OPEN AND CLOSE SECTIONS
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
   REVISION: GRADE 11 FINANCE
========================================= */

const unit1Notes = `

<div class="unit-notes">

<h4>1. Simple Interest</h4>

<p>Simple interest is calculated only on the original amount of money invested or borrowed.</p>

<div class="formula-box">
    I = P × i × n
    <br><br>
    A = P(1 + in)
</div>

<p>Where:</p>

<ul>
    <li>P = Principal (original amount)</li>
    <li>I = Interest earned or paid</li>
    <li>i = Interest rate per period</li>
    <li>n = Number of periods</li>
    <li>A = Final amount</li>
</ul>

<p>Remember to convert percentages into decimals before calculating.</p>

<p>Example: 8% = 0.08</p>

</div>


<div class="unit-notes">

<h4>2. Compound Interest</h4>

<p>Compound interest is calculated on the original amount as well as the interest already earned.</p>

<div class="formula-box">
    A = P(1 + i)<sup>n</sup>
</div>

<p>Example:</p>

<p>R5 000 is invested at 10% compound interest per year for 2 years.</p>

<div class="formula-box">
    A = 5000(1.10)<sup>2</sup>
    <br>
    A = R6 050
</div>

</div>


<div class="unit-notes">

<h4>3. Growth and Decay</h4>

<p><strong>Growth:</strong> The value increases over time.</p>

<div class="formula-box">
    A = P(1 + i)<sup>n</sup>
</div>

<p><strong>Decay:</strong> The value decreases over time.</p>

<div class="formula-box">
    A = P(1 − i)<sup>n</sup>
</div>

<p>Examples of growth:</p>

<ul>
    <li>Money invested at compound interest.</li>
    <li>Population increases.</li>
    <li>Value of an investment increases.</li>
</ul>

<p>Examples of decay:</p>

<ul>
    <li>Depreciation of a vehicle.</li>
    <li>Decrease in the value of equipment.</li>
    <li>Reduction in the value of an asset.</li>
</ul>

</div>


<div class="unit-notes">

<h4>4. Depreciation</h4>

<p>Depreciation is the decrease in the value of an asset over time.</p>

<div class="formula-box">
    A = P(1 − i)<sup>n</sup>
</div>

<p>Example:</p>

<p>A vehicle worth R200 000 depreciates by 15% per year.</p>

<div class="formula-box">
    A = 200000(1 − 0.15)<sup>n</sup>
</div>

<p>After one year:</p>

<div class="formula-box">
    A = 200000(0.85)
    <br>
    A = R170 000
</div>

</div>


<div class="unit-notes">

<h4>5. Converting Interest Rates</h4>

<p>Always make sure the interest rate and the number of periods match.</p>

<ul>
    <li>8% per year = 0.08 per year.</li>
    <li>12% per year = 0.12 per year.</li>
    <li>For monthly compounding, divide the nominal annual rate by 12.</li>
    <li>For quarterly compounding, divide the nominal annual rate by 4.</li>
</ul>

<p>For example, a nominal annual rate of 12% compounded monthly gives:</p>

<div class="formula-box">
    i = 0.12 ÷ 12 = 0.01
</div>

<p>This is 1% per month.</p>

</div>

`;


/* =========================================
   3. UNIT 2 NOTES
   ANNUITY FORMULAE
========================================= */

const unit2Notes = `

<div class="unit-notes">

<h4>1. What is an Annuity?</h4>

<p>An annuity is a series of equal payments made at regular time intervals.</p>

<p>Examples include:</p>

<ul>
    <li>Monthly savings deposits.</li>
    <li>Monthly loan repayments.</li>
    <li>Regular retirement contributions.</li>
    <li>Monthly investment payments.</li>
</ul>

<p>In this topic, we first study an ordinary annuity, where payments are made at the END of each period.</p>

</div>


<div class="unit-notes">

<h4>2. Future Value of an Annuity</h4>

<p>The future value is the total accumulated value of regular payments after earning interest.</p>

<p>Suppose a person deposits an amount PMT at the end of every period.</p>

<p>Each payment earns interest for a different length of time.</p>

<div class="formula-box">
    FV = PMT(1+i)<sup>n-1</sup>
    <br>
    + PMT(1+i)<sup>n-2</sup>
    <br>
    + ... + PMT
</div>

<p>This is a geometric series. Using the sum formula gives:</p>

<div class="formula-box">
    FV = PMT ×
    [(1+i)<sup>n</sup> − 1] ÷ i
</div>

<p>Where:</p>

<ul>
    <li>FV = Future value</li>
    <li>PMT = Regular payment</li>
    <li>i = Interest rate per payment period</li>
    <li>n = Number of payments</li>
</ul>

</div>


<div class="unit-notes">

<h4>3. Present Value of an Annuity</h4>

<p>The present value is the value today of a series of future payments.</p>

<p>Each future payment is discounted back to the present.</p>

<div class="formula-box">
    PV = PMT ×
    [1 − (1+i)<sup>−n</sup>] ÷ i
</div>

<p>Where:</p>

<ul>
    <li>PV = Present value</li>
    <li>PMT = Regular payment</li>
    <li>i = Interest rate per period</li>
    <li>n = Number of payments</li>
</ul>

</div>


<div class="unit-notes">

<h4>4. Important Conditions</h4>

<ul>
    <li>Payments must be equal.</li>
    <li>Payments must occur at regular intervals.</li>
    <li>The interest rate must match the payment period.</li>
    <li>The ordinary annuity formulas assume payments at the end of each period.</li>
</ul>

<p>If payments are made at the beginning of each period, the annuity is an annuity due. Its value is the ordinary annuity value multiplied by (1+i).</p>

</div>

`;


/* =========================================
   4. UNIT 3 NOTES
   ANNUITY APPLICATIONS
========================================= */

const unit3Notes = `

<div class="unit-notes">

<h4>1. Applying the Future Value Formula</h4>

<p>Use the future value formula when regular payments are made to build up savings or an investment.</p>

<div class="formula-box">
    FV = PMT ×
    [(1+i)<sup>n</sup> − 1] ÷ i
</div>

<p>Example situations:</p>

<ul>
    <li>Saving money every month.</li>
    <li>Making regular retirement contributions.</li>
    <li>Building an education fund.</li>
</ul>

</div>


<div class="unit-notes">

<h4>2. Applying the Present Value Formula</h4>

<p>Use the present value formula when calculating the current value of a series of future payments.</p>

<div class="formula-box">
    PV = PMT ×
    [1 − (1+i)<sup>−n</sup>] ÷ i
</div>

<p>It is useful when calculating:</p>

<ul>
    <li>The amount that can be borrowed today.</li>
    <li>The value of a repayment agreement.</li>
    <li>The amount needed to fund regular withdrawals.</li>
</ul>

</div>


<div class="unit-notes">

<h4>3. Loan Repayments</h4>

<p>A loan is money borrowed that must be repaid, usually with interest.</p>

<p>Rearranging the present value annuity formula gives the regular repayment:</p>

<div class="formula-box">
    PMT = PV ×
    i ÷ [1 − (1+i)<sup>−n</sup>]
</div>

<p>This formula calculates equal repayments made at the end of each period.</p>

</div>


<div class="unit-notes">

<h4>4. Understanding a Loan Repayment</h4>

<p>Each repayment consists of two parts:</p>

<ul>
    <li>Interest charged on the outstanding loan balance.</li>
    <li>Payment towards reducing the loan balance.</li>
</ul>

<p>At the beginning of a loan, the interest portion is usually larger. As the outstanding balance decreases, the interest portion becomes smaller.</p>

</div>


<div class="unit-notes">

<h4>5. Important Financial Information</h4>

<p>When solving annuity problems, identify:</p>

<ol>
    <li>The amount borrowed or invested.</li>
    <li>The regular payment.</li>
    <li>The interest rate per period.</li>
    <li>The total number of payments.</li>
    <li>Whether the question asks for present value or future value.</li>
</ol>

</div>

`;


/* =========================================
   5. UNIT 4 NOTES
   CALCULATING TIME USING LOGARITHMS
========================================= */

const unit4Notes = `

<div class="unit-notes">

<h4>1. Why Do We Use Logarithms?</h4>

<p>Logarithms help us calculate the number of periods required for an investment to reach a particular value.</p>

<p>Consider the compound interest formula:</p>

<div class="formula-box">
    A = P(1+i)<sup>n</sup>
</div>

<p>If we know A, P and i, but do not know n, we can use logarithms.</p>

</div>


<div class="unit-notes">

<h4>2. Deriving the Time Formula</h4>

<p>Start with:</p>

<div class="formula-box">
    A = P(1+i)<sup>n</sup>
</div>

<p>Step 1: Divide both sides by P.</p>

<div class="formula-box">
    A/P = (1+i)<sup>n</sup>
</div>

<p>Step 2: Apply logarithms to both sides.</p>

<div class="formula-box">
    log(A/P) = n log(1+i)
</div>

<p>Step 3: Make n the subject.</p>

<div class="formula-box">
    n = log(A/P) ÷ log(1+i)
</div>

</div>


<div class="unit-notes">

<h4>3. Time Period for Growth</h4>

<p>For compound growth:</p>

<div class="formula-box">
    n = log(A/P) ÷ log(1+i)
</div>

<p>Example: How long will it take for R5 000 to grow to R8 000 at 8% compound interest per year?</p>

<div class="formula-box">
    n = log(8000/5000) ÷ log(1.08)
    <br><br>
    n ≈ 6.13 years
</div>

<p>If the investment is only evaluated at the end of complete annual periods, at least 7 years are needed to reach or exceed R8 000.</p>

</div>


<div class="unit-notes">

<h4>4. Time Period for Decay</h4>

<p>For compound decay:</p>

<div class="formula-box">
    A = P(1−i)<sup>n</sup>
</div>

<p>Rearranging gives:</p>

<div class="formula-box">
    n = log(A/P) ÷ log(1−i)
</div>

<p>Remember that A must be less than P for a decay calculation.</p>

</div>


<div class="unit-notes">

<h4>5. Important Calculator Steps</h4>

<ol>
    <li>Write down the original formula.</li>
    <li>Substitute the known values.</li>
    <li>Make the exponential variable the subject.</li>
    <li>Apply log to both sides.</li>
    <li>Calculate using your calculator.</li>
    <li>Interpret the answer using the correct time period.</li>
</ol>

</div>

`;


/* =========================================
   6. UNIT 5 NOTES
   INVESTMENTS AND LOANS
========================================= */

const unit5Notes = `

<div class="unit-notes">

<h4>1. Analysing Investments</h4>

<p>An investment is money placed into a financial product with the aim of earning a return.</p>

<p>When comparing investments, consider:</p>

<ul>
    <li>Initial investment amount.</li>
    <li>Interest rate.</li>
    <li>Compounding frequency.</li>
    <li>Investment period.</li>
    <li>Fees and other charges.</li>
    <li>Final accumulated value.</li>
</ul>

</div>


<div class="unit-notes">

<h4>2. Comparing Investment Options</h4>

<p>Two investments may offer different interest rates and compounding periods.</p>

<p>To compare them fairly:</p>

<ol>
    <li>Use the same initial investment.</li>
    <li>Use the same investment period.</li>
    <li>Convert rates to the correct compounding period.</li>
    <li>Calculate the accumulated value for each option.</li>
    <li>Consider fees, risk and access to the money.</li>
</ol>

</div>


<div class="unit-notes">

<h4>3. Understanding Loans</h4>

<p>A loan is money borrowed from a lender and repaid over an agreed period.</p>

<p>Important loan terms include:</p>

<ul>
    <li>Principal: the original amount borrowed.</li>
    <li>Interest: the cost of borrowing money.</li>
    <li>Repayment: the amount paid regularly.</li>
    <li>Loan term: the time allowed for repayment.</li>
    <li>Outstanding balance: the amount still owed.</li>
</ul>

</div>


<div class="unit-notes">

<h4>4. Comparing Loan Options</h4>

<p>When comparing loans, consider:</p>

<ul>
    <li>The interest rate.</li>
    <li>The monthly repayment.</li>
    <li>The repayment period.</li>
    <li>Initiation and service fees.</li>
    <li>The total amount paid over the loan term.</li>
</ul>

<p>A lower monthly repayment does not always mean a cheaper loan. A longer repayment period may result in more interest being paid overall.</p>

</div>


<div class="unit-notes">

<h4>5. Total Amount Paid</h4>

<p>For a loan with equal monthly repayments:</p>

<div class="formula-box">
    Total repayments = Monthly payment × Number of payments
</div>

<p>To calculate the amount paid in interest, excluding fees:</p>

<div class="formula-box">
    Total interest = Total repayments − Original loan
</div>

<p>Always include additional charges when the question provides them.</p>

</div>


<div class="unit-notes">

<h4>6. Making a Financial Decision</h4>

<p>The best financial option is not necessarily the one with the highest interest rate or the lowest monthly payment.</p>

<p>Make a decision by comparing the complete costs and benefits of each option.</p>

</div>

`;


/* =========================================
   7. DISPLAY ALL UNIT NOTES
========================================= */

const allNotes = [
    ["unit1Notes", unit1Notes],
    ["unit2Notes", unit2Notes],
    ["unit3Notes", unit3Notes],
    ["unit4Notes", unit4Notes],
    ["unit5Notes", unit5Notes]
];

allNotes.forEach(([id, content]) => {

    const element = document.getElementById(id);

    if (element) {
        element.innerHTML = content;
    }

});


/* =========================================
   8. WORKED EXAMPLES DATA
========================================= */

const examplesByUnit = {

    unit1: [

        {
            question: "Calculate the simple interest on R4 000 invested at 6% per year for 3 years.",

            steps: [
                "Step 1: Write the formula.",
                "I = P × i × n",
                "Step 2: Substitute the values.",
                "I = 4000 × 0.06 × 3",
                "Step 3: Calculate.",
                "I = R720",
                "The final amount is R4 000 + R720 = R4 720."
            ],

            answer: "R720 interest; R4 720 final amount"
        },

        {
            question: "R10 000 is invested at 8% compound interest per year for 2 years. Calculate the final amount.",

            steps: [
                "Step 1: Write the compound interest formula.",
                "A = P(1+i)^n",
                "Step 2: Substitute.",
                "A = 10000(1.08)^2",
                "Step 3: Calculate.",
                "A = 10000 × 1.1664",
                "A = R11 664"
            ],

            answer: "R11 664"
        },

        {
            question: "A machine worth R80 000 depreciates by 10% per year. Calculate its value after 2 years.",

            steps: [
                "Step 1: Use the decay formula.",
                "A = P(1−i)^n",
                "Step 2: Substitute.",
                "A = 80000(1−0.10)^2",
                "A = 80000(0.9)^2",
                "Step 3: Calculate.",
                "A = R64 800"
            ],

            answer: "R64 800"
        }

    ],


    unit2: [

        {
            question: "Calculate the future value of R500 deposited at the end of every month for 12 months at 1% interest per month.",

            steps: [
                "Step 1: Write the future value formula.",
                "FV = PMT[(1+i)^n−1]/i",
                "Step 2: Substitute.",
                "FV = 500[(1.01)^12−1]/0.01",
                "Step 3: Calculate.",
                "FV ≈ R6 341.25"
            ],

            answer: "R6 341.25"
        },

        {
            question: "Calculate the present value of 12 monthly payments of R1 000 at 1% interest per month.",

            steps: [
                "Step 1: Write the present value formula.",
                "PV = PMT[1−(1+i)^−n]/i",
                "Step 2: Substitute.",
                "PV = 1000[1−(1.01)^−12]/0.01",
                "Step 3: Calculate.",
                "PV ≈ R11 255.08"
            ],

            answer: "R11 255.08"
        },

        {
            question: "Explain why the future value of an annuity is greater than the total of the deposits when interest is positive.",

            steps: [
                "Step 1: Regular deposits are made over time.",
                "Step 2: Earlier deposits earn interest for longer.",
                "Step 3: Later deposits also earn interest, but for fewer periods.",
                "Therefore, the accumulated value includes both deposits and interest."
            ],

            answer: "Interest is earned on the deposits."
        }

    ],


    unit3: [

        {
            question: "A person saves R800 at the end of every month for 24 months. The monthly interest rate is 0.5%. Calculate the future value.",

            steps: [
                "Step 1: Identify the values.",
                "PMT = 800; i = 0.005; n = 24",
                "Step 2: Use the future value formula.",
                "FV = 800[(1.005)^24−1]/0.005",
                "Step 3: Calculate.",
                "FV ≈ R20 344.30"
            ],

            answer: "R20 344.30"
        },

        {
            question: "A loan of R50 000 is repaid over 36 months at 1% interest per month. Calculate the monthly repayment.",

            steps: [
                "Step 1: Use the repayment formula.",
                "PMT = PV × i/[1−(1+i)^−n]",
                "Step 2: Substitute.",
                "PMT = 50000 × 0.01/[1−(1.01)^−36]",
                "Step 3: Calculate.",
                "PMT ≈ R1 660.72"
            ],

            answer: "R1 660.72"
        },

        {
            question: "A person makes 10 monthly deposits of R600. Calculate the total amount deposited, excluding interest.",

            steps: [
                "Step 1: Multiply the regular deposit by the number of deposits.",
                "Total = 600 × 10",
                "Step 2: Calculate.",
                "Total = R6 000"
            ],

            answer: "R6 000"
        }

    ],


    unit4: [

        {
            question: "How long will R5 000 take to grow to R8 000 at 8% compound interest per year?",

            steps: [
                "Step 1: Write the formula.",
                "A = P(1+i)^n",
                "Step 2: Substitute.",
                "8000 = 5000(1.08)^n",
                "Step 3: Divide by 5000.",
                "1.6 = (1.08)^n",
                "Step 4: Apply logarithms.",
                "n = log(1.6)/log(1.08)",
                "n ≈ 6.13 years"
            ],

            answer: "Approximately 6.13 years"
        },

        {
            question: "A vehicle worth R300 000 depreciates by 12% per year. Calculate the time taken for its value to fall to R200 000.",

            steps: [
                "Step 1: Write the decay formula.",
                "A = P(1−i)^n",
                "Step 2: Substitute.",
                "200000 = 300000(0.88)^n",
                "Step 3: Divide by 300000.",
                "2/3 = (0.88)^n",
                "Step 4: Apply logarithms.",
                "n = log(2/3)/log(0.88)",
                "n ≈ 3.18 years"
            ],

            answer: "Approximately 3.18 years"
        },

        {
            question: "How long will it take an investment to double at 10% compound interest per year?",

            steps: [
                "Step 1: Write the formula.",
                "A = P(1.10)^n",
                "Step 2: The amount must double.",
                "2P = P(1.10)^n",
                "Step 3: Divide by P.",
                "2 = (1.10)^n",
                "Step 4: Apply logarithms.",
                "n = log(2)/log(1.10)",
                "n ≈ 7.27 years"
            ],

            answer: "Approximately 7.27 years"
        }

    ],


    unit5: [

        {
            question: "Investment A grows R10 000 at 8% per year for 3 years. Calculate its final value.",

            steps: [
                "Step 1: Use the compound interest formula.",
                "A = P(1+i)^n",
                "Step 2: Substitute.",
                "A = 10000(1.08)^3",
                "Step 3: Calculate.",
                "A = R12 597.12"
            ],

            answer: "R12 597.12"
        },

        {
            question: "A loan of R20 000 is repaid in 24 equal monthly payments of R950. Calculate the total repayments and the interest paid, excluding fees.",

            steps: [
                "Step 1: Calculate the total repayments.",
                "Total = 950 × 24",
                "Total = R22 800",
                "Step 2: Subtract the original loan.",
                "Interest = 22 800 − 20 000",
                "Interest = R2 800"
            ],

            answer: "R22 800 repayments; R2 800 interest"
        },

        {
            question: "Why should a borrower compare the total repayment amount rather than only the monthly instalment?",

            steps: [
                "Step 1: Monthly instalments may differ because loan terms differ.",
                "Step 2: A longer loan can have smaller monthly payments.",
                "Step 3: However, interest may be charged for more periods.",
                "Therefore, comparing total repayments gives a better picture of the overall cost."
            ],

            answer: "A longer loan may cost more overall."
        }

    ]

};


/* =========================================
   9. DISPLAY WORKED EXAMPLES
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
        solution.id = `${prefix}Solution${index}`;
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
   10. DISPLAY EXAMPLES FOR ALL UNITS
========================================= */

for (const unit in examplesByUnit) {

    displayExamples(
        examplesByUnit[unit],
        `${unit}Examples`,
        unit
    );

}


/* =========================================
   11. PRACTICE QUESTIONS
========================================= */

const practiceByUnit = {

    unit1: [

        {
            question: "Calculate the simple interest on R2 000 at 5% per year for 2 years.",
            answer: "200"
        },

        {
            question: "Calculate the final amount of R5 000 invested at 10% compound interest for 2 years.",
            answer: "6050"
        },

        {
            question: "A machine worth R10 000 depreciates by 20%. Calculate its value after one year.",
            answer: "8000"
        },

        {
            question: "Convert 15% into a decimal.",
            answer: "0.15"
        }

    ],


    unit2: [

        {
            question: "Calculate the future value of R100 deposited monthly for 2 months at 10% per month. Payments are made at the end of each month.",
            answer: "210"
        },

        {
            question: "Calculate the present value of two payments of R100 at the end of each month, using 10% interest per month.",
            answer: "173.55"
        },

        {
            question: "In an annuity formula, what does PMT represent?",
            answer: "payment"
        },

        {
            question: "What type of annuity has payments at the end of each period?",
            answer: "ordinary annuity"
        }

    ],


    unit3: [

        {
            question: "A person deposits R200 at the end of each month for 3 months. What is the total deposited before interest?",
            answer: "600"
        },

        {
            question: "A loan of R10 000 is repaid in 10 equal monthly payments of R1 100. Calculate the total repayments.",
            answer: "11000"
        },

        {
            question: "If the interest rate is 1% per month, write it as a decimal.",
            answer: "0.01"
        },

        {
            question: "Which annuity value is used to calculate the amount accumulated from regular savings?",
            answer: "future value"
        }

    ],


    unit4: [

        {
            question: "How long will R1 000 take to double at 100% compound interest per year?",
            answer: "1"
        },

        {
            question: "If A = 2P(1.1)^n, what is the value of A/P when n = 0?",
            answer: "2"
        },

        {
            question: "In the formula n = log(A/P)/log(1+i), what does n represent?",
            answer: "time"
        },

        {
            question: "Calculate log(100) using base 10.",
            answer: "2"
        }

    ],


    unit5: [

        {
            question: "An investment of R1 000 earns R100 interest. What is the final value?",
            answer: "1100"
        },

        {
            question: "A loan of R5 000 is repaid in 10 payments of R600. Calculate the total repayments.",
            answer: "6000"
        },

        {
            question: "Which should be compared to understand the overall cost of a loan: monthly payment or total repayments?",
            answer: "total repayments"
        },

        {
            question: "What is the original amount borrowed called?",
            answer: "principal"
        }

    ]

};


/* =========================================
   12. NORMALISE ANSWERS
========================================= */

function normaliseAnswer(answer) {

    return String(answer)
        .toLowerCase()
        .trim()
        .replace(/r/g, "")
        .replace(/,/g, "")
        .replace(/\s+/g, "")
        .replace(/−/g, "-");

}


/* =========================================
   13. CHECK PRACTICE ANSWERS
========================================= */

function checkPractice(inputId, feedbackId, correctAnswer) {

    const input = document.getElementById(inputId);
    const feedback = document.getElementById(feedbackId);

    if (!input || !feedback) return;

    const userAnswer = normaliseAnswer(input.value);
    const correct = normaliseAnswer(correctAnswer);

    if (userAnswer === "") {

        feedback.textContent = "Please enter your answer.";
        feedback.style.color = "#d97706";

        return;

    }

    if (userAnswer === correct) {

        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#15803d";

    } else {

        feedback.textContent = "Not quite. Try again.";
        feedback.style.color = "#dc2626";

    }

}


/* =========================================
   14. DISPLAY PRACTICE QUESTIONS
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
   15. DISPLAY PRACTICE FOR ALL UNITS
========================================= */

for (const unit in practiceByUnit) {

    displayPractice(
        practiceByUnit[unit],
        `${unit}Practice`,
        unit
    );

}


/* =========================================
   16. TOPIC QUIZ
   10 QUESTIONS = 10 MARKS
========================================= */

const quizData = [

    {
        question: "Which formula calculates compound interest?",

        options: [
            "A = P(1+i)^n",
            "A = P + in",
            "A = P(1−i)",
            "A = P × i"
        ],

        answer: "A = P(1+i)^n"
    },

    {
        question: "Calculate the final amount of R1 000 invested at 10% compound interest for one year.",

        options: [
            "R1 000",
            "R1 010",
            "R1 100",
            "R1 200"
        ],

        answer: "R1 100"
    },

    {
        question: "Which formula represents compound depreciation?",

        options: [
            "A = P(1+i)^n",
            "A = P(1−i)^n",
            "A = P + in",
            "A = P × n"
        ],

        answer: "A = P(1−i)^n"
    },

    {
        question: "What is an annuity?",

        options: [
            "A single payment",
            "A series of equal payments at regular intervals",
            "A once-off interest charge",
            "A type of tax"
        ],

        answer: "A series of equal payments at regular intervals"
    },

    {
        question: "When are payments made in an ordinary annuity?",

        options: [
            "At the beginning of each period",
            "At the end of each period",
            "Only once",
            "At random intervals"
        ],

        answer: "At the end of each period"
    },

    {
        question: "Which formula calculates the future value of an ordinary annuity?",

        options: [
            "FV = PMT[(1+i)^n−1]/i",
            "FV = P(1+i)^n",
            "FV = PMT × n",
            "FV = P(1−i)^n"
        ],

        answer: "FV = PMT[(1+i)^n−1]/i"
    },

    {
        question: "Which formula is used to calculate the present value of an ordinary annuity?",

        options: [
            "PV = PMT[1−(1+i)^−n]/i",
            "PV = P(1+i)^n",
            "PV = PMT × i",
            "PV = P(1−i)^n"
        ],

        answer: "PV = PMT[1−(1+i)^−n]/i"
    },

    {
        question: "Which mathematical method helps calculate an unknown time period in a compound interest problem?",

        options: [
            "Differentiation",
            "Integration",
            "Logarithms",
            "Factorisation only"
        ],

        answer: "Logarithms"
    },

    {
        question: "What does the principal of a loan represent?",

        options: [
            "The monthly interest",
            "The original amount borrowed",
            "The total number of payments",
            "The final interest charge"
        ],

        answer: "The original amount borrowed"
    },

    {
        question: "When comparing loan options, which is important?",

        options: [
            "Only the monthly repayment",
            "Only the interest rate",
            "Total repayments, interest, fees and loan term",
            "Only the loan provider's name"
        ],

        answer: "Total repayments, interest, fees and loan term"
    }

];


/* =========================================
   17. QUIZ VARIABLES
========================================= */

let currentQuestion = 0;
let quizScore = 0;
let userAnswers = [];


/* =========================================
   18. START QUIZ
========================================= */

function startQuiz() {

    currentQuestion = 0;
    quizScore = 0;
    userAnswers = [];

    document.getElementById("quizArea").hidden = false;

    document.getElementById("quizResults").hidden = true;

    document.getElementById("startQuiz").hidden = true;

    document.getElementById("submitQuiz").hidden = false;

    showQuestion();

}


/* =========================================
   19. DISPLAY QUIZ QUESTION
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
   20. UPDATE QUIZ PROGRESS
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
   21. NEXT QUESTION
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

        showQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================
   22. FINISH QUIZ
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
            "Excellent work! You have a strong understanding of Finance, Growth and Decay.";

    } else if (quizScore >= 5) {

        feedback.textContent =
            "Good effort! Revise the units where you made mistakes and try again.";

    } else {

        feedback.textContent =
            "Keep practising. Go through the notes and worked examples before trying again.";

    }

}


/* =========================================
   23. RETRY QUIZ
========================================= */

function retryQuiz() {

    startQuiz();

}


/* =========================================
   24. CONNECT QUIZ BUTTONS
========================================= */

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

