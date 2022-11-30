import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";

describe("Grid", () => {
  const data = [
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
      subtitle:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
      image:
        "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA14DAmV.img?h=0&w=600&m=6&q=60&u=t&o=f&l=f",
    },
  ];

  beforeEach(() => {
    render(<Grid data={data} />);
  });

  it("should render cards in grid layout", () => {
    expect(screen.getByText(data[0].title, { exact: false })).toBeDefined();
    expect(screen.getByText(data[0].subtitle)).toBeDefined();
    expect(screen.getByRole("img")).toBeDefined();
  });
});
