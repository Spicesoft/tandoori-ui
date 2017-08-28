/* global test, expect, jest, describe, afterEach, beforeEach */
import React from "react";
import {
    shallow,
    mount
} from "enzyme";

import Navbar from "../../../../../../dist/js/navbar/ui/Navbar.jsx";


const matchDesktop = () => {
    Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => {
            return {
                matches: false
            };
        })
    });
};

const matchMobile = () => {
    Object.defineProperty(window, "matchMedia", {
        value: jest.fn(() => {
            return {
                matches: true
            };
        })
    });
};

beforeEach(() => {
    matchDesktop();
});

afterEach(() => {
    matchDesktop();
});

describe("Test desktop devices", () => {
    test("Should render navbar", () => {
        const wrapper = shallow(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName=""
                dropdowns={[]}
                profileItems={[]}
                links={[]}
                isLoggedIn={false}
            />
        );
        let classNames = wrapper.prop("className").split(" ");
        expect(classNames.includes("tuiv2_navbar--default-skin")).toBe(true);
    });

    test("Should render navbar with light theme", () => {
        const wrapper = shallow(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName=""
                dropdowns={[]}
                links={[]}
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
                links={[
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
                dropdowns={[]}
                profileItems={[]}
                isLoggedIn={false}
                lightTheme
            />
        );
        expect(wrapper.find({href: "/logout"}).length).toBe(1);
        expect(wrapper.find({href: "/login"}).length).toBe(1);
    });

    test("Should render with profile items", () => {
        const wrapper = mount(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName="Toto"
                links={[]}
                dropdowns={[]}
                profileItems={[
                    {
                        id: "logout",
                        label: "Logout",
                        url: "/logout"
                    }
                ]}
                isLoggedIn={false}
                lightTheme
            />
        );
        const dropdownLabel = wrapper.find(".tuiv2_dropdown__label");
        expect(dropdownLabel.length).toBe(1);
        expect(dropdownLabel.text()).toBe("Toto");
    });

    test("Should render with dropdowns", () => {
        const wrapper = mount(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName="Toto"
                links={[]}
                dropdowns={[
                    {
                        type: "dropdown",
                        id: "dropdownEx",
                        label: "Dropdown",
                        spanClass: "fa fa-rocket",
                        items: [
                            {
                                id: "item1",
                                label: "Item 1",
                                url: "#"
                            },
                            {
                                id: "item2",
                                label: "Item 2",
                                url: "#"
                            }
                        ]
                    }
                ]}
                profileItems={[]}
                isLoggedIn={false}
                lightTheme
            />
        );
        const dropdownLabel = wrapper.find(".tuiv2_dropdown__label");
        expect(dropdownLabel.length).toBe(1);
        expect(dropdownLabel.text()).toMatch("Dropdown");
    });
});


// ************************* MOBILE ******************************* //

describe("Test mobile devices", () => {

    test("Should render mobile items", () => {
        matchMobile();
        const wrapper = mount(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName=""
                links={[]}
                dropdowns={[]}
                profileItems={[
                    {
                        id: "logout",
                        label: "Logout",
                        url: "/logout"
                    }
                ]}
                isLoggedIn={false}
                lightTheme
            />
        );
        expect(wrapper.find(".fa-user").exists()).toBe(true);
    });

    test("Should render mobile profile items", () => {
        matchMobile();
        const wrapper = mount(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName=""
                links={[
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
                dropdowns={[]}
                profileItems={[]}
                isLoggedIn={false}
                lightTheme
            />
        );
        expect(wrapper.find(".tuiv2_navbar__search").exists()).toBe(false);
        expect(wrapper.find(".fa-bars").exists()).toBe(true);
    });


    test("Should render with mobile dropdowns", () => {
        matchMobile();
        const wrapper = mount(
            <Navbar
                logoUrl=""
                tenantTitle=""
                userName="Toto"
                links={[]}
                dropdowns={[
                    {
                        type: "dropdown",
                        id: "dropdownEx",
                        label: "Dropdown",
                        spanClass: "fa fa-rocket",
                        items: [
                            {
                                id: "item1",
                                label: "Item 1",
                                url: "#"
                            },
                            {
                                id: "item2",
                                label: "Item 2",
                                url: "#"
                            }
                        ]
                    }
                ]}
                profileItems={[]}
                isLoggedIn={false}
                lightTheme
            />
        );
        expect(wrapper.find(".tuiv2_dropdown__label").length).toBe(1);
        expect(wrapper.find(".fa-rocket").exists()).toBe(true);
    });
});
