import React from "react";
import T from "prop-types";
import Dropdown from "../../shared/Dropdown.jsx";

export default class Navbar extends React.PureComponent {

    constructor(props) {
        super(props);
        this.mobileDevice = window.matchMedia("(max-width: 768px)").matches;
    }

    render() {
        const {logoUrl, tenantTitle, userName, actionItems, profileItems} = this.props;
        const classNames = [
            "tuiv2_navbar"
        ];
        classNames.push(
            this.props.lightTheme ? "tuiv2_navbar--light" : "tuiv2_navbar--default-skin"
        );
        return (
            <nav className={classNames.join(" ")}>
                {this.renderMenuIcon()}
                {this.renderBrand(logoUrl, tenantTitle)}
                {this.renderActions(actionItems, profileItems, userName)}
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

    renderActions(actionItems, profileItems, userName) {
        const actionsDropDown = () => {
            if (actionItems.length > 0) {
                return this.mobileDevice ? (<Dropdown
                    items={actionItems}
                    spanClass="lnr-rocket"
                    containerClass="tuiv2_navbar__action"
                    align="right"
                />) : this.renderActionLinks(actionItems);
            }
        };
        return (<div className="tuiv2_navbar__part">
            {this.props.children}
            {actionsDropDown()}
            <Dropdown
                items={profileItems}
                text={!this.mobileDevice ? userName : ""}
                spanClass={this.mobileDevice ? "lnr-user" : ""}
                containerClass="tuiv2_navbar__action"
                align="right"
            />
        </div>);
    }

    renderActionLinks(actionItems) {
        return actionItems.map(item => (
            <div className="tuiv2_navbar__part" key={item.id}>
                <a className="tuiv2_navbar__action" href={item.url}>{item.label}</a>
            </div>
        ));
    }


}
Navbar.propTypes = {
    lightTheme: T.bool,
    logoUrl: T.string.isRequired,
    tenantTitle: T.string.isRequired,
    userName: T.string.isRequired,
    actionItems: T.array.isRequired,
    profileItems: T.array.isRequired,
    isLoggedIn: T.bool.isRequired,
    children: T.node,
    searchComponent: T.node
};
