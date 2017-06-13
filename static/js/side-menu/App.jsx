import React from "react";
import ReactDOM from "react-dom";

import Menu from "./ui/Menu.jsx";

const menuItems = [{
    id: "text",
    iconClass: "lnr-text-format"
}, {
    id: "form",
    iconClass: "lnr-checkmark-circle"
}];

ReactDOM.render(
    <Menu items={menuItems}/>,
    document.getElementById("side-menu")
);
