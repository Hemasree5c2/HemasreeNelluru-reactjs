import { render, screen } from "@testing-library/react";
import React from "react";
import Button from ".";

describe("Button Testing", () => {
  test("Checking for button label", () => {
    render(<Button disabled label="button" />);
    expect(screen.getByText("button")).toBeInTheDocument();
  });
  test("Checking for button disable", () => {
    render(<Button disabled label="button" />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
