/* global jest, test, expect, beforeEach, describe */
import React from "react";
import {shallow} from "enzyme";

import Dropdown from "../../../../dist/js/shared/Dropdown.jsx";

let wrapper;

const items = [
    {
        id: "login",
        label: "Login",
        url: "/login"
    },
    {
        id: "logout",
        label: "Logout",
        action: () => "toto",
        url: ""
    }
];

describe("Desktop devices tests", () => {

    Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => {
            return {
                matches: false
            };
        })
    });

    beforeEach(() => {
        wrapper = shallow(
            <Dropdown
                items={[]}
            />
        );
        wrapper.instance().mobileDevice = false;
    });

    test("Should mount with open state set to false", () => {
        expect(wrapper.state("open")).toBe(false);
    });

    test("Should render with proper dropdown css class", () => {
        expect(wrapper.first().prop("className")).toBe("tuiv2_dropdown");
    });

    test("Should render with additional dropdown css classes", () => {
        wrapper = shallow(
            <Dropdown
                items={[]}
                containerClass="toto"
            />
        );
        expect(wrapper.find(".toto").exists()).toBe(true);
    });

    test("Should render with proper icon css class", () => {
        expect(wrapper.find(".tuiv2_dropdown__label").exists()).toBe(true);
    });

    test("Should render with additional icon css classes", () => {
        wrapper = shallow(
            <Dropdown
                items={[]}
                spanClass="toto"
            />
        );
        expect(wrapper.find(".toto").exists()).toBe(true);
    });

    test("Should toggle open", () => {
        wrapper.first().simulate("click");
        expect(wrapper.state("open")).toBe(true);
    });

    test("Should render menu", () => {
        wrapper = shallow(
            <Dropdown
                items={items}
                spanClass="toto"
            />
        );
        wrapper.first().simulate("click");
        expect(wrapper.find(".tuiv2_list-item").exists()).toBe(true);
    });

    test("Should activate action", () => {
        wrapper = shallow(
            <Dropdown
                items={items}
                spanClass="toto"
            />
        );
        wrapper.first().simulate("click");
        expect(wrapper.find("a").at(1).prop("onClick")()).toBe("toto");
    });

    test("Should not render close item", () => {
        wrapper.first().simulate("click");
        expect(wrapper.find(".lnr-cross").exists()).toBe(false);
    });

    test("Should be right aligned", () => {
        wrapper = shallow(
            <Dropdown
                align="right"
                items={[]}
            />
        );
        expect(wrapper.instance().getPosition()).toEqual({left: "auto", right: 0});
    });

    test("Should be left aligned", () => {
        expect(wrapper.instance().getPosition()).toEqual({right: "auto", left: 0});
    });

});

describe("Mobile devices test", () => {

    Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => {
            return {
                matches: true
            };
        })
    });

    beforeEach(() => {
        wrapper = shallow(
            <Dropdown
                items={[]}
            />
        );
    });

    test("Should render close item", () => {
        wrapper = shallow(
            <Dropdown
                items={items}
            />
        );
        wrapper.first().simulate("click");
        expect(wrapper.find(".lnr-cross").exists()).toBe(true);
    });

    test("Should toggle open", () => {
        expect(wrapper.state("open")).toBe(false);
        wrapper.instance().toggleOpen();
        expect(wrapper.state("open")).toBe(true);
        wrapper.instance().toggleOpen();
        expect(wrapper.state("open")).toBe(false);
    });

    test("Should toggle animation", () => {
        wrapper.instance().toggleOpen();
        expect(wrapper.state("animation")).toBe("in");
        wrapper.instance().toggleOpen();
        expect(wrapper.state("animation")).toBe("out");
    });

    test("Should handle blur", () => {
        wrapper.instance().handleBlur();
        expect(wrapper.state("open")).toBe(false);
        wrapper.instance().toggleOpen();
        wrapper.instance().handleBlur();
        expect(wrapper.state("open")).toBe(false);
    });
});
