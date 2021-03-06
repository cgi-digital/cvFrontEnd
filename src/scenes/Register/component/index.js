/**
 * Created by jm on 05/01/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Logo from '../../../CGI_Logo_color.png';

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    fullWidth={true}
    {...input}
    {...custom}
  />
)

const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})");

const validate = values => {
  const errors = {}
  const requiredFields = ['FirstName', 'LastName', 'Username', 'Password', 'ReTypePassword', 'Email']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })

  if (values.Password && !strongRegex.test(values.Password)) {
    errors.Password = "Not Strong enough"
  }

  if (values.Password !== values.ReTypePassword) {
    errors.ReTypePassword = "Password does not match"
  }

  if (values.Email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
    errors.Email = "Not a valid Email Address";
  }

  return errors
}


class RegisterComponent extends Component {
  componentWillMount() { }

  render() {
    const { error, handleSubmit } = this.props;
    return (
      <div className={'loginPage'}>
        <div id="appBar">
          <div className="container-fluid">
            <img className="appBarLogo" src={Logo} />
            <div className="appBarTitle">CV Library</div>
          </div>
        </div>
        <div className="loginBody">
          <div className="container-fluid">
            <div className="paper">
              <form onSubmit={handleSubmit}>
                <div className="">
                  <h1>Register</h1>
                </div>
                <div className="row mb20">
                  <div className='col-sm-6 col-xs-12'>
                    <label className='control-label' htmlFor='firstName'></label>
                    <Field name='FirstName' component={renderField} type='text' label="First Name" />
                  </div>
                  <div className='col-sm-6 col-xs-12'>
                    <label className='control-label' htmlFor='lastName'></label>
                    <Field name='LastName' component={renderField} type='text' label="Last Name" />
                  </div>
                  <div className='col-xs-12'>
                    <label className='control-label' htmlFor='email'></label>
                    <Field name='EmailAddress' component={renderField} type='text' label="Email" />
                  </div>
                  <div className='col-xs-12'>
                    <label className='control-label' htmlFor='Password'></label>
                    <Field name='Password' component={renderField} type='password' label="Password" />
                  </div>
                  <div className='col-xs-12'>
                    <label className='control-label' htmlFor='Password'></label>
                    <Field name='ReTypePassword' component={renderField} type='password' label="Confirm Password" />
                  </div>
                </div>
                <div className="buttonRow">
                  <RaisedButton className="mb20" type='submit' id='register' label="Register" primary={true} />
                  <div><a href="/login">Already have an account? Log In</a></div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer>
          <div className="container-fluid">
            <div className="pull-left">© CGI Group Inc.</div>
            <div className="pull-right">Made by ADSC</div>
          </div>
        </footer>
      </div>
    );
  }
}

export default reduxForm({
  form: 'login_form',
  validate
})(RegisterComponent)
//i am going to be given an endpoint
