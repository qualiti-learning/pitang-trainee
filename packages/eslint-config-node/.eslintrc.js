module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "import/extensions": 0,
    quotes: 0,
    "class-methods-use-this": 0,
    "no-console": 0,
  },
};
