const mockNavigatorGeolocation = (error = false) => {
  const getCurrentPositionMock = error
    ? jest.fn().mockImplementationOnce((_, rejected) =>
        rejected({
          code: 1,
          message: "Permission denied",
        })
      )
    : jest.fn().mockImplementationOnce((success) =>
        success({
          coords: {
            latitude: 51.1,
            longitude: 45.3,
          },
          timestamp: 1644097095,
        })
      );

  const geolocation = {
    getCurrentPosition: getCurrentPositionMock,
  };

  // @ts-ignore
  Object.defineProperty(global.navigator, "geolocation", {
    value: geolocation,
    configurable: true,
    writable: false,
  });

  return { getCurrentPositionMock };
};

export default mockNavigatorGeolocation;
