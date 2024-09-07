import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';
import postcss from 'rollup-plugin-postcss';

export default defineConfig({
  input: 'src/index.ts', // Replace with your entry file
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
