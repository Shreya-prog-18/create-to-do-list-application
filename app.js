document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
    taskList.addEventListener('click', handleTaskClick);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${taskText}</span>
                <button class="deleteBtn"><i class="fas fa-trash"></i></button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function handleTaskClick(e) {
        if (e.target.classList.contains('deleteBtn') || e.target.parentElement.classList.contains('deleteBtn')) {
            const li = e.target.closest('li');
            taskList.removeChild(li);
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.classList.toggle('completed');
        }
    }
});
