import data from "@tests/test-utils/mocks/weather.data";

const mockUseWeather = () => {
  const useWeather = jest
    .fn()
    .mockReturnValueOnce({
      isLoading: false,
      error: undefined,
      data,
    })
    .mockReturnValueOnce({
      isLoading: true,
    })
    .mockReturnValueOnce({ error: { message: "Service Unavailable" } })
    .mockReturnValueOnce({});

  jest.mock("@contexts/Weather", () => ({
    default: useWeather,
  }));

  return useWeather;
};

export default mockUseWeather;
