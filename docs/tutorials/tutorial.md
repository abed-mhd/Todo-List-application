# Project Tutorial

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
- open the file index.html in a live server, and there you go.

## Code Quality and Linting
ESLint Setup
This project uses ESLint to enforce coding standards. The configuration enforces the following rules:

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

## Logging
The project includes a basic logging mechanism to track important application events.

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
