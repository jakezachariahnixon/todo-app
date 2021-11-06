import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";

import { Badge } from "./index";

describe("Badge", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Badge>Click Me</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

afterEach(cleanup);
