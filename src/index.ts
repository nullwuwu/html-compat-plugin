import HtmlWebpackPlugin from 'html-webpack-plugin'

interface CompatHtmlPluginConfig {
  outputName: string
  files: string[]
}

class CompatHtmlPlugin {
  config: CompatHtmlPluginConfig

  constructor(config: CompatHtmlPluginConfig) {
    this.config = config
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('CompatHtmlPlugin', compilation => {
      HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tap(
        'CompatHtmlPlugin',
        data => {
          const { outputName } = this.config

          if (data.outputName === outputName) {
            // TODO compile files add insert to html
          }

          return data
        }
      )
    })
  }
}


export default CompatHtmlPlugin