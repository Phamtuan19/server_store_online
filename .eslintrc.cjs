module.exports = {
   env: { es2020: true, node: true },
   extends: ['eslint:recommended', 'prettier'],
   parser: '@babel/eslint-parser',
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      requireConfigFile: false,
      allowImportExportEverywhere: true,
   },
   plugins: ['prettier'],
   rules: {
      'no-console': 1,
      'no-extra-boolean-cast': 'off',
      'no-lonely-if': 1,
      'no-unused-vars': 1,
      'no-trailing-spaces': 1,
      'no-multi-spaces': 1,
      'no-multiple-empty-lines': 1,
      'space-before-blocks': ['error', 'always'],
      'object-curly-spacing': 'off',
      indent: 'off',
      semi: 'off',
      quotes: 'off',
      'array-bracket-spacing': 1,
      'linebreak-style': 'off',
      'no-unexpected-multiline': 'warn',
   },
};