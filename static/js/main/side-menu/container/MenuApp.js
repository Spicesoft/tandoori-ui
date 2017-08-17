import {connect} from "react-redux";
import {
    toggleOpen,
    toggleActive
} from "../actions";
import Menu from "../ui/Menu.jsx";

export const mapStateToProps = (state) => (state);

export const mapDispatchToProps = (dispatch) => {
    return {
        onItemClicked: (id) => {
            dispatch(toggleOpen(id));
            dispatch(toggleActive(id));
        },
        onSubItemClicked: () => {
            dispatch(toggleOpen());
        },
        onOutsideLayerClicked: (id) => {
            dispatch(toggleOpen(id));
        }
    };
};

const MenuApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu);

export default MenuApp;
