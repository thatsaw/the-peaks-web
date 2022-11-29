import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Nav } from "./Nav";

describe("Nav", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
  });

  it("should have links", () => {
    expect(screen.getByText(/home/i)).toBeDefined();
    expect(screen.getByText(/about/i)).toBeDefined();
  });
});
