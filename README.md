# Automate Static Code Analysis with ESLint and Husky Pre-commit Hooks
This project automates the execution of ESLint (static code analysis) before every commit using Husky pre-commit hooks. This ensures that your code is always linted and adheres to quality standards before committing to the repository.

## Prerequisites
- Node.js (version 16 or higher)
- npm (comes bundled with Node.js)
## Installation and Setup
1. Initialize Your Node.js Project
If you haven't already, initialize a new Node.js project by running:

  ```bash
  npm init -y
  ```
2. Install ESLint and Husky
Install ESLint and Husky as development dependencies:

  ```bash
  npm install eslint --save-dev
  npm install husky --save-dev
  ```
3. Set Up ESLint
Initialize ESLint and create a configuration file:

  ```bash
  npx eslint --init
  ```
Follow the prompts to set up ESLint. You can choose to use a popular configuration like Airbnb or create your own.

4. Add lint Script to package.json
Ensure that your package.json includes a lint script under the scripts section:

{
  "scripts": {
    "lint": "eslint ."
  }
}

5. Set Up Husky
Initialize Husky and add a pre-commit hook that runs ESLint before committing:

  ```bash
  npx husky install
  npx husky add .husky/_/pre-commit "npm run lint"
  ```
This will create a .husky/pre-commit file that runs the ESLint linting command before each commit.

**Make sure the .husky/pre-commit file is executable:**
  ```bash
  chmod +x .husky/_/pre-commit
  ```
6. (Optional) Customize ESLint Rules
You can customize your ESLint configuration by editing .eslintrc.json or another configuration file ESLint generated during the setup process. You can define your own rules or use recommended settings.

For example, to enforce double quotes and warn about unused variables, your ESLint config can look like:

json
Copy code
{
  "rules": {
    "quotes": ["warn", "double"],
    "no-unused-vars": "warn"
  }
}

7. Example of the .husky/pre-commit File
After setting up the pre-commit hook, the .husky/pre-commit file should look like this:

  ```bash
  #!/bin/sh
  # .husky/pre-commit

  echo "Pre-commit hook triggered!" # This will print when the hook runs

  # Run linting or other checks
  npm run lint
  ```
This file will print "Pre-commit hook triggered!" when the hook is triggered and will run npm run lint to execute ESLint.

## Running ESLint with Husky
Once everything is set up, Husky will automatically run ESLint each time you commit, ensuring your code is linted before committing it to the repository.

1. Make a Commit
Try to commit some changes, and the pre-commit hook will automatically run ESLint before proceeding:

  ```bash
  git add .
  git commit -m "Your commit message"
  ```
2. ESLint Output
If there are any linting issues (unused variables, wrong quotes ...), ESLint will output them in the terminal. You will be prompted to fix the issues before you can commit the changes.

3. What to Expect
No linting issues: If your code is lint-free, the commit will proceed as usual.
Linting issues: If ESLint finds any issues, they will be displayed in the terminal, and the commit will be blocked until the issues are fixed.

Example of what you might see in the terminal if there are linting errors:
Pre-commit hook triggered!
✖ 1 problem (1 error, 0 warnings)
  1:1  error  Unexpected console statement  no-console
✖ ESLint found some problems. Please fix them and try committing again.