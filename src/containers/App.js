import React, {Component} from 'react';
import './App.scss';

import Header from '../components/header/header';
import Content from '../components/Content/Content';

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                
                <Header />
                <Content />
            </div>
        )
    }
}
