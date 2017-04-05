import React, {Component} from 'react';
import './Task.scss';

import ToDoItem from './ToDoItem/ToDoItem';

export default class Task extends Component {
    render() {
        return (
            <div className='task'>
                <div className='task-header'>
                    <label for='taskHeaderInput'>
                        <input type='text' id='taskHeaderInput' />
                        <input type='button' value='Add' />
                    </label>
                </div>
                <div className='task-content'>
                    content
                    <ToDoItem />
                </div>
            </div>
        )
    }
}
