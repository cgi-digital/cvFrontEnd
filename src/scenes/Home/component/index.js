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

import EditView from './editView';


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

const renderSkills = ({ fields }) => (
  <div>
    <table className="table paper table-bordered table-form">
      <thead>
        <tr>
          <th>Name</th>
          <th>Skill Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fields.map((skill, index) =>
          <tr key={index}>
            <td>
              <Field
                name={`${skill}.skill`}
                type="text"
                component={renderField}
                label="Skill">
              </Field>
            </td>
            <td>
              <Field
                name={`${skill}.level`}
                component={renderField}
                label="Level"
                type="number"
                min="1"
                max="10">
              </Field>
            </td>
            <td>
              <div className="actions">
                {<a onClick={() => { fields.remove(index); }}><i className="fa fa-close"></i></a>}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <div className="row mt20">
      <div className="col-xs-12 text-center">
        <RaisedButton type='button' label="Add Skill" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
)


const Overview = (props) => {
  const user = props.user;
  return (
    <div className="cvHeader paper pd15 mb10">
      <i className="fa fa-user headerIcon"></i>
      <div className="row mb10">
        <div className="col-xs-12">
          <h4 className="mb10">
            {user.lastname}, {user.firstname}
            <a className="tableToggle" data-toggle="collapse" data-target="#InfoTable" aria-expanded="trues"><i className="fa fa-angle-down"></i></a>
          </h4>
          <div id="InfoTable" className="collapse in">
            <table className="table table-condensed">
              <tbody>
                <tr>
                  <th>Title</th>
                  <td>{user.title}</td>
                </tr>
                <tr>
                  <th>Username</th  >
                  <td>{user.username}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>guest@cgi.com</td>
                </tr>
                <tr>
                  <th>Work Phone</th>
                  <td>+44777777 7777</td>
                </tr>
                <tr>
                  <th>Summary</th>
                  <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
const OverviewEdit = (props) => {
  const user = props.user;
  return (
    <div className="cvHeader paper pd15 mb10">
      <i className="fa fa-user headerIcon"></i>
      <div className="row mb10">
        <div className="col-xs-12">
          <div className="row mb20">
            <div className="col-sm-6">
              <Field name='firstname' component={renderField} type='text' floatingLabelText="First Name" underlineShow fullWidth />
            </div>
            <div className="col-sm-6">
              <Field name='lastname' component={renderField} type='text' floatingLabelText="Last Name" underlineShow fullWidth />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Field name='title' component={renderField} type='text' floatingLabelText="Title" underlineShow />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12">
              <Field name='summary' component={renderField} type='text' multiLine floatingLabelText="Profile Summary" underlineShow />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const TabContent = (props) => {
  const user = props.user;
  const {
    skills = [],
    qualifications = [],
    projects = []
  } = user;
  return (
    <div className="tab-content">
      <div id="skills" className="tab-pane fade in active">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Skills</h2>
        </div>
        <div className="table-responsive">
          <table className="table paper">
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => {
                return (
                  <tr>
                    <td key={index}>{skill.skill}</td>
                    <td >{skill.level}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div id="qualifications" className="tab-pane fade">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Qualifications</h2>
        </div>
        <table className="table paper">
          <thead>
            <tr>
              <th>#</th>
              <th>Qualification Name</th>
            </tr>
          </thead>
          <tbody>
            {qualifications.map((q, index) => {
              return (
                <tr>
                  <td>{q.id}</td>
                  <td key={index}>{q.qualification}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div id="projects" className="tab-pane fade">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Projects</h2>
        </div>
        <table className="table paper">
          <thead>
            <tr>
              <th>#</th>
              <th>Employer</th>
              <th>Project Name</th>
              <th>Role</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, index) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td key={index}>{p.employer}</td>
                  <td>{p.projectName}</td>
                  <td>{p.role}</td>
                  <td>{p.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
const TabContentEdit = (props) => {
  const user = props.user;
  const {
    skills = [],
    qualifications = [],
    projects = []
  } = user;
  return (
    <div className="tab-content">
      <div id="skills" className="tab-pane fade in active">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Skills</h2>
        </div>
        <FieldArray name="skills" component={renderSkills} />
      </div>
      <div id="qualifications" className="tab-pane fade">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Qualifications</h2>
        </div>
        <table className="table paper">
          <thead>
            <tr>
              <th>#</th>
              <th>Qualification Name</th>
            </tr>
          </thead>
          <tbody>
            {qualifications.map((q, index) => {
              return (
                <tr>
                  <td>{q.id}</td>
                  <td key={index}>{q.qualification}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div id="projects" className="tab-pane fade">
        <div className="paper pd15 mb20 tab-header">
          <h2 className="mb20">Projects</h2>
        </div>
        <table className="table paper">
          <thead>
            <tr>
              <th>#</th>
              <th>Employer</th>
              <th>Project Name</th>
              <th>Role</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p, index) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td key={index}>{p.employer}</td>
                  <td>{p.projectName}</td>
                  <td>{p.role}</td>
                  <td>{p.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

class CvViewComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEdit: false
    };

    this.toggleEditState = this.toggleEditState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getUser()
  }

  toggleEditState() {
    const newState = !this.state.isEdit;
    this.setState({ isEdit: newState });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    const isEdit = this.state.isEdit;
    const { user } = this.props;
    const { handleSubmit } = this.props;
    const {
      skills = [],
      qualifications = [],
      projects = []
    } = user;

    return (
      <div className={'viewCvPage'}>
        <form onSubmit={this.onSubmit}>
          <div id="ActionBar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-4 col-sm-5">
                  <h1>{user.firstname}'s Profile</h1>
                </div>
                <div className="col-md-8 col-sm-7">
                  <ul className="nav nav-tabs pull-left">
                    <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
                    <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                    <li><a data-toggle="tab" href="#projects">Projects</a></li>
                  </ul>
                  <a id="editProfileButton" onClick={this.toggleEditState} className="btn btn-default pull-right">
                    {isEdit ? 'Cancel' : 'Edit Profile'}
                  </a>
                  {isEdit ? (
                    <button id="saveProfileButton" className="btn btn-default pull-right" type="submit">Save</button>
                  ) : (null)}
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                {isEdit ? (
                  <OverviewEdit user={user} />
                ) : (
                    <Overview user={user} />
                  )}
              </div>
              <div className="col-md-8 col-sm-7 col-xs-12">
                {isEdit ? (
                  <TabContentEdit user={user} />
                ) : (
                    <TabContent user={user} />
                  )}
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
