module.exports = {
    testMatch: ['**/__test__/**/*.test.js'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testEnvironment: 'jest-environment-jsdom',
};
