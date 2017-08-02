import React from "react";

export default class Loader extends React.PureComponent {
    render() {
        return(
            <div className="tuiv2_loader">
                <span className="tuiv2_loader__dot" />
                <span className="tuiv2_loader__dot" />
                <span className="tuiv2_loader__dot" />
            </div>
        );
    }
}
