import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageList from './components/image_list'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { api: [] };
    }

    componentWillMount() {
        axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
            .then(response => this.setState({ api: response.data.data }));
    }

    render() {
        return (
            <div className="app">
                <ImageList images={this.state.api}/>
            </div>
        );
    }
};

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
});
