console.log("script.js connected!");

let userAnswers = {};

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

function displayResult() {
    let stylePoints = {
        "Goblin Barrel": 0,
        "Wizard": 0
    };

    for (let questionId in userAnswers) {
        let questionBlock = document.querySelector(`.question-block[data-question-id="${questionId}"]`);
        
        let selectedButton = questionBlock.querySelector(`button[data-answer="${userAnswers[questionId]}"]`);

        if (selectedButton) {
            let style = selectedButton.getAttribute("data-style");
            let points = parseInt(selectedButton.getAttribute("data-points"), 10);

            stylePoints[style] += points;
        }
    }
    let resultStyle = null;
    if (stylePoints["Goblin Barrel"] > stylePoints["Wizard"]) {
        resultStyle = "Goblin Barrel";
    } else if (stylePoints["Wizard"] > stylePoints["Goblin Barrel"]) {
        resultStyle = "Wizard";
    } else {
        resultStyle = "You're a mix";
    }

    let message = "";
    if (resultStyle == "Goblin Barrel") {
        message = "You are a Goblin Barrel!";
    } else if (resultStyle == "Wizard") {
        message = "You are a Wizard";
    } else {
        message = "You have style of both";
    }

    let resultContainer = document.getElementById("result-container");
    let resultText = document.getElementById("result-text");
    
    resultText.textContent = message;
    resultContainer.style.display = "block";
}

document.getElementById("show-results").addEventListener("click", displayResult);