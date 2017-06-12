import React from "react";
import Dropdown from "../../shared/Dropdown.jsx";

export default class Navbar extends React.PureComponent {
    render() {
        const items = [
            {
                label: "Item 1",
                target: "#",
                action: () => {console.log("Clicked item 1");}
            },
            {
                label: "Item 2",
                target: "prout"
            }
        ];
        return (
            <nav className="tuiv2_navbar tuiv2_navbar--default-skin">
                <div className="tuiv2_navbar__part">
                    <a href="/">
                        <img
                            src="public/img/logo.png"
                            className="tuiv2_navbar__logo"
                        />
                    </a>
                    <p className="tuiv2_navbar__slogan">Cowork.io's Tandoori UI</p>
                    <div className="tuiv2_navbar__search">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="tuiv2_navbar__part">
                    <Dropdown
                        items={items}
                        spanClass="lnr-user"
                        containerClass="tuiv2_navbar__action"
                        align="right"
                    />
                    <Dropdown
                        items={items}
                        text="Toto"
                        containerClass="tuiv2_navbar__action"
                        align="right"
                    />
                </div>
            </nav>
        );
    }
}
