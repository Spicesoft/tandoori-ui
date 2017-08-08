import React from "react";
import T from "prop-types";
import Dropdown from "../../shared/Dropdown.jsx";

export default class Navbar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.mobileDevice = window.matchMedia("(max-width: 768px)").matches;
    }

    render() {
        const {logoUrl, tenantTitle, userName, profileItems, links, dropdowns} = this.props;
        const classNames = [
            "tuiv2_navbar"
        ];
        classNames.push(
            this.props.lightTheme ? "tuiv2_navbar--light" : "tuiv2_navbar--default-skin"
        );
        return (
            <nav className={classNames.join(" ")}>
                {this.renderMobileMenu()}
                {this.renderBrand(logoUrl, tenantTitle)}
                {this.renderActions(profileItems, links, dropdowns, userName)}
            </nav>
        );
    }

    renderBrand(logoUrl, tenantTitle) {
        const brandName = () => {
            if (!this.mobileDevice) {
                return (
                    <div className="tuiv2_navbar__brand-name">
                        <p className="tuiv2_navbar__slogan">{tenantTitle}</p>
                        <div className="tuiv2_navbar__search">
                            {this.props.searchComponent}
                        </div>
                    </div>
                );
            }
        };
        return (
            <div className="tuiv2_navbar__part">
                <a href="/">
                    <img
                        src={logoUrl}
                        alt={tenantTitle}
                        className="tuiv2_navbar__logo"
                    />
                </a>
                {brandName()}
            </div>
        );
    }

    renderMobileMenu() {
        if (this.mobileDevice && this.props.links.length > 0) {
            return (
                <div className="tuiv2_navbar__part">
                    <Dropdown
                        items={this.props.links}
                        spanClass="lnr-menu"
                        containerClass="tuiv2_navbar__action"
                    />
                </div>
            );
        }
    }

    renderActions(profileItems, links, dropdowns, userName) {
        return (<div className="tuiv2_navbar__part">
            {this.props.children}
            {this.mobileDevice ? null : this.renderLinks(this.props.links)}
            {this.renderDropdowns(this.props.dropdowns)}
            {profileItems.length > 0 ? this.renderProfileItems(profileItems, userName) : null}
        </div>);
    }

    renderProfileItems(items, userName) {
        return (
            <Dropdown
                items={items}
                text={this.mobileDevice ? "" : userName}
                spanClass={this.mobileDevice ? "lnr-user" : ""}
                containerClass="tuiv2_navbar__action"
                align="right"
            />
        );
    }

    renderDropdowns(actions) {
        return actions.map(action => (
            <Dropdown
                items={action.items}
                spanClass={this.mobileDevice ? action.spanClass : ""}
                text={this.mobileDevice ? "" : action.label}
                containerClass="tuiv2_navbar__action"
                align="right"
                key={action.id}
            />
        ));
    }

    renderLinks(links) {
        return links.map(link => {
            return <a key={link.id} className="tuiv2_btn tuiv2_btn--lg" href={link.url}>{link.label}</a>;
        });
    }


}
Navbar.propTypes = {
    lightTheme: T.bool,
    logoUrl: T.string.isRequired,
    tenantTitle: T.string.isRequired,
    userName: T.string.isRequired,
    links: T.array.isRequired,
    profileItems: T.array.isRequired,
    dropdowns: T.array.isRequired,
    isLoggedIn: T.bool.isRequired,
    children: T.node,
    searchComponent: T.node
};
