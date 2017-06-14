import {
    TOGGLE_OPEN,
    TOGGLE_ACTIVE
} from "./actionTypes";

const menuItems = [{
    id: "text",
    iconClass: "lnr-text-format",
    active: false,
    subItems: [{
        category: "Category 1",
        items: [
            {
                id: "Item 1",
                url: "#"
            },
            {
                id: "Item 2",
                url: "prout"
            }
        ]
    }, {
        category: "Category 2",
        items: [
            {
                id: "Item 1",
                url: "#"
            },
            {
                id: "Item 2",
                url: "prout"
            }
        ]
    }]
}, {
    id: "form",
    iconClass: "lnr-checkmark-circle",
    active: false,
    subItems: [{
        category: "Category 1",
        items: [{
            id: "Item 1",
            url: "#"
        }, {
            id: "Item 2",
            url: "prout"
        }]
    }]
}];

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

const initialState = {
    open: false,
    activeItem: "",
    menuItems
};

export const menuApp = (state = initialState, action) => {
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
