var React = require('react');
var $ = require('jquery');

/* Components */
var Welcome = require('./Feedback/Welcome');
var Success = require('./Feedback/Success');
var Form = require('./Feedback/Form');

var Feedback = React.createClass({
    getInitialState: function(){
        return {
            feedbackString: ''    
        }
        
    },

    onFeedbackInput: function(ev){
        console.log($(ev.target).val());
        this.setState({
            feedbackString: $(ev.target).val()
        });
    },

    render: function(){
        return (
            <div className="container" style={{ paddingTop: '30px' }}>
                <div className="row">
                    <div className="col-md-offset-2 col-md-8">
                        <Welcome />
                        <Form onFeedbackInput={this.onFeedbackInput} feedbackLength={this.state.feedbackString.length} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Feedback;