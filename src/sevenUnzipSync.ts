import { executeSync } from './utils';
import { getSevenZipPath } from './getSevenZipPath';

export function sevenUnzipSync(source: string, destination: string): void {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('There is no command.');
  }

  const args = ['x', source, `-o${destination}`];

  executeSync(command, args);
}
