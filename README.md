# Task Manager Application with Unit Testing
The purpose is to showcase unit testing for critical functions and demonstrate their correctness.

## Install dependencies:

  ```bash
  npm install
  Run tests:
  ```
  ```bash
  npm test
  ```
## Testing with Jest
Unit testing is implemented for key utility functions in the utils.js file, such as:

filterTasksByCompletion: Filters tasks based on their completion status.
countTasks: Counts completed and incomplete tasks.
generateRandomID: Generates unique random IDs for tasks or lists.
Key File: script.test.js
The script.test.js file contains unit tests for the above functions using Jest. Each function is tested for multiple cases to ensure correctness.

Example Test Cases:
filterTasksByCompletion:

Returns only completed tasks when the isCompleted flag is true.
Returns only incomplete tasks when the isCompleted flag is false.
generateRandomID:

Generates an ID of the default length.
Generates an ID of a custom-specified length.
Ensures all generated IDs are unique.

## Expected Output
You should see the following after running the tests:

All tests passing if the functions are implemented correctly.
Any failed test will display detailed output with the reason for failure.