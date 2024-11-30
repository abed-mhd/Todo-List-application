import { filterTasksByCompletion, countTasks, generateRandomID } from './utils.js';

// Test for filterTasksByCompletion
describe('filterTasksByCompletion', () => {
    test('returns only incomplete tasks when isCompleted is false', () => {
        const tasks = [
            { name: 'Task 1', completed: false },
            { name: 'Task 2', completed: true },
            { name: 'Task 3', completed: false }
        ];
        const result = filterTasksByCompletion(tasks, false);
        expect(result).toEqual([
            { name: 'Task 1', completed: false },
            { name: 'Task 3', completed: false }
        ]);
    });

    test('returns only completed tasks when isCompleted is true', () => {
        const tasks = [
            { name: 'Task 1', completed: false },
            { name: 'Task 2', completed: true },
            { name: 'Task 3', completed: true }
        ];
        const result = filterTasksByCompletion(tasks, true);
        expect(result).toEqual([
            { name: 'Task 2', completed: true },
            { name: 'Task 3', completed: true }
        ]);
    });
});

// Test for countTasks
describe('countTasks', () => {
    test('counts incomplete tasks correctly', () => {
        const tasks = [
            { name: 'Task 1', completed: false },
            { name: 'Task 2', completed: true },
            { name: 'Task 3', completed: false }
        ];
        const result = countTasks(tasks, false);
        expect(result).toBe(2);
    });

    test('counts completed tasks correctly', () => {
        const tasks = [
            { name: 'Task 1', completed: false },
            { name: 'Task 2', completed: true },
            { name: 'Task 3', completed: true }
        ];
        const result = countTasks(tasks, true);
        expect(result).toBe(2);
    });
});

// Test for generateRandomID
describe('generateRandomID', () => {
    test('generates a random ID of the default length', () => {
        const id = generateRandomID();
        expect(id).toHaveLength(8);
    });

    test('generates a random ID of a specified length', () => {
        const id = generateRandomID(12);
        expect(id).toHaveLength(12);
    });

    test('generates unique IDs', () => {
        const id1 = generateRandomID();
        const id2 = generateRandomID();
        expect(id1).not.toBe(id2);
    });
});