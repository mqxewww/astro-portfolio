/** @type {import("prettier").Config} */
module.exports = {
  endOfLine: "crlf",
  printWidth: 100,
  semi: true,
  singleQuote: false,
  organizeImportsSkipDestructiveCodeActions: false,
  plugins: ["prettier-plugin-astro"],
  tabWidth: 2,
  trailingComma: "none",
  useTabs: false
};
