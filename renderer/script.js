const calendarButton = document.getElementById('calendar-button');
const taskListButton = document.getElementById('task-list-button');
const notesButton = document.getElementById('notes-button');
const settingsButton = document.getElementById('settings-button');

const calendarIcon = document.getElementById('calendar-icon');
const taskListIcon = document.getElementById('task-list-icon');
const notesIcon = document.getElementById('notes-icon');
const settingsIcon = document.getElementById('settings-icon');

const calendar = document.querySelector('.calendar');
const taskBar = document.querySelector('.task-bar');
const taskList = document.querySelector('.task-list');
const notes = document.querySelector('.notes');
const settings = document.querySelector('.settings');

calendarButton.addEventListener('click', () => {
    calendar.style.display = 'block';
    taskBar.style.display = 'block';
    taskList.style.display = 'none';
    notes.style.display = 'none';
    settings.style.display = 'none';
});
taskListButton.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'block';
    notes.style.display = 'none';
    settings.style.display = 'none';
});
notesButton.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'none';
    notes.style.display = 'block';
    settings.style.display = 'none';
});
settingsButton.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'none';
    notes.style.display = 'none';
    settings.style.display = 'block';
});
calendarIcon.addEventListener('click', () => {
    calendar.style.display = 'block';
    taskBar.style.display = 'block';
    taskList.style.display = 'none';
    notes.style.display = 'none';
    settings.style.display = 'none';
});
taskListIcon.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'block';
    notes.style.display = 'none';
    settings.style.display = 'none';
});
notesIcon.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'none';
    notes.style.display = 'block';
    settings.style.display = 'none';
});
settingsIcon.addEventListener('click', () => {
    calendar.style.display = 'none';
    taskBar.style.display = 'none';
    taskList.style.display = 'none';
    notes.style.display = 'none';
    settings.style.display = 'block';
});