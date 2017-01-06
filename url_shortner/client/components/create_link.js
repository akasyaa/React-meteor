import React, { Component } from 'react';

class CreateLink extends Component {
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label htmlFor="">Link to shorten</label>
                    <input ref="input" className="form-control" type="text" />
                </div>
                <button className="btn btn-primary">Shorten</button>
            </form>
        );
    };
};

export default CreateLink;
