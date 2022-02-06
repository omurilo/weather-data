import data from "@tests/test-utils/mocks/weather.data";

const mockGlobalFetch = () => {
  const globalFunctions = {
    fetch: jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(data),
      })
    ),
  };

  // @ts-ignore
  global.fetch = globalFunctions.fetch;
};

export default mockGlobalFetch;
