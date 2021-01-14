document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskInput = document.getElementById('new-task-description');
  const toDoList = document.getElementById("tasks");
  const prioritySelectInput = document.createElement("select"); 

  addPrioritySelect();

  taskForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const taskLi = document.createElement("li");
    taskLi.textContent = taskInput.value;
    taskLi.style.color = prioritySelectInput.value;
    toDoList.appendChild(taskLi);
    taskForm.reset();
  })

  function addPrioritySelect() {
    prioritySelectInput.add(new Option("High", "red"));
    prioritySelectInput.add(new Option("Low", "green"));
    prioritySelectInput.add(new Option("Medium", "yellow"));
    taskForm.prepend(prioritySelectInput);
  }


});


