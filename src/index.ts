import HtmlWebpackPlugin from 'html-webpack-plugin'
import bundler from './bundler'
import insert from './insert'

interface CompatHtmlPluginConfig {
  outputName: string
  input: string
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
        async data => {
          const { outputName, input } = this.config

          if (data.outputName === outputName) {
            // TODO compile files add insert to html
            const codes = await bundler({
              input
            })

            insert(data.html, { string: codes.join() })
          }

          return data
        }
      )
    })
  }
}


export default CompatHtmlPlugin