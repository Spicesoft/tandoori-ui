/* global test, expect */
import React from "react";
import {shallow} from "enzyme";

import Navbar from "../../ui/Navbar.jsx";

window.matchMedia = window.matchMedia || function () {
    return {
        matches: false,
        addListener: function () {},
        removeListener: function () {}
    };
};

test("Should render navbar", () => {
    const wrapper = shallow(
        <Navbar
            logoUrl=""
            tenantTitle=""
            userName=""
            actionItems={[]}
            profileItems={[]}
            isLoggedIn={false}
        />
    );
    let classNames = wrapper.prop("className").split(" ");
    let exist = false;
    classNames.forEach(item => {
        if (item === "tuiv2_navbar--default-skin") {
            exist = true;
        }
    });
    expect(exist).toBe(true);
});
