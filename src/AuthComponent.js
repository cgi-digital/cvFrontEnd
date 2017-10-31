/**
 * Created by jm on 05/01/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)

const style = {
  margin: 10,
};

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


class AuthComponent extends Component {
  componentWillMount() {}


  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'form-group loginForm'}>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label className='control-label' htmlFor='Username'></label>
            <Field name='Username' component={renderField} type='text' label="Username"/>
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Password'></label>
            <Field name='Password' component={renderField} type='password'label="Password" />
          </div>
          <RaisedButton type='submit' label="Login" primary={true} style={style} />
          <RaisedButton linkButton={true} href="/signUp" label="Sign Up" style={style} />
        </form>
      </div>
    );
  }
}

export default reduxForm({ 
  form: 'login_form',
  validate
})(AuthComponent)
//i am going to be given an endpoint
