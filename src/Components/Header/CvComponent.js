import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

class CvComponent extends Component {
  render() {
    const { content } = this.props;
    return (
      <div>
        <AppBar  className="AppBarHeader"
          title={
            <header>
              <Link to={'/edit'}><FlatButton label="Edit CV" /></Link>
              <Link to={'/view'}><FlatButton label="View CV" /></Link>
              <Link to={'/search'}><FlatButton label="CV Search" /></Link>
            </header>
          }
          iconElementLeft={<span />}
          iconElementRight={<span />}
        />
        {content}
      </div>
    );
  }
}

export default CvComponent;
