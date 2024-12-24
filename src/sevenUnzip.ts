import { execute } from './utils';
import { getSevenZipPath } from './getSevenZipPath';

/**
 * Extracts files from a specified zipped file **asynchronously**.
 *
 * @param source Specifies the path to the archive file.
 *
 * @param destination Specifies the path to the output folder.
 *
 * @throws {Error} Will throw an error if the 7-Zip executable is not found.
 */
export async function sevenUnzip(
  source: string,
  destination: string
): Promise<void> {
  const command = getSevenZipPath();

  if (!command) {
    throw new Error('7-Zip executable not found.');
  }

  const args = ['x', source, `-o${destination}`];

  return execute(command, args);
}
