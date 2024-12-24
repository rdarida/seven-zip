import { join, resolve } from 'path';
import { existsSync } from 'fs';

const ZIP_DIR = resolve(__dirname, '..', '7zip');

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
