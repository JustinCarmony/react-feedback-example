var React = require('react');

var Success = React.createClass({
    render: function(){
        return (
            <div className="bg-success" style={{"padding":"10px 25px", margin: "0 0 20px 0"}}>
                <h1>Thank you for giving us your feedback</h1>
                <h2>We promise not to ignore you.</h2>
                <p>Here at Spaceballs we try our best to not give horrible expereinces. 
                Unfortunately our track record isn't great, but we promise we are getting better. We think.</p>
                <p>The Spaceballs Team</p>
            </div>
        );
    }
});

module.exports = Success;