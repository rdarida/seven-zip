import { getSevenZipPath, sevenZipSync, sevenUnzipSync } from '../src/index';

describe('Test export', () => {
  test('getSevenZipPath should be truthy', () => {
    expect(getSevenZipPath).toBeTruthy();
  });

  test('sevenZipSync should be truthy', () => {
    expect(sevenZipSync).toBeTruthy();
  });

  test('sevenUnzipSync should be truthy', () => {
    expect(sevenUnzipSync).toBeTruthy();
  });
});
