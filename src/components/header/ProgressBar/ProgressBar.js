import React, {Component} from 'react';
import './Progressbar.scss';

export default class Progressbar extends Component {
    render() {
        return (
            <div className='progress-bar'>
                <div className='progress-bar__complitted'></div>
            </div>
        )
    }
}


