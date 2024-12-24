import { executeSync } from './utils';
import { getSevenZipPath } from './getSevenZipPath';

/**
 * Extracts files from a specified archive (zipped) file synchronously.
 *
 * @param source Specifies the path to the archive file.
 *
 * @param destination Specifies the path to the output folder.
 *
 * @throws {Error} Will throw an error if the 7-Zip executable is not found.
 */
export function sevenUnzipSync(source: string, destination: string): void {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('7-Zip executable not found.');
  }

  const args = ['x', source, `-o${destination}`];

  executeSync(command, args);
}
