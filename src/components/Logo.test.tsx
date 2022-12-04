import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Logo } from "./Logo";

describe("Logo", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
  });

  it("should have text", () => {
    expect(screen.getByText(/the peaks/i)).toBeDefined();
    expect(screen.getByRole("img")).toBeDefined();
    expect(screen.getByAltText("the peaks", { exact: false })).toBeDefined();
  });
});
