console.log("script.js connected!");

let userAnswers = {}

let buttons = document.querySelectorAll(".question-block .answer-btn");
console.log(buttons);

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let questionBlock = button.closest(".question-block");
        let allButtonsInBlock = questionBlock.querySelectorAll(".answer-btn");

        allButtonsInBlock.forEach(function(btn) {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

        let selectedAnswer = button.getAttribute("data-answer");

        let questionId = questionBlock.getAttribute("data-question-id");

        userAnswers[questionId] = selectedAnswer;

        console.log("Selected answer:", selectedAnswer);
    });
});

