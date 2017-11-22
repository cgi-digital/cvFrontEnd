import React, { Component } from 'react';

// Container should only return a component with props
class AppComponent extends Component {
  render() {
    const { header, content, sidebar, footer } = this.props;
    return (
      <div className="appComponent">
        {content}
      </div>
    );
  }
}

export default AppComponent;
