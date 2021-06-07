const webpack =  require("webpack");

module.exports = {
  pages: {
    popup: {
      template: 'public/browser-extension.html',
      entry: './src/popup/main.js',
      title: 'Popup'
    }
  },
  pluginOptions: {
    browserExtension: {
      componentOptions: {
        background: {
          entry: 'src/background.js'
        }
      }
    },
    defline: new webpack.DefinePlugin({
      'process.env.FLUENTFFMPEG_COV': false
    })
  }
}
