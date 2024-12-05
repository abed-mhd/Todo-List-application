# Project Tutorial

## Introduction
Welcome to the Todo List Application tutorial! In this guide, you’ll build and run a simple Todo app while learning to:
. Set up and use ESLint for code quality.
. Run and debug a simple web application.
. Generate documentation using JSDoc.
By the end, you'll have a working app and a deeper understanding of project setup and best practices.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (comes with Node.js)
- Git

Ensure you are comfortable with basic terminal commands and JavaScript.

---

## Installation

1. Clone the Repository
Clone the project repository to your local machine:
  ```bash
  git clone https://github.com/abed-mhd/Todo-List-application.git
  ```
2. Navigate to the Project Directory
Move into the cloned repository:

  ```bash
  cd Todo-List-application
  ```
3. Install Dependencies
Install all required dependencies:
  ```bash
  npm install
  ```

## Running the Project
To start the project:
- Open index.html in a live server or your browser.
You should see a Todo List interface with options to add and manage tasks.
- If nothing happens or you encounter errors:
Ensure all dependencies are installed using npm install.
Check the browser console for errors (right-click > Inspect > Console).
## Code Quality and Linting
ESLint Setup
This project uses ESLint to enforce coding standards. The configuration enforces the following rules (feel free to add or remove any rule you want, it's your rules. But it's a good idea to always follow convention and standards):

- no-undef: Flags undefined variables.
- quotes: Warns if quotes are not double.
- no-unused-vars: Warns about unused variables.
- semi: Requires semicolons.
Here is the full ESLint configuration:

  ```javascript
  import globals from "globals";
  import pluginJs from "@eslint/js";

  /** @type {import('eslint').Linter.Config[]} */
  export default [
    {
      languageOptions: { globals: globals.browser },
      rules: {
        "no-undef": "error", // Flags undefined variables
        "quotes": ["warn", "double"], // Warn if quotes are not double
        "no-unused-vars": "warn",    // Warn about unused variables
        "semi": ["error", "always"], // Require semicolons
      },
    },
    pluginJs.configs.recommended,
  ];
  ```
Pre-Commit Hook with Husky
This project uses Husky to run pre-commit hooks, ensuring code quality before commits. The following is enforced:

scripts.js must not contain linting errors.
To bypass the hook (not recommended):
  ```bash
  git commit --no-verify
  ```
- Introduce a linting error: Open scripts.js and remove a semicolon. Save the file.
Run ESLint:
  ```bash
  npx eslint scripts.js
  ```
Observe the error message and fix it: Add the missing semicolon. Re-run the linter to ensure the file passes.
- Commit your changes:
  ```bash
  git commit -m "Fix linting error"
  ```
Notice how Husky runs ESLint before allowing the commit.

## Logging
The project includes a basic logging mechanism to track important application events.
We use the loglevel library for logging in the browser. It's lightweight, easy to use, and works similarly to console.log. Here's how you can use it:
1- Set the logging level at the beginning of your application:
  ```javascript
  log.setLevel('warn'); // Options: 'trace', 'debug', 'info', 'warn', 'error', 'silent'
  ```
2- Use the available methods for logging:
. log.warn('This is a warning');
. log.error('This is an error');
. log.info('This is an informational message');
. log.debug('This is a debug message');

### Why loglevel?
Simple to use, especially for browser environments.
Minimal configuration required.
### Want to Level Up Your Logging for Backend Development?
For more advanced logging, we recommend using winston in backend applications. It offers powerful features like logging to files, different transports, and custom formats. Note: Winston is designed for server-side use and cannot be used in the browser.
- [Get started with Winston](https://github.com/winstonjs/winston)

## Documentation
Generating Documentation
The project uses JSDoc for generating documentation. To generate the documentation:
- Install JSDoc globally if not already installed:
  ```bash
  npm install -g jsdoc
  ```
- Run the following command:
  ```bash
  jsdoc -c jsdoc.json
  ```
The documentation will be generated in the out directory.

## Congratulations!
You are now ready to begin your own project using all the features and tools we’ve covered:

- Logging: Implemented with loglevel for the browser and winston for backend applications.
- Linting: Ensured clean and consistent code with ESLint.
- Pre-commit Hooks: Automated code quality checks using Husky.
- Documentation: Clear and maintainable documentation with JSDoc.
