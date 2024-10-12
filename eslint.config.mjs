import globals from "globals";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser"; // Import the TypeScript parser
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'; // Import Prettier plugin

export default [
  // Ignored files or directories
  {
    ignores: ["node_modules/*", "dist/**/*"], // Correct path to ignore all files in dist
  },

  // Base configuration for JavaScript and TypeScript files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"], // Include .tsx files as well
    languageOptions: {
      sourceType: "module", // Assuming ESModules for most files
      globals: {
        ...globals.browser, // Global browser variables
        process: "readonly", // Allow 'process' as a global variable
      },
      parser: tsParser, // Specify the TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tseslint, // Register the TypeScript ESLint plugin
    },
    rules: {
      'no-unused-expressions':'error',         // Error on unused variables
      "no-unused-expressions": "error",   // Error on unused expressions
      "prefer-const": "error",            // Prefer const where possible
      "no-console": "warn",                // Warn on console logs
      "no-undef": "error",                  // Error on undefined variables
      "no-var": "error",                   // Error on usage of var
    },
  },

  // Specific configuration for `.js` files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs", // Use CommonJS modules for .js files
    },
  },

  // Prettier configuration to disable conflicting rules
  eslintPluginPrettierRecommended, // Add Prettier at the end to disable conflicting rules
];
