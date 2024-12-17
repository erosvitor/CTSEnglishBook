function checkAnswers() {
  let correctAnwers = 0;

  answers.forEach((answer, index) => {
    const input = document.getElementById(`edtQuestion${index + 1}`);
    const userAnswer = input.value.trim().toLowerCase();

    input.nextElementSibling?.remove(); // Remove old message if exists

    if (userAnswer.length > 0 && answer.toLowerCase().includes(userAnswer)) {
      // Mark as correct
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
      correctAnwers++;
    } else {
      // Mark as incorrect and show correct answer
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
      const feedback = document.createElement("div");
      feedback.className = "text-danger small mt-1";
      feedback.innerText = `resposta correta: "${answer}"`;
      input.parentNode.appendChild(feedback);
    }
  });

  //alert(`Você acertou ${correctAnwers} de ${answers.length} questões.`);
}

function tryAgain() {
  answers.forEach((_, index) => {
    const input = document.getElementById(`edtQuestion${index + 1}`);
    input.value = "";
    input.classList.remove("is-valid", "is-invalid");
    input.nextElementSibling?.remove(); // Remove message
  });
}  

