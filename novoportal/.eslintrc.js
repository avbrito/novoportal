module.exports = {
  extends: ["next/core-web-vitals", "next/typescript"],
  rules: {
    "@typescript-eslint/ban-ts-comment": "off",
    "@next/next/no-document-import-in-page": "off",
    "@next/next/no-img-element": "off",
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars' : 'off',
    "@typescript-eslint/no-unused-expressions": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-undef": "off",
    "react-hooks/exhaustive-deps": "off",

  },
};