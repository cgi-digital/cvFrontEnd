/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const validate = values => {
  const errors = {}
  const requiredFields = ['FirstName', 'LastName', 'Username', 'Password', 'ReTypePassword', 'Email' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })

  if(values.Password !== values.ReTypePassword){
    errors.ReTypePassword = "Password doesn't match"
  }

  if(values.Email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)){
    errors.Email = "Not a valid Email Address";
  }

  return errors
}


class SignUpComponent extends Component {
  componentWillMount() {}
 
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'form-group loginForm'}>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label className='control-label' htmlFor='firstName'></label>
            <Field name='FirstName' component={renderField} type='text' label="First Name" />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='lastName'></label>
            <Field name='LastName' component={renderField} type='text' label="Last Name" />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Username'></label>
            <Field name='Username' component={renderField} type='text' label="Username"/>
          </div><div className=''>
            <label className='control-label' htmlFor='email'></label>
            <Field name='Email' component={renderField} type='text' label="Email"/>
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Password'></label>
            <Field name='Password' component={renderField} type='password' label="Password" />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Password'></label>
            <Field name='ReTypePassword' component={renderField} type='password' label="Confirm Password" />
          </div>
          <RaisedButton type='submit' label="Sign Up" primary={true}  />
        </form>
      </div>
    );
  }
}

export default reduxForm({ 
  form: 'login_form',
  validate
})(SignUpComponent)
//i am going to be given an endpoint
