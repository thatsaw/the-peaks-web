import React from "react";
import { expect, test } from "vitest";
import renderer from "react-test-renderer";
import { About } from "../src/routes/About";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("About should render information", () => {
  const component = renderer.create(<About />);

  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
