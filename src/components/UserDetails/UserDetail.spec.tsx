import React from "react";
import renderer from "react-test-renderer";
import { cleanup } from "@testing-library/react";
import { UserDetails } from './index';

describe("UserDetails", () => {
    it("renders correctly", () => {
      const tree = renderer.create(<UserDetails></UserDetails>).toJSON();
      expect(tree).toMatchSnapshot();
    });
});
  
afterEach(cleanup);
