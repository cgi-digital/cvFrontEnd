import React, { Component } from 'react';
import { Link } from 'react-router';

class CvComponent extends Component {
  render() {
    const { content } = this.props;
    const child = React.cloneElement(content, { user: this.props.user });

    return (
      <div>
        <header>
          <Link to={'/edit'}>Edit CV</Link>
          <Link to={'/view'}>View CV</Link>
        </header>
        {content}
      </div>
    );
  }
}

export default CvComponent;
