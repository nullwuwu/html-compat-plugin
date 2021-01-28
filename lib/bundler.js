"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_1 = __importDefault(require("rollup"));
const plugin_babel_1 = require("@rollup/plugin-babel");
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const defaultInputOptions = {
    plugins: [
        plugin_node_resolve_1.default(),
        plugin_commonjs_1.default(),
        plugin_babel_1.getBabelOutputPlugin({
            allowAllFormats: true,
            presets: [["@babel/preset-env", { modules: "umd" }]],
        }),
    ]
};
const defaultOutputOptions = {
    file: '[name].js',
    format: 'iife'
};
async function createBundler(inputOptions, outputOptions) {
    inputOptions = {
        ...defaultInputOptions,
        ...inputOptions
    };
    outputOptions = {
        ...defaultOutputOptions,
        ...outputOptions
    };
    const bundle = await rollup_1.default.rollup(inputOptions);
    const { output } = await bundle.generate(outputOptions);
    return output;
}
exports.default = createBundler;
//# sourceMappingURL=bundler.js.map