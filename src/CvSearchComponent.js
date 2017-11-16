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
      <div class="container-fluid">
        <div class="cvSearchResults">
          {users.map((user) => (
            <div class="cv-box">
              {user.username}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CvSearchComponent;
