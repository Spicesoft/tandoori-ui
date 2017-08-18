import React from "react";

const Lists = () => (
    <div>
        <h2>List</h2>
        <div className="row bs-component">
            <div className="col-sm-6">
                <ul className="list-group">
                    <li className="list-group-item">One item</li>
                    <li className="list-group-item">Two items</li>
                    <li className="list-group-item list-group-item-action active">Three items (active)</li>
                    <li className="list-group-item">Four items</li>
                </ul>
            </div>

            <div className="col-sm-6">
                <div className="list-group">
                    <a href="#" className="list-group-item active">
                        Cras justo odio
                    </a>
                    <a href="#" className="list-group-item list-group-item-action">Dapibus ac facilisis in</a>
                    <a href="#" className="list-group-item list-group-item-action">Morbi leo risus</a>
                    <a href="#" className="list-group-item list-group-item-action">Porta ac consectetur ac</a>
                    <a href="#" className="list-group-item list-group-item-action disabled">Vestibulum at eros</a>
                </div>
            </div>
        </div>
        <h1>List groups</h1>
        <div className="row">
            <div className="col-sm-4">
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge">14</span>
                        Cras justo odio
                    </li>
                    <li className="list-group-item">
                        <span className="badge">2</span>
                        Dapibus ac facilisis in
                    </li>
                    <li className="list-group-item">
                        <span className="badge">1</span>
                        Morbi leo risus
                    </li>
                </ul>
            </div>
            <div className="col-sm-4">
                <div className="list-group">
                    <a href="#" className="list-group-item active">
                        Cras justo odio
                    </a>
                    <a href="#" className="list-group-item">Dapibus ac facilisis in
                    </a>
                    <a href="#" className="list-group-item">Morbi leo risus
                    </a>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="list-group">
                    <a href="#" className="list-group-item active">
                        <h4 className="list-group-item-heading">List group item heading</h4>
                        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                    <a href="#" className="list-group-item">
                        <h4 className="list-group-item-heading">List group item heading</h4>
                        <p className="list-group-item-text">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
);

export default Lists;
