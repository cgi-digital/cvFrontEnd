/**
 * Created by jm on 05/01/2017.
 */
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton';

import Logo from '../../../CGI_Logo_color.png'

const renderField = ({ input, label, meta: { touched, error }, ...custom }) => (
  <TextField hintText={label}
    floatingLabelText={label}
    errorText={touched && error && <span>{error}</span>}
    fullWidth={true}
    {...input}
    {...custom}
  />
)

const renderErrorField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <input disabled="true" {...input} type={type} />
    {touched && error}
  </div>
)

const style = {
  margin: 10,
};

const validate = values => {
  const errors = {}
  const requiredFields = ['Username', 'Password']
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  return errors
}


class AuthComponent extends Component {
  componentWillMount() { }
  render() {
    const { handleSubmit } = this.props;
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
            <form className="paper" onSubmit={handleSubmit}>
              <div className="">
                <h1>Login</h1>
              </div>
              <div id="errField" className='hidden'>
                <Field name='ResponseMessage' component={renderErrorField} type='text' />
              </div>
              <div className=''>
                <label className='control-label' htmlFor='Username'></label>
                <Field name='Username' component={renderField} type='text' label="Username" />
              </div>
              <div className='mb20'>
                <label className='control-label' htmlFor='Password'></label>
                <Field name='Password' component={renderField} type='password' label="Password" />
              </div>
              <div className="buttonRow">
                <div className="mb10"><a href="#" >Forgot your username or password?</a></div>
                <RaisedButton type='submit' id="login" label="Login" primary={true} style={style} />
                <RaisedButton linkButton={true} href="/signUp" label="Sign Up" style={style} />
              </div>
            </form>
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
})(AuthComponent)
//i am going to be given an endpoint