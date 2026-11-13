
// Check whether the JavaScript file is connected
console.log("Grades page JavaScript is connected!");

// Select all grade cards
const gradeCards = document.querySelectorAll(".grade-card");

// Add a message when a learner clicks a grade button
gradeCards.forEach(function(card) {

    const button = card.querySelector(".grade-button");

    button.addEventListener("click", function() {
        console.log("Learner selected: " + card.querySelector("h3").textContent);
    });

});
