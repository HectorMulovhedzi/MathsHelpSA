
function showGrade(gradeId, clickedButton) {

    // Hide all grade sections
    const sections = document.querySelectorAll(".paper-section");

    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Show selected grade
    const selectedGrade = document.getElementById(gradeId);

    if (selectedGrade) {
        selectedGrade.style.display = "block";
    }

    // Remove active class from all buttons
    const buttons = document.querySelectorAll(".grade-button");

    buttons.forEach(function(button) {
        button.classList.remove("active");
    });

    // Highlight selected button
    clickedButton.classList.add("active");
}


// Display Grade 11 when the page first opens
document.addEventListener("DOMContentLoaded", function() {

    const grade11 = document.getElementById("grade11");
    const grade12 = document.getElementById("grade12");

    if (grade11) {
        grade11.style.display = "block";
    }

    if (grade12) {
        grade12.style.display = "none";
    }

});
