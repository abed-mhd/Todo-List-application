import { filterTasksByCompletion, countTasks, generateRandomID } from './utils.js';

log.setLevel("info"); // I chose 'info', but i could have set it to 'warn', 'debug', 'error'
//log.setLevel("error"); 
//log.setLevel("warn"); 
//log.setLevel("debug"); // Looks the same as 'info' to me.

const ListsContainer = document.querySelector('[data-lists-container]');
const ListForm = document.querySelector('[data-new-list-form]');
const ListInput = document.querySelector('[data-new-list-input]');
const ListTasksContainer = document.getElementById('list-tasks');
const HeaderTitle = document.querySelector('[data-header-title]');
const HeaderTasksRemaining = document.querySelector('[data-header-tasks-remaining]');
const TasksContainer = document.querySelector('[data-tasks-container]')
const TaskForm = document.querySelector('[data-new-task-form]');
const TaskInput = document.querySelector('[data-new-task-input]');
const ClearTasksButton = document.querySelector('[data-clear-tasks-button]');
const ClearListButton = document.querySelector('[data-delete-list-button]');

ClearListButton.addEventListener('click', () => {
    DeleteSelectedList();
});

ClearTasksButton.addEventListener('click', () => {
    ClearCheckedTasks();
});

const LOCAL_STORAGE_LISTS_KEY = 'task.lists';
const LOCAL_STORAGE_SELECTED_ID_KEY = 'list.id';
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LISTS_KEY)) || [];
let selected_id = localStorage.getItem(LOCAL_STORAGE_SELECTED_ID_KEY);

ListForm.addEventListener('submit', e => {
    e.preventDefault();
    const ListName = ListInput.value;
    if (!ListName) {
        log.warn('Attempted to create a list with an empty name');
        return;
    }
    const List = CreateList(ListName);
    lists.push(List);
    ListInput.value = null;
    log.info(`New list created: ${ListName}`);
    render();
    Save();
});

TaskForm.addEventListener('submit', e => {
    e.preventDefault();
    const TaskName = TaskInput.value;
    if (!TaskName) {
        log.warn('Attempted to create a task with an empty name');
        return;
    }
    const Task = CreateTask(TaskName);
    TaskInput.value = null;
    const selectedList = lists.find(list => list.id === selected_id);
    selectedList.tasks.push(Task);
    log.info(`New task created: ${TaskName} for list ${selectedList.name}`);
    render();
    Save();
});

ListsContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'li') {
        selected_id = e.target.dataset.id;
        render();
        Save();
    }
});

TasksContainer.addEventListener('click', e => {
    if (e.target.tagName.toLowerCase() === 'div') {
        const selectedList = lists.find(list => list.id === selected_id);
        const selectedTask = selectedList.tasks.find(task => task.id ===
            e.target.querySelector('input').id);
        selectedTask.completed = !selectedTask.completed;
        render();
        Save();
    }
});

function render() {
    ClearElement(ListsContainer);
    if (lists.length === 0) return;

    lists.forEach(list => {
        const listElement = document.createElement('li');
        listElement.classList.add('list');
        listElement.dataset.id = list.id;
        if (listElement.dataset.id === selected_id) {
            ClearElement(TasksContainer);
            listElement.classList.add('selected');
            ListTasksContainer.style.display = 'block';

            const completedTasks = filterTasksByCompletion(list.tasks, true);

            list.tasks.forEach(task => {
                const Task = document.createElement('div');
                Task.classList.add('task');
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = task.id;
                checkbox.checked = task.completed;
                checkbox.classList.add('checkboxex');
                const Label = document.createElement('label');
                Label.htmlFor = task.id;
                Label.innerText = task.name;
                Task.append(checkbox, Label);
                TasksContainer.append(Task);
            });

            HeaderTitle.innerText = list.name;
            HeaderTasksRemaining.innerText = `${list.tasks.length - completedTasks.length} Tasks Remaining`;
        }
        listElement.innerText = list.name;
        ListsContainer.append(listElement);
    });
}

function ClearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

function CreateList(name) {
    return { id: generateRandomID(), name: name, tasks: [] };
}

function CreateTask(name) {
    return { name: name, id: generateRandomID(), completed: false };
}

function Save() {
    try {
        localStorage.setItem(LOCAL_STORAGE_LISTS_KEY, JSON.stringify(lists));
        localStorage.setItem(LOCAL_STORAGE_SELECTED_ID_KEY, selected_id);
    } catch (error) {
        log.error(`Failed to save tasks: ${error.message}`);
    }
}

function DeleteSelectedList() {
    lists = lists.filter(list => list.id !== selected_id);
    selected_id = null;
    ListTasksContainer.style.display = 'none';
    log.trace('Selected list deleted');
    render();
    Save();
}

function ClearCheckedTasks() {
    const selectedList = lists.find(list => list.id === selected_id);
    if (!selectedList) return;

    const initialTaskCount = selectedList.tasks.length;
    selectedList.tasks = filterTasksByCompletion(selectedList.tasks, false);

    const deletedTaskCount = initialTaskCount - selectedList.tasks.length;
    log.info(`${deletedTaskCount} tasks cleared from list ${selectedList.name}`);
    render();
    Save();
}

render();
