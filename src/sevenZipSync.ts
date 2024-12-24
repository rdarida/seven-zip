import { executeSync } from './utils';
import { getSevenZipPath } from './getSevenZipPath';

export function sevenZipSync(paths: string[], destination: string): void {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('There is no command.');
  }

  const args = ['a', destination, ...paths];

  executeSync(command, args);
}
