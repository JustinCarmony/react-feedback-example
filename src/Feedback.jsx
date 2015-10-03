var React = require('react');

/* Components */
var Welcome = require('./Feedback/Welcome');
var Success = require('./Feedback/Success');

var Feedback = React.createClass({
    render: function(){
        return (
            <div className="container" style={{ paddingTop: '30px' }}>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <Welcome />
                        <Success />
                        <form>
                            {/* <div className="bg-danger">
                                <p style={{padding:"10px 20px", fontWeight:"bold"}} className="text-danger">It appears you have an error below.</p>
                            </div> */}
                            <div className="form-group">
                                <label for="exampleInputEmail1" className="control-label">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                                {/*<span className="help-block">You must enter a valid email address.</span> */}
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" className="control-label">Feedback</label>
                                <textarea className="form-control" rows="6"></textarea>
                                <div className="" style={{paddingTop: "10px"}}><strong>57</strong> of 500 characters</div>
                            </div>
                            
                            {/* <div className="form-group has-success" style={{paddingTop: "0px"}}>
                                <label for="exampleInputPassword1" className="control-label">Attach Image</label>
                                <input type="file" name="pic" accept="image/*" className="form-control" />
                            </div> */}
                            <button type="submit" className="btn btn-default pull-right" disabled="true">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Feedback;