const mockNavigatorPermissions = () => {
  const queryMock = jest
    .fn()
    .mockImplementationOnce(() => Promise.resolve({ state: "granted" }));

  const permissions = {
    query: queryMock,
  };

  // @ts-ignore
  Object.defineProperty(global.navigator, "permissions", {
    value: permissions,
  });

  return { queryMock };
};

export default mockNavigatorPermissions;
