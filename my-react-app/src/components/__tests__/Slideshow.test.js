import { render, screen, fireEvent } from "@testing-library/react";
import Slideshow from "../Slideshow";
import { describe, test, expect } from "@jest/globals";

describe("Slideshow Component", () => {
  const mockPictures = ["image1.jpg", "image2.jpg", "image3.jpg"];

  test("initializes with the first image", () => {
    render(<Slideshow pictures={mockPictures} />);

    const img = screen.getByRole("img", { name: /Slide 1/i });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image1.jpg");
  });

  test("navigates to the next image", () => {
    render(<Slideshow pictures={mockPictures} />);

    const nextButton = screen.getByRole("button", { name: /Next/i });
    fireEvent.click(nextButton);

    const img = screen.getByRole("img", { name: /Slide 2/i });
    expect(img).toHaveAttribute("src", "image2.jpg");
  });

  test("navigates to the previous image", () => {
    render(<Slideshow pictures={mockPictures} />);

    const prevButton = screen.getByRole("button", { name: /Previous/i });
    fireEvent.click(prevButton);

    const img = screen.getByRole("img", { name: /Slide 3/i });
    expect(img).toHaveAttribute("src", "image3.jpg");
  });
});
