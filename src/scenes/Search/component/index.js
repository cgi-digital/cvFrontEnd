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

  submitSearchName(){
    this.props.submitNameSearch();
  }
  submitSearchSkill(searchString){
    this.props.submitSkillSearch(searchString);
  }

  render() {
    const {
      users = [{}],
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
                    <SearchNameComponent initialValues={{firstname:'', lastname:''}} handleSubmit={this.submitSearchName} />
                  </div>
                  <div id="searchSkill" className="tab-pane fade">
                    <SearchSkillComponent {...this.props} initialValues={{skills:[]}} handleSubmit={this.submitSearchSkill}/>
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
export default CvSearchComponent
