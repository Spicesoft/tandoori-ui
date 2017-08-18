import React from "react";

const Panels = () => (
    <div>
        <h1>Panels</h1>
        <div className="row">
            <div className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        Basic panel
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">Panel heading</div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-body">
                        Panel content
                    </div>
                    <div className="panel-footer">Panel footer</div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel primary</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>

                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel success</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>

                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel warning</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="panel panel-danger">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel danger</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>

                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Panel info</h3>
                    </div>
                    <div className="panel-body">
                        Panel content
                    </div>
                </div>
            </div>
        </div>
        <h1>Containers</h1>
        <div className="jumbotron">
            <h1 className="display-3">Jumbotron</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <p><a className="btn btn-primary btn-lg" href="#">Learn more</a></p>
        </div>
    </div>
);

export default Panels;
