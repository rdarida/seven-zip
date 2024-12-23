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
    'zip <destination> <paths...>',
    'Creates a compressed archive, or zipped file, from specified files and folders.',
    yargs => {
      return yargs
        .example(
          '$0 zip dest.7z file1 file2.txt folder',
          'Creates a new 7z archive named "dest.7z" containing "file1", "file2.txt", and the contents of the "folder" directory.'
        )
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
    'unzip <source> <destination>',
    'Extracts files from a specified archive (zipped) file.',
    yargs => {
      return yargs
        .example(
          '$0 unzip source.7z destination',
          'Extracts the contents of the "source.7z" archive into the "destination" directory. If the folder does not exist, it will be created.'
        )
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
