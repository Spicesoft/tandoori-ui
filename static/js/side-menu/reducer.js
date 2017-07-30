import {
    TOGGLE_OPEN,
    TOGGLE_ACTIVE
} from "./actionTypes";


const setActiveItem = (items, id) => {
    return items.map(item => {
        return {
            ...item,
            active: item.id === id ? true : false
        };
    });
};

const toggleOpen = (previousID, nextId, open) => {
    if (open) {
        return previousID !== nextId ? true : false;
    }
    return true;
};


export const menuApp = (state, action) => {
    switch (action.type) {
        case TOGGLE_OPEN:
            return {
                ...state,
                open: toggleOpen(state.activeItem, action.id, state.open)
            };
        case TOGGLE_ACTIVE:
            return {
                ...state,
                menuItems: setActiveItem(state.menuItems, action.id),
                activeItem: action.id
            };
        default:
            return state;
    }
};
