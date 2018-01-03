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

import Select from 'react-select';
import 'react-select/dist/react-select.css';


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


const validate = values => {
  const errors = {};
  if (values.skills) {
    console.log(values.skills);
  }
  return errors
}

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField
    className="altInput"
    multiLine={multiLine}
    underlineShow={false}
    fullWidth={true}
    rows={rows}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
const renderMaterialField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField
    multiLine={multiLine}
    underlineShow={true}
    fullWidth={true}
    rows={rows}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)
const renderSkillSelect = ({ input, ...custom }) => (
  <div>
    <Select
      value={input.value}
      onChange={()=> {this.value = input.value.value}}
      autoBlur={true}
      {...input}
      {...custom}
    />
  </div>
)

const buildSelectArray = (skills) => {
  var a = [];
  skills.forEach(skill => {
    let newValue = { value: skill.skill, label: skill.skill, skillName: skill.skill }
    a.push(newValue);
  })
  return a;
}

// FIELD ARRAY RENDERS
// Skills Edit Table
const renderSkills = ({ fields, allSkills }) => {
  const selectValues = buildSelectArray(allSkills);
  return (
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
                  name={`${skill}.skillName`}
                  type="text"
                  component={renderSkillSelect}
                  label="Skill"
                  options={selectValues}>
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
}
// Qualifications Edit Table
const renderQualifications = ({ fields }) => (
  <div>
    <table className="table paper table-bordered table-form">
      <thead>
        <tr>
          <th>Qualification</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fields.map((qualification, index) =>
          <tr key={index}>
            <td>
              <Field
                name={`${qualification}.qualification`}
                type="text"
                component={renderField}
                label="Qualification" />
            </td>
            <td>
              <div className="actions">
                {<a onClick={() => { fields.remove(index); }} ><i className="fa fa-close"></i></a>}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <div className="row mt20">
      <div className="col-xs-12 text-center">
        <RaisedButton type='button' label="Add qualification" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
)
// Projects Edit Table
const renderProjects = ({ fields }) => (
  <div>
    <div className="table-responsive">
      <table className="table paper table-bordered table-form">
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
          {fields.map((project, index) =>
            <tr key={index}>
              <td>
                <Field
                  name={`${project}.employer`}
                  type="text"
                  component={renderField}
                  label="Employer" />
              </td>
              <td>
                <Field
                  name={`${project}.projectName`}
                  type="text"
                  component={renderField}
                  label="Project name" />
              </td>
              <td>
                <Field
                  name={`${project}.role`}
                  type="text"
                  component={renderField}
                  label="Role" />
              </td>
              <td>
                <Field
                  name={`${project}.summary`}
                  type="text"
                  multiLine
                  component={renderField}
                  label="Project Summary" />
              </td>
              <td>
                <div className="actions">
                  {<a onClick={() => { fields.remove(index); }} ><i className="fa fa-close"></i></a>}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
    <div className="row mt20">
      <div className="col-xs-12 text-center">
        <RaisedButton type='button' label="Add project" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
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

  const isEdit = props.isEdit;
  const isActive = props.isActive;

  const viewTable = props.viewTable;
  const editTable = props.editTable;

  const tabClasses = 'tab-pane fade';

  const ViewTab = () => {
    return viewTable;
  }
  const EditTab = () => {
    return editTable;
  }

  return (
    <div id={id} className={isActive ? (tabClasses + ' active in') : (tabClasses)}>
      <div className="paper pd15 mb20 tab-header">
        <h2 className="mb20">{headerText}</h2>
      </div>
      {isEdit ? (
        <EditTab />
      ) : (
          <ViewTab />
        )}
    </div>
  )
}

const Overview = (props) => {
  const profile = props.profile;
  const isEdit = props.isEdit;

  const View = () => {
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
  const Edit = () => {
    return (
      <div className="cvHeader paper pd15 mb10">
        <i className="fa fa-user headerIcon"></i>
        <div className="row mb10">
          <div className="col-xs-12">
            <div className="row mb20">
              <div className="col-sm-6">
                <Field name='firstname' component={renderMaterialField} type='text' floatingLabelText="First Name" />
              </div>
              <div className="col-sm-6">
                <Field name='lastname' component={renderMaterialField} type='text' floatingLabelText="Last Name" />
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <Field name='title' component={renderMaterialField} type='text' floatingLabelText="Title" />
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

  // Return Edit view if is Edit State
  if (isEdit) {
    return <Edit />
  }
  return <View />
}

class CvProfileComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isEdit: false,
      allSkills: []
    };

    this.toggleEditState = this.toggleEditState.bind(this);
    this.getAllSkills = this.getAllSkills.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.props.getProfile();
    this.getAllSkills();
  }
  toggleEditState() {
    const newState = !this.state.isEdit;
    // get all skills if change to Edit State
    if (newState) { this.getAllSkills(); }
    // set newState
    this.setState({ isEdit: newState });
  }
  getAllSkills() {
    //get SFIA skills from server
    this.props.getAllSkills();
    this.setState({ allSkills: this.props.allSkills })
  };

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }
  render() {
    const isEdit = this.state.isEdit;
    const { handleSubmit } = this.props;
    const { profile } = this.props;
    const { skills = [] } = profile;
    const { qualifications = [] } = profile;
    const { projects = [] } = profile;
    const allSkills = this.state.allSkills;

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
                <Overview profile={profile} isEdit={isEdit} />
              </div>
              <div className="col-md-8 col-sm-7 col-xs-12">
                <div className="tab-content">
                  <ProfileTab
                    tabID="skills"
                    headerText="Skills"
                    viewTable={<SkillsTable fields={skills} />}
                    editTable={<FieldArray name="skills" component={renderSkills} allSkills={allSkills} />}
                    profile={profile}
                    isEdit={isEdit}
                    isActive={true} />

                  <ProfileTab
                    tabID="qualifications"
                    headerText="Qualifications"
                    viewTable={<QualificationsTable fields={qualifications} />}
                    editTable={<FieldArray name="qualifications" component={renderQualifications} />}
                    profile={profile}
                    isEdit={isEdit} />

                  <ProfileTab
                    tabID="projects"
                    headerText="Projects"
                    viewTable={<ProjectsTable fields={projects} />}
                    editTable={<FieldArray name="projects" component={renderProjects} />}
                    profile={profile}
                    isEdit={isEdit} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    );
  }
}



export default reduxForm({
  form: 'cv_form',
  enableReinitialize: true,
  validate
})(CvProfileComponent)
