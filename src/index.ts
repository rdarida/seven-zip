import { join, resolve } from 'path';
import { existsSync } from 'fs';

const ZIP_DIR = resolve(__dirname, '..', '7zip');

function get7zipPath(): string | undefined {
  const { platform, arch } = process;
  const ext = platform === 'win32' ? '.exe' : '';
  let path = join(ZIP_DIR, `${platform}_${arch}_7z` + ext);

  if (existsSync(path)) {
    return path;
  }

  path = resolve(ZIP_DIR, `${platform}_7z` + ext);

  if (existsSync(path)) {
    return path;
  }

  return undefined;
}

export function sevenZipSync(paths: string[], destination: string): void {
  console.log('sevenZipSync');
  console.log('paths:', paths);
  console.log('destination:', destination);
}

export function sevenUnzipSync(source: string, destination: string): void {
  console.log('sevenUnzipSync');
  console.log('source:', source);
  console.log('destination:', destination);
}
