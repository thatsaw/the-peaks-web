import React from "react";
import { expect, test } from "vitest";
import renderer from "react-test-renderer";
import App from "../src/App";

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON();
  expect(result).toBeDefined();
  expect(result).not.toBeInstanceOf(Array);
  return result as renderer.ReactTestRendererJSON;
}

test("App should render index page", () => {
  const component = renderer.create(<App />);

  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
