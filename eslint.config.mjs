import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Import the TypeScript parser

// Directly extract recommended rules from the plugins
const jsRecommendedRules = pluginJs.configs.recommended.rules;
const tsRecommendedRules = tseslint.configs.recommended.rules;

export default [
  // Ignored files or directories
  {
    ignores: ["node_modules/*", "./dist"],
  },

  // Base configuration for JavaScript and TypeScript files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Include .tsx files as well
    languageOptions: {
      sourceType: "module", // Assuming ESModules for most files
      globals: globals.browser, // Global browser variables
      parser: tsParser, // Specify the TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tseslint, // Register the TypeScript ESLint plugin
    },
    rules: {
      ...jsRecommendedRules, // Include recommended JavaScript rules
      ...tsRecommendedRules, // Include recommended TypeScript rules
      eqeqeq: "off", // Disable strict equality checks
      "no-unused-vars": "error", // Error on unused variables
      "prefer-const": ["error", { ignoreReadBeforeAssign: true }], // Prefer const where possible
    },
  },

  // Specific configuration for `.js` files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Use CommonJS modules for .js files
    },
  },
];
