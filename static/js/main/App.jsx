import React from "react";
import ReactDOM from "react-dom";
import {
    HashRouter as Router,
    Route
} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";

import {menuApp} from "./side-menu/reducer";
import MenuApp from "./side-menu/container/MenuApp";

import Navbar from "root/dist/js/navbar/ui/Navbar.jsx";

import About from "./component-examples/About.jsx";
import Typography from "./component-examples/Typography.jsx";
import Lists from "./component-examples/Lists.jsx";
import Buttons from "./component-examples/Buttons.jsx";
import Forms from "./component-examples/Forms.jsx";
import Navs from "./component-examples/Navs.jsx";
import Indicators from "./component-examples/Indicators.jsx";
import Panels from "./component-examples/Panels.jsx";

import Navbars from "./component-examples/Navbars.jsx";


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
    }]
}, {
    id: "components",
    iconClass: "fa fa-css3",
    active: false,
    subItems: [
        {
            category: "React Components",
            items: [{
                id: "Navbar",
                url: "/navbars"
            }]
        },
        {
            category: "CSS Components",
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
                    id: "Panel & Containers",
                    url: "/panels"
                }
            ]
        }
    ]
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
    links: [],
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
                isLoggedIn={false}
            />

            <Provider store={store} >
                <MenuApp />
            </Provider>

            <div className="container-fluid">
                <Route exact path="/" component={About} />
                <Route path="/typography" component={Typography} />
                <Route path="/lists" component={Lists} />
                <Route path="/buttons" component={Buttons} />
                <Route path="/forms" component={Forms} />
                <Route path="/navs" component={Navs} />
                <Route path="/indicators" component={Indicators} />
                <Route path="/panels" component={Panels} />
                <Route path="/navbars" component={Navbars} />
            </div>
        </div>
    </Router>
);

ReactDOM.render(
    <BasicExample />,
    document.getElementById("tuiApp")
);
