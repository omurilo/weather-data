import { renderHook, act } from "@testing-library/react-hooks";

import mockNavigatorGeolocation from "@tests/test-utils/mocks/geolocation";
import mockGlobalFetch from "@tests/test-utils/mocks/fetch";
import { AllTheProviders } from "@tests/test-utils";

import useWeather from "@contexts/Weather";

const error = new Error("Service Unavailable");

describe("Weather Context", () => {
  mockGlobalFetch();

  it("should get weather data", async () => {
    mockNavigatorGeolocation();
    const { result, waitForValueToChange } = renderHook(() => useWeather(), {
      wrapper: AllTheProviders,
    });

    act(() => {
      result.current.getWeatherData();
    });

    await waitForValueToChange(() => result.current.data);

    expect(result.current.data).toHaveProperty("weather");
  });

  it("shouldn't get weather data", async () => {
    // @ts-ignore
    fetch.mockImplementationOnce(() => Promise.reject(error));
    mockNavigatorGeolocation();
    const { result, waitFor } = renderHook(() => useWeather(), {
      wrapper: AllTheProviders,
    });

    act(() => {
      result.current.getWeatherData();
    });

    expect(result.current.isLoading).toBeTruthy();

    expect(result.current.data).toBe(undefined);
    await waitFor(() => expect(result.current.error).toStrictEqual(error));
  });
});
