// Function to check the user's selected answer
function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "#28a745";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "#dc3545";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "#ffc107";
    }
}

// Attach event listener to the button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
