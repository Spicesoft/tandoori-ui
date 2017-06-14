import React from "react";
import T from "prop-types";

import MenuItem from "./MenuItem.jsx";

export default class Menu extends React.PureComponent {


    render() {
        return (
            <div className="tuiv2_side-menu tuiv2_side-menu--default-skin">
                <div
                    className={this.getPanelClassNames()}
                >
                    <div className="tuiv2_side-menu-panel__content tuiv2_side-menu-panel__content--default">
                        <ul className="tuiv2_list tuiv2_list--clickable">
                            {this.renderCategories()}
                        </ul>
                    </div>
                    <div
                        className="tuiv2_side-menu-panel__outside-layer"
                        onClick={this.outsideClicked.bind(this)}
                    />
                </div>
                {this.renderItems()}
            </div>
        );
    }

    renderItems() {
        return this.props.menuItems.map((item, i) => {
            return (<MenuItem
                key={i}
                item={item}
                onItemClicked={this.props.onItemClicked}
            />);
        });
    }

    renderCategories() {
        const categories = this.props.menuItems.find(item => {
            return item.active;
        });
        if (categories) {
            return categories.subItems.map((subItem, i) => {
                return (
                    <ul key={i} className="tuiv2_list tuiv2_list--clickable">
                        <li className="tuiv2_list-item tuiv2_list-item--divider tuiv2_list-item--category">{subItem.category}</li>
                        {this.renderSubItems(subItem.items)}
                    </ul>
                );
            });
        }
        return;
    }

    renderSubItems(subItems) {
        return subItems.map((item, i) => {
            return (
                <li key={i} className="tuiv2_list-item">
                    <a href={item.url} className="tuiv2_list-item__link">{item.id}</a>
                </li>
            );
        });
    }

    getPanelClassNames() {
        const classes = [
            "tuiv2_side-menu-panel",
            "tuiv2_side-menu-panel--default"
        ];
        classes.push(
            this.props.open ? "tuiv2_side-menu-panel--in" : "tuiv2_side-menu-panel--out"
        );
        return classes.join(" ");
    }

    outsideClicked() {
        this.props.onOutsideLayerClicked(this.props.activeItem);
    }
}

Menu.propTypes = {
    onItemClicked: T.func.isRequired,
    onOutsideLayerClicked: T.func.isRequired,
    open: T.bool.isRequired,
    activeItem: T.string.isRequired,
    menuItems: T.arrayOf(T.shape({
        id: T.string.isRequired,
        iconClass: T.string.isRequired,
        active: T.bool.isRequired,
        subItems: T.arrayOf(T.shape({
            category: T.string.isRequired,
            items: T.arrayOf(
                T.shape({
                    id: T.string.isRequired,
                    url: T.string.isRequired
                })
            )
        }).isRequired
    )})).isRequired
};
