import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from ".";

test("renders Header", () => {
  render(<ProductCard name="Iphone" />);
  expect(screen.getByText("Iphone")).toBeInTheDocument();
});
