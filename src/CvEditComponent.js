/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
//import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {
  SelectField,
} from 'redux-form-material-ui'

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    multiLine={multiLine}
    rows={rows}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const renderCheckbox = ({ input, label }) => (
  <Checkbox label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}/>
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
    {...custom}/>
)

const renderSkills = ({ fields }) => (
  <ul>
    <li>
    <RaisedButton type='button' label="Add skill" primary={true} onClick={() => {
      fields.push({})
    }} />
    </li>
    {fields.map((skill, index) =>
      <li key={index}>
        <Field
          name={`${skill}.skill`}
          type="text"
          component={renderField}
          label="Skill"/>

        <Field
          name={`${skill}.level`}
          normalize={(value) => {
            return Number(value);
          }}
          component={SelectField}
          label="Level">
          <MenuItem value={1} primaryText="1"/>
          <MenuItem value={5} primaryText="5"/>
          <MenuItem value={10} primaryText="10"/>
        </Field>
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
          label="Qualification"/>
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
          label="Employer"/>
        <Field
          name={`${project}.projectName`}
          type="text"
          component={renderField}
          label="Project name"/>
        <Field
          name={`${project}.role`}
          type="text"
          component={renderField}
          label="Role"/>
        <Field
          name={`${project}.summary`}
          type="text"
          multiLine
          component={renderField}
          label="Project Summary"/>
      </li>
    )}
  </ul>
)

class CvEditComponent extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    const specialism = [ 'FrontEnd', 'BackEnd', 'Database', 'DevOps', 'Agile' ];
    const { handleSubmit } = this.props;

    return (
      <div className={'EditCVPage'}>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label className='control-label' htmlFor='firstName'></label>
            <Field name='firstname' component={renderField} type='text' label="First Name" />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='lastName'></label>
            <Field name='lastname' component={renderField} type='text' label="Last Name" />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='title'></label>
            <Field name='title' component={renderField} type='text' label="Title"/>
          </div>
          <div className=''>
            <Field name='summary' component={renderField} type='text' multiLine rows={3} label="Profile Summary" />
          </div>
          <FieldArray name="skills" component={renderSkills} />
          <FieldArray name="qualifications" component={renderQualifications} />
          <FieldArray name="projects" component={renderProjects} />
          <RaisedButton type='submit' label="Update User Info" primary={true} style={style} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  CvEditComponent
)
//i am going to be given an endpoint
