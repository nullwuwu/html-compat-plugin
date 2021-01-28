import rollup from 'rollup'
import { getBabelOutputPlugin, babel } from "@rollup/plugin-babel";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

const defaultInputOptions = {
  plugins: [
    nodeResolve(),
    commonjs(),
    getBabelOutputPlugin({
      allowAllFormats: true,
      presets: [["@babel/preset-env", { modules: "umd" }]],
    }),
  ]
}

const defaultOutputOptions = {
  file: '[name].js',
  format: 'iife'
}

async function createBundler(inputOptions, outputOptions?) {
  inputOptions = {
    ...defaultInputOptions,
    ...inputOptions
  }

  outputOptions = {
    ...defaultOutputOptions,
    ...outputOptions
  }

  const bundle = await rollup.rollup(inputOptions);
  const { output } = await bundle.generate(outputOptions);

  return output
}

export default createBundler