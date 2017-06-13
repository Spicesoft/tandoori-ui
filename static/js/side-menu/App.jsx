import React from "react";
import ReactDOM from "react-dom";

import Menu from "./ui/Menu.jsx";

const menuItems = [{
    id: "text",
    iconClass: "lnr-text-format",
    active: true,
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

ReactDOM.render(
    <Menu items={menuItems}/>,
    document.getElementById("side-menu")
);
