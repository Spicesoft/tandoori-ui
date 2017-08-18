/* global test, expect, jest */

import {
    mapStateToProps,
    mapDispatchToProps
} from "../../container/MenuApp";

test("Should map state to props", () => {
    expect(mapStateToProps({toto: "toto"})).toEqual({toto: "toto"});
});

test("Should map dispatch to props", () => {
    const mockedDispatch = jest.fn();
    mapDispatchToProps(mockedDispatch).onItemClicked("toto");
    expect(mockedDispatch.mock.calls.length).toBe(2);
    mapDispatchToProps(mockedDispatch).onOutsideLayerClicked("toto");
    expect(mockedDispatch.mock.calls.length).toBe(3);
});
