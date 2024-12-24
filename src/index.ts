export * from './getSevenZipPath';

export function sevenZipSync(paths: string[], destination: string): void {
  console.log('sevenZipSync');
  console.log('paths:', paths);
  console.log('destination:', destination);
}

export * from './sevenUnzipSync';
