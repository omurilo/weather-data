import React, { FunctionComponent, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { WeatherContextProvider } from "@contexts/Weather";

const AllTheProviders: FunctionComponent = ({ children }) => {
  return <WeatherContextProvider>{children}</WeatherContextProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
