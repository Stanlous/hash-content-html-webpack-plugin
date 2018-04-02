# hash-content-html-webpack-plugin

Generate md5 hash for html file (e.g. index.f8704d178ff376c380a6.html),  
based on file's content, used with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

# Install
```sh
npm install hash-content-html-webpack-plugin --save-dev
```

# Usage

webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HashContentHtmlWebpackPlugin = require('hash-content-html-webpack-plugin')

module.exports = {
  ...
  plugins: [
    ...
    new HtmlWebpackPlugin({
      filename: 'index.[contenthash].html'
    }),
    new HashContentHtmlWebpackPlugin()
  ]
}
// output: index.f8704d178ff376c380a6.html
```

# License
MIT
