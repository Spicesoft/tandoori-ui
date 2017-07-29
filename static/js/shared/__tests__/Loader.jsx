/* global test, expect */
import React from "react";
import {shallow} from "enzyme";

import Loader from "../Loader.jsx";

test("Should render loader", () => {
    const wrapper = shallow(<Loader />);
    expect(wrapper.find(".tuiv2_loader__dot").length).toBe(3);
});
