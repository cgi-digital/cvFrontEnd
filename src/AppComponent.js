import React, { Component } from 'react';

// Container should only return a component with props
class AppComponent extends Component {
  render() {
    const { header, content, sidebar, footer } = this.props;
    return (
      <div>
        <div className={''}>
          {header}
        </div>
        <div className={''}>
          <div>{content}</div>
          <div>{sidebar}</div>
        </div>
        <div className={''}>
          {footer}
        </div>
      </div>
    );
  }
}

export default AppComponent;
