import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import Checkbox from 'material-ui/Checkbox'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Divider from 'material-ui/Divider'
import { Tabs, Tab } from 'material-ui/Tabs';
import { Link } from 'react-router';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField
    multiLine={multiLine}
    underlineShow={false}
    fullWidth={true}
    rows={rows}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

// View Tables
const SkillsTable = (props) => {
  const fields = props.fields;
  return (
    <div className="table-responsive">
      <table className="table paper">
        <thead>
          <tr>
            <th>Skill</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((skill, index) => {
            return (
              <tr key={index}>
                <td>{skill.skillName}</td>
                <td>{skill.level}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
const QualificationsTable = (props) => {
  const fields = props.fields;
  return (
    <div className="table-responsive">
      <table className="table paper">
        <thead>
          <tr>
            <th>Qualification</th>
          </tr>
        </thead>
        <tbody>
          {fields.map((q, index) => {
            return (
              <tr key={index}>
                <td>{q.qualification}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}
const ProjectsTable = (props) => {
  const fields = props.fields;
  return (
    <div className="table-responsive">
      <table className="table paper">
        <thead>
          <tr>
            <th>Employer</th>
            <th>Project</th>
            <th>Role</th>
            <th>Project Summary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {fields.map((p, index) => {
            return (
              <tr key={index}>
                <td>{p.employer}</td>
                <td>{p.projectName}</td>
                <td>{p.role}</td>
                <td>{p.summary}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  )
}

// Project Tab Content
const ProfileTab = (props) => {
  const profile = props.profile;

  const id = props.tabID;
  const headerText = props.headerText;

  const isActive = props.isActive;

  const viewTable = props.viewTable;

  const tabClasses = 'tab-pane fade';

  const ViewTab = () => {
    return viewTable;
  }

  return (
    <div id={id} className={isActive ? (tabClasses + ' active in') : (tabClasses)}>
      <div className="paper pd15 mb20 tab-header">
        <h2 className="mb20">{headerText}</h2>
      </div>
      {viewTable}
    </div>
  )
}

const Overview = (props) => {
  const profile = props.profile;
  return (
    <div className="cvHeader paper pd15 mb10">
      <i className="fa fa-user headerIcon"></i>
      <div className="row mb10">
        <div className="col-xs-12">
          <h4 className="mb10">
            {profile.lastname}, {profile.firstname}
            <a className="tableToggle" data-toggle="collapse" data-target="#InfoTable" aria-expanded="trues"><i className="fa fa-angle-down"></i></a>
          </h4>
          <div id="InfoTable" className="collapse in">
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{profile.title}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{profile.email}</td>
                </tr>
                <tr>
                  <th>Summary</th>
                  <td>{profile.summary}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

class CvViewComponent extends Component {
  constructor(props, context) {
    super(props, context);
  }
  componentDidMount() {
    this.props.getProfile(this.props.location.query.id);
  }
  render() {
    const { profile } = this.props;

    const { skills = [] } = profile;
    const { qualifications = [] } = profile;
    const { projects = [] } = profile;

    return (
      <div className={'viewCvPage'}>
        <form onSubmit={this.onSubmit}>
          <div id="ActionBar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-sm-5">
                  <h1>{profile.firstname}'s Profile</h1>
                </div>
                <div className="col-md-8 col-sm-7">
                  <ul className="nav nav-tabs pull-left">
                    <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
                    <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                    <li><a data-toggle="tab" href="#projects">Projects</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <Overview profile={profile} />
              </div>
              <div className="col-md-8 col-sm-7 col-xs-12">
                <div className="tab-content">
                  <ProfileTab
                    tabID="skills"
                    headerText="Skills"
                    viewTable={<SkillsTable fields={skills} />}
                    profile={profile}
                    isActive={true} />

                  <ProfileTab
                    tabID="qualifications"
                    headerText="Qualifications"
                    viewTable={<QualificationsTable fields={qualifications} />}
                    profile={profile} />

                  <ProfileTab
                    tabID="projects"
                    headerText="Projects"
                    viewTable={<ProjectsTable fields={projects} />}
                    profile={profile}/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    );
  }
}



export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  CvViewComponent
)
