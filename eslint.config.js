import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import testingLibrary from "eslint-plugin-testing-library";
import jestDom from "eslint-plugin-jest-dom";
import { globalIgnores } from "eslint/config";

export default tseslint.config([
  globalIgnores(["dist", "coverage", "node_modules"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin,
      "testing-library": testingLibrary,
      "jest-dom": jestDom,
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    rules: {
      // стиль кода
      semi: ["error", "always"],
      quotes: ["error", "double"],
      indent: ["error", 2],
      "no-console": ["warn", { allow: ["warn", "error"] }],

      // импорт
      "import/order": [
        "error",
        {
          groups: [["builtin", "external", "internal"]],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // react-hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // тесты
      "testing-library/no-debugging-utils": "warn",
      "jest-dom/prefer-to-have-text-content": "warn",
    },
  },
]);
