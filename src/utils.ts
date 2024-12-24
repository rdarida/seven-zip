import { execFileSync } from 'child_process';

export function executeSync(command: string, args: string[]): void {
  execFileSync(command, args, { maxBuffer: Infinity, windowsHide: true });
}
