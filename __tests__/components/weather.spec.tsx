import * as React from "react";

import { render, RenderResult, screen, waitFor } from "@tests/test-utils";
import mockUseWeather from "@tests/test-utils/mocks/useWeather";

const Wrapper: React.FunctionComponent = ({ children }) => (
  <React.Suspense fallback="await to import">{children}</React.Suspense>
);

describe("Weather Data", () => {
  let container: RenderResult;
  let Weather: React.FunctionComponent;

  beforeAll(() => {
    mockUseWeather();
    Weather = React.lazy(() => import("@components/Weather"));
  });

  beforeEach(() => {
    // @ts-ignoreI
    container = render(<Weather />, { wrapper: Wrapper });
  });

  it("should weather", async () => {
    await waitFor(() =>
      expect(screen.getByText(/aparecida de goiânia/i)).toBeInTheDocument()
    );
  });

  it("should be show loader when waiting response", async () => {
    await waitFor(() =>
      expect(screen.getByRole("button")).toHaveAttribute(
        "aria-label",
        "animation"
      )
    );
  });

  it("should be show error on service unavailable", async () => {
    await waitFor(() =>
      expect(
        screen.getByText(/Error: "Service Unavailable"/)
      ).toBeInTheDocument()
    );
  });

  it("should be show nothing when data is null", async () => {
    await waitFor(() =>
      expect(screen.getByTestId("weather-data-container").innerHTML).toEqual("")
    );
  });
});
