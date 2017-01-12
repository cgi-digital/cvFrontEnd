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

class CvEditComponent extends Component {
  componentWillMount() {}

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
            <label className='control-label' htmlFor='email'>Email</label>
            <Field name='email' component={renderField} type='email' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='bio'>Profile Summary</label>
            <Field name='summary' component='textarea' type='text' />
          </div>
          <div className=''>
            <label className='control-label' htmlFor='bio'>Profile Summary</label>
            <Field name='brexit' component='textarea' type='text' />
          </div>
          <div>
            <label>Specialism</label>
            <div>
              <Field name='specialism' component='select'>
                <option value=''>Select a specialism...</option>
                {
                  specialism.map(
                    specialismOption =>
                      <option value={specialismOption} key={specialismOption}>{
                        specialismOption
                      }</option>
                  )
                }
              </Field>
            </div>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'cv_form', enableReinitialize: true })(
  CvEditComponent
)
//i am going to be given an endpoint
