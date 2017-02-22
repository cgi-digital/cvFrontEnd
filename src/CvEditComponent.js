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
import {
  SelectField,
} from 'redux-form-material-ui'

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
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
      <button type="button" onClick={() => {
        fields.push({})
      }}>Add skill</button>
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
        <Field name="favoriteColor" component="select">
            <option></option>
            <option value="ff0000">Red</option>
            <option value="00ff00">Green</option>
            <option value="0000ff">Blue</option>
          </Field>
      </li>
    )}
  </ul>
)

const renderQualifications = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => {
        fields.push({})
      }}>Add qualification</button>
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

const renderProjects = ({ fields }) => (
  <ul>
    <li>
      <button type="button" onClick={() => {
        fields.push({})
      }}>Add project</button>
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
      <div className={'form-group'}>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label className='control-label' htmlFor='firstName'>First Name</label>
            <Field name='firstname' component={renderField} type='text' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='lastName'>Last Name</label>
            <Field name='lastname' component={renderField} type='text' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='title'>Title</label>
            <Field name='title' component={renderField} type='title' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='bio'>Profile Summary</label>
            <Field name='summary' component='textarea' type='text' />
          </div>
          <FieldArray name="skills" component={renderSkills} />
          <FieldArray name="qualifications" component={renderQualifications} />
          <FieldArray name="projects" component={renderProjects} />
          <button type='submit'>Update User Info</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  CvEditComponent
)
//i am going to be given an endpoint
