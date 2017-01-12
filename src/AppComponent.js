import React, { Component } from 'react';

// Container should only return a component with props
class AppComponent extends Component {
  render() {
    const { header, content, sidebar, footer } = this.props;
    return (
      <div className={'container'}>
        <div className={'row'}>
          {header}
        </div>
        <div className={'row'}>
          <div>{content}</div>
          <div>{sidebar}</div>
        </div>
        <div className={'row'}>
          {footer}
        </div>
      </div>
    );
  }
}

export default AppComponent;
