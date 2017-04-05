import React, {Component} from 'react'
import Progressbar from './ProgressBar/ProgressBar';
import Search from './Search/Search';


import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <div className='header-column' >
                    To-do List
                </div>
                <div className='header-column' >
                    <Search />
                </div>
                <div className='header-row' >
                    <Progressbar />
                </div>
            </div>
        )
    }
}

