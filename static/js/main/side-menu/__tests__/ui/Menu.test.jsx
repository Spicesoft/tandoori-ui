/* global expect, test, beforeEach, jest */
import React from "react";
import {shallow} from "enzyme";

import Menu from "../../ui/Menu.jsx";

let wrapper;
let menuItems;

beforeEach(() => {
    menuItems = [
        {
            id: "toto",
            iconClass: "totoClass",
            active: false,
            subItems: [
                {
                    category: "Toto cat 1",
                    items: [
                        {
                            id: "subToto11",
                            url: "/toto11"
                        },
                        {
                            id: "subToto12",
                            url: "/toto12"
                        }
                    ]
                },
                {
                    category: "Toto cat 2",
                    items: [
                        {
                            id: "subToto21",
                            url: "/toto21"
                        },
                        {
                            id: "subToto22",
                            url: "/toto22"
                        }
                    ]
                }
            ]
        }
    ];
    wrapper = shallow(
        <Menu
            onItemClicked={() => "toto"}
            onOutsideLayerClicked={() => "clicked outside"}
            open={false}
            activeItem=""
            menuItems={menuItems}
        />
    );
});


test("Should render", () => {
    expect(wrapper.find(".tuiv2_side-menu").exists()).toBe(true);
});

test("Should render categories", () => {
    menuItems[0].active = true;
    wrapper = shallow(
        <Menu
            onItemClicked={() => "toto"}
            onOutsideLayerClicked={() => "clicked outside"}
            open={false}
            activeItem=""
            menuItems={menuItems}
        />
    );
    expect(wrapper.find(".tuiv2_list-item--divider").exists()).toBe(true);
});

test("Should render with --out css class", () => {
    menuItems[0].active = true;
    wrapper = shallow(
        <Menu
            onItemClicked={() => "toto"}
            onOutsideLayerClicked={() => "clicked outside"}
            open={false}
            activeItem="toto"
            menuItems={menuItems}
        />
    );
    expect(wrapper.find(".tuiv2_side-menu-panel--out").exists()).toBe(true);
});

test("Should render with --in css class", () => {
    menuItems[0].active = true;
    wrapper = shallow(
        <Menu
            onItemClicked={() => "toto"}
            onOutsideLayerClicked={() => "clicked outside"}
            open={true}
            activeItem="toto"
            menuItems={menuItems}
        />
    );
    expect(wrapper.find(".tuiv2_side-menu-panel--in").exists()).toBe(true);
});

test("Should trigger onOutsideLayerClicked", () => {
    const outSideClicked = jest.fn();
    wrapper = shallow(
        <Menu
            onItemClicked={() => "toto"}
            onOutsideLayerClicked={outSideClicked}
            open={true}
            activeItem="toto"
            menuItems={menuItems}
        />
    );
    wrapper.find(".tuiv2_side-menu-panel__outside-layer").simulate("click");
    expect(outSideClicked.mock.calls.length).toBe(1);
});
