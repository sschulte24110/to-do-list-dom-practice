console.log('Hello');

/*
  Steps:
   1. Make the index.html (done)
   2. Make sure we can submit and clear the form
   3. Add task to the list
   4. Update task count
   5. Delete Task
   6. Clear Tasks
*/

let taskCount = 0;

function addTask(event) {
  event.preventDefault();

  let taskName = document.getElementById('task-name').value;
  let taskPriority = document.getElementById('task-priority').value;
  
  appendTask(taskName, taskPriority);  

  document.getElementById('task-name').value = '';
}

function appendTask(taskName, taskPriority) {
  document.getElementById('task-list').innerHTML += `
  <li>${taskName} (priority: ${taskPriority}) <button onclick="deleteTask(event)">Delete</button></li>
  `;
  
  taskCount++;
  renderTaskCount();
}

function deleteTask(event) {
  event.target.parentElement.remove();

  taskCount--;
  renderTaskCount();
}

function clearTasks() {
  document.getElementById('task-list').innerHTML = '';

  taskCount = 0;

  renderTaskCount();
}

function renderTaskCount() {
  document.getElementById('task-count').innerText = taskCount;
}

function onReady() {
  clearTasks();
}

onReady();