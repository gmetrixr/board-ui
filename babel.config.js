module.exports = {
  presets: [
    "@babel/preset-typescript",
    [
      '@babel/preset-env',
      {
        'targets': {
          'browsers': [
            '>0.25%',
            'not ie 11',
            'not op_mini all',
          ],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true,
      },
    ],
    '@babel/plugin-proposal-function-sent',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-throw-expressions',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-syntax-import-meta',
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': false,
      },
    ],
    '@babel/plugin-proposal-json-strings',
    [
      'import',
      {
        'libraryName': 'lodash',
        'libraryDirectory': '',
        'camel2DashComponentName': false,
      },
      'lodash',
    ],
  ],
};
