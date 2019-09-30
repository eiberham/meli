
module.exports = {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    },
    coveragePathIgnorePatterns: [
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["./enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
      "\\.(css|less|scss)$": "<rootDir>/__mocks__/index.js"
    }
};