import React, {Component} from 'react';
import './CategoryItem.scss';

export default class CategoryItem extends Component {
    render() {
        return ( 
            <div>
                <div className='category-item'>
                    <span>
                        Category {this.props.itemNumber}
                        <button>Edit</button>
                    </span>
                    <span>
                        <button>Trash</button>
                        <button>+</button>
                    </span>
                </div>
            </div>
        )
    }
}
