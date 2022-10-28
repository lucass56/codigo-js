var form = document.getElementById("taskForm");
var taskList = document.getElementById("taskList");

form.addEventListener("submit", (event) => {
event.preventDefault();
var data = new FormData(event.target);
var task = Object.fromEntries(data);

var newTask = document.createElement("span");
newTask.classList.add("taskItem")
newTask.append(submit.task)

taskList.appendChild(newTask)
});