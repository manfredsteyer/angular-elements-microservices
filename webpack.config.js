/* global module */
const AotPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const path = require('path');

var clientA = {
  entry: {
     'client-a': './src/client-a/main.ts'
  },
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  module: {
    rules: [{ test: /\.ts$/, loaders: ['@ngtools/webpack'] }]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/client-a/app.module#AppModule' )
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  }
};

var clientB = {
  entry: {
     'client-b': './src/client-b/main.ts'
  },
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  module: {
    rules: [{ test: /\.ts$/, loaders: ['@ngtools/webpack'] }]
  },
  plugins: [
    new AotPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/client-b/app.module#AppModule' )
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: '[name].bundle.js'
  }
};

module.exports = [clientA, clientB];