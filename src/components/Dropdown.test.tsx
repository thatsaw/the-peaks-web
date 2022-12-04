import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Dropdown />
      </MemoryRouter>
    );
  });

  it("should have option buttons", () => {
    expect(screen.getByText(/newest first/i)).toBeDefined();
  });
});
