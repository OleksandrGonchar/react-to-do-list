import React, {Component} from 'react';
import './Category.scss';

import CategoryList from './CategoryList/CategoryList';

export default class Category extends Component {
    render() {
        return (
            <div className='category'>
                <div className='category-header'>
                    <label className='category-input'>
                        <input type='text' placeholder='Entry category title' />
                        <input type='button' value='Add' />
                    </label>
                </div>
                <div className='category-content'>
                    <CategoryList />
                </div>
            </div>
        )
    }
}
