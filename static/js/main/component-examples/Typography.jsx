import React from "react";

const Typography = () => (
    <div>
        <div className="row bs-component">
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <ul>
                            <li>
                                This is <span className="tuiv2_text--white">white</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--black">black</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--lightblack">lightblack</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--grey">grey</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--darkgrey">darkgrey</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--lightgrey">lightgrey</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--primary">primary</span>
                            </li>
                            <li>
                                This is <span className="tuiv2_text--warning">warning</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3>This is a panel header</h3>
                    </div>
                    <div className="panel-body">
                        <h4>This is a panel title</h4>
                        <h6 className="text-muted">This is a (muted) panel subtitle</h6>
                        <p>Text can be :</p>
                        <ul>
                            <li><strong>Strong</strong></li>
                            <li><b>Bold</b></li>
                            <li><i>Italic</i></li>
                            <li><em>Emphasized</em></li>
                            <li><mark>Marked</mark></li>
                            <li><small>Small</small></li>
                            <li><del>Deleted</del></li>
                            <li><ins>Inserted</ins></li>
                            <li><sub>Subscript</sub></li>
                            <li><sup>Superscript</sup></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <h1>Typography</h1>
        <div className="row bs-component">
            <div className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h1>Heading 1</h1>
                        <h2>Heading 2</h2>
                        <h3>Heading 3</h3>
                        <h4>Heading 4</h4>
                        <h5>Heading 5</h5>
                        <h6>Heading 6</h6>
                        <h3>
                            Heading
                            <small className="text-muted">with muted text</small>
                        </h3>
                        <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h2>Example body text</h2>
                        <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                        <p><small>This line of text is meant to be treated as fine print.</small></p>
                        <p>The following is <strong>rendered as bold text</strong>.</p>
                        <p>The following is <em>rendered as italicized text</em>.</p>
                        <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <h2>Emphasis classNamees</h2>
                        <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                        <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                        <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                        <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                        <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                        <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>
            </div>
            <div className="clearfix" />
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <blockquote className="blockquote">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <blockquote className="blockquote blockquote-reverse">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                            <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                        </blockquote>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Typography;
