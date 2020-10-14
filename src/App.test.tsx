import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from "@testing-library/react";
import App from "./App";

test("it renders the app", () => {
  const { getByTestId } = render(<Router><App /></Router>);
  const appElements = getByTestId("app");
  expect(appElements).toBeInTheDocument();
});
