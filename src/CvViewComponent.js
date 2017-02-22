import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CvViewComponent extends Component {
  componentDidMount() {
    this.props.getUser()
  }

  render() {
    const { user } = this.props;
    const {
      skills = [],
      qualifications = [],
      projects = [],
    } = user;

    return (
      <div>
        <h1>{user.firstname}{user.lastname}</h1>
        <h2>{user.title}</h2>
        <div>
          {user.summary}
        </div>
        <h3>Skills</h3>
        <div>
          {skills.map((skill, index) => {
            return (
              <span>
                <span className={'label label-primary'} key={
                    index
                  }>{skill.skill}</span>
                <span>{skill.level}</span>
              </span>
            );
          })}
        </div>
        <h3>Qualifications</h3>
        <div>
          {qualifications.map((q, index) => {
            return <span className={'label label-primary'} key={
                index
              }>{q.qualification}</span>;
          })}
        </div>
        <h3>Projects</h3>
        <div>
          {projects.map((p, index) => {
            return (
              <div className='' key={index}>
                <p>Employer: {p.employer}</p>
                <p>Project name: {p.projectName}</p>
                <p>Role: {p.role}</p>
                <p>Summary: {p.summary}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CvViewComponent;
