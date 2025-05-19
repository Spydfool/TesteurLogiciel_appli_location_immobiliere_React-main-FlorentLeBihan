import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Card";
import "@testing-library/jest-dom";
import { describe, test, expect } from "@jest/globals";

describe("Card Component", () => {
  test("renders correctly with title and cover", () => {
    render(
      <BrowserRouter>
        <Card id="1" title="Test Title" cover="test-image.jpg" />
      </BrowserRouter>
    );

    const title = screen.getByText("Test Title");
    const cardImage = screen.getByRole("link").querySelector(".card-image");

    expect(title).toBeInTheDocument();
    expect(cardImage).toHaveStyle(`background-image: url(test-image.jpg)`);
  });
});
