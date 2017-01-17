/**
 * Created by jm on 05/01/2017.
 */

import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = field => <div>
  <input className='form-control' {...field.input} type='text' />
  {
    field.meta.touched && field.meta.error &&
    <span className='error'>{field.meta.error}</span>
  }
</div>;

class AuthComponent extends Component {
  componentWillMount() {}

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className={'form-group'}>
        <form onSubmit={handleSubmit}>
          <div className=''>
            <label className='control-label' htmlFor='Username'>Username</label>
            <Field name='Username' component={renderField} type='text' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='Password'>Password</label>
            <Field name='Password' component={renderField} type='password' />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'login_form'})(
  AuthComponent
)
//i am going to be given an endpoint
