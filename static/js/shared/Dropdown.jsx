import React from "react";
import T from "prop-types";

export default class Dropdown extends React.PureComponent {

    constructor(props) {
        super(props);
        this.mobileDevice = window.matchMedia("(max-width: 768px)").matches;
    }

    componentWillMount() {
        this.setState({
            open: false
        });
    }

    render() {
        const {spanClass, containerClass, text} = this.props;
        const classNames = "tuiv2_dropdown " + containerClass || "";
        const spanClassNames = "tuiv2_dropdown__label " + spanClass || "";
        return (
            <div
                className={classNames}
                tabIndex={0}
                onClick={this.toggleOpen.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            >
                <span className={spanClassNames}>{text}</span>
                {this.renderMenu()}
            </div>
        );
    }

    renderMenu() {
        if (this.state.open) {
            return (
                <ul
                    className="
                    tuiv2_dropdown-menu
                    tuiv2_list
                    tuiv2_list--clickable"
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
                                window.location = item.target;
                            }}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            );
        }
        return "";
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
            open: this.state.open ? false : true
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
            target: T.string.isRequired,
            action: T.func
        })
    ).isRequired
};
