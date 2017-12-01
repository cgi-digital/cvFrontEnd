import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'

const renderField = ({ input, multiLine, rows, label, meta: { touched, error }, ...custom }) => (
  <TextField
    multiLine={multiLine}
    floatingLabelText={label}
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
          <div className="row">
            <div className="col-xs-12">
              <a className="btn btn-default pull-right" onClick={this.refreshSearch} value="Refresh"><i className="fa fa-refresh">&nbsp;</i>Refresh</a>
              <button className="btn btn-default pull-right" type="submit" form="searchNameForm" value="Search"><i className="fa fa-search">&nbsp;</i>Search</button>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <Field name='firstname' component={renderField} type='text' value="" floatingLabelText="First Name" underlineShow fullWidth />
            </div>
            <div className="col-sm-6 col-xs-12">
              <Field name='lastname' component={renderField} type='text' value="" floatingLabelText="Last Name" underlineShow fullWidth />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({ form: 'search_name_form', enableReinitialize: true })(SearchNameComponent)