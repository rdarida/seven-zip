import { join, resolve } from 'path';
import { rimrafSync } from 'rimraf';
import { existsSync, mkdirSync } from 'fs';

import { sevenUnzip } from '../src/sevenUnzip';

const UNZIP_TEMP_DIR = resolve(__dirname, '.temp', 'unzip');

describe('Test sevenUnzip function', () => {
  beforeAll(() => {
    mkdirSync(UNZIP_TEMP_DIR, { recursive: true });
  });

  test('extracts files from a 7z archive and verifies their existence', async () => {
    const source = resolve('tests', 'data', `test ${process.platform}.7z`);
    await sevenUnzip(source, UNZIP_TEMP_DIR);

    [
      'inner folder',
      'inner folder/inner test 1.md',
      'inner folder/inner test 2.md',
      'test 1.txt',
      'test 2.txt'
    ]
      .map(file => join(UNZIP_TEMP_DIR, file))
      .forEach(path => {
        expect(existsSync(path)).toBeTruthy();
      });
  });

  afterAll(() => {
    rimrafSync(UNZIP_TEMP_DIR);
  });
});
