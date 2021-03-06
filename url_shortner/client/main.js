import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import CreateLink from './components/create_link';
import { Links } from '../imports/collections/links';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <CreateLink />
            </div>
        );
    }
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
