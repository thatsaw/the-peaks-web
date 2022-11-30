import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Spinner } from "./Spinner";

describe("Spinner", () => {
  beforeEach(() => {
    render(<Spinner />);
  });

  it("should show spinning ring", () => {
    expect(screen.getByTestId("spinner")).toBeDefined();
  });
});
