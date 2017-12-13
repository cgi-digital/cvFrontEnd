import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { Tabs, Tab } from 'material-ui/Tabs'

import SearchSkillComponent from './searchSkill'
import SearchNameComponent from './searchName'

class CvSearchComponent extends Component {

  constructor(props, context) {
    super(props, context);

    this.submitSearchName = this.submitSearchName.bind(this);
    this.submitSearchSkill = this.submitSearchSkill.bind(this);
  }

  componentDidMount() {
    this.props.getUsers();
  }

  submitSearchName() {
    this.props.submitNameSearch();
  }
  
  submitSearchSkill(array) {
    if(array.length<1){
      // If array is empty
      // Get all users
      this.props.getAllUsers();
    } else{
      // If array has items
      // Get users based on search parameters (Skills)
      this.props.submitSkillSearch(array);
    }
  }

  render() {
    const {
      users = [{}],
    } = this.props;

    const { handleSubmit } = this.props;

    return (
      <div className={'searchCvPage'}>
        <div id="ActionBar">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-sm-5">
                <h1>Search CV Library</h1>
              </div>
              <div className="col-md-8 col-sm-7">
                <ul className="nav nav-tabs pull-left">
                  <li className="active"><a data-toggle="tab" href="#searchName">Search by Name</a></li>
                  <li><a data-toggle="tab" href="#searchSkill">Search by Skill</a></li>
                </ul>
                <a id="searchFilterButton" className="btn btn-default pull-right" data-toggle="collapse" data-target="#filterBox" aria-expanded="true"><i className="fa fa-filter">&nbsp;</i>Filter</a>
              </div>
            </div>
          </div>
        </div>
        <div id="filterBox" className="collapse in">
          <div className="container-fluid">
            <div className="tab-content">
              <div id="searchName" className="tab-pane fade in active">
                <SearchNameComponent initialValues={{ firstname: '', lastname: '' }} handleSubmit={this.submitSearchName} />
              </div>
              <div id="searchSkill" className="tab-pane fade">
                <SearchSkillComponent {...this.props} initialValues={{ skills: [] }} handleSubmit={this.submitSearchSkill} />
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <table className="table paper">
            <thead>
              <tr>
                <th>Email</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td><a href={'view?id='+user.id}>{user.email}</a></td>
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
export default CvSearchComponent
