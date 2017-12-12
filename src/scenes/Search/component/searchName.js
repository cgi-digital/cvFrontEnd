import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField
    className=''
    placeholder={label}
    multiLine={multiLine}
    underlineShow={false}
    fullWidth={true}
    rows={rows}
    errorText={touched && error}
    {...input}
    {...custom}
  />
)


class SearchNameComponent extends Component {
  constructor(props, context) {
    super(props, context);

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.handleSubmit();
  }

  render() {
    return (
      <div>
        <form id="searchNameForm" onSubmit={this.submit}>
          <div className="formInline paper clearfix">
            <div className="col-sm-6 col-xs-12">
              <Field name='firstname' component={renderField} type='text' label="First Name" value="" />
            </div>
            <div className="col-sm-6 col-xs-12">
              <Field name='lastname' component={renderField} type='text' label="Last Name" value="" />
            </div>
            <div className="searchButtons clearfix">
              <button className="" type="submit" form="searchNameForm" value="Search"><i className="fa fa-search"></i></button>
              <a className="" onClick={this.refreshSearch} value="Refresh"><i className="fa fa-close"></i></a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'search_name_form', enableReinitialize: true })(SearchNameComponent)