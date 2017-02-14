/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from 'redux-form';

const renderField = field => <div>
  <input className='form-control' {...field.input} type='text' />
  {
    field.meta.touched && field.meta.error &&
    <span className='error'>{field.meta.error}</span>
  }
</div>;

const renderSkills = ({ fields, userid }) => (
  <ul>
    <li>
      <button type="button" onClick={() => {
        fields.push({ userid })
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
          type="text"
          normalize={(value) => {
            return Number(value);
          }}
          component={renderField}
          label="Level"/>
      </li>
    )}
  </ul>
)

const renderQualifications = ({ fields, userid }) => (
  <ul>
    <li>
      <button type="button" onClick={() => {
        fields.push({ userid })
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

const renderProjects = ({ fields, userid }) => (
  <ul>
    <li>
      <button type="button" onClick={() => {
        fields.push({ userid })
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
          <FieldArray name="skills" component={renderSkills} userid={this.props.user.id} />
          <FieldArray name="qualifications" component={renderQualifications} userid={this.props.user.id} />
          <FieldArray name="projects" component={renderProjects} userid={this.props.user.id} />
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
