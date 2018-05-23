const hasha = require('hasha')

module.exports = class ContentHash {
  apply(compiler) {
    
    compiler.plugin('compilation', (compilation) => {
      compilation.plugin(
        'html-webpack-plugin-after-emit',
        ({ outputName, html }, callback) => {
          const chunk = compilation.assets[outputName]
          const hash = hasha(html.source(), { 
            algorithm: 'md5' 
          }).substring(0, 20)
          const name = outputName.replace(/\[contenthash\]/g, hash)
          compilation.assets[name] = chunk
          delete compilation.assets[outputName]
          callback && callback()
        }
      )
    })
    
  }
}






