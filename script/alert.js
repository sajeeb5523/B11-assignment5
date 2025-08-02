document.getElementById('alert').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Fix Mobile Button Issue');
    alert('Board updated successfully');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

document.getElementById('alert1').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Add Dark Mode');
    alert('Board updated successfully');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

document.getElementById('alert2').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Optimize Home page');
    alert('Board updated successfully');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

document.getElementById('alert3').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Add new emoji 🤲');
    alert('Board updated successfully');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

document.getElementById('alert4').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Integrate OpenAI API');
    alert('Board updated successfully');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

document.getElementById('alert5').addEventListener('click', function () {
    addActivityLogEntry('You have Complete The Task Improve Job searching');
    alert('Board updated successfully');
    alert('congrats!!! You have completed all the current task');

    const taskCountElement = document.querySelector('h2.font-bold.text-3xl.mb-2');
    let currentCount = parseInt(taskCountElement.textContent);
    if (currentCount > 0) {
        taskCountElement.textContent = currentCount - 1;
    }
    this.disabled = true;
    this.textContent = 'Completed';
    this.classList.add('cursor-not-allowed');
})

function addActivityLogEntry(message) {
    const activityLogContent = document.getElementById('activityLogContent');
    const currentTime = new Date().toLocaleTimeString();

    const logEntry = document.createElement('div');
    logEntry.className = 'bg-white p-3 mb-2 rounded-lg shadow-sm';
    logEntry.innerHTML = `
        <div class="text-sm font-medium text-gray-800">${message} at ${currentTime}</div>
    `;

    activityLogContent.appendChild(logEntry);
}

document.getElementById('clearHistory').addEventListener('click', function () {
    const activityLogContent = document.getElementById('activityLogContent');
    activityLogContent.innerHTML = '';
    alert('Activity log cleared successfully!');
});
