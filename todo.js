// variables to hold our id elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Initialize tasks array
let tasks = [];

// Function to add task
function addTask(task) {
    tasks.push(task);
    renderTasks();
}

// Function to render tasks
function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskHTML = `
            <li>
                <input type="checkbox" data-index="${index}" ${task.completed ? 'checked' : ''}>
                <span>${task.name}</span>
                <button class="delete-btn" data-index="${index}">Delete</button>
            </li>
        `;
        taskList.insertAdjacentHTML('beforeend', taskHTML);
    });
}

// Function to toggle task completion
function toggleTaskCompletion(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Function to delete task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Event listeners
addTaskBtn.addEventListener('click', () => {
  const taskName = taskInput.value.trim();
  if (taskName) {
      addTask({ name: taskName, completed: false });
      taskInput.value = '';
  }
});

taskList.addEventListener('change', (e) => {
  if (e.target.type === 'checkbox') {
      const index = e.target.dataset.index;
      toggleTaskCompletion(index);
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
      const index = e.target.dataset.index;
      deleteTask(index);
  }
});

// Initialize app
renderTasks();


