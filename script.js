document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task');
    const dateInput = document.getElementById('date');
    const timeInput = document.getElementById('time');
    const addButton = document.getElementById('addTask');
    const taskList = document.getElementById('tasks');

    addButton.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        const date = dateInput.value;
        const time = timeInput.value;

        if (taskText !== '') {
            const taskElement = document.createElement('li');
            taskElement.innerHTML = `
                <input type="checkbox" class="task-checkbox">
                <span class="task-text">${taskText}</span>
                <span class="task-datetime">${date} ${time}</span>
                <button class="remove-task">Remove</button>
            `;

            taskList.appendChild(taskElement);

            // Clear input fields
            taskInput.value = '';
            dateInput.value = '';
            timeInput.value = '';

            // Add event listeners for checkbox and remove button
            const taskCheckbox = taskElement.querySelector('.task-checkbox');
            const removeButton = taskElement.querySelector('.remove-task');

            taskCheckbox.addEventListener('change', markAsDone);
            removeButton.addEventListener('click', removeTask);
        }
    }

    function markAsDone() {
        const taskText = this.nextElementSibling; // The span element containing task text
        if (this.checked) {
            taskText.style.textDecoration = 'line-through';
        } else {
            taskText.style.textDecoration = 'none';
        }
    }

    function removeTask() {
        this.parentElement.remove();
    }
});
