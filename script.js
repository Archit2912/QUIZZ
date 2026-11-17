
// Correct answers
const answers = {
    q1: "a",
    q2: "b",
    q3: "c"
};

// Get HTML elements
const form = document.getElementById("quizForm");
const result = document.getElementById("result");

// Handle quiz submission
form.addEventListener("submit", function(event) {

    event.preventDefault();

    let score = 0;

    const totalQuestions = Object.keys(answers).length;

    // Check selected answers
    for (let question in answers) {

        const selected = form.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    // Calculate percentage
    const percentage = (score / totalQuestions) * 100;

    // Display score
    document.getElementById("score").textContent =
        `Your Score: ${score} / ${totalQuestions}`;

    document.getElementById("percentage").textContent =
        `Percentage: ${percentage.toFixed(2)}%`;

    // Display feedback
    let feedback = "";

    if (score === 3) {
        feedback = "Excellent! All answers are correct!";
    }
    else if (score >= 2) {
        feedback = "Good job! Keep learning.";
    }
    else {
        feedback = "Keep practicing. You can do better!";
    }

    document.getElementById("feedback").textContent = feedback;

    // Show result
    result.classList.remove("hidden");

    // Disable submit button
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = true;
    submitBtn.classList.add("opacity-50");

    // Disable answer changes
    form.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    // Scroll to result
    result.scrollIntoView({ behavior: "smooth" });

});


// Restart quiz
function restartQuiz() {

    // Reset all answers
    form.reset();

    // Enable radio buttons
    form.querySelectorAll("input").forEach(input => {
        input.disabled = false;
    });

    // Enable submit button
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.disabled = false;
    submitBtn.classList.remove("opacity-50");

    // Hide previous result
    result.classList.add("hidden");

}
