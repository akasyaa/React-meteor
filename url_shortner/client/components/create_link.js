import React, { Component } from 'react';

class CreateLink extends Component {
    constructor(props) {
        super(props);
        this.state = { error: '' };
    }
    handleSubmit(e) {
        e.preventDefault();
        Meteor.call('links.insert', this.refs.input.value, (err) => {
            if (err) {
                this.setState({ error: 'Enter a valid URL'});
            } else {
                this.setState({ error: '' });
                this.refs.input.value = '';
            }
            console.log(this.state.error);
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="">Link to shorten</label>
                    <input ref="input" className="form-control" type="text" />
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary">Shorten</button>
            </form>
        );
    };
};

export default CreateLink;
