/* global expect, test, jest */
import React from "react";
import {shallow} from "enzyme";

import MenuItem from "../../ui/MenuItem.jsx";

test("Should render", () => {
    const wrapper = shallow(
        <MenuItem
            onItemClicked={() => null}
            item={{
                id: "",
                iconClass: "",
                active: false
            }}
        />
    );
    expect(wrapper.find(".tuiv2_menu-item").exists()).toBe(true);
});

test("Should not be active", () => {
    const wrapper = shallow(
        <MenuItem
            onItemClicked={() => null}
            item={{
                id: "",
                iconClass: "",
                active: false
            }}
        />
    );
    expect(wrapper.find(".tuiv2_menu-item--active").exists()).toBe(false);
});

test("Should be active", () => {
    const wrapper = shallow(
        <MenuItem
            onItemClicked={() => null}
            item={{
                id: "",
                iconClass: "",
                active: true
            }}
        />
    );
    expect(wrapper.find(".tuiv2_menu-item--active").exists()).toBe(true);
});

test("Should add icon", () => {
    const wrapper = shallow(
        <MenuItem
            onItemClicked={() => null}
            item={{
                id: "",
                iconClass: "my-icon-class",
                active: true
            }}
        />
    );
    expect(wrapper.find(".my-icon-class").exists()).toBe(true);
});

test("Should trigger onItemClicked", () => {
    const onClick = jest.fn();
    const wrapper = shallow(
        <MenuItem
            onItemClicked={onClick}
            item={{
                id: "toto",
                iconClass: "my-icon-class",
                active: true
            }}
        />
    );
    wrapper.simulate("click");
    expect(onClick.mock.calls.length).toBe(1);
});
