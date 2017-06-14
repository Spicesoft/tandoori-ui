import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import {menuApp} from "./reducer";

import MenuApp from "./container/MenuApp";

let store = createStore(menuApp);
const logChange = () => {
    console.info(store.getState());
};
store.subscribe(logChange);

ReactDOM.render(
    <Provider store={store} >
        <MenuApp />
    </Provider>,
    document.getElementById("side-menu")
);
