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
    let exists = false;
    classNames.forEach(item => {
        if (item === "tuiv2_navbar--default-skin") {
            exists = true;
        }
    });
    expect(exists).toBe(true);
});

test("Should render navbar with light theme", () => {
    const wrapper = shallow(
        <Navbar
            logoUrl=""
            tenantTitle=""
            userName=""
            actionItems={[]}
            profileItems={[]}
            isLoggedIn={false}
            lightTheme
        />
    );
    let classNames = wrapper.prop("className").split(" ");
    let exist = false;
    classNames.forEach(item => {
        if (item === "tuiv2_navbar--light") {
            exist = true;
        }
    });
    expect(exist).toBe(true);
});

test("Should render with action links", () => {
    const wrapper = shallow(
        <Navbar
            logoUrl=""
            tenantTitle=""
            userName=""
            actionItems={[
                {
                    id: "login",
                    label: "Login",
                    url: "/login"
                },
                {
                    id: "logout",
                    label: "Logout",
                    url: "/logout"
                }
            ]}
            profileItems={[]}
            isLoggedIn={false}
            lightTheme
        />
    );
    expect(wrapper.find({href: "/logout"}).length).toBe(1);
    expect(wrapper.find({href: "/login"}).length).toBe(1);
});

test("Should render mobile items", () => {
    /* global jest */
    Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => {
            return {
                matches: true
            };
        })
    });
    const wrapper = shallow(
        <Navbar
            logoUrl=""
            tenantTitle=""
            userName=""
            actionItems={[
                {
                    id: "login",
                    label: "Login",
                    url: "/login"
                },
                {
                    id: "logout",
                    label: "Logout",
                    url: "/logout"
                }
            ]}
            profileItems={[]}
            isLoggedIn={false}
            lightTheme
        />
    );
    expect(wrapper.find(".tuiv2_navbar__search").exists()).toBe(false);
    expect(wrapper.find(".lnr-menu").exists()).toBe(true);
});
