import React from "react";

const Forms = () => (
    <div>

        <h1>Forms</h1>
        <div className="row">

            <div className="col-sm-6">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <form className="form-horizontal">
                            <fieldset>
                                <legend>Legend</legend>
                                <div className="form-group">
                                    <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
                                    <div className="col-lg-10">
                                        <input className="form-control" id="inputEmail" placeholder="Email" type="text" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
                                    <div className="col-lg-10">
                                        <input className="form-control" id="inputPassword" placeholder="Password" type="password" />
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Checkbox
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
                                    <div className="col-lg-10">
                                        <textarea className="form-control" rows="3" id="textArea" />
                                        <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="col-lg-2 control-label">Radios</label>
                                    <div className="col-lg-10">
                                        <div className="radio">
                                            <label>
                                                <input name="optionsRadios" id="optionsRadios1" value="option1" checked="" type="radio" />
                                                Option one is this
                                            </label>
                                        </div>
                                        <div className="radio">
                                            <label>
                                                <input name="optionsRadios" id="optionsRadios2" value="option2" type="radio" />
                                                Option two can be something else
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="select" className="col-lg-2 control-label">Selects</label>
                                    <div className="col-lg-10">
                                        <select className="form-control" id="select">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                        <br />
                                        <select multiple="" className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-lg-10 col-lg-offset-2">
                                        <button type="reset" className="btn btn-default">Cancel</button>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="form-group">
                    <label className="control-label" htmlFor="focusedInput">Focused input</label>
                    <input className="form-control" id="focusedInput" value="This is focused..." type="text" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="disabledInput">Disabled input</label>
                    <input className="form-control" id="disabledInput" placeholder="Disabled input here..." disabled="" type="text" />
                </div>

                <div className="form-group has-warning">
                    <label className="control-label" htmlFor="inputWarning">Input warning</label>
                    <input className="form-control" id="inputWarning" type="text" />
                </div>

                <div className="form-group has-error">
                    <label className="control-label" htmlFor="inputError">Input error</label>
                    <input className="form-control" id="inputError" type="text" />
                </div>

                <div className="form-group has-success">
                    <label className="control-label" htmlFor="inputSuccess">Input success</label>
                    <input className="form-control" id="inputSuccess" type="text" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="inputLarge">Large input</label>
                    <input className="form-control input-lg" id="inputLarge" type="text" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="inputDefault">Default input</label>
                    <input className="form-control" id="inputDefault" type="text" />
                </div>

                <div className="form-group">
                    <label className="control-label" htmlFor="inputSmall">Small input</label>
                    <input className="form-control input-sm" id="inputSmall" type="text" />
                </div>

                <div className="form-group">
                    <label className="control-label">Input addons</label>
                    <div className="input-group">
                        <span className="input-group-addon">$</span>
                        <input className="form-control" type="text" />
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">Button</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Forms;
