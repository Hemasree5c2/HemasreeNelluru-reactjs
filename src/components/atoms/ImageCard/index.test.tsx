import { render, screen } from "@testing-library/react";
import React from "react";
import ImageCard from ".";

describe("ImageCard Testing", () => {
  test("Checking for image alt", () => {
    render(<ImageCard />);
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
  });
});
