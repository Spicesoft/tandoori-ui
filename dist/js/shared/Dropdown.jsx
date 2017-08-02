import React from "react";
import T from "prop-types";

export default class Dropdown extends React.PureComponent {

    componentWillMount() {
        this.mobileDevice = window.matchMedia("(max-width: 768px)").matches;
        this.setState({
            open: false,
            animation: null
        });
    }

    render() {
        const {spanClass, containerClass, text} = this.props;
        const classNames = ["tuiv2_dropdown"];
        if (containerClass) {
            classNames.push(containerClass);
        }
        const spanClassNames = ["tuiv2_dropdown__label"];
        if (spanClass) {
            spanClassNames.push(spanClass);
        }
        return (
            <div
                className={classNames.join(" ")}
                tabIndex={0}
                onClick={this.toggleOpen.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            >
                <span className={spanClassNames.join(" ")}>{text}</span>
                {this.renderMenu()}
            </div>
        );
    }

    renderMenu() {
        const classNames = [
            "tuiv2_dropdown-menu",
            "tuiv2_list",
            "tuiv2_list--clickable"
        ];
        if (this.state.open !== null) {
            classNames.push("tuiv2_dropdown-menu--" + this.state.animation);
        }
        return (
            <ul
                className={classNames.join(" ")}
                style={this.getPosition()}
            >
                {this.renderCloseItem()}
                {this.props.items.map((item, index) => (
                    <li
                        className="tuiv2_list-item"
                        key={index}
                    >
                        <a
                        className="tuiv2_list-item__link tuiv2_dropdown-menu__item"
                        onClick={item.action ? item.action : () => {
                            window.location = item.url;
                        }}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }

    renderCloseItem() {
        if (this.mobileDevice) {
            return (
                <div className="tuiv2_list-item">
                    <span className="lnr-cross tuiv2_text--black" />
                </div>
            );
        }
    }

    handleBlur() {
        if (this.state.open) {
            this.toggleOpen();
        }
    }

    toggleOpen() {
        this.setState({
            open: this.state.open ? false : true,
            animation: this.state.open ? "out" : "in"
        });
    }

    getPosition() {
        if (this.props.align === "right") {
            return {
                left: "auto",
                right: 0
            };
        }
        return {
            right: "auto",
            left: 0
        };
    }
}

Dropdown.propTypes = {
    spanClass: T.string,
    containerClass: T.string,
    text: T.string,
    align: T.string,
    items: T.arrayOf(
        T.shape({
            label: T.string.isRequired,
            url: T.string.isRequired,
            action: T.func
        })
    ).isRequired
};
