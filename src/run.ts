#!/usr/bin/env node
import { join, resolve } from 'path';
import { sync as rimraf } from 'rimraf';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { EOL } from 'os';
import { execFileSync } from 'child_process';

const ROOT_DIR = resolve(__dirname, '..');
const SEVEN_DIR = join(ROOT_DIR, '7zip');
const TESTS_DIR = join(ROOT_DIR, 'tests');

function exec(command: string): void {
  command = join(SEVEN_DIR, command);

  if (!existsSync(command)) {
    console.log('not found');
    return;
  }

  console.log(execFileSync(command).toString());
}

function main(): void {
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
}

(() => {
  const dataDir = join(TESTS_DIR, 'data');

  if (!existsSync(dataDir)) {
    mkdirSync(dataDir);
  }

  const tempDir = join(TESTS_DIR, '.temp');

  if (existsSync(tempDir)) {
    rimraf(tempDir);
  }

  mkdirSync(tempDir, { recursive: true });

  [1, 2].forEach(v => {
    const fileName = `test ${v}.txt`;
    const filePath = join(tempDir, fileName);
    writeFileSync(filePath, `Hello, ${fileName}!` + EOL);
  });

  const innerDir = join(tempDir, 'inner folder');
  mkdirSync(innerDir);

  [1, 2].forEach(v => {
    const fileName = `inner test ${v}.md`;
    const filePath = join(innerDir, fileName);
    writeFileSync(filePath, `Hello, ${fileName}!` + EOL);
  });
})();
