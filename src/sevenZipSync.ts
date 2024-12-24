import { execFileSync } from 'child_process';

import { getSevenZipPath } from './getSevenZipPath';

export function sevenZipSync(paths: string[], destination: string): void {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('There is no command.');
  }

  const args = ['a', destination, ...paths];

  execFileSync(command, args, { maxBuffer: Infinity, windowsHide: true });
}
