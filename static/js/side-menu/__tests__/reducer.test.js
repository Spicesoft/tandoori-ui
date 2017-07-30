/* global test, expect */
import {menuApp} from "../reducer";

const menuItems = [
    {
        id: 1,
        active: false
    },
    {
        id: 2,
        active: true
    }
];

test("Should open", () => {
    const state = menuApp({}, {
        type: "TOGGLE_OPEN",
        id: 1
    });
    expect(state).toEqual({
        open: true
    });
});

test("Should close with same active item", () => {
    const state = menuApp(
        {
            open: true,
            activeItem: 1
        }, {
            type: "TOGGLE_OPEN",
            id: 1
        }
    );
    expect(state).toEqual({
        open: false,
        activeItem: 1
    });
});

test("Should toggle close", () => {
    const state = menuApp(
        {
            open: true,
            activeItem: 1
        }, {
            type: "TOGGLE_OPEN",
            id: 1
        }
    );
    expect(state).toEqual({
        open: false,
        activeItem: 1
    });
});

test("Should stay open with different active item", () => {
    const state = menuApp(
        {
            open: true,
            activeItem: 2
        }, {
            type: "TOGGLE_OPEN",
            id: 1
        }
    );
    expect(state).toEqual({
        open: true,
        activeItem: 2
    });
});

test("Should toggle active", () => {
    const state = menuApp(
        {
            menuItems,
            activeItem: 2
        },
        {
            type: "TOGGLE_ACTIVE",
            id: 1
        }
    );
    const nextState = {
        activeItem: 1,
        menuItems: [
            {
                id: 1,
                active: true
            },
            {
                id: 2,
                active: false
            }
        ]
    };
    expect(state).toEqual(nextState);
});

test("Should return default", () => {
    const state = menuApp(
        {
            menuItems,
            activeItem: 2
        },
        {
            type: "toto",
            id: 10000
        }
    );
    expect(state).toEqual({
        menuItems,
        activeItem: 2
    });
});
