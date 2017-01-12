import React, { Component } from 'react';

class CvViewComponent extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <h1>{user.firstname}{user.lastname}</h1>
        <h2>{user.title}</h2>
        <div>
          {user.summary}
        </div>
        <div>
          {user.skills.map((skill, index) => {
              return <span className={'label label-primary'} key={
                index
              }>{skill.name}</span>;
            })}
        </div>
      </div>
    );
  }
}

export default CvViewComponent;
