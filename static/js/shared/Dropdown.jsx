import React from "react";
import T from "prop-types";

export default class Dropdown extends React.PureComponent {

    componentWillMount() {
        this.setState({
            open: false
        });
    }

    render() {
        const {spanClass, containerClass, text} = this.props;
        const classNames = "tuiv2_dropdown " + containerClass || "";
        return (
            <div
                className={classNames}
                tabIndex={0}
                onClick={this.toggleOpen.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            >
                <span className={spanClass}>{text}</span>
                <ul className="tuiv2_dropdown-menu">
                    {this.renderMenu()}
                </ul>
            </div>
        );
    }

    renderMenu() {
        if (this.state.open) {
            return this.props.items.map((item, index) => (
                <li
                    className="tuiv2_dropdown-menu__item"
                    key={index}
                >
                    <a
                        href={item.target}
                        className="tuiv2_dropdown-menu__link"
                        onClick={item.action ? item.action : null}
                    >
                        {item.label}
                    </a>
                </li>
            ));
        }
        return "";
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
}

Dropdown.propTypes = {
    spanClass: T.string,
    containerClass: T.string,
    text: T.string,
    items: T.arrayOf(
        T.shape({
            label: T.string.isRequired,
            target: T.string.isRequired,
            action: T.func
        })
    ).isRequired
};
