import React, {Component} from 'react';
import './ToDoItem.scss';

export default class ToDoItem extends Component {
    handleClick = () => {
        console.log('this is:', this);
    };

    render() {    
        let items = ['1', '2', '3', '4'];

        return (
            <div className='to-do-item__list'>
                {items.map(item => 
                    <div>
                        <label className='to-do-item'> 
                            <input type='checkbox' />
                            <span>To-Do Item # {item}</span>
                            <button className='to-do-item__edit-btn' onClick={(e) => this.handleClick(e)}>
                                <span className='icon-edit'></span>
                            </button>
                        </label>
                    </div>
                )}
            </div>
        )
    }
}
