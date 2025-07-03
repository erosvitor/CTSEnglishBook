function createQuestions() {
  const divQuestions = document.getElementById("divQuestions");

  questions.forEach((question, index) => {
    const row = document.createElement("div");
    row.className = "row mb-3";

    const label = document.createElement("label");
    label.className = "col-sm-3 col-form-label";
    label.textContent = `${index + 1}. ${question}`;

    const inputCol = document.createElement("div");
    inputCol.className = "col-sm-9";

    const input = document.createElement("input");
    input.id = `inputQuestion${index + 1}`;
    input.type = "text";
    input.className = "form-control";

    inputCol.appendChild(input);
    row.appendChild(label);
    row.appendChild(inputCol);

    divQuestions.appendChild(row);
  });
}

