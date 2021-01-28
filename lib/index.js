"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const html_webpack_plugin_1 = __importDefault(require("html-webpack-plugin"));
const bundler_1 = __importDefault(require("./bundler"));
const insert_1 = __importDefault(require("./insert"));
class CompatHtmlPlugin {
    constructor(config) {
        this.config = config;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('CompatHtmlPlugin', compilation => {
            html_webpack_plugin_1.default.getHooks(compilation).beforeEmit.tapPromise('CompatHtmlPlugin', async (data) => {
                const { outputName, input } = this.config;
                if (data.outputName === outputName) {
                    // TODO compile files add insert to html
                    const codes = await bundler_1.default({
                        input
                    });
                    console.log(codes);
                    insert_1.default(data.html, { string: codes.join() });
                }
                return data;
            });
        });
    }
}
exports.default = CompatHtmlPlugin;
//# sourceMappingURL=index.js.map