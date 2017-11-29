import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Tabs, Tab } from 'material-ui/Tabs'

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

class CvSearchComponent extends Component {

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {
      users = [],
    } = this.props;

    const { handleSubmit } = this.props;

    return (
      <div className={'searchCvPage'}>
        <div className="container-fluid">
          <div className="cvHeader paper pd15 mb20">
            <i className="fa fa-book headerIcon"></i>
            <div className="row">
              <div className="col-xs-12">
                <h1 className="mb20 pull-left">Search CV Library</h1>
                <a className="btn btn-default pull-right" data-toggle="collapse" data-target="#filterBox" aria-expanded="true"><i className="fa fa-filter">&nbsp;</i>Filter</a>
              </div>
            </div>
            <div id="filterBox" className="collapse in">
              <div className="nav-inner">
                <ul className="nav nav-tabs">
                  <li className="active"><a data-toggle="tab" href="#searchName">Search by Name</a></li>
                  <li><a data-toggle="tab" href="#searchSkill">Search by Skill</a></li>
                </ul>
                <div className="tab-content">
                  <div id="searchName" className="tab-pane fade in active">
                    <form id="searchForm" onSubmit={handleSubmit}>
                      <Field name='firstname' component={renderField} type='text' value="" floatingLabelText="First Name" underlineShow fullWidth />
                      <Field name='lastname' component={renderField} type='text' value="" floatingLabelText="Last Name" underlineShow fullWidth />                 
                      <button type="submit" form="searchForm" value="submit">Submit</button>
                    </form>
                  </div>
                  <div id="searchSkill" className="tab-pane fade">
                    SEARCHSKILL
                  </div>
                </div>
              </div>
            </div>
          </div>
          <table className="table paper">
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user,index) => (
                <tr key={index}>
                  <td>{user.email}</td>
                  <td>{user.firstname}</td>
                  <td>{user.lastname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default reduxForm({ form: 'search_form', enableReinitialize: true })(
  CvSearchComponent
)
