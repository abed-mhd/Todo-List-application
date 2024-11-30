# Logging Implementation in Task Management App
This README explains how I implemented logging at different levels using the loglevel library in the Task Management App. The application uses logging to track key actions, issues, and events throughout the app. I’ve used different log levels to capture info, warn, error, and critical logs.

## Log Levels Used
1. Log Level: info
Purpose: General informational messages that provide insights into the application's flow. These messages do not indicate any errors or warnings.

Example in Code: Informing about the creation of a new task.

log.info(`New task created: ${TaskName} for list ${selectedlist.name}`);

Context: This log occurs when a new task is successfully created. It’s meant to track normal, expected app behavior.

2. Log Level: warn
Purpose: Used when something unexpected happens, but it doesn’t necessarily disrupt the application’s functioning. This level is typically for less severe issues that may need attention.

Example in Code: Logging when a user tries to create a list or task with an empty name.

log.warn('Attempted to create a task with an empty name');

Context: This log is useful to inform developers when a user tries to perform an action with invalid input, such as an empty task name.

3. Log Level: error
Purpose: Captures error messages indicating a failure in the application. These logs typically signal that something went wrong, and the application may not function as expected.

Example in Code: Logging an error when the application fails to save data to localStorage.

log.error(`Failed to save tasks: ${error.message}`);

Context: This log is useful for tracking problems with data persistence or unexpected failures during application execution.

4. Log Level: critical
Purpose: Represents the most severe level of logging. Critical logs are for situations where something significant has gone wrong (such as a major failure or data loss).

Example in Code: Logging when a task is deleted, especially if this action is irreversible.

log.critical(`Task deleted: ${taskToDelete.name}, List ID: ${list.id}`);

Context: This log helps track major changes like task deletion and can be used for debugging if something goes wrong during these sensitive operations.

## Code Implementation
To implement logging, I used the loglevel library. This library was included in the index.html file with the following <script> tag:

<script src="https://cdn.jsdelivr.net/npm/loglevel@1.8.1/dist/loglevel.min.js" defer></script>

This script imports the loglevel library, which provides various methods to set the log level and log messages at different levels (e.g., log.info(), log.warn(), log.error(), and log.critical()).

### Log Level Setup
I set the log level in the JavaScript file script.js using the following code:

log.setLevel('info');  // You can change this level to 'debug', 'warn', 'error', or 'silent' depending on your needs.
### Example Code Snippets
Info Log for Task Creation: Tracks when a new task is created.

log.info(`New task created: ${TaskName} for list ${selectedlist.name}`);
Warning Log for Invalid Task Input: Warns if the user attempts to create a task with an empty name.

log.warn('Attempted to create a task with an empty name');
Error Log for Failure in Saving to LocalStorage: Captures errors when saving tasks to localStorage fails.

log.error(`Failed to save tasks: ${error.message}`);
Critical Log for Task Deletion: Logs when a task is deleted from the list.

log.critical(`Task deleted: ${taskToDelete.name}, List ID: ${list.id}`);