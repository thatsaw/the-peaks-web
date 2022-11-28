import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it("should start at 0", () => {
    expect(screen.getByText(/count is 0/i)).toBeDefined();
  });
});
