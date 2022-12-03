import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

describe("Dropdown", () => {
  beforeEach(() => {
    render(<Dropdown />);
  });

  it("should have option buttons", () => {
    expect(screen.getByText(/newest first/i)).toBeDefined();
  });
});
