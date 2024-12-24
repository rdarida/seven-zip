import { join, resolve } from 'path';
import { existsSync } from 'fs';

import { sevenZipSync, sevenUnzipSync } from '../src/index';
import { TEMP_DIR } from './setup';

describe('Test export', () => {
  test('sevenZipSync should be truthy', () => {
    expect(sevenZipSync).toBeTruthy();
  });

  test('sevenUnzipSync should be truthy', () => {
    expect(sevenUnzipSync).toBeTruthy();
  });

  test('', () => {
    const source = resolve('tests', 'data', `test ${process.platform}.7z`);
    sevenUnzipSync(source, TEMP_DIR);

    [
      'inner folder',
      'inner folder/inner test 1.md',
      'inner folder/inner test 2.md',
      'test 1.txt',
      'test 2.txt'
    ]
      .map(file => join(TEMP_DIR, file))
      .forEach(path => {
        expect(existsSync(path)).toBeTruthy();
      });
  });
});
