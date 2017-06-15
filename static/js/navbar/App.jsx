import React from "react";
import ReactDOM from "react-dom";

import Navbar from "./ui/Navbar.jsx";

const navbarData = {
    logoUrl: "public/img/logo.png",
    tenantTitle: "Cowork's Tandoori UI",
    userName: "Roland",
    actionItems: [
        {
            id: "coworkio",
            label: "Go to coworkio",
            url: "https://cowork.io/"
        },
        {
            id: "lelab",
            label: "Go to the lab",
            url: "https://lelab.cowork.io"
        }
    ],
    profileItems: [
        {
            id: "logout",
            label: "Logout",
            url: ""
        }
    ]
};

ReactDOM.render(
    <Navbar
        logoUrl={navbarData.logoUrl}
        tenantTitle={navbarData.tenantTitle}
        userName={navbarData.userName}
        actionItems={navbarData.actionItems}
        profileItems={navbarData.profileItems}
    />,
    document.getElementById("navbar")
);
