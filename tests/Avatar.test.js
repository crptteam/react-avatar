import React from "react";
import { Avatar } from "../src/";

describe("Avatar", () => {

  it("Should renders without problems", () => {

    const wrapper = shallow(
      <Avatar round abbr="ES" />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

