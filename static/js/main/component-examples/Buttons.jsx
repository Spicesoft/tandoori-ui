import React from "react";

const Buttons = () => (
    <div>
        <h1>Buttons</h1>
        <div className="row bs-component">
            <div className="col-sm-6">
                <p>
                    <button type="button" className="btn btn-primary">Primary</button>
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>
                    <button type="button" className="btn btn-info">Info</button>
                    <button type="button" className="btn btn-warning">Warning</button>
                    <button type="button" className="btn btn-danger">Danger</button>
                    <button type="button" className="btn btn-link">Link</button>
                </p>
                <p>
                    <button type="button" className="btn btn-primary disabled">Primary</button>
                    <button type="button" className="btn btn-secondary disabled">Secondary</button>
                    <button type="button" className="btn btn-success disabled">Success</button>
                    <button type="button" className="btn btn-info disabled">Info</button>
                    <button type="button" className="btn btn-warning disabled">Warning</button>
                    <button type="button" className="btn btn-danger disabled">Danger</button>
                    <button type="button" className="btn btn-link disabled">Link</button>
                </p>
                <p>
                    <div className="btn-group">
                        <a href="#" className="btn btn-default">Default</a>
                        <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown"><span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"/>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-primary">Primary</a>
                        <a href="#" className="btn btn-primary dropdown-toggle" data-toggle="dropdown"><span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"/>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-success">Success</a>
                        <a href="#" className="btn btn-success dropdown-toggle" data-toggle="dropdown"><span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"/>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-info">Info</a>
                        <a href="#" className="btn btn-info dropdown-toggle" data-toggle="dropdown"><span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"/>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-warning">Warning</a>
                        <a href="#" className="btn btn-warning dropdown-toggle" data-toggle="dropdown"><span className="caret"/></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider"/>
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </div>
                </p>
                <p>
                    <button type="button" className="btn btn-primary btn-lg">Large button</button>
                    <button type="button" className="btn btn-primary">Default button</button>
                    <button type="button" className="btn btn-primary btn-sm">Small button</button>
                </p>
            </div>
            <div className="col-sm-6 bs-component">
                <a href="#" className="btn btn-default btn-lg btn-block">Block level button</a>
                <div className="btn-group btn-group-justified">
                    <a href="#" className="btn btn-default">Left</a>
                    <a href="#" className="btn btn-default">Middle</a>
                    <a href="#" className="btn btn-default">Right</a>
                </div>
                <div className="btn-toolbar">
                    <div className="btn-group">
                        <a href="#" className="btn btn-default">1</a>
                        <a href="#" className="btn btn-default">2</a>
                        <a href="#" className="btn btn-default">3</a>
                        <a href="#" className="btn btn-default">4</a>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-default">5</a>
                        <a href="#" className="btn btn-default">6</a>
                        <a href="#" className="btn btn-default">7</a>
                    </div>

                    <div className="btn-group">
                        <a href="#" className="btn btn-default">8</a>
                        <div className="btn-group">
                            <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                Dropdown
                                <span className="caret"/>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                                <li><a href="#">Dropdown link</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Buttons;
