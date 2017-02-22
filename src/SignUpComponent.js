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
  const requiredFields = [ 'Username', 'Password' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) {
      errors[ field ] = 'Required'
    }
  })
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
            <label className='control-label' htmlFor='Username'>Username</label>
            <Field name='Username' component={renderField} type='text' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Password'>Password</label>
            <Field name='Password' component={renderField} type='password' />
          </div>
          <button type='submit'>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login_form'})(
  SignUpComponent
)
//i am going to be given an endpoint
