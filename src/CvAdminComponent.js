import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CvAdminComponent extends Component {
  componentDidMount() {
    this.props.getSkill()
  }

  render() {
    const { skill } = this.props;
    const {
      skills = [],
      qualifications = [],
      projects = [],
    } = skill;

    return (
      <div className={'CvPretty'}>
        <h1>{skill.firstname} {skill.lastname}</h1>
        <h2>{skill.title}</h2>
        <div>
          {skill.summary}
        </div>
        <h3>Skills</h3>
        <div>
          {skills.map((skill, index) => {
            return (
              <span>
                <span className={'CvAdminSkills'} key={
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
            return <span className={'CvAdminQualifications'} key={
                index
              }>{q.qualification}</span>;
          })}
        </div>
        <h3>Projects</h3>
        <div className={'CvAdminProjects'}>
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

export default CvAdminComponent;
