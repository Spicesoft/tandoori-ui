import React from "react";
import T from "prop-types";

import {
    Modal
} from "react-bootstrap";

export default class Dropdown extends React.PureComponent {

    componentWillMount() {
        this.mobileDevice = window.matchMedia("(max-width: 768px)").matches;
        this.setState({
            open: false,
            animation: null,
            showModal: false,
            renderModalContentComponent: () => null,
            renderModalHeaderComponent: () => null,
            renderModalFooterComponent: () => null
        });
    }

    render() {
        const {spanClass, containerClass, text} = this.props;
        const classNames = ["tuiv2_dropdown"];
        if (containerClass) {
            classNames.push(containerClass);
        }
        return (
            <div
                className={classNames.join(" ")}
                tabIndex={0}
                onClick={this.toggleOpen.bind(this)}
                onBlur={this.handleBlur.bind(this)}
            >
                <span className={spanClass} />
                {this.renderEmptySpace()}
                <span>{text}</span>
                {this.renderCaret()}
                {this.renderMenu()}
                {this.renderModal()}
            </div>
        );
    }

    renderModal() {
        return (
            <Modal
                show={this.state.showModal}
                onHide={this.closeModal.bind(this)}
            >
                {this.renderModalHeader()}
                <Modal.Body>
                    {this.state.renderModalContentComponent()}
                </Modal.Body>
                {this.renderModalFooter()}
            </Modal>
        );
    }

    renderModalHeader() {
        if(this.state.renderModalHeaderComponent() !== null) {
            return (
                <Modal.Header>
                    {this.state.renderModalHeaderComponent()}
                </Modal.Header>
            );
        }
    }

    renderModalFooter() {
        if(this.state.renderModalFooterComponent() !== null) {
            return (
                <Modal.Footer>
                    {this.state.renderModalFooterComponent()}
                </Modal.Footer>
            );
        }
    }

    closeModal() {
        this.setState({
            showModal: false
        });
    }

    renderEmptySpace() {
        if (this.props.spanClass && this.props.text) {
            return <span>&nbsp;</span>;
        }
    }

    renderCaret() {
        return this.props.caret ?
            <span className="fa fa-caret-down tuiv2_dropdown__caret" />
            :
            null;
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
                        onClick={this.getItemAction.bind(this, item)}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        );
    }

    getItemAction(item) {
        if (item.action) {
            item.action();
        }
        else if (item.openModal) {
            this.setState({
                renderModalContentComponent: (item.renderModalContentComponent && item.renderModalContentComponent())
                                        ? item.renderModalContentComponent
                                        : () =>null,
                renderModalHeaderComponent: (item.renderModalHeaderComponent && item.renderModalHeaderComponent())
                                        ? item.renderModalHeaderComponent
                                        : () => null,
                renderModalFooterComponent: (item.renderModalFooterComponent && item.renderModalFooterComponent())
                                        ? item.renderModalFooterComponent
                                        : () => null,
                showModal: true
            });
        }
        else {
            window.location = item.url;
        }
    }

    renderCloseItem() {
        if (this.mobileDevice) {
            return (
                <div className="tuiv2_list-item">
                    <span className="fa fa-remove tuiv2_text--black" />
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
            url: T.string,
            action: T.func,
            openModal: T.bool,
            renderModalContentComponent: T.func,
            renderModalFooterComponent: T.func,
            renderModalHeaderComponent: T.func
        })
    ).isRequired,
    caret: T.bool
};
