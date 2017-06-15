import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {menuApp} from "./reducer";

import MenuApp from "./container/MenuApp";

const menuItems = [{
    id: "text",
    iconClass: "lnr-text-format",
    active: false,
    subItems: [{
        category: "Category 1",
        items: [
            {
                id: "Item 1",
                url: "#"
            },
            {
                id: "Item 2",
                url: "prout"
            }
        ]
    }, {
        category: "Category 2",
        items: [
            {
                id: "Item 1",
                url: "#"
            },
            {
                id: "Item 2",
                url: "prout"
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
