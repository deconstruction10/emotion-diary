import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import importPlugin from "eslint-plugin-import";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import unusedImportsPlugin from "eslint-plugin-unused-imports";
import ngrxPlugin from "eslint-plugin-ngrx";

export default [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: { globals: globals.browser },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      "import": importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
      "unused-imports": unusedImportsPlugin,
      "ngrx": ngrxPlugin,
    },
    rules: {
      "import/prefer-default-export": "off",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-duplicates": "error",
      "max-len": ["error", 120],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
      ],
      "indent": ["error", 4],
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/lines-between-class-members": "off",
      "quotes": ["error", "double"],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-explicit-any": 0,
      // Rules for NgRx
      "ngrx/avoid-dispatching-multiple-actions-sequentially": "error",
      "ngrx/no-dispatch-in-effects": "error",
      "ngrx/no-effect-decorator-and-creator": "error",
      "ngrx/no-effect-decorator": "error",
      "ngrx/no-effects-in-providers": "error",
      "ngrx/no-multiple-actions-in-effects": "error",
      "ngrx/no-reducer-in-key-names": "error",
      "ngrx/no-store-subscription": "error",
      "ngrx/no-typed-global-store": "error",
      "ngrx/on-function-explicit-return-type": "error",
      "ngrx/prefer-action-creator-in-of-type": "error",
      "ngrx/prefer-action-creator": "error",
      "ngrx/prefer-inline-action-props": "error",
      "ngrx/prefer-one-generic-in-create-for-feature-selector": "error",
      "ngrx/use-consistent-global-store-name": "error",
    }
  }
];