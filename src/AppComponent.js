import React, { Component } from 'react';

// Container should only return a component with props
class AppComponent extends Component {
  render() {
    const { header, content, sidebar, footer } = this.props;
    return (
      <div>
        <div>
          {header}
        </div>
        <div>
          <div>{content}</div>
          <div>{sidebar}</div>
        </div>
        <div>
          {footer}
        </div>
      </div>
    );
  }
}

export default AppComponent;
