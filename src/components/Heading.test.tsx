import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Heading } from "./Heading";

describe("Heading", () => {
  beforeEach(() => {
    render(<Heading text="Heading" />);
  });

  it("should have text", () => {
    expect(screen.getByText(/heading/i)).toBeDefined();
  });
});
