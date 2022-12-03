import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button text="Click me" />);
  });

  it("should have text", () => {
    expect(screen.getByText("Click me", { exact: false })).toBeDefined();
  });
});
