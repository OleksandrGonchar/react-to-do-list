import React, { Component } from 'react';
import './Content.css';

import Category from './Category/Category';

class Content extends Component {
  render() {

    return (
      <div className="Content">
        Content
        <Category />
      </div>
    );
  }
}

export default Content;
