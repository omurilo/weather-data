import * as React from "react";
import { render, RenderOptions } from "@testing-library/react";

import { WeatherContextProvider } from "@contexts/Weather";

export const AllTheProviders: React.FunctionComponent = ({ children, ...providerProps }) => {
  return <WeatherContextProvider {...providerProps}>{children}</WeatherContextProvider>;
};

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
