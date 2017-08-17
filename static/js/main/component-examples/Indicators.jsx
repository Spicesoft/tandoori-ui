import React from "react";

const Indicators = () => (
    <div>
        <h1>Indicators</h1>

        <h2>Alerts</h2>
        <div className="alert alert-dismissible alert-warning">
            <button type="button" className="close" data-dismiss="alert">&times;</button>
            <h4>Warning!</h4>
            <p>Best check yo self, you're not looking too good. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus magna, <a href="#" className="alert-link">vel scelerisque nisl consectetur et</a>.</p>
        </div>
        <div className="row">
            <div className="col-sm-4">
                <div className="alert alert-dismissible alert-danger">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Oh snap!</strong> <a href="#" className="alert-link">Change a few things up</a> and try submitting again.
                </div>
            </div>
            <div className="col-sm-4">
                <div className="alert alert-dismissible alert-success">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Well done!</strong> You successfully read <a href="#" className="alert-link">this important alert message</a>.
                </div>
            </div>
            <div className="col-sm-4">
                <div className="alert alert-dismissible alert-info">
                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                    <strong>Heads up!</strong> This <a href="#" className="alert-link">alert needs your attention</a>, but it's not super important.
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-sm-6">
                <span className="label label-default">Default</span>
                <span className="label label-primary">Primary</span>
                <span className="label label-success">Success</span>
                <span className="label label-warning">Warning</span>
                <span className="label label-danger">Danger</span>
                <span className="label label-info">Info</span>
            </div>
            <div className="col-sm-6">
                <ul className="nav nav-pills">
                    <li className="active"><a href="#">Home <span className="badge">42</span></a></li>
                    <li><a href="#">Profile <span className="badge" /></a></li>
                    <li><a href="#">Messages <span className="badge">3</span></a></li>
                </ul>
            </div>
        </div>

        <h1>Progress</h1>
        <h2>Basic</h2>
        <div className="progress">
            <div className="progress-bar" style={{width: "60%"}} />
        </div>
        <h2>Contextual alternatives</h2>
        <div className="bs-component">
            <div className="progress">
                <div className="progress-bar progress-bar-info" style={{width: "20%"}}/>
            </div>

            <div className="progress">
                <div className="progress-bar progress-bar-success" style={{width: "40%"}}/>
            </div>

            <div className="progress">
                <div className="progress-bar progress-bar-warning" style={{width: "60%"}}/>
            </div>

            <div className="progress">
                <div className="progress-bar progress-bar-danger" style={{width: "80%"}}/>
            </div>
        </div>
        <h2>Striped</h2>
        <div className="bs-component">
            <div className="progress progress-striped">
                <div className="progress-bar progress-bar-info" style={{width: "20%"}} />
            </div>

            <div className="progress progress-striped">
                <div className="progress-bar progress-bar-success" style={{width: "4%"}} />
            </div>

            <div className="progress progress-striped">
                <div className="progress-bar progress-bar-warning" style={{width: "60%"}} />
            </div>

            <div className="progress progress-striped">
                <div className="progress-bar progress-bar-danger" style={{width: "80%"}} />
            </div>
        </div>
        <h2>Animated</h2>
        <div className="progress progress-striped active">
            <div className="progress-bar" style={{width: "40%"}} />
        </div>
    </div>
);

export default Indicators;
