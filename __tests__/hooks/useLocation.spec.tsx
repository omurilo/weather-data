import { renderHook, act } from "@testing-library/react-hooks";

import useLocation from "@hooks/useLocation";
import mockNavigatorGeolocation from "@tests/test-utils/mocks/geolocation";
import mockNavigatorPermissions from "@tests/test-utils/mocks/permissions";

const DEFAULT_LOCATION = {
  coords: {
    latitude: 51.1,
    longitude: 45.3,
  },
  timestamp: 1644097095,
};

describe("Use Location", () => {
  it("should get user location", () => {
    mockNavigatorGeolocation();
    const { result } = renderHook(() => useLocation());

    act(() => {
      result.current.getCurrentLocation();
    });

    expect(result.current.currentLocation).toStrictEqual(DEFAULT_LOCATION);
  });

  it("shouldn't get user location and get error", () => {
    mockNavigatorGeolocation(true);
    const { result } = renderHook(() => useLocation());

    act(() => {
      result.current.getCurrentLocation();
    });

    expect(result.current.error).toStrictEqual(
      "Permissão para acesso à localização negada"
    );
  });

  it("should get user location with permissions API granted", async () => {
    mockNavigatorGeolocation();
    mockNavigatorPermissions();
    const { result, waitForNextUpdate } = renderHook(() => useLocation());

    act(() => {
      result.current.getCurrentLocation();
    });

    await waitForNextUpdate({ timeout: 2000 });

    expect(result.current.currentLocation).toStrictEqual(DEFAULT_LOCATION);
  });
});
