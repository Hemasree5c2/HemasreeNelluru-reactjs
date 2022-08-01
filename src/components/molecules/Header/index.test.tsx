import React from "react";
import { render, screen } from "@testing-library/react";
import Header from ".";

test("renders Header", () => {
  render(<Header />);
  expect(screen.getByText("UPayments Store")).toBeInTheDocument();
});
