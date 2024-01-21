module.exports = {
    testMatch: ['**/__tests__/**/*.test.js'],
    setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
    testEnvironment: 'jest-environment-jsdom',
};
