import React, {Component} from 'react';
import './Content.scss';

import Category from './Category/Category';
import Task from './Task/Task';

export default class Content extends Component {
    render() {
        return (
            <div className='content'>
                <div className='content-column'>
                    <Category />
                </div>
                <div className='content-column'>
                    <Task />
                </div>
            </div>
        )
    }
}
