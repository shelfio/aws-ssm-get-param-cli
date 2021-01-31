const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'index.js',
  },
  plugins: [new webpack.BannerPlugin({banner: '#!/usr/bin/env node', raw: true})],
};
