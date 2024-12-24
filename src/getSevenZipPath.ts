import { join, resolve } from 'path';
import { existsSync } from 'fs';

const ZIP_DIR = resolve(__dirname, '..', '7zip');

/**
 * Resolves the path to the appropriate 7-Zip executable based on the given
 * platform and architecture.
 *
 * @param platform The platform for which the 7-Zip executable is required.
 * Defaults to the current platform (`process.platform`) if not provided.
 *
 * @param arch The architecture for which the 7-Zip executable is required.
 * Defaults to the current architecture (`process.arch`) if not provided.
 *
 * @returns The resolved path to the 7-Zip executable, or `undefined` if no
 * matching executable is found.
 */
export function getSevenZipPath(
  platform?: typeof process.platform,
  arch?: typeof process.arch
): string | undefined {
  platform = platform || process.platform;
  arch = arch || process.arch;

  const ext = platform === 'win32' ? '.exe' : '';
  let path = join(ZIP_DIR, `${platform}_${arch}_7z` + ext);

  if (existsSync(path)) {
    return path;
  }

  path = join(ZIP_DIR, `${platform}_7z` + ext);

  if (existsSync(path)) {
    return path;
  }

  return undefined;
}
