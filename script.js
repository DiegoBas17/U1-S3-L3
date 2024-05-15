const addNewTasks = document.getElementById("addNewTasks");
addNewTasks.addEventListener("submit", function (event) {
  event.preventDefault();
  const newTaskInputField = document.getElementById("newTask");
  const newList = {
    task: newTaskInputField.value,
  };
  const elementiLista = document.getElementById("elementiLista");

  const paragrafiLista = document.createElement("div");
  paragrafiLista.classList.add("paragrafiLista");

  const elementoLista = document.createElement("p");
  elementoLista.innerText = newTaskInputField.value;
  elementoLista.addEventListener("click", function () {
    elementoLista.classList.toggle("completato");
  });

  const taskButton = document.createElement("button");
  taskButton.innerText = "cancella";
  taskButton.addEventListener("click", function () {
    elementiLista.removeChild(paragrafiLista);
  });
  /* Appendiamo gli elementi */
  elementiLista.appendChild(paragrafiLista);
  /*  paragrafiLista.appendChild(elementoLista);
  paragrafiLista.appendChild(taskButton); */
  paragrafiLista.append(elementoLista, taskButton);
  /* ho ridotto di una riga il codice */

  newTaskInputField.value = "";
});
