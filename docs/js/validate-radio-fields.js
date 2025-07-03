function checkAnswers() {
  let correctAnwers = 0;

  clean();
   
  answers.forEach((answer, index) => {
    const radio = document.getElementsByName(`question${index + 1}`);
    var userAnswer = null;
    var userAnswerIndex;
    
    for (i = 0; i < radio.length; i++) {
      if (radio[i].checked) {
        userAnswer = radio[i].value;
        userAnswerIndex = i;
        break;
      }
    }
    
    if (userAnswer === null) {
      radio[answer.charCodeAt(0)-97].classList.add("is-valid");
      return;
    }
    
    if (userAnswer === answer) {
      // Mark as correct
      radio[userAnswerIndex].classList.remove("is-invalid");
      radio[userAnswerIndex].classList.add("is-valid");
      correctAnwers++;
    } else {
      // Mark as incorrect and show correct answer
      radio[userAnswerIndex].classList.remove("is-valid");
      radio[userAnswerIndex].classList.add("is-invalid");
      
      radio[answer.charCodeAt(0)-97].classList.remove("is-invalid");
      radio[answer.charCodeAt(0)-97].classList.add("is-valid");
    }
  });

  //alert(`Você acertou ${correctAnwers} de ${answers.length} questões.`);
}

function tryAgain() {
  answers.forEach((_, index) => {
    const radio = document.getElementsByName(`question${index + 1}`);
    for (i = 0; i < radio.length; i++) {
      radio[i].checked = false;
      radio[i].classList.remove("is-valid", "is-invalid");
    }
  });
}

function clean() {
  answers.forEach((_, index) => {
    const radio = document.getElementsByName(`question${index + 1}`);
    for (i = 0; i < radio.length; i++) {
      radio[i].classList.remove("is-valid", "is-invalid");
    }
  });
}  

