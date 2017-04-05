import React, {Component} from 'react';
import './CategoryList.scss';

import CategoryItem from './CategoryItem/CategoryItem';

export default class CategoryList extends Component {
    render() {
        const categoryList = ['1','2','3'];

        return (
            <div className='category-list'>
                {categoryList.map(item => 
                    <div>
                        <CategoryItem  itemNumber={item}/> 
                    </div>
                )}
            </div>
        )
    }
}
