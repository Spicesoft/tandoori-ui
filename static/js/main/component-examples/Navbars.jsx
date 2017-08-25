import React from "react";
import Navbar from "root/dist/js/navbar/ui/Navbar.jsx";

const navbarStyles = {
    position: "relative",
    zIndex: 1
};

const Navbars = () => (
    <div>
        <div className="component-example">
            <Navbar
                navStyles={navbarStyles}
                tenantTitle={"Navbar"}
                userName={""}
                dropdowns={[]}
                links={[]}
                profileItems={[]}
                lightTheme={true}
                isLoggedIn={true}
            />
            <pre>
                <code>
{`<Navbar
    tenantTitle={"Navbar"}
    userName={""}
    dropdowns={[]}
    links={[]}
    profileItems={[]}
    lightTheme={true}
    isLoggedIn={true}
/>`}
                </code>
            </pre>
        </div>
        <div className="component-example">
            <Navbar
                navStyles={navbarStyles}
                logoUrl={"public/img/logo.png"}
                tenantTitle={"Navbar with links"}
                userName={""}
                dropdowns={[]}
                links={[
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
                ]}
                profileItems={[]}
                lightTheme={true}
                isLoggedIn={true}
            />
            <pre>
                <code>
{`<Navbar
    logoUrl={"public/img/logo.png"}
    tenantTitle={"Navbar"}
    userName={""}
    dropdowns={[]}
    links={[
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
    ]}
    profileItems={[]}
    lightTheme={true}
    isLoggedIn={true}
/>`}
                </code>
            </pre>
        </div>
        <div className="component-example">
            <Navbar
                navStyles={navbarStyles}
                logoUrl={"public/img/logo.png"}
                tenantTitle={"Navbar with dropdown & profile item"}
                userName={"Claudy Faucan"}
                dropdowns={[
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
                ]}
                links={[]}
                profileItems={[
                    {
                        id: "logout",
                        label: "Logout",
                        url: "#logout"
                    }
                ]}
                lightTheme={true}
                isLoggedIn={true}
            />
            <pre>
                <code>
{`<Navbar
    logoUrl={"public/img/logo.png"}
    tenantTitle={"Navbar"}
    userName={"Claudy Faucan"}
    dropdowns={[
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
    ]}
    links={[]}
    profileItems={[
        {
            id: "logout",
            label: "Logout",
            url: "#logout"
        }
    ]}
    lightTheme={true}
    isLoggedIn={true}
/>`}
                </code>
            </pre>
        </div>
        <div className="component-example">
            <Navbar
                navStyles={navbarStyles}
                logoUrl={"public/img/logo.png"}
                tenantTitle={"Dark theme"}
                userName={"Baghera"}
                dropdowns={[]}
                links={[]}
                profileItems={[
                    {
                        id: "logout",
                        label: "Logout",
                        url: "#logout"
                    }
                ]}
                lightTheme={false}
                isLoggedIn={true}
            />
            <pre>
                <code>
{`<Navbar
    logoUrl={"public/img/logo.png"}
    tenantTitle={"Navbar"}
    userName={"Baghera"}
    dropdowns={[]}
    links={[]}
    profileItems={[
        {
            id: "logout",
            label: "Logout",
            url: "#logout"
        }
    ]}
    lightTheme={false}
    isLoggedIn={true}
/>`}
                </code>
            </pre>
        </div>
        <div className="component-example">
            <Navbar
                navStyles={navbarStyles}
                logoUrl={"public/img/logo.png"}
                tenantTitle={"Custom elements"}
                userName={"Baghera"}
                dropdowns={[]}
                links={[]}
                profileItems={[
                    {
                        id: "logout",
                        label: "Logout",
                        url: "#logout"
                    }
                ]}
                lightTheme={false}
                isLoggedIn={true}
            >
                <span className="fa fa-linux" />
                <div style={{margin: "1rem"}}>I am A custom element</div>
                <span className="fa fa-rebel" />
            </Navbar>
            <pre>
                <code>
{`<Navbar
    navStyles={navbarStyles}
    logoUrl={"public/img/logo.png"}
    tenantTitle={"Custom elements"}
    userName={"Baghera"}
    dropdowns={[]}
    links={[]}
    profileItems={[
        {
            id: "logout",
            label: "Logout",
            url: "#logout"
        }
    ]}
    lightTheme={false}
    isLoggedIn={true}
>
    <span className="fa fa-linux" />
    <div style={{margin: "1rem"}}>I am A custom element</div>
    <span className="fa fa-rebel" />
</Navbar>`}
                </code>
            </pre>
        </div>
    </div>
);

export default Navbars;
