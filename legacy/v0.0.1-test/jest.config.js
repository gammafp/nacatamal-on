module.exports = {
    roots: [`<rootDir>/tests`],
    transform: {
        '^.+\\.tsx?$': `ts-jest`,
    },
    verbose: true,
    testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts)$",
    moduleFileExtensions: ['ts', 'js', 'json', 'node'],
    moduleNameMapper: {
        "^nacatamal-on/(.*)$": "<rootDir>/nacatamal-on/$1",
    }
}