import { sevenZipSync, sevenUnzipSync } from '../src/index';

describe('Test export', () => {
  test('sevenZipSync should be truthy', () => {
    expect(sevenZipSync).toBeTruthy();
  });

  test('sevenUnzipSync should be truthy', () => {
    expect(sevenUnzipSync).toBeTruthy();
  });
});
