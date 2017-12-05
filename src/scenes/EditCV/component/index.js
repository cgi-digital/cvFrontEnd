/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField'
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Paper from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

// import {
//   SelectField,
// } from 'redux-form-material-ui'

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

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange} />
)

const style = {
  margin: 10,
};

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <SelectField
    errorText={touched && error}
    underlineShow={false}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom} />
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

const renderIndustryXP = ({ fields }) => (
  <div>
    <table className="table paper table-bordered table-form">
      <thead>
        <tr>
          <th>Name</th>
          <th>Summary</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((industryxp, index) =>
          <tr key={index}>
            <td>
              <Field name={`${industryxp}.industryName`} type="text" component={renderField} />
            </td>
            <td>
              <Field
                name={`${industryxp}.summary`}
                type="text"
                multiLine
                component={renderField}
                label="Experience Summary">
              </Field>
            </td>
            <td>
              <div className="actions">
                {<a onClick={() => { fields.remove(index); }}><i className="fa fa-trash"></i></a>}
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
    <div className="row mt20">
      <div className="col-xs-12 text-center">
        <RaisedButton type='button' label="Add Industry Experience" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
)

const renderCareerHistory = ({ fields }) => (
  <div>
    <table className="table paper table-bordered table-form">
      <thead>
        <tr>
          <th>Employer</th>
          <th>Date Started</th>
          <th>Date Finished</th>
          <th>Job Title</th>
          <th>Experience</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fields.map((career, index) =>
          <tr key={index}>
            <td>
              <Field
                name={`${career}.employer`}
                type="text"
                component={renderField}
                label="Employer" />
            </td>
            <td>
              <Field
                name={`${career}.dateStarted`}
                type="text"
                component={renderField}
                label="Date Started" />
            </td>
            <td>
              <Field
                name={`${career}.dateFinished`}
                type="text"
                component={renderField}
                label="Date Finished" />
            </td>
            <td>
              <Field
                name={`${career}.jobTitle`}
                type="text"
                multiLine
                component={renderField}
                label="Job Title" />
            </td>
            <td>
              <Field
                name={`${career}.experience`}
                type="text"
                multiLine
                component={renderField}
                label="Experience" />
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
        <RaisedButton type='button' label="Add" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
)
const renderLanguages = ({ fields }) => (
  <div>
    <table className="table paper table-bordered table-form">
      <thead>
        <tr>
          <th>Language</th>
          <th>Level</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {fields.map((language, index) =>
          <tr key={index}>
            <td>
              <Field
                name={`${language}.name`}
                type="text"
                component={renderField}
                placeholder="Language" />
            </td>
            <td>
              <Field
                name={`${language}.level`}
                type="number"
                component={renderField}
                placeholder="Level"
                min="1"
                max="10" />
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
        <RaisedButton type='button' label="Add Skill" primary={true} onClick={() => {
          fields.push({})
        }} />
      </div>
    </div>
  </div>
)

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
//to do ADD DATE_RANGE
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

class CvEditComponent extends Component {
  componentDidMount() {
    this.props.getUserData();
  }
  /*
  As a User I want to be able to create my CV in the CV App so that all my CV data is stored in the database.

  Fields Required:
  Profile
  Industry Experience
    Industry
    Experience
  Skills & Competencies
    Skill/Competency
    Years
    Proficiency (check what these are - something like Junior, middle, senior, expert)
  Career History
    Company
    From MMM YYY
    To MMM YYY
    Job Title
    Experience
  Skills & Experience
    Business Skills
      Skill
      Experience
    IT Skills
      Skill
      Experience
  Languages
    Language
    Proficiency (Check - think it's something like Native, Expert, Conversational)
  Qualifications/Affiliations
    Qualification
    Institution
    Year
    Grade Attained
  */
  render() {
    const specialism = ['FrontEnd', 'BackEnd', 'Database', 'DevOps', 'Agile', 'FullStack'];
    const { handleSubmit } = this.props;
    const { user } = this.props;
    const {
      skills = [],
      qualifications = [],
      projects = [],
    } = user;

    return (
      <div className={'editCvPage'}>
        <div className="container-fluid">
          <form className="paperForm" onSubmit={handleSubmit} >
            <div className="cvHeader paper pd15 mb30">
              <i className="fa fa-pencil headerIcon"></i>
              <div className="row">
                <div className="col">
                  <h1>Edit your Profile</h1>
                  <h2><small>{user.firstname} {user.lastname}</small></h2>
                </div>
                <div className="col pull-right">
                  <RaisedButton type='submit' label={<i className="fa fa-floppy-o"></i>} primary={true} style={style}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="nav-vertical">
                <div className="col-sm-3 col-xs-12">
                  <ul className="nav nav-tabs">
                    <li><a data-toggle="tab" href="#personalDetail">Personal Details</a></li>
                    <li className="active"><a data-toggle="tab" href="#skills">Skills</a></li>
                    <li><a data-toggle="tab" href="#industryExp">Industry Experience</a></li>
                    <li><a data-toggle="tab" href="#careerExp">Career Experience</a></li>
                    <li><a data-toggle="tab" href="#languages">Languages</a></li>
                    <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                    <li><a data-toggle="tab" href="#projects">Projects</a></li>
                  </ul>
                </div>
                <div className="col-sm-9 col-xs-12">
                  <div className="tab-content">
                    <div id="personalDetail" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Personal Detail</h2>
                      </div>
                      <div className="paper pd15">
                        <div className="row">
                          <div className='col-sm-6 col-xs-12'>
                            <label className='control-label' htmlFor='firstName'></label>
                            <Field name='firstname' component={renderField} type='text' floatingLabelText="First Name" underlineShow fullWidth />
                          </div>
                          <div className='col-sm-6 col-xs-12'>
                            <label className='control-label' htmlFor='lastName'></label>
                            <Field name='lastname' component={renderField} type='text' floatingLabelText="Last Name" underlineShow />
                          </div>
                        </div>
                        <div className=''>
                          <label className='control-label' htmlFor='title'></label>
                          <Field name='title' component={renderField} type='text' floatingLabelText="Title" underlineShow />
                        </div>
                        <div className=''>
                          <Field name='summary' component={renderField} type='text' multiLine floatingLabelText="Profile Summary" underlineShow />
                        </div>
                      </div>
                    </div>
                    <div id="skills" className="tab-pane fade active in">
                      <div className="paper pd15 mb20">
                        <h2>Skills</h2>
                      </div>
                      <FieldArray name="skills" component={renderSkills} />
                    </div>
                    <div id="industryExp" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Industry Experience</h2>
                      </div>
                      <FieldArray name="industryxp" component={renderIndustryXP} />
                    </div>
                    <div id="careerExp" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Career History</h2>
                      </div>
                      <FieldArray name="careerhistory" component={renderCareerHistory} />
                    </div>
                    <div id="languages" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Languages</h2>
                      </div>
                      <FieldArray name="languages" component={renderLanguages} />
                    </div>
                    <div id="qualifications" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Qualifications</h2>
                      </div>
                      <FieldArray name="qualifications" component={renderQualifications} />
                    </div>
                    <div id="projects" className="tab-pane fade">
                      <div className="paper pd15 mb20">
                        <h2>Qualifications</h2>
                      </div>
                      <FieldArray name="projects" component={renderProjects} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      /*
      First name
      Second name
      Title
      Profile Summary
      Skills

      industry xp
      career history
      languages
      qualifications
      projects

      */
    );
  }
}

export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  CvEditComponent
)
//i am going to be given an endpoint
