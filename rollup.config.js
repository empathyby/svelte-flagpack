import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import pkg from './package.json';

const preprocess = sveltePreprocess({
  scss: {
    data: `
    @import './src/Flag.scss';
    `,
  },

  postcss: {
    plugins: [require('autoprefixer')],
  },
});

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

export default {
	input: 'src/index.js',
	output: [
		{ file: pkg.module, 'format': 'es' },
    { file: pkg.main, 'format': 'umd', name },
    { file: pkg.main.replace('.js','.min.js'), format: 'iife', name, plugins: [terser()]}
	],
	plugins: [
		svelte({
      css: css => {
        css.write('public/build/bundle.css');
      },
      preprocess
    }),
		resolve()
	]
};
