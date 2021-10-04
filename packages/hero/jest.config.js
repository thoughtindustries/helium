module.exports = {
    roots: ['src'],
    testEnvironment: 'jsdom',
    transform: {
        '\\.[jt]sx?$': ['babel-jest', { cwd: __dirname }],
    },
};