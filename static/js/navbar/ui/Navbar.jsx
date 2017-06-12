import React from "react";
import Dropdown from "../../shared/Dropdown.jsx";

export default class Navbar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.mobileDevice = window.matchMedia("(max-width: 470px)").matches;
    }

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
                {this.renderMenuIcon()}
                {this.renderBrand()}
                {this.renderActions(items)}
            </nav>
        );
    }

    renderBrand() {
        const brandName = () => {
            if (!this.mobileDevice) {
                return (
                    <div className="tuiv2_navbar__brand-name">
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
                );
            }
        };
        return (
            <div className="tuiv2_navbar__part">
                <a href="/">
                    <img
                        src="public/img/logo.png"
                        className="tuiv2_navbar__logo"
                    />
                </a>
                {brandName()}
            </div>
        );
    }

    renderMenuIcon() {
        if (this.mobileDevice) {
            return (
                <div className="tuiv2_navbar__part">
                    <div className="tuiv2_navbar__action">
                        <span className="lnr-menu" />
                    </div>
                </div>
            );
        }
    }

    renderActions(items) {
        const profileDropdown = () => (
            !this.mobileDevice ? (<Dropdown
                items={items}
                text="Toto"
                containerClass="tuiv2_navbar__action"
                align="right"
            />) : null
        );
        return (<div className="tuiv2_navbar__part">
            <Dropdown
                items={items}
                spanClass="lnr-user"
                containerClass="tuiv2_navbar__action"
                align="right"
            />
            {profileDropdown()}
        </div>);
    }
}
