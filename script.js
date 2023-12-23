const showButton = document.querySelectorAll(".minus");

showButton.forEach(function (button, index) {
  button.addEventListener("click", function () {
    const answerParagraph = document.querySelector(
      `.answer[data-ans="${index}"]`
    );
    if (answerParagraph.classList.contains("hidden")) {
      button.src = `assets/images/icon-minus.svg`;
    } else {
      button.src = `assets/images/icon-plus.svg`;
    }
    answerParagraph.classList.toggle("hidden");
  });
});
