/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["./"],
  modulePaths: ["<rootDir>"],
  preset: "ts-jest",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: [
    "<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  testPathIgnorePatterns: ["<rootDir>/__tests__/test-utils/*"],
  testEnvironment: "jsdom",
  transform: {
    // @ts-ignore
    "^.+\\.(t|j)sx?$": ["ts-jest"],
  },
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "\\.(css|sass|scss)$": "identity-obj-proxy",
    "@assets/(.*)": "<rootDir>/src/assets/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
    "@utils/(.*)": "<rootDir>/src/utils/$1",
    "@hooks/(.*)": "<rootDir>/src/hooks/$1",
    "@contexts/(.*)": "<rootDir>/src/contexts/$1",
    "@tests/(.*)": "<rootDir>/__tests__/$1",
  },
};

export default config;
