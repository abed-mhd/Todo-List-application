// Filters tasks based on their completion status
export function filterTasksByCompletion(tasks, isCompleted) {
    return tasks.filter((task) => task.completed === isCompleted);
}

// Counts the tasks based on their completion status
export function countTasks(tasks, isCompleted) {
    return tasks.filter((task) => task.completed === isCompleted).length;
}

export function generateRandomID(length = 8) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}