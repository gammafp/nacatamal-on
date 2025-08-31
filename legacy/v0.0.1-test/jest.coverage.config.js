// TODO: Continue here
const path = require('path');
const folderBase = path.basename(__dirname);

module.exports = {
    rootDir: "../",
    roots: [`<rootDir>/../tests/${folderBase}`],
    transform: {
        '^.+\\.tsx?$': `../${folderBase}/node_modules/ts-jest/dist/index.js`,
    },
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    // Coverage
    collectCoverage: true,
    coverageReporters: ['text', 'html'],
    collectCoverageFrom: [`<rootDir>/src/**/*.{ts,js}`],
    coveragePathIgnorePatterns: [
        "node_modules"
    ]
}