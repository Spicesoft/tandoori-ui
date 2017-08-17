import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {menuApp} from "./side-menu/reducer";
import MenuApp from "./side-menu/container/MenuApp";

import Navbar from "root/dist/js/navbar/ui/Navbar.jsx";

import About from "./component-examples/About.jsx";
import Typography from "./component-examples/Typography.jsx";


const menuItems = [{
    id: "home",
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
            spanClass: "lnr-rocket",
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

const BasicExample = () => (
    <Router>
        <div>
            <Navbar
                logoUrl={navbarData.logoUrl}
                tenantTitle={navbarData.tenantTitle}
                userName={navbarData.userName}
                dropdowns={navbarData.dropdowns}
                links={navbarData.links}
                profileItems={navbarData.profileItems}
                lightTheme={true}
                isLoggedIn={true}
            />

            <Provider store={store} >
                <MenuApp />
            </Provider>

            <div className="container-fluid">
                <Route exact path="/" component={About} />
                <Route path="/typography" component={Typography} />
            </div>
        </div>
    </Router>
);

ReactDOM.render(
    <BasicExample />,
    document.getElementById("tuiApp")
);
