import React from "react";

import Dropdown from "root/dist/js/shared/Dropdown.jsx";

const exampleItem = {
    type: "dropdown",
    id: "dropdownEx",
    label: "Dropdown",
    spanClass: "fa fa-rocket",
    items: [
        {
            id: "item1",
            label: "Item 1",
            url: "#"
        },
        {
            id: "item2",
            label: "Item 2",
            url: "#"
        }
    ]
};

const colors = [
    "primary",
    "default",
    "link",
    "success",
    "info",
    "warning",
    "danger"
];

const allDropdowns = (props) => {
    const {
        spanClass,
        hasSpan,
        hasText,
        containerClass,
        align,
        items,
        caret
    } = props;
    return colors.map(color => {
        const allContainerClasses = containerClass + " btn btn-" + color;
        return (<Dropdown
            key={color}
            spanClass={hasSpan ? spanClass : ""}
            containerClass={allContainerClasses || ""}
            text={hasText ? color : ""}
            align={align || ""}
            items={items || []}
            caret={caret || false}
        />);
    });
};


const Dropdowns = () => (
    <div>
        <h1>Dropdowns</h1>
        <div className="row">
            <div className="col-sm-6">
                <div className="panel">
                    <div className="panel-body btn-showcase">
                        <h3>Basic Dropdown</h3>
                        {allDropdowns({...exampleItem, hasText: true})}
                    </div>
                    <div className="panel-body">
                        <pre>
                            <code>
{`<Dropdown
    containerClass="btn btn-primary"
    text="primary"
    items={[
        {
            id: "item1",
            label: "Item 1",
            url: "#"
        },
        {
            id: "item2",
            label: "Item 2",
            url: "#"
        }
    ]}
/>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="panel">
                    <div className="panel-body btn-showcase">
                        <h3>With caret and icons</h3>
                        {allDropdowns({...exampleItem, hasSpan: true, caret: true})}
                    </div>
                    <div className="panel-body">
                        <pre>
                            <code>
{`<Dropdown
    containerClass="btn btn-primary"
    spanClass="fa fa-rocket"
    items={[
        {
            id: "item1",
            label: "Item 1",
            url: "#"
        },
        {
            id: "item2",
            label: "Item 2",
            url: "#"
        }
    ]}
/>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="panel">
                    <div className="panel-body btn-showcase">
                        <h3>With text and icon</h3>
                        {allDropdowns({...exampleItem, hasSpan: true, hasText: true})}
                    </div>
                    <div className="panel-body">
                        <pre>
                            <code>
{`<Dropdown
    containerClass="btn btn-primary"
    spanClass="fa fa-rocket"
    text="primary"
    items={[
        {
            id: "item1",
            label: "Item 1",
            url: "#"
        },
        {
            id: "item2",
            label: "Item 2",
            url: "#"
        }
    ]}
/>`}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Dropdowns;
