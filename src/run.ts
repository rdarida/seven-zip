#!/usr/bin/env node
import { join, resolve } from 'path';
import { execSync } from 'child_process';
import { EOL } from 'os';

const SEVEN_DIR = resolve(__dirname, '..', '7zip');

function exec(command: string): void {
  console.log(
    execSync(command)
      .toString()
      .split(EOL)
      .map(l => l.trim())
      .filter(l => l.length)[0]
  );
}

(() => {
  const { platform, arch } = process;

  console.log(platform, arch);

  switch (platform) {
    case 'win32': {
      exec(join(SEVEN_DIR, 'win32_7zr.exe'));
      exec(join(SEVEN_DIR, 'win32_7z.exe'));
      exec(join(SEVEN_DIR, 'win32_x64_7z.exe'));
      break;
    }

    case 'darwin': {
      exec(join(SEVEN_DIR, 'darwin_7z'));
      break;
    }

    case 'linux': {
      exec(join(SEVEN_DIR, 'linux_x64_7z'));
      break;
    }
  }
})();
