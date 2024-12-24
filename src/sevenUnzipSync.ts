import { execFileSync } from 'child_process';

import { getSevenZipPath } from './getSevenZipPath';

export function sevenUnzipSync(source: string, destination: string): void {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('There is no command.');
  }

  const args = ['x', source, `-o${destination}`];

  execFileSync(command, args, { maxBuffer: Infinity, windowsHide: true });
}
