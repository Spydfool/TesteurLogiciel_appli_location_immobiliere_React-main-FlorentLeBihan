import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import "@testing-library/jest-dom";
import { test, expect } from "@jest/globals";

test("Card renders correctly with title and cover", () => {
  render(
    <BrowserRouter>
      <Card id="1" title="Test Title" cover="test-image.jpg" />
    </BrowserRouter>
  );

  expect(screen.getByText("Test Title")).toBeInTheDocument();
  expect(screen.getByRole("link").querySelector(".card-image")).toHaveStyle(
    "background-image: url(test-image.jpg)"
  );
});
