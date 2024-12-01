/**
 * Filters tasks based on their completion status.
 * @param {Array<Object>} tasks - The list of tasks.
 * @param {boolean} isCompleted - True to filter completed tasks, false for incomplete tasks.
 * @returns {Array<Object>} - The filtered list of tasks.
 */
export function filterTasksByCompletion(tasks, isCompleted) {
    return tasks.filter((task) => task.completed === isCompleted);
}

/**
 * Counts the number of tasks based on their completion status.
 * @param {Array<Object>} tasks - The list of tasks.
 * @param {boolean} isCompleted - True to count completed tasks, false for incomplete tasks.
 * @returns {number} - The count of tasks.
 */
export function countTasks(tasks, isCompleted) {
    return tasks.filter((task) => task.completed === isCompleted).length;
}

/**
 * Generates a random string ID of the specified length.
 * @param {number} [length=8] - The length of the ID.
 * @returns {string} - The generated ID.
 */
export function generateRandomID(length = 8) {
    let result = '';
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}