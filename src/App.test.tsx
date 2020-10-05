import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("it renders the app", () => {
  const { getAllByText } = render(<App />);
  const buttonElements = getAllByText(/Example/i);
  expect(buttonElements[0]).toBeInTheDocument();
});
