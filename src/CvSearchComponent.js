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
        <div className="searchFilter">
          <div className="container-fluid">

          </div>
        </div>
        <div className="container-fluid">
          <div className="cvHeader paper pd15 mb30">
            <i className="fa fa-book headerIcon"></i>
            <div className="row">
              <div className="col-xs-12">
                <h1>Search CV Library</h1>
              </div>
            </div>
          </div>
          <table className="table paper">
            <thead>
              <tr>
                <th>Username</th>
                <th>First Name</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr>
                  <td>{user.username}</td>
                  <td>{user.firstname}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container-fluid">
          <div className="row">
            {users.map((user) => (
              <div className="col-md-3 col-sm-6 col-xs-12">
                <div className="paper pd15">
                  <h3>{user.username}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CvSearchComponent;
