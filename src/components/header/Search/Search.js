import React, {Component} from 'react';
import './Search.scss';

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <label>
                    <button className='search__show-done'>
                        <span className='icon-check'>Show done</span>
                    </button>
                </label>
                <label className='search-input-group' for='headerSearch'>
                    <input id='headerSearch' type='text' placeholder='Search'/>
                    <button className='search-input-button'>
                        <span className='icon-plus'></span>
                    </button>
                </label>
            </div>
        )
    }
}
