# hash-content-html-webpack-plugin

Generate md5 hash for html file (e.g. `index.f8704d178ff376c380a6.html`),  
based on file's content and working with [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin).

# Why use hash-content-html-webpack-plugin?
index.html
```html
<!doctype html>
  <head><link href="/app/css/index.8a09fef2bfaf1c05ca22.css" rel="stylesheet"></head>
<body>
  <script type="text/javascript" src="/app/js/vendor.d5474870259fc6bd8afb.js"></script>
  <script type="text/javascript" src="/app/js/index.40555284b534ede23047.js"></script>
</body></html>
```
webpack.config.js
```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  ...
  plugins: [
    ...
    new HtmlWebpackPlugin({
      filename: 'index.[hash].html'
    }),
  ]
}
// output: index.c5474870259fc6bd8afd.html
```
Once `css` and `js` are modified, their hash will change(e.g. `/app/css/index.8a09fef2bfaf1c05ca22.css` changes to `/app/css/index.375969b84db8a0c16a1d.css  `), so html's content will change，but html's hash will not change by using `[hash]` `[chunkhash]`, the output is still `index.c5474870259fc6bd8afd.html`。So if you want to change html's hash when html's content changes, you should use `[contenthash]` provided by `hash-content-html-webpack-plugin`.

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
