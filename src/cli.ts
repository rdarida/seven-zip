#!/usr/bin/env node
import yargs from 'yargs';

import { sevenZipSync, sevenUnzipSync } from '.';

type ZipArgs = {
  destination: string;
  paths: string[];
};

type UnzipArgs = {
  source: string;
  destination: string;
};

yargs
  .scriptName('seven')
  .usage('$0 <cmd> [args]')
  .help()
  .command<ZipArgs>(
    'zip [destination] [paths...]',
    'Creates a compressed archive, or zipped file, from specified files and folders.',
    yargs => {
      return yargs
        .positional('destination', {
          demandOption: true,
          describe: 'Specifies the path to the archive output file',
          type: 'string'
        })
        .positional('paths', {
          demandOption: true,
          describe:
            'Specifies the paths to the files to add to the archive zipped file',
          type: 'string',
          array: true
        });
    },
    args => {
      try {
        sevenZipSync(args.paths, args.destination);
      } catch (e: any) {
        console.error(e);
      }
    }
  )
  .command<UnzipArgs>(
    'unzip [source] [destination]',
    'Extracts files from a specified archive (zipped) file.',
    yargs => {
      return yargs
        .positional('source', {
          demandOption: true,
          describe: 'Specifies the path to the archive file',
          type: 'string'
        })
        .positional('destination', {
          demandOption: true,
          describe: 'Specifies the path to the output folder',
          type: 'string'
        });
    },
    args => {
      try {
        sevenUnzipSync(args.source, args.destination);
      } catch (e: any) {
        console.error(e);
      }
    }
  )
  .demandCommand(1, 'You need to specify a command: zip or unzip')
  .strict()
  .parseSync();
