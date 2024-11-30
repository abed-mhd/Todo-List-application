# Static Code Analysis with ESLint

This project uses **ESLint** for static code analysis to maintain code quality and consistency.

## Prerequisites

- Node.js (version 16 or higher)
- npm (comes bundled with Node.js)

## Installation

1. Initialize a new Node.js project:
   
   ```bash
   npm init -y
2. Install ESLint:

    ```bash
    npm install eslint @eslint/js globals --save-dev
3. After that an ESLint configuration file will be created
4. Add the following configuration to eslint.config.mjs:
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

## Explanation of eslint.config.mjs
In the configuration file:

- globals.browser: Specifies that the global variables for browsers are available (e.g., window, document, etc.).
- rules:
"no-undef": "error": Flags undefined variables as errors.
"quotes": ["warn", "double"]: Issues a warning if single quotes are used instead of double quotes.
"no-unused-vars": "warn": Warns about variables that are declared but not used in the code.
"semi": ["error", "always"]: Requires semicolons at the end of every statement.
The configuration is based on ESLint’s recommended settings and also includes custom rules tailored to this project. **But you can add any rule you want and give it any configuration you like (warning, error)**

## Running ESLint
To analyze your JavaScript code using ESLint, run the following command:

    ```bash
    npx eslint script.js
    
## What to Expect
When you run ESLint on your JavaScript code, you will see feedback about the code quality based on the rules set in eslint.config.mjs. Here are some examples of what you might see:
- Example 1: Undefined Variable (Error)
if you added this function:
function test() {
  console.log(a);
}
Output:

   ```bash
   error  'a' is not defined  no-undef
   ```
In this case, ESLint will show an error because the variable a is used but not defined.

- Example 2: Single Quotes (Warning)
const message = 'Hello, world!';

Output:

   ```bash
   1:14  warn  Prefer double quotes  quotes
   ```
ESLint will issue a warning because single quotes are used instead of double quotes, based on the quotes rule.

Example 3: Unused Variable (Warning)
const unusedVar = 5;
Output:
   ```bash
   1:14  warn  'unusedVar' is assigned a value but never used  no-unused-vars
   ```
ESLint will show a warning because the variable unusedVar is declared but not used in the code.

Example 4: Missing Semicolon (Error)
const a = 10
Output:
   ```bash
   1:18  error  Missing semicolon  semi
   ```
ESLint will show an error because the statement is missing a semicolon at the end.
