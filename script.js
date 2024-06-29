document.addEventListener('DOMContentLoaded', () => {
    const tasks = document.getElementById('tasks');
    const newTaskBtn = document.getElementById('new-task-btn');

    newTaskBtn.addEventListener('click', () => {
        const taskName = prompt('Enter the new task:');
        if (taskName) {
            const li = document.createElement('li');
            li.classList.add('task');
            li.innerHTML = `<input type="checkbox"> <label>${taskName}</label> <button class="delete-btn">🗑️</button>`;
            tasks.appendChild(li);
        }
    });

    tasks.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            event.target.parentElement.remove();
        }
    });
});
