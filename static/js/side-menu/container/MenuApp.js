import {connect} from "react-redux";
import {
    toggleOpen,
    toggleActive
} from "../actions";
import Menu from "../ui/Menu.jsx";

const mapStateToProps = (state) => {
    return {
        ...state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemClicked: (id) => {
            dispatch(toggleOpen(id));
            dispatch(toggleActive(id));
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
