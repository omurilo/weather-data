const env = () =>
  jest.mock("@config/env", () => {
    return { APP_CONFIG: { API_KEY: "" } };
  });

export default env;
