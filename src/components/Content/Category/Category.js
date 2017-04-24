import React, { Component } from 'react';
import './Category.css';

import CategoryItem from './CategoryItem/CategoryItem'

class Category extends Component {
  render() {
    const categoryList = ['1','2','3'];

    return (
      <div className="Category">
       Category
       
        {categoryList.map(item => 
            <div>
                <CategoryItem  itemNumber={item}/> 
            </div>
        )}
      </div>
    );
  }
}

export default Category;
