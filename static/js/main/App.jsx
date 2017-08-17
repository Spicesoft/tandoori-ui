import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {menuApp} from "./side-menu/reducer";
import MenuApp from "./side-menu/container/MenuApp";
import Navbar from "root/dist/js/navbar/ui/Navbar.jsx";

const Home = () => (
    <div>
        <h2>
            Home
        </h2>
    </div>
);

const About = () => (
    <div>
        <h2>
            About
        </h2>
    </div>
);

const Topic = ({match}) => (
    <div>
        <h3>{match.params.topId}</h3>
    </div>
);

const Topics = ({match}) => (
    <div>
        <h2>
            Topics
        </h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. States
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic</h3>
        )} />
    </div>
);

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

            <Route exact path="/" compnent={Home} />
            <Route path="/about" component={About} />
            <Route path="/topics" component={Topics} />
        </div>
    </Router>
);

ReactDOM.render(
    <BasicExample />,
    document.getElementById("tuiApp")
);
