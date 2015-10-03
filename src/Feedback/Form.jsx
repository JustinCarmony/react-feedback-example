var React = require('react');

var Form = React.createClass({
    render: function(){
        return (
            <form>
                <div className="form-group">
                    <label className="control-label">Email address</label>
                    <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label className="control-label">Feedback</label>
                    <textarea className="form-control" rows="6"></textarea>
                    <div className="" style={{paddingTop: "10px"}}><strong>57</strong> of 500 characters</div>
                </div>
                <button type="submit" className="btn btn-default pull-right" disabled="true">Submit</button>
            </form>
        );
    }
});

module.exports = Form;

/* <div className="bg-danger">
                    <p style={{padding:"10px 20px", fontWeight:"bold"}} className="text-danger">It appears you have an error below.</p>
                </div> */

/*<span className="help-block">You must enter a valid email address.</span> */

/* <div className="form-group has-success" style={{paddingTop: "0px"}}>
                    <label for="exampleInputPassword1" className="control-label">Attach Image</label>
                    <input type="file" name="pic" accept="image/*" className="form-control" />
                </div> */