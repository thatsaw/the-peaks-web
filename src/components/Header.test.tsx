import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  });

  it("should have logo link", () => {
    expect(screen.getByText(/the peaks/i)).toBeDefined();
    expect(screen.getByPlaceholderText(/search all news/i)).toBeDefined();
  });
});
