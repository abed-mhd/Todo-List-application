# Generating Documentation Using JSDoc
This guide explains how to install JSDoc, resolve execution policy restrictions on Windows, and generate documentation for your JavaScript project.

## Step 1: Install JSDoc
Open a terminal or PowerShell window.
Install JSDoc globally using the following command:
  ```bash
  npm install -g jsdoc
  ```
## Step 2: Resolve Execution Policy Restrictions on Windows
If you encounter an error like:

  ```vbnet
  Impossible de charger le fichier ... car l’exécution de scripts est désactivée sur ce système.
  ```
This means PowerShell's execution policy is preventing script execution.

1. Open PowerShell as an administrator.
Check the current execution policy:
  ```powershell
  Get-ExecutionPolicy
  ```
2. Temporarily allow script execution by running:
  ```powershell
  Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
  ```
This change applies only to the current PowerShell session.

## Step 3: Create the jsdoc.json Configuration File
1. Navigate to your project directory:
  ```bash
  cd path/to/your/project
  ```

2. Create a file named jsdoc.json with the following content:
  ```json
  {
    "tags": {
      "allowUnknownTags": true
    },
    "source": {
      "include": ["script.js", "utils.js"],
      "exclude": ["node_modules"],
      "includePattern": ".+\\.js(doc|x)?$",
      "excludePattern": "(^|\\/|\\\\)_"
    },
    "opts": {
      "destination": "./docs",
      "recurse": true
    }
  }
  ```

## Step 4: Generate Documentation
Ensure your .js files (e.g., script.js and utils.js) are in the same directory as jsdoc.json.
Run the following command to generate the documentation:
  ```bash
  jsdoc -c jsdoc.json
  ```
The documentation will be generated in the ./docs folder of your project.

## Step 5: Open the Documentation
Navigate to the ./docs folder in your project.
Open the index.html file in any browser to view the generated documentation.