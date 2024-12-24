import { resolve } from 'path';
import { mkdirSync } from 'fs';
import { rimrafSync } from 'rimraf';

export const TEMP_DIR = resolve(__dirname, '.temp');

beforeAll(() => {
  mkdirSync(TEMP_DIR);
});

afterAll(() => {
  rimrafSync(TEMP_DIR);
});
