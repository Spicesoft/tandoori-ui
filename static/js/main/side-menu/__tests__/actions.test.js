/* global expect, test */
import {
    toggleOpen,
    toggleActive
} from "../actions";

test("Should toggle open", () => {
    expect(toggleOpen(1)).toEqual({
        type: "TOGGLE_OPEN",
        id: 1
    });
});

test("Should toogle active", () => {
    expect(toggleActive(1)).toEqual({
        type: "TOGGLE_ACTIVE",
        id: 1
    });
});
