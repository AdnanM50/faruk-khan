import js from "@eslint/js";
import ts from "typescript-eslint";
import react from "eslint-plugin-react";

export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  {
    plugins: {
      react,
    },
    rules: {
      // ⬇️ Disable unused variable errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",

      // Optional: relax other strict rules if needed
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
];
