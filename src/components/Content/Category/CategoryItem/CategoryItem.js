import React, { Component } from 'react';
import './CategoryItem.css';

class CategoryItem extends Component {
  render() {

    return (
      <div className="CategoryItem">
       Category item {this.props.itemNumber}
      </div>
    );
  }
}

export default CategoryItem;
