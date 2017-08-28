import React from "react";
import ReactDOM from "react-dom";

import Navbar from "root/dist/js/navbar/ui/Navbar.jsx";

const navbarData = {
    logoUrl: "public/img/logo.png",
    tenantTitle: "Cowork's Tandoori UI",
    userName: "Roland",
    links: [
        {
            type: "link",
            id: "coworkio",
            label: "Go to coworkio",
            url: "https://cowork.io/"
        },
        {
            type: "link",
            id: "lelab",
            label: "Go to the lab",
            url: "https://lelab.cowork.io"
        }
    ],
    dropdowns: [
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
    ],
    profileItems: [
        {
            id: "logout",
            label: "Logout",
            url: "#logout"
        }
    ]
};

ReactDOM.render(
    <Navbar
        logoUrl={navbarData.logoUrl}
        tenantTitle={navbarData.tenantTitle}
        userName={navbarData.userName}
        dropdowns={navbarData.dropdowns}
        links={navbarData.links}
        profileItems={navbarData.profileItems}
        lightTheme={true}
        isLoggedIn={true}
    />,
    document.getElementById("navbar")
);
