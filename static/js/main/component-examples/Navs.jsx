import React from "react";

const Navs = () => (
    <div>
        <h1>Navs</h1>
        <div className="row">
            <div className="col-sm-6">
                <h3>Tabs</h3>
                <ul className="nav nav-tabs">
                    <li className="active"><a href="#home" data-toggle="tab">Home</a></li>
                    <li><a href="#profile" data-toggle="tab">Profile</a></li>
                    <li className="disabled"><a>Disabled</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            Dropdown <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                            <li className="divider" />
                            <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
                        </ul>
                    </li>
                </ul>
                <div id="myTabContent" className="tab-content">
                    <div className="tab-pane fade active in" id="home">
                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
                    </div>
                    <div className="tab-pane fade" id="profile">
                        <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit.</p>
                    </div>
                    <div className="tab-pane fade" id="dropdown1">
                        <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork.</p>
                    </div>
                    <div className="tab-pane fade" id="dropdown2">
                        <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <h3>Pills</h3>
                <ul className="nav nav-pills">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li className="disabled"><a href="#">Disabled</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                            Dropdown <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider" />
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>

                <ul className="nav nav-pills nav-stacked">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li className="disabled"><a href="#">Disabled</a></li>
                    <li className="dropdown">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                            Dropdown <span className="caret" />
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li className="divider" />
                            <li><a href="#">Separated link</a></li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>

    </div>
);

export default Navs;
