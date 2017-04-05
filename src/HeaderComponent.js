import React, { Component } from 'react';
import { Link } from 'react-router';

class HeaderComponent extends Component {
  render() {
    return (
      <header className={'header'}>
        <h1>{'Welcome to CV App'}</h1>
      </header>
    );
  }
}

export default HeaderComponent;
