import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact, { rules } from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ["**/*.{js,mjs,cjs,jsx}"] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
    {
        rules: {
            quotes: ["error", "single"], // Habilita aspas simples
            "prettier/prettier": [
                "error",
                {
                    singleQuote: true, // Garante aspas simples no Prettier
                },
            ],
        },
    },
];
