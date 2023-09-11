const tsParser = require("@typescript-eslint/parser")

mmodule.exports = {
    parser: "astro-eslint-parser",
    parserOptions: {
        parser: tsParser,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      // ...
      project: "path/to/your/tsconfig.json",
      extraFileExtensions: [".astro"], 
    },
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
        },
      },
    ],
  }