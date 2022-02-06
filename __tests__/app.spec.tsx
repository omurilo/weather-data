import * as React from "react";

import { fireEvent, render, screen, waitFor } from "@tests/test-utils";
import mockNavigatorGeolocation from "@tests/test-utils/mocks/geolocation";
import mockGlobalFetch from "@tests/test-utils/mocks/fetch";

import App from "@/App";

describe("App", () => {
  beforeAll(() => {
    mockNavigatorGeolocation();
    mockGlobalFetch();
  });

  it("should is possible render app page", async () => {
    const renderResult = render(<App />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Buscar previsão do tempo");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    await waitFor(() => screen.getByText(/Tempo agora em/));

    expect(screen.getByText(/Atualizar previsão do tempo/)).toBeInTheDocument();
    expect(renderResult.container).toMatchSnapshot();
  });

  it("shouldn't show data when error on get location", async () => {
    mockNavigatorGeolocation(true);
    render(<App />);

    const button = screen.getByRole("button");

    fireEvent(
      button,
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    await waitFor(() =>
      expect(screen.getByTestId("header-alert-message")).toBeInTheDocument()
    );
  });
});
