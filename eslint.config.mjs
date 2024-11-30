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
