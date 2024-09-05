import { defineConfig } from 'rollup';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  input: 'src/index.ts', // Replace with your entry file
  output: [
    {
      dir: 'dist',
      format: "es",
      name: "spinny-loader",
    }
  ],
  external: ["react", "react-dom"],
  plugins: [
    typescript({tsconfig: "./tsconfig.json"}),
  ],
})
