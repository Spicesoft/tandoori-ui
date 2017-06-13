import React from "react";
import T from "prop-types";

export default class MenuItem extends React.PureComponent {
    render() {
        const classNames = [
            "tuiv2_menu-item",
            "tuiv2_menu-item--default"
        ];
        if (this.props.active) {
            classNames.push("tuiv2_menu-item--active");
        }
        return (
            <div className={classNames.join(" ")}>
                <span className={this.props.item.iconClass} />
            </div>
        );
    }
}

MenuItem.propTypes = {
    item: T.shape({
        id: T.string.isRequired,
        iconClass: T.string.isRequired
    }).isRequired,
    active: T.bool.isRequired
};
