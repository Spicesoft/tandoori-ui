import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {menuApp} from "./reducer";

import MenuApp from "./container/MenuApp";

const menuItems = [{
    id: "text",
    iconClass: "fa fa-home",
    active: false,
    subItems: [{
        category: "Home",
        items: [
            {
                id: "About",
                url: "/"
            }
        ]
    }, {
        category: "Components",
        items: [
            {
                id: "Typography",
                url: "/typography"
            },
            {
                id: "Lists",
                url: "/lists"
            },
            {
                id: "List groups",
                url: "/list-groups"
            },
            {
                id: "Buttons",
                url: "/buttons"
            },
            {
                id: "Forms",
                url: "/forms"
            },
            {
                id: "Navs",
                url: "/navs"
            },
            {
                id: "Indicators",
                url: "/indicators"
            },
            {
                id: "Progress",
                url: "/progress"
            },
            {
                id: "Containers",
                url: "/containers"
            },
            {
                id: "Panels",
                url: "/panels"
            }
        ]
    }]
}, {
    id: "form",
    iconClass: "lnr-checkmark-circle",
    active: false,
    subItems: [{
        category: "Category 1",
        items: [{
            id: "Item 1",
            url: "#"
        }, {
            id: "Item 2",
            url: "prout"
        }]
    }]
}];

const appData = {
    menuItems: menuItems,
    open: false,
    activeItem: ""
};


let store = createStore(menuApp, appData);
const logChange = () => {
    console.info(store.getState());
};
store.subscribe(logChange);

ReactDOM.render(
    <Provider store={store} >
        <MenuApp />
    </Provider>,
    document.getElementById("side-menu")
);
