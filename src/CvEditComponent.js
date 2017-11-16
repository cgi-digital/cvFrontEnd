/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
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
  <TextField hintText={label}
    floatingLabelText={label}
    multiLine={multiLine}
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
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    onChange={(event, index, value) => input.onChange(value)}
    children={children}
    {...custom} />
)

const renderSkills = ({ fields }) => (
  <div>
    {fields.map((skill, index) =>
      <div key={index} className="row">
        <div className="col-sm-5 col-xs-12">
          <Field
            name={`${skill}.skill`}
            type="text"
            component={renderField}
            label="Skill" />
        </div>
        <div className="col-sm-5 col-xs-12">
          <Field
            name={`${skill}.level`}
            component={renderSelectField}
            label="Level">

            <MenuItem value={1} primaryText="1" />
            <MenuItem value={5} primaryText="5" />
            <MenuItem value={10} primaryText="10" />
          </Field>
        </div>
        <div className="col-sm-2 col-xs-12">
          {<FloatingActionButton mini={true} primary={true} onClick={() => { fields.remove(index); }}><NavigationClose /></FloatingActionButton>}
        </div>
      </div>
    )}
    <div className="row">
      <div className="col-xs-12 text-center">
        <FloatingActionButton label="Add Skill / Competency" mini={true} primary={true} onClick={() => { fields.push({}) }} style={style}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  </div>
)

const renderIndustryXP = ({ fields }) => (
  <div className="row">
    {fields.map((industryxp, index) =>
      <Paper zDepth="2" className="col-xs-12" key={index}>
        <Field name={`${industryxp}.industryName`} type="text" component={renderField} label="Industry name" />

        <Field
          name={`${industryxp}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Experience Summary">
        </Field>
        {<IconButton onClick={() => { fields.remove(index); }} ><NavigationClose /></IconButton>}
      </Paper>
    )}
    <div className="col-xs-12">
      <Paper zDepth="2">

      </Paper>
    </div>
    <div className="col-xs-12">
      <RaisedButton type='button' label="Add Industry Experience" primary={true} onClick={() => {
        fields.push({})
      }} />
    </div>
  </div>
)

const renderCareerHistory = ({ fields }) => (
  <ul>
    <li>
      <RaisedButton type='button' label="Add Career History" primary={true} onClick={() => {
        fields.push({})
      }} />
    </li>
    {fields.map((career, index) =>
      <li key={index}>
        <Field
          name={`${career}.employer`}
          type="text"
          component={renderField}
          label="Employer" />
        <Field
          name={`${career}.careerName`}
          type="text"
          component={renderField}
          label="Date Started" />
        <Field
          name={`${career}.role`}
          type="text"
          component={renderField}
          label="Date Finished" />
        <Field
          name={`${career}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Job Title" />
        <Field
          name={`${career}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Experience" />
        {<IconButton onClick={() => { fields.remove(index); }} ><NavigationClose /></IconButton>}

      </li>
    )}
  </ul>
)
const renderLanguages = ({ fields }) => (
  <ul>
    <li>
      <RaisedButton type='button' label="Add project" primary={true} onClick={() => {
        fields.push({})
      }} />
    </li>
    {fields.map((project, index) =>
      <li key={index}>
        <Field
          name={`${project}.employer`}
          type="text"
          component={renderField}
          label="Employer" />
        <Field
          name={`${project}.projectName`}
          type="text"
          component={renderField}
          label="Project name" />
        <Field
          name={`${project}.role`}
          type="text"
          component={renderField}
          label="Role" />
        <Field
          name={`${project}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Project Summary" />
        {<IconButton onClick={() => { fields.remove(index); }} ><NavigationClose /></IconButton>}

      </li>
    )}
  </ul>
)

const renderQualifications = ({ fields }) => (
  <ul>
    <li>
      <RaisedButton type='button' label="Add qualification" primary={true} onClick={() => {
        fields.push({})
      }} />
    </li>
    {fields.map((qualification, index) =>
      <li key={index}>
        <Field
          name={`${qualification}.qualification`}
          type="text"
          component={renderField}
          label="Qualification" />
        {<IconButton onClick={() => { fields.remove(index); }} ><NavigationClose /></IconButton>}

      </li>
    )}
  </ul>
)
//to do ADD DATE_RANGE
const renderProjects = ({ fields }) => (
  <ul>
    <li>
      <RaisedButton type='button' label="Add project" primary={true} onClick={() => {
        fields.push({})
      }} />
    </li>
    {fields.map((project, index) =>
      <li key={index}>
        <Field
          name={`${project}.employer`}
          type="text"
          component={renderField}
          label="Employer" />
        <Field
          name={`${project}.projectName`}
          type="text"
          component={renderField}
          label="Project name" />
        <Field
          name={`${project}.role`}
          type="text"
          component={renderField}
          label="Role" />
        <Field
          name={`${project}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Project Summary" />
        {<IconButton onClick={() => { fields.remove(index); }} ><NavigationClose /></IconButton>}

      </li>
    )}
  </ul>
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

    return (
      <div className={'EditCVPage'}>
        <div className="container-fluid">
          <form className="paperForm" onSubmit={handleSubmit} >
            <div className="row">
              <div className="nav-vertical">
                <div className="col-md-2 col-sm-3">
                  <ul className="nav nav-tabs">
                    <li className="active"><a data-toggle="tab" href="#personalDetail">Personal Details</a></li>
                    <li><a data-toggle="tab" href="#skills">Skills</a></li>
                    <li><a data-toggle="tab" href="#industryExp">Industry Experience</a></li>
                    <li><a data-toggle="tab" href="#careerExp">Career Experience</a></li>
                    <li><a data-toggle="tab" href="#languages">Languages</a></li>
                    <li><a data-toggle="tab" href="#qualifications">Qualifications</a></li>
                    <li><a data-toggle="tab" href="#projects">Projects</a></li>
                  </ul>
                </div>
                <div class="col-md-10 col-sm-9">
                  <div className="tab-content">
                    <div id="personalDetail" className="tab-pane fade in active paper pd15">

                      <div className="row">
                        <div className='col-sm-6 col-xs-12'>
                          <label className='control-label' htmlFor='firstName'></label>
                          <Field name='firstname' component={renderField} type='text' label="First Name" fullWidth />
                        </div>
                        <div className='col-sm-6 col-xs-12'>
                          <label className='control-label' htmlFor='lastName'></label>
                          <Field name='lastname' component={renderField} type='text' label="Last Name" />
                        </div>
                      </div>
                      <div className=''>
                        <label className='control-label' htmlFor='title'></label>
                        <Field name='title' component={renderField} type='text' label="Title" />
                      </div>
                      <div className=''>
                        <Field name='summary' component={renderField} type='text' label="Profile Summary" />
                      </div>
                    </div>
                    <div id="skills" className="tab-pane fade paper pd15">
                      <FieldArray name="skills" component={renderSkills} />
                    </div>
                    <div id="industryExp" className="tab-pane fade paper pd15">
                      <FieldArray name="industryxp" component={renderIndustryXP} />
                    </div>
                    <div id="careerExp" className="tab-pane fade paper pd15">
                      <FieldArray name="careerhistory" component={renderCareerHistory} />
                    </div>
                    <div id="languages" className="tab-pane fade paper pd15">
                      <FieldArray name="languages" component={renderLanguages} />
                    </div>
                    <div id="qualifications" className="tab-pane fade paper pd15">
                      <FieldArray name="qualifications" component={renderQualifications} />
                    </div>
                    <div id="projects" className="tab-pane fade paper pd15">
                      <FieldArray name="projects" component={renderProjects} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-right">
              <RaisedButton type='submit' label="Update User Info" primary={true} style={style} />
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
