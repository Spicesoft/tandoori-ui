import React from "react";
import T from "prop-types";

import MenuItem from "./MenuItem.jsx";

export default class Menu extends React.PureComponent {
    render() {
        return (
            <div className="tuiv2_side-menu tuiv2_side-menu--default-skin">
                <div className="tuiv2_side-menu-panel tuiv2_side-menu-panel--default">
                    <ul className="tuiv2_list tuiv2_list--clickable">
                        {this.renderCategories()}
                    </ul>
                </div>
                {this.renderItems()}
            </div>
        );
    }

    renderItems() {
        return this.props.items.map((item, i) => {
            return <MenuItem key={i} item={item} onItemClicked={(id) => {console.log(id);}}/>;
        });
    }

    renderCategories() {
        return this.props.items.find(item => {
            return item.active;
        }).subItems.map((subItem, i) => {
            return (
                <ul key={i} className="tuiv2_list tuiv2_list--clickable">
                    <li className="tuiv2_list-item tuiv2_list-item--divider tuiv2_list-item--category">{subItem.category}</li>
                    {this.renderSubItems(subItem.items)}
                </ul>
            );
        });
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
}

Menu.propTypes = {
    items: T.arrayOf(T.shape({
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
