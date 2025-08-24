module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
};
