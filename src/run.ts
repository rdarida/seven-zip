#!/usr/bin/env node
import { join, resolve } from 'path';
import { execFileSync } from 'child_process';
import { EOL, release } from 'os';
import { existsSync } from 'fs';

const SEVEN_DIR = resolve(__dirname, '..', '7zip');

function exec(command: string): void {
  if (!existsSync(command)) {
    console.log('not found');
    return;
  }

  console.log(execFileSync(command).toString());
}

(() => {
  const { platform, arch } = process;

  console.log(platform, arch, release());

  switch (platform) {
    case 'win32': {
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
