
/* ==========================================
   MATHSHELP SA - GRADE 11 PROBABILITY
   ========================================== */


/* ==========================================
   1. EXPAND AND COLLAPSE SECTIONS
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

    answer.hidden = !answer.hidden;

    if (button) {
        button.textContent = answer.hidden
            ? "Show Answer"
            : "Hide Answer";
    }
}


/* ==========================================
   3. UNIT 1: COMBINATIONS OF EVENTS
   ========================================== */

const unit1Examples = [

    {
        question: "A die is rolled. Let A = getting an even number and B = getting a number greater than 3. Find P(A ∪ B).",
        steps: [
            "Sample space: S = {1, 2, 3, 4, 5, 6}.",
            "A = {2, 4, 6}. Therefore P(A) = 3/6.",
            "B = {4, 5, 6}. Therefore P(B) = 3/6.",
            "A ∩ B = {4, 6}. Therefore P(A ∩ B) = 2/6.",
            "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
            "P(A ∪ B) = 3/6 + 3/6 − 2/6 = 4/6."
        ],
        answer: "P(A ∪ B) = 2/3."
    },

    {
        question: "If P(A) = 0.6, find the probability that A does not happen.",
        steps: [
            "Use the complement rule.",
            "P(A') = 1 − P(A).",
            "P(A') = 1 − 0.6."
        ],
        answer: "P(A') = 0.4."
    },

    {
        question: "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, calculate P(A ∪ B).",
        steps: [
            "Use the addition rule.",
            "P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
            "P(A ∪ B) = 0.4 + 0.5 − 0.2."
        ],
        answer: "P(A ∪ B) = 0.7."
    },

    {
        question: "A card is selected from a standard deck of 52 cards. Find the probability of selecting a heart or a king.",
        steps: [
            "There are 13 hearts.",
            "There are 4 kings.",
            "The king of hearts belongs to both groups, so the intersection contains 1 card.",
            "P(heart or king) = 13/52 + 4/52 − 1/52."
        ],
        answer: "P(heart or king) = 16/52 = 4/13."
    },

    {
        question: "Two events are mutually exclusive. If P(A) = 0.3 and P(B) = 0.4, find P(A ∪ B).",
        steps: [
            "Mutually exclusive events cannot happen together.",
            "Therefore P(A ∩ B) = 0.",
            "P(A ∪ B) = 0.3 + 0.4."
        ],
        answer: "P(A ∪ B) = 0.7."
    },

    {
        question: "If P(A ∪ B) = 0.8, P(A) = 0.5 and P(B) = 0.6, calculate P(A ∩ B).",
        steps: [
            "Use the addition rule.",
            "0.8 = 0.5 + 0.6 − P(A ∩ B).",
            "P(A ∩ B) = 1.1 − 0.8."
        ],
        answer: "P(A ∩ B) = 0.3."
    },

    {
        question: "A number is selected from 1 to 10. Find the probability that it is a multiple of 2 or a multiple of 3.",
        steps: [
            "Multiples of 2: {2, 4, 6, 8, 10}.",
            "Multiples of 3: {3, 6, 9}.",
            "The intersection is {6}.",
            "There are 5 + 3 − 1 = 7 favourable outcomes.",
            "There are 10 possible outcomes."
        ],
        answer: "P(A ∪ B) = 7/10."
    },

    {
        question: "If P(A) = 0.75, find P(A').",
        steps: [
            "P(A') = 1 − P(A).",
            "P(A') = 1 − 0.75."
        ],
        answer: "P(A') = 0.25."
    },

    {
        question: "If A and B are mutually exclusive, P(A) = 0.25 and P(A ∪ B) = 0.7, find P(B).",
        steps: [
            "For mutually exclusive events, P(A ∩ B) = 0.",
            "P(A ∪ B) = P(A) + P(B).",
            "0.7 = 0.25 + P(B).",
            "P(B) = 0.7 − 0.25."
        ],
        answer: "P(B) = 0.45."
    },

    {
        question: "In a class of 40 learners, 22 play soccer, 18 play netball and 8 play both. Find the probability that a randomly selected learner plays neither sport.",
        steps: [
            "Number who play at least one sport = 22 + 18 − 8.",
            "Number who play at least one sport = 32.",
            "Number who play neither = 40 − 32 = 8.",
            "Probability = 8/40."
        ],
        answer: "P(neither) = 1/5."
    }

];


/* ==========================================
   UNIT 1 PRACTICE QUESTIONS
   ========================================== */

const unit1Practice = [

    { q: "If P(A) = 0.2, find P(A').", a: "0.8", s: "P(A') = 1 − 0.2 = 0.8." },
    { q: "If P(A) = 0.65, find P(A').", a: "0.35", s: "P(A') = 1 − 0.65 = 0.35." },
    { q: "If P(A) = 1/4, find P(A').", a: "3/4", s: "P(A') = 1 − 1/4 = 3/4." },
    { q: "If P(A) = 0.45 and P(B) = 0.3, and the events are mutually exclusive, find P(A ∪ B).", a: "0.75", s: "Add the probabilities: 0.45 + 0.3 = 0.75." },
    { q: "If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.2, find P(A ∪ B).", a: "0.7", s: "0.5 + 0.4 − 0.2 = 0.7." },
    { q: "If P(A ∪ B) = 0.9, P(A) = 0.6 and P(B) = 0.5, find P(A ∩ B).", a: "0.2", s: "0.6 + 0.5 − 0.9 = 0.2." },
    { q: "A die is rolled. Find the probability of getting 1 or 6.", a: "1/3", s: "There are two favourable outcomes: 2/6 = 1/3." },
    { q: "A die is rolled. Find the probability of getting an even number or a number greater than 4.", a: "2/3", s: "Even = {2,4,6}; greater than 4 = {5,6}. Union = {2,4,5,6}, so 4/6 = 2/3." },
    { q: "A number is selected from 1 to 12. Find the probability of selecting a multiple of 4.", a: "1/4", s: "Multiples are 4, 8 and 12. Therefore 3/12 = 1/4." },
    { q: "A number is selected from 1 to 12. Find the probability of selecting a multiple of 2 or 5.", a: "2/3", s: "There are 6 multiples of 2 and 2 multiples of 5, with no overlap. Therefore 8/12 = 2/3." },
    { q: "If P(A) = 0.35 and P(B) = 0.45, and the events are mutually exclusive, find P(A ∪ B).", a: "0.8", s: "0.35 + 0.45 = 0.8." },
    { q: "If P(A ∪ B) = 0.65, P(A) = 0.4 and P(A ∩ B) = 0.15, find P(B).", a: "0.4", s: "0.65 = 0.4 + P(B) − 0.15. Therefore P(B) = 0.4." },
    { q: "If P(A) = 0.7 and P(B) = 0.6, can A and B be mutually exclusive?", a: "No", s: "Their probabilities add to 1.3, which is greater than 1. Mutually exclusive events cannot have a sum greater than 1." },
    { q: "If P(A ∩ B) = 0, what is the relationship between A and B?", a: "They are mutually exclusive", s: "Mutually exclusive events have no outcomes in common." },
    { q: "In a group of 30 learners, 18 study Mathematics, 12 study Physical Sciences and 7 study both. How many study at least one subject?", a: "23", s: "18 + 12 − 7 = 23 learners." },
    { q: "Using the previous question, how many learners study neither subject?", a: "7", s: "30 − 23 = 7 learners." },
    { q: "In a standard deck, find the probability of selecting a queen or a heart.", a: "4/13", s: "4 queens + 13 hearts − 1 queen of hearts = 16 cards. 16/52 = 4/13." },
    { q: "If P(A') = 0.18, find P(A).", a: "0.82", s: "P(A) = 1 − 0.18 = 0.82." },
    { q: "If P(A) = 0.4, P(B) = 0.3 and A and B are mutually exclusive, find P(A ∩ B).", a: "0", s: "Mutually exclusive events cannot happen together." },
    { q: "If P(A ∪ B) = 0.85, P(A) = 0.55 and P(B) = 0.5, find P(A ∩ B).", a: "0.2", s: "0.55 + 0.5 − 0.85 = 0.2." }

];


/* ==========================================
   4. UNIT 2: DEPENDENT AND INDEPENDENT EVENTS
   ========================================== */

const unit2Examples = [

    {
        question: "A coin is tossed twice. Find the probability of getting heads on both tosses.",
        steps: [
            "The two tosses are independent.",
            "P(H) = 1/2 for each toss.",
            "P(H and H) = 1/2 × 1/2."
        ],
        answer: "P(HH) = 1/4."
    },

    {
        question: "A bag contains 5 red and 3 blue balls. Two balls are selected with replacement. Find the probability that both are red.",
        steps: [
            "Total balls = 8.",
            "P(first red) = 5/8.",
            "The first ball is replaced, so P(second red) = 5/8.",
            "P(both red) = 5/8 × 5/8."
        ],
        answer: "P(both red) = 25/64."
    },

    {
        question: "A bag contains 5 red and 3 blue balls. Two balls are selected without replacement. Find the probability that both are red.",
        steps: [
            "Total balls = 8.",
            "P(first red) = 5/8.",
            "After selecting a red ball, 4 red balls remain out of 7.",
            "P(second red | first red) = 4/7.",
            "Multiply the probabilities."
        ],
        answer: "P(both red) = 5/8 × 4/7 = 5/14."
    },

    {
        question: "If P(A) = 0.4 and P(B) = 0.5, and the events are independent, find P(A ∩ B).",
        steps: [
            "For independent events, multiply the probabilities.",
            "P(A ∩ B) = P(A) × P(B).",
            "P(A ∩ B) = 0.4 × 0.5."
        ],
        answer: "P(A ∩ B) = 0.2."
    },

    {
        question: "If P(A) = 0.6 and P(A ∩ B) = 0.3, find P(B | A).",
        steps: [
            "Use the conditional probability formula.",
            "P(B | A) = P(A ∩ B) / P(A).",
            "P(B | A) = 0.3 / 0.6."
        ],
        answer: "P(B | A) = 0.5."
    },

    {
        question: "A box contains 4 green and 6 yellow balls. Two balls are selected without replacement. Find the probability of selecting green first and yellow second.",
        steps: [
            "P(green first) = 4/10.",
            "After selecting green, 6 yellow balls remain out of 9.",
            "P(yellow second) = 6/9.",
            "Multiply: 4/10 × 6/9."
        ],
        answer: "P(green then yellow) = 4/15."
    },

    {
        question: "A fair die is rolled twice. Find the probability of getting a 6 on the first roll and an even number on the second roll.",
        steps: [
            "The two rolls are independent.",
            "P(6 on first roll) = 1/6.",
            "P(even on second roll) = 3/6 = 1/2.",
            "Multiply the probabilities."
        ],
        answer: "P = 1/12."
    },

    {
        question: "If P(A) = 0.7, P(B) = 0.4 and the events are independent, find P(A ∪ B).",
        steps: [
            "First find the intersection.",
            "P(A ∩ B) = 0.7 × 0.4 = 0.28.",
            "Use the addition rule.",
            "P(A ∪ B) = 0.7 + 0.4 − 0.28."
        ],
        answer: "P(A ∪ B) = 0.82."
    },

    {
        question: "A bag contains 3 white and 2 black balls. Two balls are selected without replacement. Find the probability of selecting one white and one black in any order.",
        steps: [
            "White then black: 3/5 × 2/4 = 3/10.",
            "Black then white: 2/5 × 3/4 = 3/10.",
            "Add the two possible orders.",
            "3/10 + 3/10 = 6/10."
        ],
        answer: "P(one of each colour) = 3/5."
    },

    {
        question: "If P(A) = 0.5 and P(B | A) = 0.8, find P(A ∩ B).",
        steps: [
            "Use P(A ∩ B) = P(A) × P(B | A).",
            "P(A ∩ B) = 0.5 × 0.8."
        ],
        answer: "P(A ∩ B) = 0.4."
    }

];


/* ==========================================
   UNIT 2 PRACTICE QUESTIONS
   ========================================== */

const unit2Practice = [

    { q: "Two independent events have probabilities 0.4 and 0.5. Find the probability that both occur.", a: "0.2", s: "0.4 × 0.5 = 0.2." },
    { q: "Two independent events have probabilities 0.3 and 0.2. Find the probability that both occur.", a: "0.06", s: "0.3 × 0.2 = 0.06." },
    { q: "If P(A) = 0.8 and P(A ∩ B) = 0.4, find P(B | A).", a: "0.5", s: "0.4 ÷ 0.8 = 0.5." },
    { q: "If P(A) = 0.5 and P(B | A) = 0.6, find P(A ∩ B).", a: "0.3", s: "0.5 × 0.6 = 0.3." },
    { q: "A coin is tossed three times. Find the probability of getting heads every time.", a: "1/8", s: "1/2 × 1/2 × 1/2 = 1/8." },
    { q: "A bag has 4 red and 6 blue balls. A ball is selected and replaced. Find the probability of selecting red twice.", a: "4/25", s: "4/10 × 4/10 = 16/100 = 4/25." },
    { q: "A bag has 4 red and 6 blue balls. Two balls are selected without replacement. Find the probability of selecting red twice.", a: "2/15", s: "4/10 × 3/9 = 12/90 = 2/15." },
    { q: "A bag has 3 green and 5 yellow balls. Two are selected without replacement. Find the probability of green then yellow.", a: "15/56", s: "3/8 × 5/7 = 15/56." },
    { q: "A bag has 3 green and 5 yellow balls. Two are selected without replacement. Find the probability of yellow then green.", a: "15/56", s: "5/8 × 3/7 = 15/56." },
    { q: "A die is rolled twice. Find the probability of getting an odd number on both rolls.", a: "1/4", s: "3/6 × 3/6 = 1/4." },
    { q: "A die is rolled twice. Find the probability of getting a 5 followed by a 2.", a: "1/36", s: "1/6 × 1/6 = 1/36." },
    { q: "If two events are independent, P(A) = 0.6 and P(B) = 0.3. Find P(A ∩ B).", a: "0.18", s: "0.6 × 0.3 = 0.18." },
    { q: "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, are the events independent?", a: "Yes", s: "P(A) × P(B) = 0.4 × 0.5 = 0.2, which equals P(A ∩ B)." },
    { q: "If P(A) = 0.5, P(B) = 0.4 and P(A ∩ B) = 0.1, are the events independent?", a: "No", s: "0.5 × 0.4 = 0.2, which is not equal to 0.1." },
    { q: "A bag contains 2 red and 3 blue balls. Two are selected without replacement. Find the probability of two blue balls.", a: "3/10", s: "3/5 × 2/4 = 6/20 = 3/10." },
    { q: "A bag contains 2 red and 3 blue balls. Two are selected with replacement. Find the probability of two blue balls.", a: "9/25", s: "3/5 × 3/5 = 9/25." },
    { q: "If P(A) = 0.25 and P(B | A) = 0.4, find P(A ∩ B).", a: "0.1", s: "0.25 × 0.4 = 0.1." },
    { q: "If P(A ∩ B) = 0.24 and P(A) = 0.6, find P(B | A).", a: "0.4", s: "0.24 ÷ 0.6 = 0.4." },
    { q: "A bag contains 5 white and 5 black balls. Two are selected without replacement. Find the probability of different colours.", a: "5/9", s: "White then black = 5/10 × 5/9. Black then white = 5/10 × 5/9. Add to get 5/9." },
    { q: "If P(A) = 0.3 and P(B) = 0.7, and A and B are independent, find the probability that neither occurs.", a: "0.21", s: "P(A') × P(B') = 0.7 × 0.3 = 0.21." }

];


/* ==========================================
   5. UNIT 3: TREE DIAGRAMS
   ========================================== */

const unit3Examples = [

    {
        question: "A fair coin is tossed twice. Find the probability of getting two heads.",
        steps: [
            "First toss: P(H) = 1/2.",
            "Second toss: P(H) = 1/2.",
            "Multiply along the branches.",
            "P(HH) = 1/2 × 1/2."
        ],
        answer: "P(two heads) = 1/4."
    },

    {
        question: "A coin is tossed twice. Find the probability of getting exactly one head.",
        steps: [
            "Exactly one head can happen in two ways: HT or TH.",
            "P(HT) = 1/2 × 1/2 = 1/4.",
            "P(TH) = 1/2 × 1/2 = 1/4.",
            "Add the two paths."
        ],
        answer: "P(exactly one head) = 1/2."
    },

    {
        question: "A bag contains 3 red and 2 blue balls. Two balls are selected without replacement. Find the probability of two red balls.",
        steps: [
            "First red: 3/5.",
            "Second red: 2/4.",
            "Multiply along the red-red path.",
            "3/5 × 2/4 = 6/20."
        ],
        answer: "P(two red) = 3/10."
    },

    {
        question: "A bag contains 3 red and 2 blue balls. Two balls are selected without replacement. Find the probability of one red and one blue.",
        steps: [
            "Red then blue: 3/5 × 2/4 = 3/10.",
            "Blue then red: 2/5 × 3/4 = 3/10.",
            "Add both possible paths."
        ],
        answer: "P(one red and one blue) = 3/5."
    },

    {
        question: "A fair coin is tossed three times. Find the probability of getting three tails.",
        steps: [
            "Each tail has probability 1/2.",
            "The tosses are independent.",
            "P(TTT) = 1/2 × 1/2 × 1/2."
        ],
        answer: "P(three tails) = 1/8."
    },

    {
        question: "A bag contains 4 green and 6 yellow balls. Two balls are selected without replacement. Find the probability of at least one green ball.",
        steps: [
            "Use the complement rule.",
            "The opposite event is selecting two yellow balls.",
            "P(two yellow) = 6/10 × 5/9 = 1/3.",
            "P(at least one green) = 1 − 1/3."
        ],
        answer: "P(at least one green) = 2/3."
    },

    {
        question: "A bag contains 2 red and 3 blue balls. Two balls are selected with replacement. Find the probability of a red ball followed by a blue ball.",
        steps: [
            "P(red first) = 2/5.",
            "The first ball is replaced.",
            "P(blue second) = 3/5.",
            "Multiply: 2/5 × 3/5."
        ],
        answer: "P(red then blue) = 6/25."
    },

    {
        question: "A machine produces an item that is either good or defective. The probability of a defective item is 0.1. Two items are selected independently. Find the probability that both are good.",
        steps: [
            "P(good) = 1 − 0.1 = 0.9.",
            "The selections are independent.",
            "P(both good) = 0.9 × 0.9."
        ],
        answer: "P(both good) = 0.81."
    },

    {
        question: "A bag contains 5 white and 3 black balls. Two are selected without replacement. Find the probability of at least one black ball.",
        steps: [
            "The opposite event is selecting two white balls.",
            "P(two white) = 5/8 × 4/7 = 5/14.",
            "P(at least one black) = 1 − 5/14."
        ],
        answer: "P(at least one black) = 9/14."
    },

    {
        question: "A fair coin is tossed twice. Find the probability of getting at least one head.",
        steps: [
            "The opposite event is getting no heads, which means TT.",
            "P(TT) = 1/2 × 1/2 = 1/4.",
            "P(at least one head) = 1 − 1/4."
        ],
        answer: "P(at least one head) = 3/4."
    }

];


/* ==========================================
   UNIT 3 PRACTICE QUESTIONS
   ========================================== */

const unit3Practice = [

    { q: "A fair coin is tossed twice. Find P(HH).", a: "1/4", s: "1/2 × 1/2 = 1/4." },
    { q: "A fair coin is tossed twice. Find P(TT).", a: "1/4", s: "1/2 × 1/2 = 1/4." },
    { q: "A fair coin is tossed twice. Find the probability of exactly one tail.", a: "1/2", s: "HT or TH: 1/4 + 1/4 = 1/2." },
    { q: "A fair coin is tossed three times. Find the probability of three heads.", a: "1/8", s: "1/2 × 1/2 × 1/2 = 1/8." },
    { q: "A fair coin is tossed three times. Find the probability of no heads.", a: "1/8", s: "The only outcome is TTT, with probability 1/8." },
    { q: "A bag has 3 red and 2 blue balls. Two are selected without replacement. Find P(RR).", a: "3/10", s: "3/5 × 2/4 = 3/10." },
    { q: "A bag has 3 red and 2 blue balls. Two are selected without replacement. Find P(BB).", a: "1/10", s: "2/5 × 1/4 = 1/10." },
    { q: "A bag has 3 red and 2 blue balls. Two are selected without replacement. Find P(RB).", a: "3/10", s: "3/5 × 2/4 = 3/10." },
    { q: "A bag has 3 red and 2 blue balls. Two are selected without replacement. Find P(one of each colour).", a: "3/5", s: "RB = 3/10 and BR = 2/5 × 3/4 = 3/10. Total = 3/5." },
    { q: "A bag has 4 green and 6 yellow balls. Two are selected with replacement. Find P(GG).", a: "4/25", s: "4/10 × 4/10 = 16/100 = 4/25." },
    { q: "A bag has 4 green and 6 yellow balls. Two are selected without replacement. Find P(GG).", a: "2/15", s: "4/10 × 3/9 = 12/90 = 2/15." },
    { q: "A bag has 4 green and 6 yellow balls. Two are selected without replacement. Find P(YY).", a: "1/3", s: "6/10 × 5/9 = 30/90 = 1/3." },
    { q: "A bag has 4 green and 6 yellow balls. Two are selected without replacement. Find P(at least one green).", a: "2/3", s: "1 − P(YY) = 1 − 1/3 = 2/3." },
    { q: "A fair die is rolled twice. Find the probability of getting two sixes.", a: "1/36", s: "1/6 × 1/6 = 1/36." },
    { q: "A fair die is rolled twice. Find the probability of getting two even numbers.", a: "1/4", s: "3/6 × 3/6 = 1/4." },
    { q: "A bag has 5 white and 3 black balls. Two are selected without replacement. Find P(WW).", a: "5/14", s: "5/8 × 4/7 = 20/56 = 5/14." },
    { q: "A bag has 5 white and 3 black balls. Two are selected without replacement. Find P(BB).", a: "3/28", s: "3/8 × 2/7 = 6/56 = 3/28." },
    { q: "A bag has 5 white and 3 black balls. Two are selected without replacement. Find P(at least one black).", a: "9/14", s: "1 − P(WW) = 1 − 5/14 = 9/14." },
    { q: "A machine has a 0.2 probability of producing a defective item. Two independent items are selected. Find the probability that both are defective.", a: "0.04", s: "0.2 × 0.2 = 0.04." },
    { q: "A machine has a 0.2 probability of producing a defective item. Two independent items are selected. Find the probability that neither is defective.", a: "0.64", s: "P(good) = 0.8. Therefore 0.8 × 0.8 = 0.64." }

];


/* ==========================================
   6. DISPLAY WORKED EXAMPLES
   ========================================== */

function displayExamples(examples, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    examples.forEach((example, index) => {

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

                <h4>Step-by-step solution</h4>

                ${example.steps.map((step, i) => `
                    <p><strong>Step ${i + 1}:</strong> ${step}</p>
                `).join("")}

                <p class="final-answer">
                    Final Answer: ${example.answer}
                </p>

            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   7. DISPLAY PRACTICE QUESTIONS
   ========================================== */

function displayPractice(questions, containerId) {

    const container = document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    questions.forEach((item, index) => {

        const answerId = `${containerId}Answer${index}`;

        const card = document.createElement("div");
        card.className = "practice-card";

        card.innerHTML = `
            <span class="question-number">
                Question ${index + 1}
            </span>

            <p class="example-question">
                ${item.q}
            </p>

            <button class="answer-button"
                    onclick="toggleAnswer('${answerId}', this)">
                Show Answer
            </button>

            <div class="practice-answer" id="${answerId}" hidden>
                <p><strong>Answer:</strong> ${item.a}</p>
                <p><strong>Explanation:</strong> ${item.s}</p>
            </div>
        `;

        container.appendChild(card);

    });

}


/* ==========================================
   8. EXAM-LEVEL QUIZ QUESTIONS
   ========================================== */

const probabilityQuizzes = {

    1: [
        {
            q: "A die is rolled. A is getting an even number and B is getting a number greater than 3. Find P(A ∪ B).",
            options: ["1/2", "2/3", "5/6", "1/3"],
            answer: 1,
            explanation: "A = {2,4,6}, B = {4,5,6}. Their union is {2,4,5,6}, so the probability is 4/6 = 2/3."
        },
        {
            q: "If P(A) = 0.65, what is P(A')?",
            options: ["0.65", "0.45", "0.35", "1.65"],
            answer: 2,
            explanation: "P(A') = 1 − 0.65 = 0.35."
        },
        {
            q: "If P(A) = 0.5, P(B) = 0.6 and P(A ∩ B) = 0.3, find P(A ∪ B).",
            options: ["0.8", "1.1", "0.3", "0.6"],
            answer: 0,
            explanation: "P(A ∪ B) = 0.5 + 0.6 − 0.3 = 0.8."
        },
        {
            q: "Two events are mutually exclusive. P(A) = 0.25 and P(B) = 0.35. Find P(A ∪ B).",
            options: ["0.0875", "0.60", "0.25", "0.10"],
            answer: 1,
            explanation: "Mutually exclusive events have an intersection of zero. Add 0.25 + 0.35 = 0.60."
        },
        {
            q: "In a group of 50 learners, 30 study Mathematics, 25 study Science and 15 study both. How many study neither subject?",
            options: ["5", "10", "15", "20"],
            answer: 1,
            explanation: "At least one = 30 + 25 − 15 = 40. Neither = 50 − 40 = 10."
        },
        {
            q: "If P(A ∪ B) = 0.75, P(A) = 0.4 and P(B) = 0.5, find P(A ∩ B).",
    options: ["0.15", "0.25", "0.35", "0.90"],
    answer: 0,
    explanation: "P(A ∩ B) = 0.4 + 0.5 − 0.75 = 0.15."
        },
        {
            q: "A card is selected from a standard deck. What is the probability of selecting a king or a heart?",
            options: ["4/13", "1/4", "17/52", "16/52"],
            answer: 3,
            explanation: "There are 4 kings and 13 hearts, but the king of hearts is counted twice. Therefore (4 + 13 − 1)/52 = 16/52."
        },
        {
            q: "If P(A) = 0.4 and P(B) = 0.7, can A and B be mutually exclusive?",
            options: ["Yes, always", "No", "Only if P(A ∩ B) = 1", "Cannot be determined"],
            answer: 1,
            explanation: "For mutually exclusive events, their probabilities must add to no more than 1. Here 0.4 + 0.7 = 1.1, so they cannot be mutually exclusive."
        },
        {
            q: "If P(A') = 0.32, find P(A).",
            options: ["0.32", "0.68", "1.32", "0.78"],
            answer: 1,
            explanation: "P(A) = 1 − 0.32 = 0.68."
        },
        {
            q: "In a group of 60 learners, 35 like soccer, 28 like rugby and 12 like both. Find the probability that a learner likes soccer or rugby.",
            options: ["17/30", "17/20", "23/60", "1/2"],
            answer: 1,
            explanation: "The union is 35 + 28 − 12 = 51 learners. Probability = 51/60 = 17/20. The correct option should be 17/20."
        }
    ],

    2: [
        {
            q: "Two independent events have probabilities 0.4 and 0.7. Find the probability that both occur.",
            options: ["0.28", "1.1", "0.3", "0.11"],
            answer: 0,
            explanation: "For independent events, multiply: 0.4 × 0.7 = 0.28."
        },
        {
            q: "A bag contains 5 red and 3 blue balls. Two balls are selected without replacement. Find P(two red).",
            options: ["25/64", "5/14", "5/8", "3/14"],
            answer: 1,
            explanation: "P(RR) = 5/8 × 4/7 = 20/56 = 5/14."
        },
        {
            q: "A bag contains 5 red and 3 blue balls. Two balls are selected with replacement. Find P(two red).",
            options: ["5/14", "25/64", "5/8", "1/2"],
            answer: 1,
            explanation: "With replacement, the probability remains 5/8. Therefore 5/8 × 5/8 = 25/64."
        },
        {
            q: "If P(A) = 0.5 and P(A ∩ B) = 0.2, find P(B | A).",
            options: ["0.7", "0.4", "0.1", "0.25"],
            answer: 1,
            explanation: "P(B | A) = P(A ∩ B)/P(A) = 0.2/0.5 = 0.4."
        },
        {
            q: "If P(A) = 0.6 and P(B | A) = 0.5, find P(A ∩ B).",
            options: ["0.3", "1.1", "0.5", "0.2"],
            answer: 0,
            explanation: "P(A ∩ B) = P(A) × P(B | A) = 0.6 × 0.5 = 0.3."
        },
        {
            q: "A die is rolled twice. Find the probability of getting an odd number followed by an even number.",
            options: ["1/6", "1/4", "1/2", "1/3"],
            answer: 1,
            explanation: "P(odd) = 1/2 and P(even) = 1/2. The rolls are independent, so 1/2 × 1/2 = 1/4."
        },
        {
            q: "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, the events are:",
            options: ["Mutually exclusive", "Independent", "Impossible", "Complementary"],
            answer: 1,
            explanation: "P(A) × P(B) = 0.4 × 0.5 = 0.2, which equals P(A ∩ B). Therefore they are independent."
        },
        {
            q: "A bag contains 3 white and 2 black balls. Two are selected without replacement. Find P(one white and one black).",
            options: ["3/10", "1/2", "3/5", "2/5"],
            answer: 2,
            explanation: "WB = 3/5 × 2/4 = 3/10. BW = 2/5 × 3/4 = 3/10. Add to get 3/5."
        },
        {
            q: "If P(A) = 0.3 and P(B) = 0.4, and the events are independent, find the probability that neither occurs.",
            options: ["0.12", "0.42", "0.30", "0.18"],
            answer: 1,
            explanation: "P(A') = 0.7 and P(B') = 0.6. Multiply: 0.7 × 0.6 = 0.42."
        },
        {
            q: "A bag contains 4 green and 6 yellow balls. Two are selected without replacement. Find P(green first, yellow second).",
            options: ["2/5", "4/15", "1/3", "3/5"],
            answer: 1,
            explanation: "P(GY) = 4/10 × 6/9 = 24/90 = 4/15."
        }
    ],

    3: [
        {
            q: "A fair coin is tossed twice. Find the probability of exactly one head.",
            options: ["1/4", "1/2", "3/4", "1/8"],
            answer: 1,
            explanation: "The outcomes are HT and TH. Each has probability 1/4. Add them: 1/2."
        },
        {
            q: "A bag contains 3 red and 2 blue balls. Two are selected without replacement. Find P(two blue).",
            options: ["1/10", "1/5", "2/5", "3/10"],
            answer: 0,
            explanation: "P(BB) = 2/5 × 1/4 = 2/20 = 1/10."
        },
        {
            q: "A fair coin is tossed three times. Find the probability of at least one head.",
            options: ["1/8", "3/8", "7/8", "1/2"],
            answer: 2,
            explanation: "Use the complement: P(at least one head) = 1 − P(TTT) = 1 − 1/8 = 7/8."
        },
        {
            q: "A bag contains 4 red and 6 blue balls. Two are selected without replacement. Find P(red then blue).",
            options: ["2/5", "4/15", "1/3", "3/5"],
            answer: 1,
            explanation: "P(RB) = 4/10 × 6/9 = 24/90 = 4/15."
        },
        {
            q: "A bag contains 4 red and 6 blue balls. Two are selected without replacement. Find P(one of each colour).",
            options: ["4/15", "2/5", "8/15", "3/5"],
            answer: 2,
            explanation: "RB = 4/10 × 6/9 = 4/15. BR = 6/10 × 4/9 = 4/15. Total = 8/15."
        },
        {
            q: "A coin is tossed twice. What is the probability of getting no heads?",
            options: ["1/4", "1/2", "3/4", "1/8"],
            answer: 0,
            explanation: "No heads means TT. P(TT) = 1/2 × 1/2 = 1/4."
        },
        {
            q: "A bag contains 5 white and 3 black balls. Two are selected without replacement. Find P(at least one black).",
            options: ["5/14", "9/14", "3/8", "1/2"],
            answer: 1,
            explanation: "Use the complement: 1 − P(WW) = 1 − (5/8 × 4/7) = 1 − 5/14 = 9/14."
        },
        {
            q: "A machine produces a defective item with probability 0.1. Two independent items are selected. Find the probability that exactly one is defective.",
            options: ["0.01", "0.18", "0.19", "0.81"],
            answer: 1,
            explanation: "Defective then good = 0.1 × 0.9 = 0.09. Good then defective = 0.9 × 0.1 = 0.09. Total = 0.18."
        },
        {
            q: "A bag contains 2 red and 3 blue balls. Two are selected with replacement. Find P(red then blue).",
            options: ["6/25", "3/10", "2/5", "1/5"],
            answer: 0,
            explanation: "P(RB) = 2/5 × 3/5 = 6/25."
        },
        {
            q: "A bag contains 2 red and 3 blue balls. Two are selected without replacement. Find P(red then blue).",
            options: ["6/25", "3/10", "1/5", "3/5"],
            answer: 1,
            explanation: "P(RB) = 2/5 × 3/4 = 6/20 = 3/10."
        }
    ]

};


/* ==========================================
   9. CREATE QUIZZES
   ========================================== */

function createProbabilityQuiz(unitNumber) {

    const questions = probabilityQuizzes[unitNumber];

    const area = document.getElementById(`unit${unitNumber}QuizArea`);
    const results = document.getElementById(`unit${unitNumber}QuizResults`);

    if (!area || !questions) return;

    results.hidden = true;

    area.innerHTML = `
        <h3>Probability Exam Practice</h3>

        <p>
            Answer all 10 questions. Select one answer for
            each question before submitting.
        </p>

        <form id="probabilityQuizForm${unitNumber}">
            <div id="probabilityQuestions${unitNumber}"></div>

            <button type="submit" class="quiz-button">
                Submit Quiz
            </button>
        </form>
    `;

    const questionContainer = document.getElementById(
        `probabilityQuestions${unitNumber}`
    );

    questions.forEach((question, index) => {

        const card = document.createElement("div");
        card.className = "quiz-question-card";

        card.innerHTML = `
            <h3>Question ${index + 1}</h3>

            <p>${question.q}</p>

            ${question.options.map((option, optionIndex) => `
                <label class="quiz-option">
                    <input
                        type="radio"
                        name="question${index}"
                        value="${optionIndex}"
                    >
                    ${String.fromCharCode(65 + optionIndex)}.
                    ${option}
                </label>
            `).join("")}
        `;

        questionContainer.appendChild(card);

    });

    document.getElementById(`probabilityQuizForm${unitNumber}`)
        .addEventListener("submit", function(event) {
            event.preventDefault();
            submitProbabilityQuiz(unitNumber);
        });

}


/* ==========================================
   10. MARK QUIZZES AND SHOW CORRECTIONS
   ========================================== */

function submitProbabilityQuiz(unitNumber) {

    const questions = probabilityQuizzes[unitNumber];

    const form = document.getElementById(
        `probabilityQuizForm${unitNumber}`
    );

    if (!form || !questions) return;

    const formData = new FormData(form);

    let score = 0;
    let unanswered = 0;

    const corrections = [];

    questions.forEach((question, index) => {

        const selected = formData.get(`question${index}`);
        const isCorrect = selected !== null &&
            Number(selected) === question.answer;

        if (selected === null) {
            unanswered++;
        }

        if (isCorrect) {
            score++;
        }

        const learnerAnswer = selected === null
            ? "Not answered"
            : question.options[Number(selected)];

        const correctAnswer = question.options[question.answer];

        corrections.push(`
            <div class="quiz-correction">

                <h4>Question ${index + 1}</h4>

                <p>${question.q}</p>

                <p class="${isCorrect ? "correct-answer" : "wrong-answer"}">
                    Your answer: ${learnerAnswer}
                </p>

                <p class="correct-answer">
                    Correct answer: ${correctAnswer}
                </p>

                <p>
                    <strong>Explanation:</strong>
                    ${question.explanation}
                </p>

            </div>
        `);

    });

    const percentage = Math.round((score / questions.length) * 100);

    let feedback;

    if (percentage >= 80) {
        feedback = "Excellent work! You have a strong understanding of this unit.";
    } else if (percentage >= 60) {
        feedback = "Good effort! Review the corrections and practise the questions you missed.";
    } else if (percentage >= 40) {
        feedback = "You are making progress. Go through the notes and worked examples again.";
    } else {
        feedback = "Keep practising. Review the notes and examples before trying again.";
    }

    const scoreElement = document.getElementById(
        `unit${unitNumber}QuizScore`
    );

    const correctionElement = document.getElementById(
        `unit${unitNumber}QuizCorrections`
    );

    const results = document.getElementById(
        `unit${unitNumber}QuizResults`
    );

    scoreElement.innerHTML = `
        <strong>Score: ${score} / ${questions.length}</strong><br>
        <strong>Percentage: ${percentage}%</strong><br>
        <strong>Unanswered questions: ${unanswered}</strong><br><br>
        ${feedback}
    `;

    correctionElement.innerHTML = `
        <h3>Quiz Corrections</h3>
        ${corrections.join("")}
    `;

    results.hidden = false;

    form.querySelectorAll("input, button").forEach(element => {
        element.disabled = true;
    });

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   11. RETRY QUIZ
   ========================================== */

function retryProbabilityQuiz(unitNumber) {

    createProbabilityQuiz(unitNumber);

    const quizSection = document.getElementById(
        `unit${unitNumber}Quiz`
    );

    if (quizSection) {
        quizSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }

}


/* ==========================================
   12. TREE DIAGRAM VISUAL
   ========================================== */

function displayTreeDiagram() {

    const notes = document.getElementById("unit3Notes");

    if (!notes || notes.querySelector(".tree-diagram")) return;

    const diagram = document.createElement("div");
    diagram.className = "tree-diagram";

    diagram.innerHTML = `
        <h3>Example: Tossing a coin twice</h3>

        <svg viewBox="0 0 600 300"
             role="img"
             aria-label="Tree diagram showing the outcomes of tossing a coin twice">

            <line x1="60" y1="150" x2="200" y2="70"/>
            <line x1="60" y1="150" x2="200" y2="230"/>

            <line x1="200" y1="70" x2="380" y2="35"/>
            <line x1="200" y1="70" x2="380" y2="105"/>

            <line x1="200" y1="230" x2="380" y2="195"/>
            <line x1="200" y1="230" x2="380" y2="265"/>

            <text x="35" y="155">Start</text>

            <text x="120" y="95">H (1/2)</text>
            <text x="120" y="220">T (1/2)</text>

            <text x="230" y="35">H (1/2)</text>
            <text x="230" y="115">T (1/2)</text>
            <text x="230" y="195">H (1/2)</text>
            <text x="230" y="275">T (1/2)</text>

            <text x="410" y="40">HH (1/4)</text>
            <text x="410" y="110">HT (1/4)</text>
            <text x="410" y="200">TH (1/4)</text>
            <text x="410" y="270">TT (1/4)</text>

        </svg>

        <p>
            Each complete path represents one possible outcome.
            Multiply along each path to calculate its probability.
        </p>
    `;

    notes.appendChild(diagram);

}


/* ==========================================
   13. LOAD EVERYTHING
   ========================================== */

document.addEventListener("DOMContentLoaded", function() {

    // Unit 1
    displayExamples(unit1Examples, "unit1WorkedExamples");
    displayPractice(unit1Practice, "unit1Questions");

    // Unit 2
    displayExamples(unit2Examples, "unit2WorkedExamples");
    displayPractice(unit2Practice, "unit2Questions");

    // Unit 3
    displayExamples(unit3Examples, "unit3WorkedExamples");
    displayPractice(unit3Practice, "unit3Questions");

    // Tree diagram
    displayTreeDiagram();

    // Quizzes
    createProbabilityQuiz(1);
    createProbabilityQuiz(2);
    createProbabilityQuiz(3);

    console.log("MathsHelpSA Probability loaded successfully.");

});
