import React from "react";

const About = () => (
    <div>
        <h1>
            This is <span className="tuiv2_text--primary">Tandoori UI</span>
        </h1>
        <div className="bs-component">
            <div className="panel panel-default">
                <div className="panel-body">
                    Meet the Cowork.io's UI library !<br/>
                    You will find here all the UI elements you should use to build Cowork.io's views.<br/>
                    We aim to replace all the legacy SASS code with this library. <br/>
                    In the meantime, all of the Tandoori UI css classNamees will be prefixed with <strong>tuiv2_</strong> so you can easely identify new and old classNamees in the code.<br/>
                    Please feel free to get in touch with front team to discuss about any improvement and/or <a href="https://github.com/Spicesoft/tandoori-ui/issues">create an issue</a>.
                </div>
            </div>
        </div>
    </div>
);

export default About;
