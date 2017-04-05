import React, {Component} from 'react';
import './Search.scss';

export default class Search extends Component {
    render() {
        return (
            <div className='search'>
                <label>
                    <input type='checkbox' />
                    Show done
                </label>
                <label className='search-input-group' for='headerSearch' >
                    <input id='headerSearch' type='text' placeholder='Search' />
                    <input type='button' className='search-input-button' value='X' />
                </label>
            </div>
        )
    }
}
