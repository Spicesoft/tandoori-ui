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
    </div>
);

export default Lists;
