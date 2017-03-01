import React, { Component } from 'react';
import { Link } from 'react-router';

class CvComponent extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <header>
          <Link to={'/edit'}>Edit CV</Link>
          <Link to={'/view'}>View CV</Link>
          <Link to={'/search'}>CV Search</Link>
        </header>
        {content}
      </div>
    );
  }
}

export default CvComponent;
