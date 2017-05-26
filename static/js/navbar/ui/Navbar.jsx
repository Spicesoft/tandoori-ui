import React from "react";

export default class Navbar extends React.PureComponent {
    render() {
        return (
            <nav className="tuiv2_navbar tuiv2_navbar--default-skin">
                <div className="tuiv2_navbar__brand">
                    <img
                        src="public/img/logo.png"
                        className="tuiv2_navbar__logo"
                    />
                    <p className="tuiv2_navbar__slogan">Hello Moto</p>
                    <div className="tuiv2_navbar__search">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="form-control"
                            />
                        </div>
                    </div>
                </div>
                <div className="tuiv2_navbar__icons"></div>
            </nav>
        );
    }
}
