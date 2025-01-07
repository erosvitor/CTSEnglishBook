function createQuestions() {
  const divQuestions = document.getElementById('divQuestions');

  questions.forEach((question, index) => {
    const div = document.createElement('div');
    div.className = 'row mb-3 g-3 align-items-center';
    div.innerHTML = `
      <div class="col-auto">
        <label class="col-form-label">${index + 1}. ${question.labelBefore}</label>
      </div>
      <div class="col-auto">
        <input id="inputQuestion${index + 1}" type="text" class="form-control">
      </div>
      <div class="col-auto">
        <label class="col-form-label">${question.labelAfter}</label>
      </div>
    `;
    divQuestions.appendChild(div);
  });
}

