import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="app">
                Hi!
            </div>
        );
    }
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
