import React from "react";
import {
    Link
} from "react-router-dom";

const About = () => (
    <div>
        <div className="row">
            <div className="col-md-8 col-md-offset-2">
                <div className="jumbotron">
                    <h1>
                        This is <span className="text-primary">Tandoori UI</span>
                    </h1>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-4 col-md-offset-2 col-sm-6">
                <div className="bs-component">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <h3>Meet the <span className="text-primary"> Cowork.io's UI</span> library !</h3><br/>
                            You will find here all the UI elements you should use to build Cowork.io's views.<br/>
                            Tandoori-ui is a theme for <a href="https://getbootstrap.com/docs/3.3/">Bootstrap</a> based on Bootswatch's <a href="https://bootswatch.com/flatly/">Flatly</a>. <br/>
                            If you don't find what you need here, please have a look at the official <a href="https://getbootstrap.com/docs/3.3/">Bootstrap documentation</a>. <br/>
                            Please feel free to get in touch with front team to discuss about any improvement and/or <a href="https://github.com/Spicesoft/tandoori-ui/issues">create an issue</a>.
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-sm-6">
                <div className="list-group">
                    <Link className="list-group-item" to="/typography">Typography</Link>
                    <Link className="list-group-item" to="/lists">Lists</Link>
                    <Link className="list-group-item" to="/buttons">Buttons</Link>
                    <Link className="list-group-item" to="/forms">Forms</Link>
                    <Link className="list-group-item" to="/navs">Navs</Link>
                    <Link className="list-group-item" to="/indicators">Indicators</Link>
                    <Link className="list-group-item" to="/panels">Containers</Link>
                </div>
            </div>
        </div>
    </div>
);

export default About;
