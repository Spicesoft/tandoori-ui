import {
    TOGGLE_OPEN,
    TOGGLE_ACTIVE
} from "./actionTypes";

export const toggleOpen = (id) => {
    return {
        type: TOGGLE_OPEN,
        id
    };
};

export const toggleActive = (id) => {
    return {
        type: TOGGLE_ACTIVE,
        id
    };
};
