import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['src/utilities/**/*.test.{js,ts}'],
  },
  plugins: [tsconfigPaths()],
});
