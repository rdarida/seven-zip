const { defaults } = require('jest-config');

module.exports = async () => {
  return {
    rootDir: __dirname,
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    setupFilesAfterEnv: ['./tests/setup.ts'],
    collectCoverage: false, // npm test -- --collectCoverage
    collectCoverageFrom: ['./src/**/*.ts'],
    coveragePathIgnorePatterns: [
      ...defaults.coveragePathIgnorePatterns,
      '/dist/',
      '/src/cli.ts',
      '/tests/'
    ]
  };
};