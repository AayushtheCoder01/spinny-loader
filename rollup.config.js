import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
export default defineConfig({
  input: {
    index: 'src/index.ts', // main entry point
    wrapper: 'src/wrapper/wrapper.ts', // new wrapper entry point
  }, // Replace with your entry file
  output: [
    {
      dir: 'dist',
      format: "es",
      name: "spinny-loader",
    }
  ],
  external: ["react", "react-dom", "framer-motion"],
  plugins: [
    typescript({tsconfig: "./tsconfig.json"}),
    postcss({
      extract: 'bundle.css',  // Extracts CSS to bundle.css
      modules: true,          // Enable CSS Modules
      plugins: []
    }),

  ],
})
