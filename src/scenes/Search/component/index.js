import React, { Component } from 'react';
import TextField from 'material-ui/TextField'
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton'
import Checkbox from 'material-ui/Checkbox'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class CvSearchComponent extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const {
      users = [],
    } = this.props;

    return (
      <div className={'searchCvPage'}>
        <div className="container-fluid">
          <div className="cvHeader paper pd15">
            <i className="fa fa-book headerIcon"></i>
            <div className="row">
              <div className="col-xs-12">
                <h1>Search CV Library</h1>
              </div>
            </div>
          </div>
          <div className="searchFilter mb30">
            <h3>Filter</h3>
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

export default CvSearchComponent;
