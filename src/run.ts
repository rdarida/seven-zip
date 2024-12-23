#!/usr/bin/env node
import { join, resolve } from 'path';
import { existsSync } from 'fs';
import { execFileSync } from 'child_process';

const SEVEN_DIR = resolve(__dirname, '..', '7zip');

function exec(command: string): void {
  command = join(SEVEN_DIR, command);

  if (!existsSync(command)) {
    console.log('not found');
    return;
  }

  console.log(execFileSync(command).toString());
}

(() => {
  const { platform, arch } = process;
  const execName = `${platform}_${arch}_7z`;

  switch (platform) {
    case 'win32': {
      exec(`${execName}.exe`);
      break;
    }

    case 'darwin': {
      exec('darwin_7z');
      break;
    }

    case 'linux': {
      exec(execName);
      break;
    }
  }
})();
