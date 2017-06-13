import React from "react";
import T from "prop-types";

import MenuItem from "./MenuItem.jsx";

export default class Menu extends React.PureComponent {
    render() {
        return (
            <div className="tuiv2_side-menu tuiv2_side-menu--default-skin">
                {this.renderItems()}
            </div>
        );
    }

    renderItems() {
        return this.props.items.map((item, i) => {
            return <MenuItem key={i} item={item} active={i === 0}/>;
        });
    }
}

Menu.propTypes = {
    items: T.arrayOf(T.shape({
        id: T.string.isRequired,
        iconClass: T.string.isRequired
    })).isRequired
};
