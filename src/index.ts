import { execFileSync } from 'child_process';

import { getSevenZipPath } from './getSevenZipPath';

export function sevenZipSync(paths: string[], destination: string): void {
  console.log('sevenZipSync');
  console.log('paths:', paths);
  console.log('destination:', destination);
}

export function sevenUnzipSync(source: string, destination: string): void {
  const command = getSevenZipPath(process.platform, process.arch);

  if (!command) {
    throw new Error('There is no command.');
  }

  const args = ['x', source, `-o${destination}`];

  execFileSync(command, args, { maxBuffer: Infinity, windowsHide: true });
}
