import React from "react";
import T from "prop-types";

export default class MenuItem extends React.PureComponent {
    render() {
        const classNames = [
            "tuiv2_menu-item",
            "tuiv2_menu-item--default"
        ];
        if (this.props.item.active) {
            classNames.push("tuiv2_menu-item--active");
        }
        const iconClassNames = this.props.item.iconClass + " tuiv2_menu-item__icon";
        return (
            <div
                className={classNames.join(" ")}
                onClick={this.itemClicked.bind(this)}
            >
                <span className={iconClassNames} />
            </div>
        );
    }

    itemClicked() {
        this.props.onItemClicked(this.props.item.id);
    }
}

MenuItem.propTypes = {
    onItemClicked: T.func.isRequired,
    item: T.shape({
        id: T.string.isRequired,
        iconClass: T.string.isRequired,
        active: T.bool.isRequired
    }).isRequired
};
