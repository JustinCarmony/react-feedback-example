var React = require('react');

var Welcome = React.createClass({
    render: function(){
        return (
            <div>
                <h1>We'd love to hear from you!</h1>
                <p>At Spaceballs Inc, we care about your experience with our spacecraft! Please let us know how we're doing.</p>
            </div>
        );
    }
});

module.exports = Welcome;